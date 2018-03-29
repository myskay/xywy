$(function(){
	    $(".selected").siblings().show();
//	    新增体检表的弹窗
    $(".test-table button").on("click",function(){
    	$(".test-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	$(".test-overlay").css({
    		'overflow-x':'hidden',
    		'overflow-y':'auto'
    	});
    	return false;
    });
    $(".test-overlay .close").on("click",function(){
    	$(".test-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	});
    });
    var demo=$(".check-form").Validform({
	    tiptype:4,
	    showAllError:true,
		beforeSubmit:function(curform){
			 console.log($(":submit"));
			 $(":submit",this).attr("disabled","disabled");  
		},
	});
//	查看体检表的弹窗
    $(".check-test").on("click",function(){
    	$(".checktest-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	$(".checktest-overlay").css({
    		'overflow-x':'hidden',
    		'overflow-y':'auto'
    	});
    });
    $(".checktest-overlay .close").on("click",function(){
    	$(".checktest-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	});
    });
//  修改体检表的弹窗
    $(".revise-test").on("click",function(){
    	$(".revisetest-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	$(".revisetest-overlay").css({
    		'overflow-x':'hidden',
    		'overflow-y':'auto'
    	});
    });
    $(".revisetest-overlay .close").on("click",function(){
    	$(".revisetest-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	})
    })
})