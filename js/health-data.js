$(function(){
	$(".selected").siblings().show();
	var mychart = echarts.init(document.getElementById('main'));
	$(".left-inner").eq(1).hide();
	$(".left-inner").eq(2).hide();
	mychart.setOption({
		title:{
			text:'睡眠时长',
			x:'center',
			y:'center',
			textStyle:{
				fontSize:16
			}
		},
		tooltip:{
			show:true,
			trigger:'item',
			formatter:"{b}: {c} ({d}%)"
		},
		legend:{
			orient:'vertical',
			top:'top',
			right:'right',
			data:[],
			show:false,
		},
		color:[ '#86D560', '#AF89D6', '#59ADF3', '#FF999A'],
		series:[{
			type:'pie',
			selectesMode:'single',
			radius:['25%','58%'],
			color:['#86D560', '#AF89D6', '#59ADF3', '#FF999A'],
			label:{
				normal:{
					position:"inner",
					formatter:"{d}%",
					textStyle:{
						color:'#fff',
						fontSize:14
					},
					show:false,
				}
			},
			labelLine:{
				normal:{
					show:false
				}
			},
			data:[]
		},{
			type:'pie',
			radius:['58%','83%'],
			itemStyle:{
				normal:{
					color:'#f2f2f2'
				},
				emphasis:{
					color:'#adadad'
				}
			},
			label:{
				normal:{
					position:'inner',
					formatter:'{c}小时',
					textStyle:{
						color:'#777',
						fontSize:14
					},
					show:false,
				}
			},
			data:[]
		}]
	});
	mychart.showLoading();
	var type = [];
	var bai = [];
	var value = [];
	var zong = [];
	var url = 'mysql/sleep.php';
	var stop = false;
	function getData(url){
		$.ajax({
			type:"post",
			url:url,
			data:{},
			dataType:'json',
			success:function(result){
				console.log(result);
				if(result){
					for(var i = 0;i < result.length;i ++){
						type.push(result[i].type);
						bai.push(result[i].bai);
						value.push(result[i].value);
						zong.push({
							name:result[i].bai,
							value:result[i].value
						});
					}
				    mychart.hideLoading();
				    mychart.setOption({
				    	legend:{
				    		data:bai
				    	},
				    	series:[
				    	  {
				    	  	data:zong
				    	  },
				    	  {
				    	  	data:zong
				    	  }
				    	]
				    });
				    bai.splice(0,bai.length);
				    zong.splice(0,zong.length);
				}
				stop = true;
			},
			error:function(errorMsg){
				alert('图表请求失败');
				mychart.hideLoading();
			}
		});
	};
	getData(url);
	$("#day").on("click",function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".left-inner").hide();
		$(".left-inner").eq(0).show();
		$(".section-bottom").show();
	    url = 'mysql/sleep.php';
		getData(url);
	});
	$("#week").on("click",function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".left-inner").hide();
		$(".left-inner").eq(1).show();
		$(".section-bottom").hide();
	    url = 'mysql/sleep-week.php';
		getData(url);
	});
	$("#month").on("click",function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".left-inner").hide();
		$(".left-inner").eq(2).show();
		$(".section-bottom").hide();
		url = 'mysql/sleep-month.php';
		getData(url);
	});
	
	
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
