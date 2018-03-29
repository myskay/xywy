<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM monthtemp", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> week = $d["day"];
		$h -> maxtemp = $d["maxtemp"];
		$h -> mintemp = $d["mintemp"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>