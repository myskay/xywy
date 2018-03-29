$(function(){
//	新增设备弹窗
	$(".add-device").on("click",function(){
		$(".adddevice-overlay").show();
		$("body").css({
			'overflow':'hidden'
		});
	});
	$(".adddevice-overlay .close").on("click",function(){
		$(".adddevice-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		});
	});
	$(".adddevice-overlay input[type='reset']").on("click",function(){
		$(".adddevice-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		});
	});
//	查看设备弹窗
   $(".see-device").on("click",function(){
   	$(".checkdevice-overlay").show();
   	$("body").css({
			'overflow':'hidden'
		});
   });
   $(".checkdevice-overlay .close").on("click",function(){
   	$(".checkdevice-overlay").hide();
   	$("body").css({
			'overflow':'scroll'
		});
   });
// 修改设备弹窗
   $(".xiugai-device").on("click",function(){
   	$(".revisedevice-overlay").show();
   	$("body").css({
			'overflow':'hidden'
		});
   });
   $(".revisedevice-overlay .close").on("click",function(){
   	$(".revisedevice-overlay").hide();
   	$("body").css({
			'overflow':'scroll'
		});
   });
    $(".revisedevice-overlay input[type='reset']").on("click",function(){
   	$(".revisedevice-overlay").hide();
   	$("body").css({
			'overflow':'scroll'
		});
   })
})
