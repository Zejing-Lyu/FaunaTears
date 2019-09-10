
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
echo "Connected successfully";
?>