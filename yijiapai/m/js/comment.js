$(function(){
	var Comment = {
		init:function(){
			this.commentContainer = $('#commentContainer');
			this.ui = require('/ui');
			this.bindEvent();
		},
		bindEvent:function(){
			this.commentContainer.on('tap','.icon-star-gray',function(e){
				$(this).addClass('icon-star-active').prevAll('.icon-star-gray').addClass('icon-star-active');
				$(this).nextAll('.icon-star-active').removeClass('icon-star-active');
				$(this).nextAll('.comment-status').html($(this).data('text'));
			});
			//查看大图
			this.commentContainer.on('tap','.upload-item img',function(e){
				var $this = $(this);
				require('/center').contain(Comment.ui.pop('<div class="comment-preview"><img class="contain" data-original='+ $(this).data('original') +' /></div>'));
				// function(e){
				// 	if($(e.target).is('.pop-select')){
				// 		$(e.target).toggleClass('icon-infok');
				// 	}else{
				// 		if(!$('.comment-preview .pop-select').hasClass('icon-infok')){
				// 			$this.closest('.upload-item').remove();
				// 		}
				// 	}
				// }
			});
			//删除
			this.commentContainer.on('tap','.upload-item a',function(e){
				var parent = $(this).closest('.upload-item');
				Comment.ui.confirm('你要删除上传的图片吗？',function(value){
					if(typeof value == 'boolean' && value){
						$.post('/del_image','image='+parent.find('img').data('original'),function(data){
							if(data.code == 200){
								parent.fadeOut(400, function(){
									$(this).remove();
								});
							}else{
								Comment.ui.alert(data.message);
							}
						},'json').fail(function(error){
							Comment.ui.alert(error);
						});
					}
				});
			});
			//上传
			this.commentContainer.on('change', '.upload-item input[type=file]', function(e) {
				Comment.uploadImg(this);
			});
			//评论联动
			var $count = Comment.commentContainer.find('.comment-desc span');
			var count = $count.text();
			this.commentContainer.on('input','textarea',function(e){
				var len = $(this).val().length;
				$count.text((count - len) < 0 ? 0 : (count - len));
			});
			//提交评论
			this.commentContainer.on('tap','.account-btn button',function(e){
				var params = {};
				var inputs = Comment.commentContainer.find('.J-param');

				for(var i = 0; i < inputs.length; i++){
					if(inputs.is(':visible')){
						var bool = require('/verify').filter(inputs[0].name)(inputs[0].value);
						if(bool){
							params[inputs[i].name] = $.trim(inputs[i].value);
							$('.error').hide();
						}else{
							$('.error').show().empty().html(inputs.eq(i).data('error'));
							return false;
						}
					}else{
						params[inputs[i].name] = $.trim(inputs[i].value);
					}					
				}
				params['comment_num'] = Comment.commentContainer.find('.comment-star .icon-star-active').length;
				if(!params['comment_num']){
					$('.error').empty().show().html(Comment.commentContainer.find('.comment-star').data('error'));
					return false;
				}else{
					$('.error').hide();
				}
				params['comment_img'] = Comment.commentContainer.find('.comment-upload img').map(function(){
					return $(this).data('original');
				}).get().join('#');
				$.post('/create_comment',params,function(data){
					if(data.code == 200){
						window.location.href = data.data;
					}else if(data.code == 401){
						Comment.ui.modal($('.pop-login'));
					}else{
						Comment.ui.alert(data.message);
					}
				},'json').fail(function(error){
					Comment.ui.alert(error);
				})
			});
		},
		uploadImg:function(that){
			require('/uploadImg').upload(that,'/upload_comment_image',{
				success:function(data){
					if(data.code == 200){
						var item = Comment.commentContainer.find('.comment-upload').prepend('<div class="upload-item active"><label><img class="center" data-original='+ data.data +' /></label><a href="javascript:;"></a></div>');
						require('/center').center(item);
					}else{
						Comment.ui.alert(data.message);
					}
				},
				tips:function(error){
					Comment.ui.alert(error);
				}
			});
		}
	}
	Comment.init();
});