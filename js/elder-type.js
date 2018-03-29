$(function(){
//	新增老人类别的弹窗
	$(".elder-btn button").on("click",function(){
		$(".addelder-overlay").show();
		$("body").css({
			'overflow':'hidden'
		})
	});
	$(".addelder-overlay .close").on("click",function(){
		$(".addelder-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		})
	});
//	查看老人类别弹窗
    $(".check-elder").on("click",function(){
    	$(".checkelder-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".checkelder-overlay .close").on("click",function(){
    	$(".checkelder-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
//  修改老人类别弹窗
    $(".revise-elder").on("click",function(){
    	$(".reviseelder-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    });
    $(".reviseelder-overlay .close").on("click",function(){
    	$(".reviseelder-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    })
})
