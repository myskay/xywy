$(function(){
	$(".main-title a").eq(0).addClass('active');
	//	查看药物明细弹窗
    $(".check-trauma").on("click",function(){
    	$(".checktrauma-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    });
    $(".checktrauma-overlay .close").on("click",function(){
    	$(".checktrauma-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
    //  查看养生用品弹窗
    $(".check-hospital").on("click",function(){
    	$(".checkhospital-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    });
    $(".checkhospital-overlay .close").on("click",function(){
    	$(".checkhospital-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
})
