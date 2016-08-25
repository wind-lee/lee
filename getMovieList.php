<?php 
	$_mla = json_decode(file_get_contents('movielist.json'),true);
	// $_mla = file_get_contents('movielist.json');
	// print_r($_mla);
    // $_num = $_GET('num');
	$randomL = array_rand($_mla,8);

	// print_r($_mla[$randomL[0]]);

	// $_mla[$randomL[0]]s

	//$total = count($_mla);
	$_arr = array();

	array_push($_arr,$_mla[$randomL[0]]);
	array_push($_arr,$_mla[$randomL[1]]);
	array_push($_arr,$_mla[$randomL[2]]);
	array_push($_arr,$_mla[$randomL[3]]);
	array_push($_arr,$_mla[$randomL[4]]);
	array_push($_arr,$_mla[$randomL[5]]);
	array_push($_arr,$_mla[$randomL[6]]);
	array_push($_arr,$_mla[$randomL[7]]);


	echo json_encode($_arr);
	// print_r($_arr);
	 //echo rand(0,$total);
	// var_dump($randomL);die();
	// var $aa = json_encode($_mla);

	// print_r($randomL);
 ?>