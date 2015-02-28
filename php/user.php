<?php
    session_start();
    $conn = new mysqli("localhost", "public", "se4rft6yh", "moreToast");
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

	$user = $_POST['fb_Id'];
	$email = $_POST['email'];

	$userInfo = "INSERT INTO user (fbid, email) VALUES ('$user', '$email')";

	$conn->query($userInfo);

	$conn->close();

?>