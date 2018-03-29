<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM line", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> lng = $d["lng"];
		$h -> lat = $d["lat"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>