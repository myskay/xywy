$(function(){
	new PCAS("province3","city3","area3");
			$(".aside-ul .li").eq(3).find('ul').show();
			$(".aside-ul .li").eq(3).find('span').addClass('selected');
			$(".aside-ul .li").eq(3).find('img').attr('src','img/left-fanhui.png');
			var mychart = echarts.init(document.getElementById("main"));
			mychart.setOption({
				title:{
					text:'用户意见反馈类型统计',
					left:'center',
				},
				tooltip:{
					show:false,
					trigger:'item',
					formatter:"{b}:{c}({d}%)"
				},
				toolbox:{
					show:true,
					orient:'vertical',
					top:'center',
					right:'right',
					feature:{
						dataView:{readonly:false},
						restore:{},
						saveAsImage:{}
					}
				},
				legend:{
					orient:'horizontal',
					bottom:'0%',
					data:[]
				},
				series:[{
					type:'pie',
					selectedMode:'single',
					radius:['40%','58%'],
					color:['#70a5fd', '#fd5053', '#ffe63b', '#2fd4fe','#FCC667','#CC5962'],
				    label:{
				    	normal:{
				    		position:'inner',
				    		formatter:'{d}%',
				    		textStyle:{
				    			color:'#fff',
				    			fontWeight:'bold',
				    			fontSize:12
				    		}
				    	}
				    },
				    labelLine:{
				    	show:false
				    },
				    data:[]
				}]
			});
			mychart.showLoading();
			var week = [];
			var rs = [];
			$.ajax({
				type:"post",
				url:"mysql/weektemp.php",
				async:true,
				data:{},
				dataType:'json',
				success:function(result){
					if(result){
						for(var i = 0;i < result.length;i++){
							week.push(result[i].week);
							rs.push({
								name:result[i].week,
								value:result[i].maxtemp
							})
						}
					
					mychart.hideLoading();
					mychart.setOption({
						legend:{
							data:week
						},
						series:[{
							data:rs
						}]
					})
					}
				},
				error:function(errorMsg){
					alert('图表请求数据失败');
					mychart.hideLoading();
				}
			});
})