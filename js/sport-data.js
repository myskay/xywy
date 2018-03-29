$(function(){
	$(".selected").siblings().show();
	$(".main-title a").eq(1).addClass('active');
	var sechart = echarts.init(document.getElementById('second'));
	sechart.setOption({
		tooltip:{
					trigger:'axis'
				},
				toolbox:{
					orient:'vertical',
					show:true,
					feature:{
						dataZoom:{
							yAxisIndex:'none'
						}, 
						dataView:{readOnly:false},
						magicType:{type:['line','bar']},
						restore:{},
						saveAsImage:{}
					},
					left:'right',
					top:'center'
				},
				legend:{
					data:[
					  {
					  	name:'新增人数'
					  }
					],
					left:'right'
				},
				xAxis:{
					type:"category",
					boundaryGap:false,
					axisLine:{
						lineStyle:{
//							color:'#ccc'
						}
					},
					data:[]
				},
				yAxis:{
					splitLine:{
						lineStyle:{
							type:'dashed'
						}
					},
					axisLine:{
						lineStyle:{
//							color:'#ccc'
						}
					}
				},
				series:[
				   {
				   	name:'新增人数',
				   	type:'line',
				   	smooth:true,
				   	showAllSymbol:'emptyCircle',
				   	symbolSize:15,
				   	data:[],
				   	itemStyle:{
				   		"normal":{
				   			color:'rgba(151,187,205,1)'				
				   		}
				   	},
				   	markPoint:{
				   		data:[
				   		  {type:'max',name:'最大值'},
				   		  {type:'min',name:'最小值'}
				   		]
				   	},
				   	markLine:{
				   		data:[
				   		   {type:'average',name:'平均值'}
				   		]
				   	},
				   	areaStyle:{
				   		normal:{
				   			color:new echarts.graphic.LinearGradient(0,0,0,1,[{
				   				offset:0,
				   				color:'rgba(151,187,205,0.5)'
				   			},{
				   				offset:1,
				   				color:'rgba(151,187,205,0.2)'
				   			}],false)
				   		}
				   	}
				   }
				]
	});
	sechart.showLoading();
			var week = [];
			var maxtemp = [];
			var url = 'mysql/weektemp.php';
			var stop = false;
			function getData1(url){
				$.ajax({
					type:"post",
					url:url,
					async:true,
					data:{},
					dataType:'json',
					success:function(result){
						if(result){
							for(var i = 0;i < result.length;i ++){
								week.push(result[i].week);
							}
							for(var i = 0;i < result.length;i ++){
								maxtemp.push(result[i].maxtemp);
							}
							sechart.hideLoading();
							sechart.setOption({
								xAxis:{
									data:week
								},
								series:[
								   {
								   	data:maxtemp
								   }
								]
							});
							week.splice(0,week.length);
							maxtemp.splice(0,maxtemp.length);
						}
						stop  = true;
					},
					error:function(errorMsg){
						alert('图表请求失败');
						mychart.hideLoading();
					}
				});
			};
			getData1(url);
})
