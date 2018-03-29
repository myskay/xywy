$(function(){
	$(".aside-ul .li").eq(1).find('ul').show();
	var demo=$(".check-form").Validform({
	            	tiptype:4,
	            	showAllError:true,
		            beforeSubmit:function(curform){
			            console.log($(":submit"));
			            $(":submit",this).attr("disabled","disabled");  
		             },
	 });
//	 新增客服的弹窗
    $(".add-service").on("click",function(){
    	$(".service-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	$(".service-overlay").css({
    		'overflow-x':'hidden',
    		'overflow-y':'auto'
    	});
    });
    $(".service-overlay .close").on("click",function(){
    	$(".service-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	})
    });
//  查看客服的弹窗
    $(".check-service").on("click",function(){
    	$(".checkservice-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    });
    $(".checkservice-overlay .close").on("click",function(){
    	$(".checkservice-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	});
    });
//  修改客服的弹窗
    $(".revise-service").on("click",function(){
    	$(".reviseservice-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".reviseservice-overlay .close").on("click",function(){
    	$(".reviseservice-overlay").hide();
    	$("body").css({
    		'overflow':'auto'
    	})
    })
})
