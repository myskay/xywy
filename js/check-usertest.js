$(function(){
	 $(".selected").siblings().show();
	 $(".selected").siblings().find('li').eq(0).addClass('active');
	 $(".main-title a").eq(0).addClass('active');
//	 查看体检表的弹窗
    $(".check-test").on("click",function(){
    	$(".checktest-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	$(".checktest-overlay").css({
    		'overflow-x':'hidden',
    		'overflow-y':'auto'
    	})
    });
    $(".checktest-overlay .close").on("click",function(){
    	$(".checktest-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	})
    })
})