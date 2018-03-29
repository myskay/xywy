$(function(){
	var demo=$(".check-form").Validform({
	            	tiptype:4,
	            	showAllError:true,
		            beforeSubmit:function(curform){
			            console.log($(":submit"));
			            $(":submit",this).attr("disabled","disabled");  
		             },
	            });
//	新增用户关联人的弹窗
	$(".add-person button").on("click",function(){
		$(".addabout-overlay").show();
		$("body").css({
			'overflow':'hidden'
		});
	});
	$(".addabout-overlay .close").on("click",function(){
		$(".addabout-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		})
	});
//	重置密码的弹窗
    $(".xiugai-pwd").on("click",function(){
    	$(".reset-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".reset-overlay .close").on("click",function(){
    	$(".reset-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
    $(".reset-overlay input[type='reset']").on("click",function(){
    	$(".reset-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
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
//  修改用户关联人的弹窗
   $(".revise-about").on("click",function(){
    	$(".reviseabout-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".reviseabout-overlay .close").on("click",function(){
    	$(".reviseabout-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
})
