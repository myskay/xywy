$(function(){
	$(".reset-mima").on("click",function(){
		$(".reset-overlay").show();
	});
	$(".reset-overlay .close").on("click",function(){
		$(".reset-overlay").hide();
	});
	var demo=$(".check-form").Validform({
	     tiptype:4,
	     showAllError:true,
		 beforeSubmit:function(curform){
			   console.log($(":submit"));
			$(":submit",this).attr("disabled","disabled");  
		 },
	});
	
})
