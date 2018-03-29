<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM sleep_copy", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> type = $d["type"];
		$h -> bai = $d["bai"];
		$h -> value = $d["value"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>