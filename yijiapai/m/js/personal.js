$(function(){
	Personal = {
		init:function(){
			// $('.lazy').lazyload();
			this.perfectForm = $('#perfectForm');
			this.addbabyForm = $('#addbabyForm');
			this.mybabyForm = $('#mybabyForm');
			this.passwordForm = $('#passwordForm');
			this.ui = require('/ui');
			// require('/center').center(this.perfectForm);
			Personal.bindEvent();
		},
		bindEvent:function(){
			// var navhover = require('/navhover').navhover;
			// var $navHover = $('#navHover');
			// $navHover.length && navhover($navHover);

			//上传 保存
			Personal.perfectForm.on('change', 'input[type=file]', function(e) {
				Personal.uploadFace(this);
			}).on('tap','.account-btn',function(e){
				Personal.savePerfect();
			});
			//添加宝宝
			Personal.addbabyForm.on('tap','.account-btn',function(e){
				Personal.saveBaby();
			});
			//默认信息
			Personal.mybabyForm.on('tap','.defaultInfo',function(e){
				Personal.defaultInfo($(this).closest('.info-section'));
			});
			//默认信息
			Personal.mybabyForm.on('tap','.deleteInfo',function(e){
				var $this = $(this);
				require('/ui').confirm('您确定要删除？',function(){
					Personal.deleteInfo($this.closest('.info-section'));
				})
			});
			//修改密码
			Personal.passwordForm.on('tap','.account-btn',function(e){
				Personal.changePassword();
			});
		},
		uploadFace:function(that){
			require('/uploadImg').upload(that,'/upload_face',{
				success:function(data){
					if(data.code == 200){
						if(Personal.perfectForm.find('.perfect-head i').length){
							Personal.perfectForm.find('.perfect-head i').replaceWith('<img class="center" data-original='+ data.data +' />');
						}else if(Personal.perfectForm.find('.perfect-head img').length){
							Personal.perfectForm.find('.perfect-head img').replaceWith('<img class="center" data-original='+ data.data +' />');
						}
						require('/center').center(Personal.perfectForm.find('.perfect-head'));
					}
				},
				tips:function(error){
					Personal.ui.alert(error);
				}
			});
		},
		changePassword:function(){
			var verify = require('/verify').filter;
			var params = {};
			var param = Personal.passwordForm.find('.J-param');
			for(var i = 0; i < param.length; i++){
				if(param.eq(i).is('input[type=hidden]')){
					params[param[i].name] = param[i].value;
				}else{
					var check = verify(param[i].name)(param[i].value);
					if(check){
						params[param[i].name] = param[i].value;
					}else{
						Personal.ui.alert(param.eq(i).data('error'));
						return false;
					}
				}
			}
			$.post('/set_passwd',params,function(data){
				if(data.code == 200){
					window.location.href = '/login';
				}else{
					Personal.ui.alert(data.message);
				}
			},'json').fail(function(error){
				Personal.ui.alert(error);
			})
		},
		savePerfect:function(){
			var verify = require('/verify').filter;
			var params = {};
			var param = Personal.perfectForm.find('.J-param');
			var tips = Personal.perfectForm.find('.error');
			params.face = Personal.perfectForm.find('.perfect-head img').attr('src');
			for(var i = 0; i < param.length; i++){
				var check = verify(param[i].name)(param[i].value);
				if(check){
					params[param[i].name] = param[i].value;
					tips.hide();
				}else{
					tips.show().html(param.eq(i).data('error'));
					return false;
				}
			}
			$.post('/save_perfect',params,function(data){
				if(data.code == 200){
					window.location.href="/my";
				}else{
					Personal.ui.alert(data.message);
				}
			},'json').fail(function(error){
				Personal.ui.alert(error);
			})
		},
		saveBaby:function(){
			var verify = require('/verify').filter;
			var params = {};
			var param = Personal.addbabyForm.find('.J-param');
			var tips = Personal.addbabyForm.find('.error');
			for(var i = 0; i < param.length; i++){
				if(param.eq(i).is('input[type=hidden]')){
					params[param[i].name] = param[i].value;
				}else{
					var check = verify(param[i].name)(param[i].value);
					if(check){
						params[param[i].name] = param[i].value;
						tips.hide();
					}else{
						if(typeof check == 'number'){
							tips.show().html(param.eq(i).data('verify'));
						}else{
							tips.show().html(param.eq(i).data('error'));
						}
						return false;
					}
				}
			}
			$.post('/save_baby',params,function(data){
				if(data.code == 200){
					window.location.href = '/my/baby';
				}else{
					tips.show().html(data.message);
				}
			},'json').fail(function(error){
				Personal.ui.alert(error);
			})
		},
		defaultInfo:function(parent){
			var id = parent.data('id');
			var uid = parent.data('uid');
			$.post('/set_default_baby','id='+id+'&user_id='+uid,function(data){
				if(data.code == 200){
					parent.siblings('.info-section').find('.icon-infok').removeClass('icon-infok');
					parent.find('.icon-info').addClass('icon-infok');
				}else if(data.code == 401){
					Personal.ui.alert(data.message);
				}
			},'json').fail(function(error){
				Personal.ui.alert(error);
			});
		},
		deleteInfo:function(parent){
			var id = parent.data('id');
			$.post('/delete_baby','id='+id,function(data){
				if(data.code == 200){
					parent.hide('400',function(){
						parent.remove();
					});
				}else if(data.code == 401){
					Personal.ui.alert(data.message);	
				}
			},'json').fail(function(error){
				Personal.ui.alert(error);
			});
		}
	}
	Personal.init();
})