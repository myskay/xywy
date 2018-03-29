$(function(){
	$(".file-overlay span").on("click",function(){
			$(this).parent('div').siblings('div').find('.img1').attr('src','img/add-img.png');
			$(this).parent('div').siblings('div').find('.doc').value = '';
	});
//	左侧菜单栏的点击后效果
   $('.aside-ul .li a').each(function () {
                if ($($(this))[0].href == String(window.location)){
                    $(this).parents("li").addClass('active');
                    $(this).find('img').attr('src','img/left-fanhui.png');
                    $(this).parent('li').siblings('li').find('img').attr('src','img/heisefanhui.png');
                    }
      });
});
