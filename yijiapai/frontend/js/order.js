$(function(){
	var Order = {
		init:function(){
			this.orderList = $('#orderList');
			this.orderClearing = $('#orderClearing');
			// this.listenerOrder = require('/listenerOrder');
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
			this.bindEvent();
		},
		bindEvent:function(){
			var orderAddress = $('#orderAddress');
			var notOrderAddress = $('#notOrderAddress');
			var orderPay = Order.orderList.find('.order-payment');
			//商品数量选择
			var listenerNumber = require('/listenerNumber');
			var confirm = require('/ui');
			var verify = require('/verify');
			$('#header').on('click', '.btn-login', function(e) {
				require('/ui').pop($('.login-pop'));
				e.stopPropagation();
				return false;
			});
			//选择地址
			!orderAddress.on('click', '.address-block', function(e) {
				// $(this).addClass('active').siblings('.address-block').removeClass('active');
				require('/fn').setDefault(orderAddress,$(this));
			}).find('.address-block').hasClass('active') && orderAddress.find('.address-block:first').addClass('active');
			//未登录订单
			var addressInputs = notOrderAddress.find('input[name],select[name]');
			addressInputs.on('blur',function(e){
				for(var i = 0; i < addressInputs.length; i++){
					if(addressInputs.eq(i).is(':visible')){
						var bool = verify.verify[verify.filter(addressInputs[i].name)](addressInputs[i].value);
						if(!bool){
							if(typeof bool == 'number'){
								addressInputs.eq(i).addClass('error').closest('tr').find('.tips').html(addressInputs.eq(i).data('verify'));
							}else{
								addressInputs.eq(i).addClass('error').closest('tr').find('.tips').html(addressInputs.eq(i).data('error'));
							}
							return false;
						}else{
							addressInputs.eq(i).removeClass('error').closest('tr').find('.tips').empty();
						}
					}
				};
			});
			//未登录选择城市
			notOrderAddress.on('change','.addaddress-select select',function(e){
				require('/fn').city($(this));
			});
			//未登录获取验证码
			notOrderAddress.on('click', '.enter-verify button', function(e) {
				Order.getCode(notOrderAddress,$(this));
			});

			//选择付款方式
			orderPay.find('label').on('click',function(e){
				// Order.checkPayment();
				if($(this).hasClass('payments')){
					if($(this).hasClass('active')){
						return false;
					}else{
						$(this).addClass('active').closest('.order-payment').siblings('.order-payment').find('.payments').removeClass('active');
					}
				}else{
					$(this).toggleClass('active');
				}
				
				if(orderPay.find('label').last().hasClass('active')){
					var defaultPlatform = Order.orderList.find('.pay-platform p');
					!defaultPlatform.hasClass('active') && defaultPlatform.first().addClass('active');
				}else{
					Order.orderList.find('.pay-platform .active').removeClass('active')
				}
			}).trigger('click');
			// 选择平台支付
			Order.orderList.on('click', '.pay-platform p', function(e) {
				// orderPay.find('label').last().prop('checked',true);
				// Order.checkPayment();
				$(this).addClass('active').siblings('.active').removeClass('active');
				orderPay.find('label').last().addClass('active').closest('.order-payment').siblings('.order-payment').find('.payments').removeClass('active');
			});
			//全选
			Order.orderList.on('click', 'thead .icon-checkbox', function(e) {
				if($(this).toggleClass('checked').hasClass('checked')){
					Order.orderList.find('tbody .icon-checkbox').addClass('checked');
				}else{
					Order.orderList.find('tbody .icon-checkbox').removeClass('checked');
				}
				Order.changeParams();
			});
			//单选
			Order.orderList.on('click', 'tbody .icon-checkbox', function(e) {
				$(this).toggleClass('checked');
				if(Order.orderList.find('tbody .icon-checkbox').length == Order.orderList.find('tbody .icon-checkbox.checked').length){
					Order.orderList.find('thead .icon-checkbox').addClass('checked');
				}else{
					Order.orderList.find('thead .icon-checkbox').removeClass('checked');
				}
				Order.changeParams();
			});
			//数量选择
			Order.orderList.on('click', '.i-amount a', function(e) {
				var params = {},$this = $(this);
				params.goods_id = $(this).closest('tr').data('goodid');
				params.cart_id = $(this).closest('tr').data('cartid');
				params.inventory = $(this).closest('tr').data('inventory');
				params.num = listenerNumber.modify($(this),params);
				if(!params.num){
					if(params.num === false){
						confirm.tips('<div class="c-808080 confirm-warning"><i class="icons icon-warning"></i><p>库存有限，此商品最多只能购买 '+params.inventory+' 件</p></div>');
					}
					return false;
				}
				$.post('/edit_cart', params, function(data) {
					if(data.code == 200){
						listenerNumber.write(data.data);
						Order.changeParams($this,params.num);
					}else{
						console.log(data.message);
					}
				},'json').fail(function(error){
					console.log(error);
				});
			}).on('blur', '.i-amount input', function(e) {
				var params = {},$this = $(this);
				params.goods_id = $(this).closest('tr').data('goodid');
				params.cart_id = $(this).closest('tr').data('cartid');
				params.inventory = $(this).closest('tr').data('inventory');
				params.num = listenerNumber.enter($(this),params);
				if(!params.num){
					confirm.tips('<div class="c-808080 confirm-warning"><i class="icons icon-warning"></i><p>库存有限，此商品最多只能购买 '+params.inventory+' 件</p></div>');
					return false;
				}
				$.post('/edit_cart', params, function(data) {
					if(data.code == 200){
						listenerNumber.write(data.data);
						Order.changeParams($this,params.num);
					}else{
						console.log(data.message);
					}
				},'json').fail(function(error){
					console.log(error);
				});
			});
			//删除
			Order.orderList.on('click', '.icon-delet', function(e) {
				var $this = $(this);
				var $tip = confirm.tips('<div class="confirm-del"><p class="c-808080">确定将此商品移除？</p><button class="c-fff tips-ok">删除</button><button class="c-fff tips-close">取消</button><div>');
				$tip.css({
					left:confirm.pos(e).x - $tip.width()/2 - $this.width()/2,
					top:confirm.pos(e).y - $tip.height() - $this.height()*2,
					right:'auto',
					bottom:'auto'
				}).on('click','.tips-ok',function(e){
					$.post('/del_cart', 'cart_id='+$this.closest('tr').data('cartid'), function(data) {
						if(data.code == 200){
							$this.closest('tr').hide(600,function(){
								$(this).remove();
								Order.changeParams();
								listenerNumber.write(data.data);
								confirm.destroy();
							})
						}else{
							console.log(data.message);
						}
					},'json').fail(function(error){
						console.log(error);
					});
				});
				
			});
			//结算
			Order.orderClearing.on('click','.pay-btn .btn-ok',function(e){
				var checkbox = Order.orderList.find('tbody .icon-checkbox.checked');
				Order.orderList.find('input[name="cart_id"]').remove();
				if(checkbox.length > 0){
					// var params = [];
					for(var i = 0; i < checkbox.length; i++){
						var parent = checkbox.eq(i).closest('tr');
						parent.append('<input type="hidden" name="cart_id[]" value="'+parent.data('cartid')+'" />');
					}
					parent.closest('form').submit();
					// $.post('/confirm_order',{cart_id:params},function(data){
					// 	if(data.code == 200){
					// 		window.location.href = href;
					// 	}
					// },'json').fail(function(error){
					// 	console.log(error);
					// });
				}else{
					confirm.tips('<div class="confirm-del"><p class="c-808080">选择商品才能下单哦！</p><button class="c-fff tips-close">确定</button><div>');
				}
				return false;
			});

			//添加地址
			orderAddress.on('click', '.address-manage a:last', function(e) {
				$(this).closest('tr').next('.address-add').show('400');
			});
			orderAddress.on('click', '.address-add button', function(e) {
				$(this).closest('ul').slideUp(400,function(){
					$(this).closest('.address-add').hide();
				})
			});

			//提交订单
			Order.orderList.on('click','.btn-ok',function(e){
				addressInputs.trigger('blur');
				if(notOrderAddress.find('.error:visible').length > 0){
					$('body').scrollTop(0);
					return false;
				}
				// var payment = Order.orderList.find('.order-payment');
				// var platform = Order.orderList.find('.pay-platform');
				// payment.find('label:not(.active) input[type=hidden]').val(0);
				orderAddress.find('.address-block.active input[type=hidden]').attr('name','address_list');
				Order.orderList.find('.order-payment label.active input[type=hidden]').val(1);
				Order.orderList.find('.pay-platform p:not(.active) input[type=hidden]').val(0);
				
				$('#order_list').submit();
			})
		},
		checkPayment:function(){
			var label = Order.orderList.find('.order-payment label');

			for (var i = label.length - 1; i >= 0; i--) {
				label.eq(i).hasClass('active') ? label.eq(i).addClass('active') : label.eq(i).removeClass('active');
			};
		},
		changeParams:function($this,n){
			var trs = Order.orderList.find('tr[data-amount]');
			var num = 0;
			var amount = 0;
			for(var i = 0; i < trs.length; i++){
				if(trs.eq(i).find('.icon-checkbox').hasClass('checked')){
					var val = trs.eq(i).find('input[type=text]').val();
					var cost = trs.eq(i).data('amount');
					num += val*1;
					amount += cost*val;
				}
			}
			if($this){
				var $tr = $this.closest('tr');
				$tr.find('.clearing-subtotal').text($tr.data('amount')*n);
			}
			Order.orderClearing.find('.clearing-num').text(num);
			Order.orderClearing.find('.clearing-amount').text(amount);
			Order.orderClearing.find('.clearing-all').text(amount);
		},
		timer:null,
		getCode:function(container,$this){
			var _this = this;
			if(_this.timer) return false;
			var phone = container.find('input[name=phone]').val();
			var bool = require('/verify').verify.phone(phone);
			if(bool){
				var seconds = 60;
				$.post('/get_code', {phone:phone, code_type:5},function(data){
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
						$this.closest('tr').find('.tips').html(data.message);
						// Personal.tips.text(data.message);
						return false;
					}
				},'json');
				$this.closest('tr').find('.tips').text('');
			}else{
				if(typeof bool == 'number'){
					$this.closest('tr').find('.tips').text($this.data('verify'));
				}else{
					$this.closest('tr').find('.tips').text($this.data('error'));
				}
				return false;
			}
		}
	}
	Order.init();
})