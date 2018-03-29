$(function(){
	$(".selected").siblings().show();
//	新增药物明细弹窗
	$(".trauma-table button").on("click",function(){
		$(".trauma-overlay").show();
		$("body").css({
			'overflow':'hidden'
		});
		return false;
	});
	$(".trauma-overlay .close").on("click",function(){
		$(".trauma-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		})
	});
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
//  修改药物明细弹窗
    $(".revise-trauma").on("click",function(){
    	$(".revisetrauma-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".revisetrauma-overlay .close").on("click",function(){
    	$(".revisetrauma-overlay").hide();
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
//	新增养生用品弹窗
    $(".hospital-table button").on("click",function(){
    	$(".hospital-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	});
    	return false;
    });
    $(".hospital-overlay .close").on("click",function(){
    	$(".hospital-overlay").hide();
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
//  修改养生用品弹窗
    $(".revise-hospital").on("click",function(){
    	$(".revisehospital-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".revisehospital-overlay .close").on("click",function(){
    	$(".revisehospital-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    })
    
})