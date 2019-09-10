<?php
function OpenCon()
 {
 $dbhost = "wildcry.c8vcpeuwbjfj.us-east-2.rds.amazonaws.com";
 $dbuser = "root";
 $dbpass = "rakhulkarthick";
 $db = "wildcry";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
?>