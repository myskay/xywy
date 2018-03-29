$(function(){
	$(".selected").siblings().show();
//	新增挂钩服务者信息的弹窗
    $(".disease-table button").on("click",function(){
    	$(".disease-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	return false;
    });
    $(".disease-overlay .close").on("click",function(){
    	$(".disease-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
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
//  修改挂钩者服务信息弹窗
   $(".revise-disease").on("click",function(){
   	$(".revisedisease-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".revisedisease-overlay .close").on("click",function(){
   	$(".revisedisease-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
   var demo=$(".check-form").Validform({
	    tiptype:4,
	    showAllError:true,
		beforeSubmit:function(curform){
			 console.log($(":submit"));
			 $(":submit",this).attr("disabled","disabled");  
		},
	});
    
})