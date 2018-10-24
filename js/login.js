
//登录按钮
$(function(){
	var $btn=$(".outBox .btn");
	$($btn).on("mouseenter",function(){
		$(this).css("opacity",0.7);
	});
	$($btn).on("mouseleave",function(){
		$(this).css("opacity",1);
	});
});
//a标签
$(function(){
	var $btn=$(".outBox>form>a");
	$($btn).on("mouseenter",function(){
		$(this).css("opacity",0.7);
	});
	$($btn).on("mouseleave",function(){
		$(this).css("opacity",1);
	});
});
