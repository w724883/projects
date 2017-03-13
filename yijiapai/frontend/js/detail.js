$(function(){
	// var detailFocus = TouchSlider({
 //        'id': 'detailFocus', //string|elementNode 幻灯容器的id或者该节点对象
 //        'begin': 0, //Number 默认从第几个幻灯开始播放，从0开始
 //        'auto': false, //bool 是否自动播放
 //        'speed':0, //Number 动画效果持续时间,单位是毫秒
 //        'timeout':5000, //Number 幻灯播放间隔时间,单位毫秒
 //        'direction':'up', //string left|right|up|down 播放方向,四个值可选
 //        'align':'center', //string left|center|right 对齐方向（fixWidth=true情况下无效），靠左对齐（ipad版appStore上截图展现方式）、居中对齐（iphone版appStore上截图展现方式）、靠右对齐
 //        'fixWidth':true, //bool 默认会将每个幻灯宽度强制固定为容器的宽度,即每次只能看到一张幻灯；false的情况参见下方第一个例子
 //        'before':function(i,oldEl){
 //        	$pagination.find('li').eq(i).addClass('active');
 //        },
 //        // 'after':function(i,newEl){
 //        // 	$pagination.find('li').eq(i).addClass('active');
 //        // }
 //    });
    
    // $pagination.on('click','li',function(e){
    // 	$(this).siblings('li').removeClass('active');
    // 	$(detailFocus.slide($(this).index()).element).css('opacity',0).fadeTo(400,1);
    // 	return false;
    // });
	var Detail = {
		init:function(){
			var container = $('#detailFocus');
			this.operation = $('#detailOperation');
			this.pagination = container.find('.detail-pagination');
			this.detailFocus = container.find('.detail-focus');
			this.detailPrice = container.find('.detail-price');
			this.detailOriginal = container.find('.detail-original');
			this.detailFocus.find('li').eq(this.pagination.find('li.active').index()).show();
			require('/center').center(container);
			Detail.bindEvent();
			//库存
			var lis = this.operation.find('.J-params li');
			for(var i = 0; i < lis.length; i++){
				if(lis.eq(i).data('inventory') === 0){
					lis.eq(i).removeClass('select').addClass('disable');
				}else{
					if(lis.eq(i).hasClass('default')){
						this.detailPrice.html(lis.eq(i).data('price'));
						this.detailOriginal.html(lis.eq(i).data('original'));
					}
				}
			}
		},
		bindEvent:function(){
			var timer;
			var seft = this;
			//商品数量选择
			var listenerNumber = require('/listenerNumber');
			//aside
			var $detailAside = $('#detailAside');
			var asideHeight = $detailAside.height();
			var asideParentHeight = $detailAside.parent().height();
			var asideRatio = $detailAside.height() / $detailAside.parent().height();
			$(window).on('scroll',function(e){
				var scrollTop = $('body').scrollTop() || $(document).scrollTop();
				if(asideHeight < asideParentHeight){
					$detailAside.css('top',scrollTop*asideRatio);
				}else{
					$detailAside.css('top','-'+scrollTop*asideRatio+'px');
				}
			});
			//focus hover
			this.pagination.find('li').hover(
				function(e){
					var $this = $(this);
					timer = setTimeout(function(){
						$this.addClass('active').siblings('.active').removeClass('active');
						seft.detailFocus.find('li').eq($this.index()).fadeIn('300').siblings('li').fadeOut('200');
					},200);
				},
				function(e){
					clearTimeout(timer);
				}
			)
			//商品条件选择
			seft.operation.on('click', 'dd li', function(e) {
				//没有库存
				if($(this).hasClass('disable')){
					return false;
				}
				$(this).addClass('select').siblings('.select').removeClass('select');
				//显示价格
				seft.detailPrice.html($(this).data('price'));
				seft.detailOriginal.html($(this).data('original'));
				//显示库存
				var inventory = $(this).data('inventory');
				Detail.operation.find('.i-amount').data('inventory',inventory).find('.amount-desc span').text(inventory);
				//去掉错误提示
				if(Detail.getParams(seft.operation)){
					seft.operation.removeClass('detail-attantion');
				}
			});
			//提交数据
			seft.operation.on('click', '.detail-btns button', function(e) {
				var params = Detail.getParams(seft.operation);
				if(params){
					$.post('/cart_create', params,function(data){
						if(data.code == 200) {
							require('/ui').pop($('.shop-pop'));
						}else {
							console.log(data.message);
						}
					},'json').fail(function(error){
						console.log(error);
					});
				}else{
					seft.operation.addClass('detail-attantion');
				}
			});
			//关闭错误提示
			seft.operation.on('click','.attantion-close',function(e){
				seft.operation.removeClass('detail-attantion');
			});
			//数量选择
			seft.operation.on('click', '.i-amount a', function(e) {
				listenerNumber.modify($(this),{inventory:$(this).closest('dd').data('inventory')});
			}).on('blur', '.i-amount input', function(e) {
				listenerNumber.enter($(this),{inventory:$(this).closest('dd').data('inventory')});
			});
		},
		getParams:function(operation){
			var uls = operation.find('.J-params');
			var params = {};
			for (var i = 0; i < uls.length; i++) {
				if(uls.eq(i).is('input')){
					if(uls.eq(i).is(':hidden')){
						params[uls.eq(i).data('params')] = uls.eq(i).val();
					}else{
						if((uls.eq(i).val() < 1) || isNaN(uls.eq(i).val())){
							return false;
						}else{
							params[uls.eq(i).data('params')] = uls.eq(i).val();
						}
					}
				}else{
					var select = uls.eq(i).find('.select');
					// var btns = operation.find('.detail-btns').removeClass('hide');
					if(select.length == 0){
						return false;
					}else{
						// if(select.data('inventory') == ''){
						// 	btns.addClass('hide');
						// }
						params[uls.eq(i).data('params')] = $.trim(select.text());
					}
				}
			};
			return params;
		}
	}
    Detail.init();
})