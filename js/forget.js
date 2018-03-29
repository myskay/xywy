$(function(){
//	password的显示与隐藏
	$(" #showhidePwd").on("click",function(){
		$(this).addClass("active");
			$(".login-pwd").css({
				'display':'none'
			});
			$(".login-text").css({
				'display':'block'
			});
			$("#pwd2").val($("#pwd1").val());
	});
	$(" #hideshowPwd").on("click",function(){
		$(".login-text").css({
				'display':'none'
			});
			$(".login-pwd").css({
				'display':'block'
			});
			$("#pwd1").val($("#pwd2").val());
	})
//	表单验证
    var stop = true;
    var reg_tel = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|17[0|6|7|8]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
    var timer = function(){
    	if($("#send").hasClass("active")){
    		$("#send").removeClass("active");
    	}
    	stop = false;
    	var m1 = function(){
    		if(last_time < 0){
    			if(!$("#send").hasClass('active')){
    				$("#send").addClass("active");
    			}
    			time_box.text('发送');
    			stop = true;
    			clearInterval(time_interval);
    			return false;
    		}
    		time_box.text('重新发送('+last_time+')');
    		last_time --;
    	}
    	var time_box = $("#send");
    	var last_time = 60;
    	m1();
    	var time_interval = setInterval(m1,1000);
    }
    var check = function(){
    	var tel = $("#tel-box").val().trim();
    	var pwd = $("#pwd1").val().trim();
    	var alert_box = $(".alert-box");
    	alert_box.text('');
    	if(!reg_tel.test(tel)){
    		alert_box.text('手机格式不正确');
    		return false;
    	}
    	alert_box.text('');
    	if(stop){
    		$.ajax({
    			type:"post",
    			url:"",
    			async:true,
    			data:{},
    			dataType:'json',
    			success:function(data){
    				if(data.status == 1){
    					timer();
    					$(".code-alert").addClass('show');
    					setTimeout(function(){
    						$(".code-alert").removeClass('show');
    					},2000)
    				}else{
    					$(".code-alert").addClass('show');
    					setTimeout(function(){
    						$(".code-alert").removeClass('show');
    					},2000)
    				}
    			}
    		});
    	}else{
    		return;
    	}
    	var check1 = function(){
    		var code = $("#code-box").val().trim();
    		var code_sever;
    		alert_box.text('');
    		if(code == ''){
    			alert_box.text('短信验证码不能为空');
    			return false;
    		}else if(code != code_sever){
    			alert_box.text('短信验证码错误，请点击重新发送');
    			return false;
    		}else if(pwd.length < 6 || pwd.length > 16){
    			alert_box.text('密码格式不正确');
    			return false;
    		}
    		alert_box.text('');
    	}
    	$(".login").on("click",check1);
    }
    $("#send").on("click",check);
})
