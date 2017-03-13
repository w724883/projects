$(function(){
	Personal = {
		init:function(){
			// require('/page');
			// $('#pager').pager({
			//   total: Math.ceil( 100/5 )
			//   // current:parms.p*1
			// }).on('pager_change', function(e, page) {
			//   console.log(page);
			// });
			//生日选择
			this.tips = $('.tips');
			var datepicker = $('#datepicker');
			if(datepicker.length){
				datepicker.datepicker({
					dateFormat: 'yy-mm-dd',
					yearRange: '1900:2100',
					showMonthAfterYear:true,
					changeYear:true,
					changeMonth:true
				});
			}
			require('/center').center();
			this.verify = require('/verify');
			Personal.bindEvent();
			// Personal.checkCity();
			// Personal.setDefault();
			// Personal.delAddress();
		},
		bindEvent:function(){
			var navhover = require('/navhover').navhover;
			var fn = require('/fn');
			var $navHover = $('#navHover');
			var $addContainer = $('#addContainer');
			var $myinfo = $('#myInfo');

			$navHover.length && navhover($navHover);
			// $('#myInfo').on('click','.myinfo-right .editbtn',function(e){
			// 	var parent = $(this).closest('tr');
			// 	var edit = parent.addClass('edit').siblings('.edit').removeClass('edit');
			// 	parent.find('input,textarea').val(parent.find('span').text());
			// 	edit.find('span').text(edit.find('input,textarea').val());
			// })
			//添加新地址
			$addContainer.on('click', '.btn-ok', function(e) {
				Personal.addAddress($addContainer);
			});
			
			$addContainer.on('click','.addaddress-title a,.btn-cancel',function(e){
				$addContainer.find('table').fadeToggle();
			});

			//选择城市
			$addContainer.on('change','.addaddress-select select',function(e){
				fn.city($(this));
			});
			
			//修改密码
			$myinfo.on('click', '.execute_edit_pwd', function(e) {
				Personal.changePwd($myinfo);
			});
			
			//修改手机号获取验证码
			$myinfo.on('click', '.phone-verify button', function(e) {
				Personal.getCode($myinfo,$(this));
			});

			//设为默认
			$('#manageContainer').on('click','.default-address', function(e){
				fn.setDefault($('#manageContainer'),$(this));
			});
			//删除地址
			$('#manageContainer').on('click','.del-address',function(e){
				Personal.delAddress($(this));
			});

			//修改昵称生日
			$myinfo.on('click', '.edit_user_info', function(e) {
				Personal.changeName($myinfo);
			});
			//修改手机号
			$myinfo.on('click', '.check_user_phone', function(e) {
				Personal.changePhone($myinfo);
			});
			//完善信息
			var $perfectInfo = $('#perfectInfo');
			$perfectInfo.on('click','.btn-ok',function(e){
				var inputs = $perfectInfo.find('input[type=text],input[type=password]');
				for(var i = 0; i < inputs.length; i++){
					var bool = Personal.verify.verify[Personal.verify.filter(inputs[i].name)](inputs[i].value);
					if(!bool){
						if(typeof bool == 'number'){
							Personal.tips.html(inputs.eq(i).data('verify'));
						}else{
							Personal.tips.html(inputs.eq(i).data('error'));
						}
						return false;
					}else{
						Personal.tips.html('');
					}
				}
				
			});
		},
		timer:null,
		getCode:function(container,$this){
			var _this = this;
			if(_this.timer) return false;
			var phone = container.find('input[name=new_phone]').val();
			var bool = Personal.verify.verify.phone(phone);
			if(bool){
				var seconds = 60;
				// var $this = $(this);
				$.post('/get_code', {phone:phone, code_type:4},function(data){
					if(data.code == '200') {
						$this.text(seconds+'秒后重新获取');
						_this.timer = setInterval(function(){
							if(seconds > 1){
								$this.text(--seconds+'秒后重新获取');
							}else{
								clearInterval(_this.timer);
								$this.text('重新发送');
								_this.timer = null;
							}
						},1000);
					}else {
						Personal.tips.text(data.message);
						return false;
					}
				},'json');
//				$.post('/get_code', 'phone='+phone).done(function(data){
//					_this.phone = phone;
//				});
//				_this.timer = setInterval(function(){
//					if(seconds > 1){
//						$this.text(--seconds+'秒后重新获取');
//					}else{
//						clearInterval(_this.timer);
//						$this.text('重新发送');
//						_this.timer = null;
//					}
//				},1000);
				Personal.tips.text('');
			}else{
				if(typeof bool == 'number'){
					Personal.tips.text(_this.data('verify'));
				}else{
					Personal.tips.text(_this.data('error'));
				}
				return false;
			}
		},
		// verifyParams:function(value){
		// 	var params = {
		// 		phone:['phone','new_phone'],
		// 		verifycode:['verifycode'],
		// 		checknull:['username','birthday']
		// 	}
		// 	for(var key in params){
		// 		if(params[key].indexOf(value) > -1){
		// 			return key;
		// 		}
		// 	}
		// },
		changeName:function($myinfo){
			var inputs = $myinfo.find('input[name]');
			var params = {};
			for (var i = 0; i < inputs.length; i++) {
				var bool = Personal.verify.verify[Personal.verify.filter(inputs[i].name)](inputs[i].value);
				if(!bool){
					Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('error')+'</span>');
					return false;
				}
				params[inputs[i].name] = inputs[i].value;
			};
			$.post('/frontend/center/edit_user_info', params, function(data) {
				if(data.code == 200){
					Personal.tips.html('<span class="c-718828">'+data.message+'</span>');
				}else{
					Personal.tips.html('<span class="c-ed3f3f">'+data.message+'</span>');
				}
			},'json').fail(function(error){
				Personal.tips.html('<span class="c-ed3f3f">'+error+'</span>');
			});
		},
		changePhone:function($myinfo){
			var inputs = $myinfo.find('input[name]');
			var params = {};
			for (var i = 0; i < inputs.length; i++) {
				var bool = Personal.verify.verify[Personal.verify.filter(inputs[i].name)](inputs[i].value);
				if(!bool){
					if(typeof bool == 'number'){
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('verify')+'</span>');
					}else{
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('error')+'</span>');
					}
					return false;
				}
				params[inputs[i].name] = inputs[i].value;
			};
			$.post('/frontend/center/check_user_phone', params, function(data) {
				if(data.code == 200){
					Personal.tips.html('<span class="c-718828">'+data.message+'</span>');
				}else{
					Personal.tips.html('<span class="c-ed3f3f">'+data.message+'</span>');
				}
			},'json').fail(function(error){
				Personal.tips.html('<span class="c-ed3f3f">'+error+'</span>');
			});
		},
		changePwd:function($myinfo){
			var inputs = $myinfo.find('input[name],select[name]');
			var parms = {};
			for (var i = 0; i < inputs.length; i++) {
				var bool = Personal.verify.verify[Personal.verify.filter(inputs[i].name)](inputs[i].value);
				if(!bool){
					if(typeof bool == 'number'){
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('verify')+'</span>');
					}else{
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('error')+'</span>');
					}
					return false;
				}
				parms[inputs[i].name] = inputs[i].value;
			};
			//ajax请求修改数据
			$.post("/frontend/center/execute_edit_pwd",parms,function(data){
			   	if(data.code == 200){
			   		Personal.tips.html('<span class="c-718828">'+data.message+'</span>');
			   		window.location.href = '/logout';
			   	}else if(data.code == 201){
			   		Personal.tips.html('<span class="c-718828">'+data.message+'</span>');
			   		setTimeout(function(){ location.reload();},3000);
			   	}else{
			   		Personal.tips.html('<span class="c-ed3f3f">'+data.message+'</span>');
			   	}
			},'json');
		},
		addAddress:function($addContainer){
			var inputs = $addContainer.find('input[name],select[name]:visible');
			var parms = {};
			for(var i = 0; i < inputs.length; i++){
				var bool = Personal.verify.verify[Personal.verify.filter(inputs[i].name)](inputs[i].value);
				if(!bool){
					if(typeof bool == 'number'){
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('verify')+'</span>');
					}else{
						Personal.tips.html('<span class="c-ed3f3f">'+inputs.eq(i).data('error')+'</span>');
					}
					return false;
				}
				/*if(inputs.eq(i).is('input') && !Personal.verify[inputs[i].name](inputs[i].value)){
					Personal.tips.html('<span class="c-ed3f3f">'+Personal.verify.tips+'</span>');
					return false;
				}else if(inputs.eq(i).is('select') && inputs.eq(i).val() == '0'){
					Personal.tips.html('<span class="c-ed3f3f">请选择收货地址</span>');
					return false;
				}*/
				parms[inputs[i].name] = inputs[i].value;
				
			};
			
			
			//添加新地址接口
			$.post("/frontend/center/execute_address",parms,function(data){
				if(data.code == 200) {
					window.location.reload();
				}else{
					Personal.tips.html(data.massage);
				}
			},'json');
		},	
		//删除地址
		delAddress:function($this){
			// $('.del-address').on('click',function(){
				// var that = this;
				var id = $this.data('index');
				var address_count = $('#addContainer .address-count').html();
				if( !confirm("您确定要删除该地址?") ) {
	 				window.event.returnValue = false;
	 			}else {
	 				$.post("/frontend/center/del_address",{id : id},function(data){
					   	
						if(data.code == 200) {
							$this.closest('tr').fadeOut(400,function(){
								var addressCount = $('#addContainer .address-count');
								$(this).remove();
								addressCount.html(addressCount.html()-1)
							});
						}
						else {
							location.reload();
						}
					},'json');
	 			}
			// });
		}
		//选择城市
		// checkCity:function(id,region){
		// 	// var region = $('.addaddress-select');
		// 	// region.on('change',function(){
		// 		// var that = this;
		// 		// var region_class = $(that).find('select').attr('class');
		// 		// var id = $(that).find('select').val();
		// 		// var _classs = Personal.__classs(region_class);
		// 		// var _classs_message = Personal.__classs_message(region_class);
		// 		// $('.'+_classs).find('option').remove();
		// 		$.post("/frontend/center/address_region",{id : id, region:region},function(data){
		// 			if(data.code == 200) {
		// 				// var select_html = "<option value='0'>"+_classs_message+"</option>";
	 //                	//$.each(data.data, function(i, item){
		// 				//	select_html+="<option value="+item.id+">"+item.region_name+"</option>";	
		//                 //});
		//                 var options = '';
		//                 for(var i = 0; i < data.data.length; i++){
		//                 	options += "<option value="+data.data[i]['id']+">"+data.data[i]['region_name']+"</option>";
		//                 }
		//                 return 1;
	 //                	// $('.'+_classs).append(select_html);
		// 			}else{
		// 				alert(data.message);
		// 				return false;
		// 			}
					
		// 		},'json');
		// 	// });
		// },
		
		// __classs:function(_class) {
			
		// 	var str;
		// 	switch (_class){
			
		// 		case 'region_id':
		// 			str = 'region_city_id'; break;
		// 		case 'region_city_id':
		// 			str = 'region_county_id';break;
		// 		case 'region_county_id':
		// 			str = 'region_quanx_id'; break;
		// 	}
		// 	return str;
		// },
		
		// __classs_message:function(_class){
		// 	var str;
		// 	switch (_class){
		// 		case 'region_id':
		// 			str = '请选择城市'; break;
		// 		case 'region_city_id':
		// 			str = '请选择区/（县）';break;
		// 		case 'region_county_id':
		// 			str = '请选择圈'; break;
		// 	}
		// 	return str;
		// }
	}
	Personal.init();
})