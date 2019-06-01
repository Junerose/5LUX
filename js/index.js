//AMD规范
/*
	确定依赖的模块
	jquery jquery-cookie  抛物线
*/

define(['jquery', "jquery-cookie"], function($){
	function index(){
		$(function(){

			// sc_num();


			$.ajax({
				url: "../data/goods_list.json",
				success: function(arr){
					//通过循环，将数据添加到我们的页面上
					for(var i = 0; i < arr.length; i++){
						
						$(`<li>
							<div class="menu_show_nav"><i class="iconfont">${arr[i].iconfont}</i><span>${arr[i].title}</span></div>
							<div class="menu_show">
								
							</div>

						</li>`).appendTo($(".goods_category_list"));
						

					}
					for(var i = 0; i < arr.length; i++){
						for(var j = 0; j < arr[i].content.length;j++){
							$(`<div class="menu_show_right">
									<h2>${arr[i].content[j].title}</h2>
									
								</div>`).appendTo($(".menu_show"));
							for(var m = 0; m < arr[i].content[j].text.length; m++){
								$(`<div class="menu_show_list">
										<a href="">${arr[i].content[j].text[m]}</a>
										
									</div>`).appendTo($(".menu_show_right"));
								}
						}
					}
					for(var i = 0; i < arr.length; i++){
						
					}
					
					
				},
				error: function(msg){
					alert("请求错误：" + msg);
				}
			})
			$(".menu_show").css("display","none")
			$(".menu_show_nav").on("mouseover",function(){
				$(".menu_show").css("display","inline-block")
			})
			// $("").mousemove(function(){
			// 	
			// })
			
			/*
				给右侧购物车，添加移入移出
				mouseover mouseout
				mouseenter  mouseleave  JQ的官方函数
			*/
			//右侧购物车
			$(function(){
				var isYes = false;
				$(".cart_right_pic_up_package").click(function(){
					if(!isYes){
						$(".cart_right").stop().animate({right:0},300,function(){
							isYes = true;
						})
						
					}
					if(isYes){
						$(".cart_right").stop().animate({right:-269},300,function(){
							isYes = false;
						})
						
					}
				})
			})

		})
	}
	return {
		index: index
	}
})