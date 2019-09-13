<?php
$mysqli = new mysqli("waste.cdylivsvnwen.us-east-2.rds.amazonaws.com","jeyganesh","jeyganesh","jeyganesh");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "Select fact_description from Fact";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($fact_description);
$stmt->fetch();
$stmt->close();

echo "Fact";
echo "<h3>".$fact_description."</h3>";
?>




