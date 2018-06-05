$(function(){
	var reg_tel = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|17[0|3|6|7|8]|18[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
	$(".check-form").submit(function(){
		var birth;
	 	var phone = $("#phone").val().trim(),
	 	    age = $("#age").val().trim(),
	 	    birth = $("#birth").val().trim(),
	 	    tip = $("#tip"),
	 	    idcard = $("#idcard").val().trim();
	 	if(phone == ''){
            $("#phone").siblings('span').text('手机号码不能为空');
	 		return false;
	 	}else if(!reg_tel.test(phone)){
	 		alert('请正确填写手机号码');
	 		return false;
	 	}else if(idcard != ''){
	 		if(isIdCardNo(idcard)){
	 			if(age != '' ){
	 				if(getAge(idcard) != age){
	 					alert('您的身份证号与年龄不符');
	 					return false;
	 				}
	 			}else if(birth != ''){
	 				if(getBirth(idcard) != birth){
	 					alert('您的身份证号与出生日期不符');
	 					return false;
	 				}
	 			}
	 		}else{
	 			return false;
	 		}
	 		
	 	}
	})
//	 通过身份证号得到出生日期
	 function getBirth(IdNo){
	 	var tempStr = "";
	 	if(IdNo.length == 15){
	 		tempStr = IdNo.substring(6,12);
	 		tempStr = "19"+tempStr;
	 		tempStr = tempStr.substring(0,4)+"-"+tempStr.substring(4,6)+"-"+tempStr.substring(6);
	 		return tempStr;
	 	}else{
	 		tempStr = IdNo.substring(6,14);
	 		tempStr = tempStr.substring(0,4)+"-"+tempStr.substring(4,6)+"-"+tempStr.substring(6);
	 		return tempStr;
	 	}
	 }
//	 通过身份证号得出年龄
     function getAge(IdNo){
     	var myDate = new Date();
     	var mybirth = IdNo.substring(6,14).substring(0,4);
     	var myage = parseInt(myDate.getFullYear() - mybirth);
     	return myage;
     }
//	 判断身份证号的正确性
	     function isIdCardNo(num) {    
        num = num.toUpperCase();           //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。         
        if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {      
            //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');               
            alert('身份证号长度不正确或不符合规定！');               
            return false;          
        }   
        //验证前2位，城市符合  
        var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};  
        if(aCity[parseInt(num.substr(0,2))]==null){  
            alert('身份证号不正确或不符合规定！');  
            return false;  
        }  
        //alert('城市:'+aCity[parseInt(num.substr(0,2))]);  
          
        //下面分别分析出生日期和校验位  
        var len, re; len = num.length;   
        if (len == 15) {  
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);  
            var arrSplit = num.match(re);  //检查生日日期是否正确  
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);  
            var bGoodDay; bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));  
            if (!bGoodDay) {          
                alert('身份证号的出生日期不对！');             
                return false;  
            } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。         
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);          
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');       
                var nTemp = 0, i;             
                num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);            
                for(i = 0; i < 17; i ++) {                  
                    nTemp += num.substr(i, 1) * arrInt[i];         
                }  
                num += arrCh[nTemp % 11];  
                return true;  
            }  
        }  
        if (len == 18) {  
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);  
            var arrSplit = num.match(re);  //检查生日日期是否正确  
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);  
            var bGoodDay; bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));  
            if (!bGoodDay) {  
                //alert(dtmBirth.getYear());  
                //alert(arrSplit[2]);  
                alert('身份证号的出生日期不对！');  
                return false;  
            }  
            else { //检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。  
                var valnum;  
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);  
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');  
                var nTemp = 0, i;  
                for(i = 0; i < 17; i ++) {  
                    nTemp += num.substr(i, 1) * arrInt[i];  
                }  
                valnum = arrCh[nTemp % 11];  
                if (valnum != num.substr(17, 1)) {  
                    //alert('18位身份证的校验码不正确！应该为：' + valnum);  
                    alert('18位身份证号的校验码不正确！');  
                    return false;  
                }  
                return true;  
            }  
        } return false;  
      
    }  
	
//	 判断身份证号的正确性结束
})
