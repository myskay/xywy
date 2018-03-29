<?php
   require("mysql-config.php");
   function mySqlSelect($sql,$fn){
   	  $con = mysql_connect($GLOBALS["MYSQL_SERVICE"],$GLOBALS["MYSQL_USERNAME"]);
	  if(!$con){
	  	die('Could not connect:'.mysql_error());
	  }
	  mysql_select_db($GLOBALS["MYSQL_DATABASE"]);
	  mysql_query("SET NAMES UTF8");
	  $r = mysql_query($sql);
	  $fn($r);
	  mysql_free_result($r);
	  mysql_close($con);
   }
?>