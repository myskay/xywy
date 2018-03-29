$(function(){
	var stop = true;
	var reg_tel = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[0|1|2|3|5|6|7|8|9]|17[0|6|7|8]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
	var check = function(){
		var tel = $(".tel-box").val().trim();
		var pwd = $(".pwd").val().trim();
		var yzm = $(".test-code").val().trim();
		var alert_box = $(".alert-box");
		if(!reg_tel.test(tel)){
			alert_box.text('手机格式不正确');
			return false;
		}else if(pwd.length < 6 || pwd.length > 16){
			alert_box.text('密码格式不正确');
			return false;
		}else if(yzm == ''){
			alert_box.text('验证码不能为空');
			return false;
		}
		alert_box.text('');
		
	}
	$(".login").on('click',check);
})
