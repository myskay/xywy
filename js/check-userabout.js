$(function(){
	//  查看用户关联人的弹窗
    $(".check-about").on("click",function(){
    	$(".checkabout-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".checkabout-overlay .close").on("click",function(){
    	$(".checkabout-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
    $(".main-title a").eq(0).addClass('active');
})
