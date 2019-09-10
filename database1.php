<?php

echo "Fact";

$mysqli = new mysqli("wildcry.c8vcpeuwbjfj.us-east-2.rds.amazonaws.com","root","rakhulkarthick","wildcry");

echo "Fact2";

if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name FROM tables";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($name);
$stmt->fetch();
$stmt->close();

echo "Fact";
echo "<h3>".$name."</h3>";

?>

