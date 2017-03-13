$(function(){
	var Detail = {
		init:function(){
			this.$section = $('#section');
			this.ui = require('/ui');
			this.storage = require('/storage').Storage;
			var lis =this.$section.find('li');
			for(var i = 0; i < lis.length; i++){
				if(lis.eq(i).find('.section-content .active').length > 0){
					lis.eq(i).find('.section-item').addClass('active');
					lis.eq(i).find('.section-content').show();
				}
			}
			this.setAmount();
			this.bindEvent();
			var attributes = this.storage('attributes');
			if(attributes){
				for(var key in attributes){
					var attributes_lis = this.$section.find('li[data-attribute-item="'+key+'"]');
					for(var n = 0; n < attributes[key].length; n++){
						attributes_lis.find('.section-content span:contains('+attributes[key][n]+')').addClass('active');
					}
					if(attributes[key].length){
						attributes_lis.find('.section-content').show();
					}
				}
			}
			this.setAmount();
		},
		bindEvent:function(){
			var that = this;
			// 焦点图视差滚动
			var $focusWrap = $('.detail-content');
			$(window).on('scroll',function(e){
			    var scrollTop = $('body').scrollTop() || $(document).scrollTop();
			    $focusWrap.css('transform','translate3d(0,-'+scrollTop*0.4+'px,0)');
			});
			$('#detailOperation').on('tap','.btn',function(e){
				var confirmForm = $('#confirmForm');
				confirmForm.find('.detailForm').empty();
				var params = that.getReserve();
				if(typeof params == 'string'){
					Detail.ui.alert('<br/>'+params+'是必选项！<br/><br/>');
					return false;
				}
				if($.trim(confirmForm.find('input[name=user_id]').val())){
					require('/storage').clear('attributes');
					confirmForm.submit();
				}else{
					Detail.ui.modal($('.pop-login'));
					
					var items = Detail.$section.find('li');
					var attributes = {};
					for(var i = 0; i < items.length; i++){
						var blocks = items.eq(i).find('.section-content .active');
						var _blocks = [];
						for(var n = 0; n < blocks.length; n++){
							_blocks.push(blocks.eq(n).html());
						}
						attributes[items.eq(i).data('attribute-item')] = _blocks;
					}
					Detail.storage('attributes',attributes);
				}
				// params['user_id'] = $(this).data("user-id");
				// params['cameraman_id'] = $(this).data("cameraman-id");
				
				// $.post('/cart',params,function(data){
				// 	Detail.ui.alert(data);
				// }).fail(function(error){
				// 	Detail.ui.alert(error);
				// });
			});
			this.$section.on('tap','.section-block',function(e){
				var parent = $(this).closest('li');
				var hasOnly = $(this).closest('.section-content').data('only');
				if(hasOnly){
					if(hasOnly > 1){
						var actives = $(this).parent().children('.active');
						$(this).toggleClass('active');
						if(actives.length > hasOnly-1){
							actives.last().removeClass('active');
						}
					}else{
						$(this).addClass('active').siblings('.active').removeClass('active');
					}
				}else{
					$(this).toggleClass('active');
				}
				if(parent.data('only')){
					parent.siblings('li[data-only]').find('.section-content .active').removeClass('active');
				}
				that.setAmount();
			});
		},
		getReserve:function(){
			var lis = $('#section li'),_params = {};
			for(var i = 0; i < lis.length; i++){
				var items = lis.eq(i).find('.section-content .active').map(function(){
					return $(this).html();
				});
				var attribute = lis.eq(i).data('attribute-item');
				if(items.length){
					_params[attribute] = items;
					for(var n = 0; n < items.length; n++){
						$('#confirmForm .detailForm').append('<input type="hidden" name="'+lis.eq(i).data('attribute-item')+'[]" value="'+items[n]+'" />')
					}
				}else if(attribute != 'attribute_2'){
					return lis.eq(i).find('.section-item').text();
				}
				
			}
			return _params;
		},
		setAmount:function(){
			var sections = this.$section.find('.section-content');
			var actives = sections.find('.active');
			var firstSection = sections.eq(2).find('.active').first().data('price');
			var amount = 0;
			for(var i = 0; i < actives.length; i++){
				amount += actives.eq(i).data('price')*1;
			}
			if(firstSection){
				amount = amount - firstSection*1;
			}
			$('#detailOperation .detail-amount span').html(amount);
		}
	}
    Detail.init();
    
})