$(function(){
	    $(".selected").siblings().show();
	    $(".main-title a").eq(1).addClass('active');
	    
	    var map = new AMap.Map('container',{
				zoom:15,
				center:[116.397428,39.90923]
			});
//			添加标注点弹跳效果
			var marker = new AMap.Marker({
				position:map.getCenter(),
				draggable:true,
				cursor:'move'
			});
			function location(){
				marker.setMap(map);
			    marker.setAnimation('AMAP_ANIMATION_BOUNCE');
			}
			function locationcancel(){
				marker.setMap();
			}
		var lineArr = [
                [116.368904, 39.913423],
                [116.382122, 39.901176],
                [116.387271, 39.912501],
                [116.398258, 39.904600]
            ];
         var polyline = new AMap.Polyline({
            	path:lineArr,
            	strokeColor:"#c30d23",
            	strokeOpacity:0.8,
            	strokeWeight:3,
            	strokeStyle:'solid',
            	strokeDasharray:[10,5]
          });
          function line(){
          	 polyline.setMap(map);
          };
          function linecancel(){
          	 polyline.setMap();
          };
          location();
          $("#location").on("click",function(){
          	$(this).addClass('active');
          	$(this).siblings().removeClass('active');
          	location();
          	linecancel();
          })
          $("#line").on("click",function(){
          	$(this).addClass('active');
          	$(this).siblings().removeClass('active');
          	line();
          	locationcancel();
          })
            
})