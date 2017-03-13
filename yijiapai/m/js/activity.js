$(function(){
	Activity = {
		init:function(){
			$('#activityBtn').on('click',function(e){
				if(!$(this).data('status')){
					require('/ui').modal($('.pop-login'));
					return false;
				}
			});
		}
	}
	Activity.init();
})