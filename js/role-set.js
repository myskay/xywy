$(function(){
	$(".li div i").on('click',function(){
		if($(this).parent('div').siblings('ul').css('display') == 'none'){
			$(this).parent('div').removeClass('shouqi');
			$(this).parent('div').addClass('xiala');
			$(this).parent().siblings('ul').slideDown(200).children('li');
			if($(this).parents('li').siblings('li').children('ul').css('display') == 'block'){
				$(this).parents('li').siblings('li').children('ul').slideUp(200);
				$(this).parents('li').siblings('li').children('div').removeClass('xiala');
				$(this).parents('li').siblings('li').children('div').addClass('shouqi');
			}
			
		}else{
			$(this).parent().removeClass('xiala');
			$(this).parent().addClass('shouqi');
			$(this).parent('div').siblings('ul').slideUp(200);
			$(this).siblings('ul').children('li').children('ul').parent('li').children('div').addClass('shouqi');
			$(this).siblings('ul').children('li').children('ul').slideUp(200);
			$(this).siblings('ul').children('li').children('div').addClass('shouqi');
		}
	});
	$(".aside-ul .li").eq(1).addClass('active');
	$(".aside-ul .li").eq(1).find('span').addClass('selected');
	$(".aside-ul .li").eq(1).find('ul').show();
	$(".aside-ul .li").eq(1).find('ul').children('li').addClass('active');
	$(".li-inner div input[type='checkbox']").on("click",function(){
		$(this).parent('div').siblings('ul').children('.li').find('input').prop('checked',$(this).prop('checked'));


	});
	function checkyesornot(obj){
        var checkedlength = [];
        for(k in obj){
        	if(obj[k].checked){
        		checkedlength.push(obj[k].value);
        	}
        };
		if(checkedlength.length > 0){
			$(obj).parents('ul').siblings('div').find('input').prop('checked',true);
		}else{
			$(obj).parents('ul').siblings('div').find('input').prop('checked',false);
		}
	};
	var frist = $(".frist");
	$(".frist").on("click",function(){
		checkyesornot(frist);
	});
	
	$(".second").on("click",function(){
		var checkedlength = [];
		var second = $(this).parents('.second-ul').find(".second");
		for(k in second){
			if(second[k].checked){
				checkedlength.push(second[k].value);
			}
		};
		if(checkedlength.length > 0){
			$(".first-div input").prop('checked',true);
			second.parents('.second-ul').siblings('div').find('input').prop('checked',true);
		}else{
			second.parents('.second-ul').siblings('div').find('input').prop('checked',false);
		}
	});
	$(".three").on("click",function(){
		var checkedlength = [];
		var threejihe = $(this).parents('.second-ul').find(".three");
		for(k in threejihe){
			if(threejihe[k].checked){
				checkedlength.push(threejihe[k].value);
			}
		};
		if(checkedlength.length > 0 ){
			$(".first-div input").prop('checked',true);
			$(this).parents('.second-ul').siblings('div').find('input').prop('checked',true);
			$(this).parents('.three-ul').prev('div').find('input').prop('checked',true);
		}else{
			$(this).parents('.second-ul').siblings('div').find('input').prop('checked',false);
			$(this).parents('.three-ul').siblings('div').find('input').prop('checked',false);
		}
	})
	
	
	
});
