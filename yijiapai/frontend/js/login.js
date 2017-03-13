$(function(){
	var Login = {
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var verify = require('/verify');
			var oRegister = $('#register');
			var tips = $('.enter-body .tips');
			var timer;
			//点击过去验证码
			oRegister.on('click', '.enter-verify button', function(e) {
				var phone = oRegister.find('input[name=phone]').val();
				var bool = verify.verify.phone(phone);
				var $this = $(this);
				if(bool){
					if(timer) return false;
					var seconds = 60;					
					$.post('/get_code', {phone:phone, code_type:1},function(data){
						
						if(data.code == '200') {
							$this.text(seconds+'秒后重新获取');
							timer = setInterval(function(){
								if(seconds > 1){
									$this.text(--seconds+'秒后重新获取');
								}else{
									clearInterval(timer);
									$this.text('重新发送');
									timer = null;
								}
							},1000);
						}
						else {
							tips.text(data.message);
							return false;
						}
						
					},'json');

				}else{
					if(typeof bool == 'number'){
						tips.text($this.data('verify'));
					}else{
						tips.text($this.data('error'));
					}
					return false;
				}
			});
		},
		
	}
	Login.init();
})