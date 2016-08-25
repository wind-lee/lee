<?php 
	$user = $_POST['user'];
	$pwd = $_POST['pwd'];

	$users = file_get_contents("user.json");

	$_all = json_decode($users,true);

	$eachuser = array (
		'user' => $user,
		'pwd' => $pwd
	);

	array_push($_all,$eachuser);

	// print_r($_all);

	// $_length = count($_all);
	// $js[7]->user=$user;
	// $js[7]->pwd=$pwd; 
	file_put_contents('user.json',json_encode($_all));
	// print_r($_all);

 ?>