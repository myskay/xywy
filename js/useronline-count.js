$(function(){
			$(".aside-ul .li").eq(0).find('ul').show();
			$(".aside-ul .li").eq(0).find('span').addClass('selected');
			$(".aside-ul .li").eq(0).find('img').attr('src','img/left-fanhui.png');
			var mychart = echarts.init(document.getElementById("main"));
			mychart.setOption({
				title:{
					text:'用户在线人数统计图',
					subtext:'今日在线人数:78|本周在线人数:14|本月在线人数:24',
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
					  	name:'在线人数'
					  }
					],
					left:'right'
				},
				xAxis:{
					type:"category",
					boundaryGap:false,
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
						},
						show:false,
					},
					axisLabel:{
						show:false,
					},
					axisTick:{
						show:false
					}
				},
				series:[
				   {
				   	name:'在线人数',
				   	type:'line',
				   	smooth:true,
				   	showAllSymbol:'emptyCircle',
				   	symbolSize:15,
				   	data:[],
				   	itemStyle:{
				   		"normal":{
				   			color:'rgba(240,235,68,1)'				
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
				   				color:'rgba(240,235,68,0.5)'
				   			},{
				   				offset:1,
				   				color:'rgba(240,235,68,0.2)'
				   			}],false)
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