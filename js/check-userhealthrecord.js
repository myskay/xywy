$(function(){
	$(".main-title a").eq(0).addClass('active');
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
})
