<?php
  require("mysql-tuil.php");
  mySqlSelect("select * FROM addperson", function($r){
  	$arr = [];
	while($d = mysql_fetch_array($r)){
		$h = "";
		$h -> day = $d["day"];
		$h -> num = $d["num"];
		$arr[] = $h;
	}
	echo json_encode($arr);
  })
?>