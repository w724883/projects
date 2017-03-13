$(function(){
	var Order = {
		init:function(){
			this.accountForm = $('#accountForm');
			this.orderForm = $('#orderForm');
			this.ui = require('/ui');
			this.bindEvent();
		},
		bindEvent:function(){
			this.accountForm.on('tap','.account-btn',function(e){
				if($(this).data('address')){
					$(this).submit();
				}else{
					Order.ui.confirm('您还没有添加默认地址，马上去添加？',function(value){
						if(value){
							Order.accountForm.find('.account-address .arrow').trigger('click');
						}
					});
				}				
			});
			this.accountForm.on('tap','.coupons-btn',function(e){
				var $voucher = Order.accountForm.find('.coupons-input input');
				Order.getCoupons($voucher);
			});
			this.orderForm.on('tap','.order-cancel',function(e){
				var params = {};
				params.user_id = $(this).data('user-id');
				params.order_id = $(this).data('order-id');
				Order.ui.confirm('你要取消订单吗？',function(value){
					if(typeof value == 'boolean' && value){
						Order.cancelOrder(params);
					}
				});
			});
			
		},
		getCoupons:function($voucher){
			var voucher = $.trim($voucher.val());
			if(voucher){
				$.post('/common/common/check_voucher','voucher_code='+voucher,function(data){
					if(data.code == 200){
						var $price = Order.accountForm.find('.confirm-price');
						$price.text($price.text()*1 - data.data.price*1);
						require('/ui').alert('优惠码输入正确，已为你省下 '+data.data.price+' 元');
						Order.accountForm.find('input[name=voucher_code]').val(voucher);
					}else{
						require('/ui').alert(data.message);
					}
				},'json').fail(function(error){
					require('/ui').alert(error);
				});
			}else{
				require('/ui').alert($voucher.data('error'));
			}
		},
		cancelOrder:function(params){
			$.post('/cancel_order',params,function(data){
				if(data.code == 200){
					window.location.reload();
				}else{
					Order.ui.alert(data.message);
				}
			},'json').fail(function(error){
				Order.ui.alert(error);
			});
		}
	}
	Order.init();
});