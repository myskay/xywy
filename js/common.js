function getObjectURL(file){
		var url = null;
		if(window.createObjectURL != undefined){
			url = window.createObjectURL(file);
		}else if(window.URL != undefined){
			url = window.URL.createObjectURL(file);
		}else if(window.webkitURL != undefined){
			url = window.webkitURL.createObjectURL(file);
		}
		return url;
}
$(function(){
//	换图片的定时器
    function changeImg(){
    	var warnerImg = $(".warner-box img");
    	if(warnerImg.attr('src') == 'img/warner (2).png'){
    		warnerImg.attr('src','img/图层-0.png');
    	}else{
    		warnerImg.attr('src','img/warner (2).png');
    	}
    }
    setInterval(changeImg,500);
//	搜索框
	$("#search-box").on("click",function(){
		$(".sb-search").show();
		$(".search").hide();
	});
	$(".sb-icon-search").on("click",function(){
		$(".sb-search").hide();
		$(".search").show();
	});
//	点击切换头像
	$(".doc").on("change",function(){
			    var srcs = getObjectURL(this.files[0]);
				$(this).siblings(".img1").attr("src",srcs);
			    $(".form-bottom").show();
			    var image = new Image();
			    image.src = srcs;
			    image.onload = function(){
			    	var width = image.width;
			    	var height = image.height;
			    	var bv = (width/height).toFixed(2) ;
			    }
			
	});
//	头像的下拉框
	$(".header-personal").hover(function(){
		$(this).find('ul').slideDown(200);
	  }, function(){
	     $(this).find('ul').slideUp(100);   	
	    }
	);
//	修改密码弹窗
    $(".gaimima").on("click",function(){
    	$(".revise-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".revise-overlay .close").on("click",function(){
    	$(".revise-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
//  退出登录弹窗
    $(".quit").on("click",function(){
    	$(".quit-overlay").show();
    	$("body").css({
    		'overflow':'hidden'
    	})
    });
    $(".quit-overlay .close").on("click",function(){
    	$(".quit-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
    $(".quit-overlay .sure").on("click",function(){
    	location.href = 'login.html';
    });
    $(".quit-overlay .cancel").on("click",function(){
    	$(".quit-overlay").hide();
    	$("body").css({
    		'overflow':'scroll'
    	})
    });
//  导航栏点击之后添加样式
     $(".header-nav li a").each(function(){  
        $this = $(this);  
        if($this[0].href==String(window.location)){  
        	$this.addClass("active");
        }  
    });  
// 左侧菜单栏的手风琴效果
            
            $(".li .li-title").on('click',function(){
                    if($(this).siblings('ul').css('display') == 'none'){
                    	$(this).addClass('selected');
                    	$(this).parent().siblings().find('span').removeClass('selected');
                    	$(this).find('img').attr('src','img/left-fanhui.png');
                    	$(this).parent().siblings().find('img').attr('src','img/heisefanhui.png');
                    	$(this).siblings().show();
                    	$(this).parent().siblings().children('ul').hide();
                    }else{
                    	$(this).find('img').attr('src','img/heisefanhui.png');
                    	$(this).removeClass('selected');
                    	$(this).siblings().hide();
                    	$(this).parent().siblings().children('ul').hide();
                    }
	    		})
//  为首页导航栏选中页面a增加样式
//     $('.header-nav li a').each(function () {
//              if ($($(this))[0].href == String(window.location)){
//                  $(this).addClass('active');
//                  }
//          });
//    为左侧列表当前页面增加样式
       $('.aside-ul .li a').each(function () {
                if ($($(this))[0].href == String(window.location)){
                    $(this).parents("li").addClass('active');
//                  $(this).parents('ul').find('img').attr('src','img/heisefanhui.png');
//                  $(this).siblings('img').attr('src','img/left-fanhui.png');
                    }
      });
      $(".main-title a").each(function(){
      	   if ($($(this))[0].href == String(window.location)){
                    $(this).addClass('active');
            }
      });
      $(".content-wrap main ul li a").each(function(){
      	if ($($(this))[0].href == String(window.location)){
                    $(this).parent('li').addClass('active');
            }
      })
})
