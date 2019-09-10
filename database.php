<?php
$mysqli = new mysqli("localhost","root","rakhul","wildcry");
if($mysqli -> connect_error) {
  exit('Could not connect');
}

$sql = "Select sno from tables";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($sno);
$stmt->fetch();
$stmt->close();

echo "wildcry";
echo "<h3>".$sno."</h3>";
?>