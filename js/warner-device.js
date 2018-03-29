$(function(){
	$(".aside-ul .li").eq(1).find('ul').show();
	$(".warner").on("click",function(){
		$(".warner-overlay").show();
		$("body").css({
			'overflow':'hidden'
		});
	});
	$(".warner-overlay .close").on("click",function(){
		$(".warner-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		});
	});
	$(".warner-overlay button").on("click",function(){
		$(".warner-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		});
	})
})
