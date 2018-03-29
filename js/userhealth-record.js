$(function(){
	$(".selected").siblings().show();
	var demo=$(".check-form").Validform({
	    tiptype:4,
	    showAllError:true,
		beforeSubmit:function(curform){
			 console.log($(":submit"));
			 $(":submit",this).attr("disabled","disabled");  
		},
	});
//	新增疾病的弹窗        
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
// 查看疾病的列表
   $(".check-disease").on("click",function(){
   	$(".checkdisease-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkdisease-overlay .close").on("click",function(){
   	$(".checkdisease-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改疾病的弹窗
   $(".revise-disease").on("click",function(){
   	$(".revisedisease-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".revisedisease-overlay .close").on("click",function(){
   	$(".revisedisease-overlay").hide();
   	$("body").css({
   		'overlfow':'scroll'
   	})
   });
// 新增手术的弹窗
   $(".ops-table button").on("click",function(){
   	$(".ops-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	});
   	return false;
   });
   $(".ops-overlay .close").on("click",function(){
   	$(".ops-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 查看手术的弹窗
   $(".check-ops").on("click",function(){
   	$(".checkops-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkops-overlay .close").on("click",function(){
   	$(".checkops-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改手术的弹窗
   $(".revise-ops").on("click",function(){
   	$(".reviseops-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".reviseops-overlay .close").on("click",function(){
   	$(".reviseops-overlay").hide();
   	$("body").css({
   		'overlfow':'scroll'
   	})
   });
// 新增外伤的弹窗
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
//查看外伤的弹窗
   $(".check-trauma").on("click",function(){
   	$(".checktrauma-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checktrauma-overlay .close").on("click",function(){
   	$(".checktrauma-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改外商的弹窗
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
// 新增输血的弹窗
   $(".blood-table button").on("click",function(){
   	 $(".blood-overlay").show();
   	 $("body").css({
   	 	'overflow':'hidden'
   	 });
   	 return false;
   });
   $(".blood-overlay .close").on("click",function(){
   	$(".blood-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 查看输血的弹窗
   $(".check-blood").on("click",function(){
   	$(".checkblood-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkblood-overlay .close").on("click",function(){
   	$(".checkblood-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改输血的弹窗
   $(".revise-blood").on("click",function(){
   	$(".reviseblood-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".reviseblood-overlay .close").on("click",function(){
   	$(".reviseblood-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 新增家族史的弹窗
   $(".family-table button").on("click",function(){
   	$(".family-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	});
   	return false;
   });
   $(".family-overlay .close").on("click",function(){
   	$(".family-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 查看家族史的弹窗
   $(".check-family").on("click",function(){
   	$(".checkfamily-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkfamily-overlay .close").on("click",function(){
   	$(".checkfamily-overlay").hide();
   	$("body").css({
   		'overlfow':'scroll'
   	})
   });
// 修改家族史的弹窗
   $(".revise-family").on("click",function(){
   	$(".revisefamily-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".revisefamily-overlay .close").on("click",function(){
   	$(".revisefamily-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 新增遗传史的弹窗
   $(".history-table button").on("click",function(){
   	$(".history-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	});
   	return false;
   });
   $(".history-overlay .close").on("click",function(){
   	$(".history-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 查看遗传史的弹窗
   $(".check-history").on("click",function(){
   	$(".checkhistory-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkhistory-overlay .close").on("click",function(){
   	$(".checkhistory-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改遗传史的弹窗
   $(".revise-history").on("click",function(){
   	$(".revisehistory-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".revisehistory-overlay .close").on("click",function(){
   	$(".revisehistory-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 新增就诊的弹窗
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
// 查看就诊的弹窗
   $(".check-hospital").on("click",function(){
   	$(".checkhospital-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	})
   });
   $(".checkhospital-overlay .close").on("click",function(){
   	$(".checkhospital-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
// 修改就诊的弹窗
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
   });
// 新增药物过敏史的弹窗
   $(".drug-table button").on("click",function(){
   	$(".drug-overlay").show();
   	$("body").css({
   		'overflow':'hidden'
   	});
   	return false;
   });
   $(".drug-overlay .close").on("click",function(){
   	$(".drug-overlay").hide();
   	$("body").css({
   		'overflow':'scroll'
   	})
   });
})