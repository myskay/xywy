<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM number", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> time = $d["time"];
		$h -> nums = $d["nums"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>