define(function(){
	//构造
	function Imgs(data){
		//获取数据
		this.data = data;
		//初始化
		this.ini();
		//渲染
		this.render();

	}

	
	Imgs.prototype = {
		ini:function(){
			this.imgsContainer = $('#imgs-container');
			this.details = $('#imgs-details');
			this.nav = $('#imgs-nav');
			this.comments = this.details.find('.imgComment');
			this.winHeight = $(window).height();
			
		},
		render:function(){
			var that = this;
			var n = 0;
			var imgsWrap = this.imgsContainer.children('.imgsWrap');
			var imgsArr = new Array();
			var arr = new Array();
			var container;
			
			
			//混合数据
			for(var items in this.data){
				for(var item in this.data[items]){
					arr.push(this.data[items][item]);
				}
			};
			//item模板
			function template(rep){//'+ that.arr[i]["title"] +''+ getCommentLen() +'
				var itemTemplate = '<div class="imgItem">'+
										'<div class="imgItem-cover">'+
											'<p class="imgItem-title">{title}</p>'+
											'<div class="imgItem-descript">'+
												'<small class="imgItem-time">2014-8-18</small>'+
												'<div class="imgItem-opt">'+
													'<i class="comment-btn">{num}</i>'+
												'</div>'+
											'</div>'+
										'</div>'+
											'<canvas id="{id}"></canvas>'+
											//'<img src="'+ that.arr[i]["src"] +'" />'+
									'</div>';
				return  itemTemplate.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
			    	return (rep[name] === undefined) ? '' : rep[name];
			  	});
			  	
			}
			//获取评论数量
			function getCommentLen(obj){
				var n = 0;
				for(var num in obj["comment"]){
					n++;
				}
				return n;
			}
			var loadImg = function(){
				var dtd = $.Deferred(); // 新建一个deferred对象
				/*function loadError(t){
					$(t).closest('.imgItem').remove();
				}*/
				for(var i=0;i<arr.length;i++){
					
					var itemTemplate = template({
						id:arr[i]["id"],
						title:arr[i]["title"],
						num:getCommentLen(arr[i])
					});
					$(itemTemplate).appendTo(imgsWrap);

					imgsArr.push(new Image());
					imgsArr[i].src = arr[i]["src"];
				 	
				    imgsArr[i].onload = function() {
				    //if(this.readyState==loaded || this.readyState==complete)
		    		//$(imgsArr[i]).bind('load',function(){
	    		        n++; //每加载完成一张图片就累加1;
				        if (n == imgsArr.length) {
				            dtd.resolve();
				        }
	    		    //}).bind('error',function(){  
	    		    	//$(itemTemplate).remove() ;
	    		    //});
				        
				    }
				}
				return dtd.promise();
			};
			//var j=1;
			//图片加载完成后执行
			$.when(loadImg()).done(function(){
				var widths = new Array();
				var heights = new Array();
				for(var i=0;i<imgsArr.length;i++){
					//$.each(imgItems,function(i){
					var imgs = imgsArr[i];
					widths[i] = imgs.width;
					heights[i] = imgs.height;
					//});
				}
				
				that.imgsArr = imgsArr;
				that.source = [widths,heights];//记录当前页面数据
				that.container = imgsWrap;//记录当前页面容器
				appendNode();	//加载到页面中
			});

			function appendNode(){
				var navlis = '';
				var k = 0;
				that.sameHeightLayout(that.source,that.container,that.bind);
				for(var i in that.data){
					navlis += '<li>'+ i +'</li>';
					var catogeries = $('<div class="imgsList"></div>');
					for(var j=0;j<that.data[i].length;j++){
						var itemTemplate = template({
									id: that.data[i][j]["id"],
									title: that.data[i][j]["title"],
									num:getCommentLen(that.data[i][j])
								});
						$(itemTemplate).appendTo(catogeries);
					}
					catogeries.appendTo(that.imgsContainer);
					k++;
					//catogery加载--未完成。。
					//that.sameHeightLayout(that.source,that.container,that.bind);
				}
				that.nav.append($(navlis));

			}
			
			this.showImg = function(num){
				if(typeof num == "number"){
					this.index = num;
				}
				var index = this.index;
				var winWidth = this.winWidth;
				var winHeight = this.winHeight;
				var winRatio = winWidth / winHeight;
				var imgRatio = this.source[0][index] / this.source[1][index];
				var offsetX = 0,offsetY = 0,imgX = winWidth,imgY = winHeight;
				var canvas = this.details.find('canvas');
				var cvs = canvas[0].getContext('2d');
				
				//渲染详细列表
				canvas[0].width = winWidth;
				canvas[0].height = winHeight;
				this.details.show();
				if(imgRatio > winRatio){
					offsetY = (winHeight - winWidth/imgRatio)/2;
					imgY = winWidth/imgRatio
				}else{
					offsetX = (winWidth - winHeight*imgRatio)/2;
					imgX = winHeight*imgRatio;
				}
				//画到canvas上
				cvs.drawImage(this.imgsArr[index],offsetX,offsetY,imgX,imgY);
				//隐藏滚动条
				//this.imgsContainer.addClass('overflow');
				this.details.find('.commentWrap').css({"width":imgX,"height":winHeight});//初始化评论列表
			}
			//显示评论
			this.showComment = function(){
				var commentContent = arr[this.index];
				var detailTitle = this.details.find('.detailTitle');
				var commentlis = '';
				detailTitle.html(commentContent['title']);//标题
				for(var i in commentContent['comment']){
					commentlis += '<li>'+ i + '  说：  ' + commentContent['comment'][i] +'</li>';
				}
				this.comments.append($(commentlis));

			}

			
		},
		sameHeightLayout:function(source,container,callback){	//source为图片原始宽高数组
			//处理参数
			if(!source && !container){
				source = this.source;
				container = this.container;
			}
			var that = this;
			var winWidth = $(window).width();
			//var imgsList = this.container.find('.imgsList');
			//得到所有imgItem单元
			var imgItems = container.find('.imgItem');
			var canvas = imgItems.find('canvas');
			this.winWidth = winWidth;
			$(function(){
				doSameHeightLayout();
			});
			function getItemHeight(){
				var iHeight = 0;
				var iWidth = winWidth;
				if(iWidth <= 360){
					iHeight = 100;
				}else if(iWidth <= 400){
					iHeight = 140;
				}else if(iWidth <= 480){
					iHeight = 150;
				}else if(iWidth <= 550){
					iHeight = 160;
				}else if(iWidth <= 640){
					iHeight = 170;
				}else if(iWidth <= 740){
					iHeight = 180;
				}else if(iWidth <= 800){
					iHeight = 190;
				}else if(iWidth <= 960){
					iHeight = 210;
				}else if(iWidth <= 1500){
					iHeight = 230;
				}else if(iWidth <= 1920){
					iHeight = 250;
				}else if(iWidth <= 2200){
					iHeight = 270;
				}else if(iWidth <= 2400){
					iHeight = 280;
				}else if(iWidth <= 2880){
					iHeight = 300;		
				}else if(iWidth <= 3280){
					iHeight = 320;
				}else{
					iHeight = 340;
				}
				return iHeight;
			}
			
			//var index = 1;
						
			//保存图片初始宽高
			/*var iniSize;
			function getWidthsAndHeight(){
				var widths = new Array();
				var heights = new Array();
				for(var i=0;i<imgItems.length;i++){
					//$.each(imgItems,function(i){
						var imgs = images.eq(i);
						widths[i] = imgs.width();
						heights[i] = imgs.height();
					//});
					
				}
				iniSize = [widths,heights];
				var tmpSize = iniSize.slice();//不污染原数组
				return tmpSize;
			}*/
						
			//调整主函数
			function doSameHeightLayout(){
				var sHeight = getItemHeight();
				//var bWidth = getContainerWidth();
				//var $container = getContainer();
				//var $items = getItems();
				var widthAry = source[0].slice();
				var heightAry = source[1].slice();
				var itemsLen = imgItems.length;
				var wrapBorder = 0;//容器边框
				var itemBorder = 1;//图片边框

				//记录每个图片转化后的高度
				for(var n = 0; n < itemsLen; n++){
					if(heightAry[n] != sHeight){
						widthAry[n] = Math.round(widthAry[n]*(sHeight/heightAry[n]));
						heightAry[n] = sHeight;
					}
				}
				container.find('.row').remove();//清楚旧容器
				var i = 0,j = 0,rowWidth = 0;
				var rowDivs = new Array();
				var rowSonsLen = new Array();
				var itemBorderArr = new Array();
				while(i < itemsLen){
					var rowDiv = $("<div></div>");
					rowDiv.attr("class","row");
					rowDiv.width(winWidth - 2*wrapBorder);
					rowSonsLen[j] = 0;
					for(i;i < itemsLen;i++){
						rowWidth += widthAry[i];
						rowDiv.append(imgItems[i]);
						rowSonsLen[j] += 1;
						itemBorderArr[i] = itemBorder;
						//装不下下一个图片则保存该行，然后继续下一行
					    if(i+1<itemsLen&&(rowWidth+i*itemBorder+widthAry[i+1])>(winWidth - 2*wrapBorder)){
						 	rowDivs[j++] = rowDiv;
						 	rowWidth = 0;
						 	itemBorderArr[i] = 0;
						 	i++;
					   		break;
						}else if(i+1==itemsLen){
							rowDivs[j] = rowDiv;
							itemBorderArr[i] = 0;
						}

					}
				}
				var rowDivsLen = rowDivs.length;
			 	//只有1行不做调整
	            if(rowDivsLen>1){
	                //计算调整后差距
	                var rowTotalWidth = 0;
	                var restAry = new Array();
	                var j = 0;//记录宽度数组下标
	                var maxLen = 0;
	                var containerWidth = winWidth - 2 * wrapBorder;
	                for(var i = 0 ; i < rowDivsLen ; i++){
	                    var k = j;
	                    var tmpContainerWidth = containerWidth - itemBorder*(rowSonsLen[i]-1);
	                    rowTotalWidth = 0;
	                    maxLen += rowSonsLen[i];
	                    for(j ; j < maxLen ; j++){
	                        rowTotalWidth += widthAry[j];
	                        //containerWidth -= itemBorder;
	                    }
	                    //比例=目标宽度/实际宽度=目标高度/实际高度
	                    //var rate = parseFloat(containerWidth/rowTotalWidth);
	                    var afterHeight = Math.round(parseFloat(sHeight*tmpContainerWidth/rowTotalWidth));
	                    heightAry[i] = afterHeight;
	                    restAry[i] = 0;
	                    //算出高度列表后再更新宽度列表
	                    for(k ; k < maxLen ; k++){
	                        widthAry[k] = Math.round(parseFloat(widthAry[k]*afterHeight/sHeight));
	                        restAry[i] += widthAry[k];//调整后宽度
	                    }
	                    restAry[i] += itemBorder*(rowSonsLen[i]-1)
	                }

					//调整最后间距
					var gap = 0;//间距值
					var acIndex = 0;
					for (var i = 0; i < rowDivsLen; i++) {
						gap = containerWidth - restAry[i];
						//小于容器宽度
						if(gap > 0){
							while(gap!=0){
								var j = 0;
								widthAry[acIndex+j] = widthAry[acIndex+j] + 1;
								gap--;
								j = (j + 1 + rowSonsLen[i]) % rowSonsLen[i];
							}
						}
						//大于容器宽度
						else if(gap < 0){
							while(gap!=0){
								var j = 0;
								widthAry[acIndex+j] = widthAry[acIndex+j] - 1;
								gap++;
								j = (j + 1 + rowSonsLen[i]) % rowSonsLen[i];
							}
						}
						acIndex += rowSonsLen[i];
					};			
				}
				//把宽度和高度列表赋予图片
				var i = 0 , j = 0;
				//$.each(imgItems,function(key,val){
				for(var key = 0;key<imgItems.length;key++){
					var itemKey = imgItems.eq(key);
					itemKey.css({"width":widthAry[key],"height":heightAry[i],"margin":"0 "+itemBorderArr[key]+"px "+itemBorder+"px 0"});

					//var $img = itemKey.find("img");
					var cvs = canvas[key].getContext('2d');
					canvas[key].width = widthAry[key];
					canvas[key].height = heightAry[i];
					cvs.drawImage(that.imgsArr[key],0,0,widthAry[key],heightAry[i]);
					if(j<rowSonsLen[i]-1){
						j++;
					}else{
						i++;
						j=0;
					}
				}
				//});
				container.css("padding",wrapBorder);
				container.append(rowDivs);

			};
			if(typeof callback != "undefined")
        	callback(that);// 执行bind回调函数	

		},
		bind:function(that){
			var _that = that;
			
			//var imgItems = _that.container.find('.imgItem');
			var commentWrap = _that.details.find('.commentWrap');

			$(window).resize(function(){
			    _that.sameHeightLayout();
			    if(typeof _that.index == "number"){
			    	_that.showImg();
			    }
			    
			});
			//导航切换
			//$.each(lis,function(index, el){
			setTimeout(function(){
				var lis = _that.nav.find('li');
				_that.nav.delegate('li','click',function (event){
					for(var i in lis){
						if(lis[i] == this){
							break;
						}
					}
					navTab(i,this);
				});
			},1000);
			
			//});
			//点击图片
			var scrollTopCur = 0;//保存当前滚动条
			//$.each(imgItems,function(index,el){
				_that.container.delegate('.imgItem','click',function (event){
					var index = event.target.id - 1;
					indexParent = event.target.parentNode;
					_that.showImg(index);//index保存当前图片编号
					_that.showComment();
					saveScroll(indexParent);
				});
			//});
			//滚动
			$(window).bind('scroll',function(event){
				if(typeof _that.index == "number"){
					//$('body').scrollTop(Math.floor(scrollTopCur));
					commentWrap.css("transform","translate3d(0,-"+ ($('body').scrollTop()*0.5) +"px,0)");
					//document.title =  $('body').scrollTop();
				}
			});
			//退出图片详情
			$(window).bind('keydown',function (event){
			    if(event.keyCode == "27" && typeof _that.index == "number") {
			        _that.details.hide();
			        _that.index = false;	//退出清零图片编号
			        $('body').scrollTop(scrollTopCur);
			    }
		 	});

			function navTab(index,el){
				var imgsList = _that.imgsContainer.find('.imgsList');
				$(el).addClass('current').siblings('li').removeClass('current');
				imgsList.eq(index).addClass('current').siblings('.imgsList').removeClass('current');
			}
			function saveScroll(el){
				scrollTopCur = $('body').scrollTop();
				$('body').scrollTop(0);
				$(el).data('scrollVal',scrollTopCur);
			}
		}
	};
	return {Imgs:Imgs};
});


















