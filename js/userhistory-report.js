$(function(){
	$(".export").on("click",function(){
		$(".time-overlay").show();
		$("body").css({
			'overflow':'hidden'
		})
	});
	$(".time-overlay .close").on("click",function(){
		$(".time-overlay").hide();
		$("body").css({
			'overflow':'scroll'
		})
	});
	$(".export-overlay .close").on("click",function(){
		$(".export-overlay").hide();
//	});
//	$(".aside-ul .li").eq(5).find('ul').show();
//  $(".aside-ul .li").eq(5).find('span').addClass('selected');
//  $(".aside-ul .li").eq(5).find('img').attr('src','img/left-fanhui.png');
//  $(".aside-ul .li").eq(5).find('li').addClass('active');
})
