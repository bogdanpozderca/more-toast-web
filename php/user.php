<?php
	require_once('config.php')

	$server = $DataSource;
	$username = $userId;
	$password = $Password;
	$db = $Database;

	$conn = new mysqli($server, $username, $password, $db);

	$user = $_POST['fb_Id'];

	$userInfo = "INSERT INTO user (fbid) VALUES ('$user')";
	$conn->query($userInfo);

	$conn->close();

?>