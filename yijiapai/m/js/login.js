$(function(){
	var Login = {
		init:function(){
			this.$login = $('#login');
			this.$forget = $('#forget');
			this.tips = this.$login.find('.error');
			this.ui = require('/ui');
			this.verify = require('/verify').filter;
			this.timer;
			this.storage = require('/storage');
			var forget = this.storage.Storage('forget');
			if(forget){
				$('#forget input[name="mobile"]').val(forget);
			}
			this.bindEvent();
		},
		bindEvent:function(){
			// var verify = require('/verify');
			this.$login.on('tap','.enter-btn',function(e){
				Login.checkMobile(Login.$login.find('input[name=mobile]'));
			});
			this.$login.on('tap','.vervify-btn',function(e){
				var type = $(this).data('type');
				Login.getCode(Login.$login.find('input[name=mobile]'),Login.$login.find('.vervify-btn button'),type);
			});
			this.$login.on('tap','.register-input .auto-btn',function(e){
				Login.register(Login.$login.find('input[name]:visible'));
			});
			this.$login.on('tap','.login-input .auto-btn',function(e){
				Login.login(Login.$login.find('input[name]:visible'));
			});
			this.$login.on('tap','.btn-forget',function(e){
				Login.storage.Storage('forget',Login.$login.find('input[name=mobile]').val());
			});

			this.$forget.on('tap','.vervify-btn',function(e){
				var type = $(this).data('type');
				Login.getCode(Login.$forget.find('input[name=mobile]'),Login.$forget.find('.vervify-btn button'),type);
			});
			this.$forget.on('tap','.forget-input .auto-btn',function(e){
				Login.forget(Login.$forget.find('input[name]'));
			});
		},
		checkMobile:function(inputs){
			// var inputs = Login.$login.find('input[name]:visible');
			// for(var i = 0; i < inputs.length; i++){
				var bool = Login.verify(inputs[0].name)(inputs[0].value);
				if(bool){
					var param = inputs[0].value;
					$.ajax({
					  	type: 'POST',
					 	url: '/m/login/check_mobile_sole',
					  	data: 'mobile='+param,
					  	dataType: 'json',
					  	success: function(data){
					  		if(data.code == 201){
					  			Login.$login.addClass('register');
					  			Login.tips.hide().html('');
					  			// Login.$login.find('.register-info').append(param);
					  		}else if(data.code == 200){
					  			Login.$login.addClass('login');
					  			Login.tips.hide().html('');
					    	}else{
					    		Login.tips.show().html(data.message);
					    	}
					  	},
					  	error: function(xhr, type){
					    	Login.ui.alert(xhr);
					  	}
					});
					Login.tips.hide().html('');
				}else{
					if(typeof bool == 'number'){
						Login.tips.show().html(inputs.data('verify'));
					}else{
						Login.tips.show().html(inputs.data('error'));
					}
				}
			// }
		},
		getCode:function(input,btn,type){
			var bool = Login.verify(input[0].name)(input[0].value);
			var _this = this;
			if(bool){
				if(_this.timer) return false;
				var seconds = 60;
				btn.text('发送验证码...');			
				$.post('/get_code', 'mobile='+input.val()+'&type='+type,function(data){
					
					// var data = $.parseJSON(result);					
					if(data.code == '200') {
						btn.text('发送成功 ('+seconds+'s)');
						_this.timer = setInterval(function(){
							if(seconds > 1){
								btn.text('发送成功 ('+(--seconds)+'s)');
							}else{
								clearInterval(_this.timer);
								btn.text('重新发送');
								_this.timer = null;
							}
						},1000);
					}
					else {
						Login.tips.show().html(data.message);
						btn.text('重新发送');
						return false;
					}
					
				},'json').fail(function(){
					Login.tips.show().html(btn.data('error'));
				});
				Login.tips.hide().html('');
			}else{
				if(typeof bool == 'number'){
					Login.tips.show().html(input.data('verify'));
				}else{
					Login.tips.show().html(input.data('error'));
				}
				return false;
			}
		},
		forget:function(els){
			var params = {};
			var tips = this.$forget.find('.error')
			for(var i = 0; i < els.length; i++){
				var bool = Login.verify(els[i].name)(els[i].value);
				if(bool){
					params[els[i].name] = els[i].value;
					tips.hide().html('');
				}else{
					if(typeof bool == 'number'){
						tips.show().html(els.eq(i).data('verify'));
					}else{
						tips.show().html(els.eq(i).data('error'));
					}
					return false;
				}
			}
			$.post('/init_user_passwd',params,function(data){
				Login.ui.alert(data.message);
				if(data.code == 200){
					window.location.href = '/login';
				}
			},'json').fail(function(){
				tips.show().html('网络错误');
			});
		},
		register:function(els){
			var params = {};
			for(var i = 0; i < els.length; i++){
				var bool = Login.verify(els[i].name)(els[i].value);
				if(bool){
					params[els[i].name] = els[i].value;
					Login.tips.hide().html('');
				}else{
					if(typeof bool == 'number'){
						Login.tips.show().html(els.eq(i).data('verify'));
					}else{
						Login.tips.show().html(els.eq(i).data('error'));
					}
					return false;
				}
			}
			$.post('/register',params,function(data){
				// var data = $.parseJSON(result);
				if(data.code == 200){
					var isPop = els.closest('.pop').length;
					if(isPop){
						window.location.reload();
					}else{
						window.location.href = '/perfect';
					}
				}else{
					Login.ui.alert(data.message);
				}
			},'json').fail(function(){
				Login.tips.show().html('网络错误');
			});

		},
		login:function(els){
			var params = {};
			for(var i = 0; i < els.length; i++){
				var bool = Login.verify(els[i].name)(els[i].value);
				if(bool){
					params[els[i].name] = els[i].value;
					Login.tips.hide().html('');
				}else{
					if(typeof bool == 'number'){
						Login.tips.show().html(els.eq(i).data('verify'));
					}else{
						Login.tips.show().html(els.eq(i).data('error'));
					}
					return false;
				}
			}
			$.post('/is_login',params,function(data){
				// var data = $.parseJSON(result);
				if(data.code == '200'){
					var isPop = els.closest('.pop').length;
					if(isPop){
						window.location.reload();
					}else{
						window.location.href = '/';
					}
				}else{
					Login.ui.alert(data.message);
				}
			},'json').fail(function(error){
				Login.ui.alert(error);
			});
		}
	}
	Login.init();
})