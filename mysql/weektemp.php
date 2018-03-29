<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM weektemp", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> week = $d["week"];
		$h -> maxtemp = $d["maxtemp"];
		$h -> mintemp = $d["mintemp"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>