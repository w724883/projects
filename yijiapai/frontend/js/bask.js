$(function(){
	var Bask = {
		init:function(){
			var bask = $('#baskData');
			if(bask.length > 0){
				Bask.getTemplete();
			}
			Bask.bindEvent();
		},
		bindEvent:function(){
			var appraiseForm = $('#appraiseForm');
			appraiseForm.on('change', 'input[type=file]', function(e) {
				Bask.uploadImg(appraiseForm,{
					tips:function(content){
						require('/ui').tips(content);
					},
					before:function(){
						appraiseForm.find('label').append('<i class="icons icon-btn-loading"></i>');
					},
					success:function(data){

					},
					complete:function(){
						appraiseForm.find('icon-btn-loading').remove();
					}
				});
				$(this).html($(this).html());
			});
		},
		getTemplete:function(){
			var data = $.parseJSON($('#baskData').html());
			var container = $('.show-container');
			var array = [[],[],[],[]];
			for(var i = 0; i < data.length; i++){
				array[i%4].push(data[i]);
			};
			for(var n = 0; n < array.length; n++){
				var temp = template('baskTemp',{data:array[n]});
				if(this.container){
					this.container.find('ul').eq(n).append(temp);
				}else{
					container.append(temp);
				}
			};
			this.container = container;
			$(".show-img .lazy").lazyload({
				threshold : 200,
				effect : 'fadeIn',
		        failurelimit : 10
		    },function(self){
	        	self.closest('li').addClass('animation');
	        });
	    	$(".show-info .lazy").lazyload({
	    		threshold : 200,
	            effect : 'fadeIn',
	            failurelimit : 10
	        });
		},
		uploadImg:function(form,cb){
			var input = form.find('input[type=file]')[0];
			var files = input.files;
			if(input.value && files.length > 0){
				if(files.length > 20){
					cb.tips('最多上传20张哦');
					return false;
				}
				if(window.FormData){
					var formData = new FormData();
					for (var i = files.length - 1; i >= 0; i--) {
						if(files[i].size / 1024 > 5120 || !/(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF)$/.test(files[i].type)){
							cb.tips('上传失败，可能是图片太大，只支持png/jpg/gif格式的图片哦');
							return false;
						}
						formData.append('file'+i, files[i]);
					};
					$.ajax({
					    url: form.attr('action'),
					    type: 'POST',
					    beforeSend: cb.before,
					    success: cb.success,
					    error: cb.tips,
					    complete:cb.complete,
					    data: formData,
					    cache: false,
					    contentType: false,
					    processData: false
					});
				}else{
					$('body').append('<iframe name="iframeUpload" style="display:none"></iframe>');
					form.attr('target','iframeUpload').submit();
				}
			}
		}
		// animateShow:function(items){
		// 	var winWidth = $(window).width();
		// 	var winHeight = $(window).height();
		// 	for(var i = 0; i < items.length; i++){
		// 		var top = items.offset().top;
		// 		var left = items.offset().left;
		// 		var width = items.width();
		// 		var height = items.height();
		// 		items.css('transform','translate3d(-'+(left+width)+'px,-'+(top+height)+'px,0)');
		// 	}
		// 	items.addClass('animation-translate').parent().addClass('animation');
		// }
	}
	Bask.init();
})