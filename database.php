<?php
$servername = "wildcry.c8vcpeuwbjfj.us-east-2.rds.amazonaws.com";
$username = "root";
$password = "rakhulkarthick";
$dbname = "wildcry";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT sno, name FROM tables";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["sno"]. " - Name: " . $row["name"]. " "  "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>