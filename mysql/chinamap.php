<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM chinamap", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> place = $d["place"];
		$h -> lng = $d["lng"];
		$h -> lat = $d["lat"];
		$h -> value = $d["value"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>