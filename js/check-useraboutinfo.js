$(function(){
	$(".main-title a").eq(0).addClass('active');
	//  查看挂钩者服务信息弹窗
    $(".check-disease").on("click",function(){
    	$(".checkdisease-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    });
    $(".checkdisease-overlay .close").on("click",function(){
    	$(".checkdisease-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
})
