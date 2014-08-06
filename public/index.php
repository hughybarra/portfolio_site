<?php
	// include
	// =============================
	include "../models/view_model.php";
	// end includes
	// =============================

	// check for action in url
	// ===========================
	if (empty($_GET["action"])){
		$action = "home";
	}else{
		$action = $_GET["action"];
	}
	// ===========================

	if( $action == "home"){
		$view_model = new View_Model();
		$view_model->get_view("../views/index.html");
	}
	elseif ($action == "protozone"){
		$view_model = new View_Model();
		$view_model->get_view('../views/projects/protozone.html');
	}
	elseif($action == 'weather_api'){
		$view_model = new View_Model();
		$view_model->get_view('../views/projects/weather_api.html');
	}
?>
