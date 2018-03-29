$(function(){
//	推送弹窗
    $("#tuisong").on("click",function(){
    	$(".msg-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".msg-overlay .close").on("click",function(){
    	$(".msg-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
//  查看推送弹窗
    $(".check-tuisong").on('click',function(){
    	$(".check-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".check-overlay .close").on("click",function(){
    	$(".check-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
})
