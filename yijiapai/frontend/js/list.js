$(function(){
	var List = {
		init:function(){
			// require('/page');
			// $('#pager').pager({
			//   total: Math.ceil( 100/5 )
			// }).on('pager_change', function(e, page){
			//   console.log(page);
			// });
			require('/center').center();
			List.bindEvent();
		},
		bindEvent:function(){
			// var navhover = require('/navhover').navhover;
			// navhover($('#navHover'));
			//固定滚动
			var $scrollFixed = $('#scrollFixed');
			var $listItems = $('#listItems');
			var indexItemsTop = $listItems.offset().top-300;
			var scrollFixedTop = $scrollFixed.position().top;
			$(window).on('scroll',function(e){
			    var scrollTop = $('body').scrollTop() || $(document).scrollTop();
			    
			    if(scrollTop > indexItemsTop){
			        $scrollFixed.css('top',scrollTop-indexItemsTop+scrollFixedTop)
			    }
			}).trigger('scroll').on('resize',function(e){
			    if($(window).width() > $listItems.width() + 60){
			        $scrollFixed.show(300);
			    }else{
			        $scrollFixed.hide();
			    }
			}).trigger('resize');
			
		}
	}
	List.init();
});