$(function(){
			$(".aside-ul .li").eq(1).find('ul').show();
			$(".aside-ul .li").eq(1).find('span').addClass('selected');
			$(".aside-ul .li").eq(1).find('img').attr('src','img/left-fanhui.png');
			var mychart = echarts.init(document.getElementById("main"));
			var colors = ['#93BA19','#FC828C','#F1E13C','#32DDFE','#93BAFE','#F1E13C','#32DDFE','#FC828C'];
			
			mychart.setOption({
				title:{
					text:'用户意见反馈量统计',
					subtext:'本周反馈量:2 | 本月反馈量:10',
					itemGap:10,
					left:'center',
				},
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
					  	name:'意见反馈量'
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
				   	name:'意见反馈量',
				   	type:'line',
				   	smooth:true,
				   	showAllSymbol:'emptyCircle',
				   	symbolSize:15,
				   	data:[],
				   	itemStyle:{
				   		"normal":{
				   			color:'rgba(250,130,140,0.7)'
				   			
				   		},
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
				   			opacity:0.7,
				   			color:{
				   				type:'linear',
				   				x:0,
				   				y:0,
				   				x2:0,
				   				y2:1,
				   				colorStops:[{
				   					offset:0,color:'rgba(250,130,140,0.7)'
				   				},{
				   					offset:1,color:'rgba(250,130,140,0.3)'
				   				}],
				   			}
				   		}
				   	}
				   }
				]
			});
			mychart.showLoading();
			var week = [];
			var maxtemp = [];
			var url = 'mysql/weektemp.php';
			var stop = false;
			function getData(url){
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
							mychart.hideLoading();
							mychart.setOption({
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
			getData(url);
			$("#add-week").click(function(){
				$("#add-jihe li a").removeClass('active');
				$(this).find("a").addClass("active");
				if(stop){
					url = "mysql/weektemp.php";
					getData(url);
				}
			});
			$("#add-month").click(function(){
				$("#add-jihe li a").removeClass('active');
				$(this).find("a").addClass("active");
				if(stop){
					url = "mysql/monthtemp.php";
					getData(url);
				}
			});
			$("#add-year").click(function(){
				$("#add-jihe li a").removeClass('active');
				$(this).find("a").addClass("active");
				if(stop){
					url = "mysql/monthtemp.php";
					getData(url);
				}
			});
})