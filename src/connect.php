<?php

$servername = "localhost";  // Replace with your server name
$username = "root";         // Replace with your database username
$password = "";             // Replace with your database password
$dbname = "DB";  // Replace with your database name


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$address = $_POST['address'];
$state = $_POST['state'];
$pincode = $_POST['pincode'];
$phoneNo = $_POST['phoneNo'];
$email = $_POST['email'];
$paymentOption = isset($_POST['paymentOption']) ? "Cash on Delivery" : "N/A";


$sql = "INSERT INTO orders (firstName, lastName, address, state, pincode, phoneNo, email, paymentOption)
        VALUES ('$firstName', '$lastName', '$address', '$state', '$pincode', '$phoneNo', '$email', '$paymentOption')";

if ($conn->query($sql) === TRUE) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
