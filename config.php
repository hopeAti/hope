<?php
$servername = "localhost";
$username = "root"; // Default username
$password = ""; // Default password
$dbname = "owasp";

// Create connection
$link = new mysqli($servername, $username, $password, $dbname);

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
