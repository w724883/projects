$(function(){
	var Detail = {
		init:function(){
			

			this.bindEvent();
		},
		bindEvent:function(){
			// 焦点图视差滚动
			var $photographerAbout = $('#photographerAbout');
			
			var photographerAboutTop = $photographerAbout.offset().top;
			$(window).on('scroll',function(e){
			    var scrollTop = $('body').scrollTop() || $(document).scrollTop();
			    if(scrollTop > photographerAboutTop){
					$photographerAbout.addClass('fixed');
			    }else{
			    	$photographerAbout.removeClass('fixed');
			    }
			});
			
			
		}
	}
    Detail.init();
    
})