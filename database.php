
<?php
$servername = "wildcry.c8vcpeuwbjfj.us-east-2.rds.amazonaws.com";
$username = "root";
$password = "rakhulkarthick";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "Select name from tables";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($name);
$stmt->fetch();
$stmt->close();

echo "wildcry";
echo "<h3>".$name."</h3>";

?>


