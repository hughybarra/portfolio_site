<?php

	class View_Model{

		public function get_view($path_to_view= "", $data = ""){
			include $path_to_view;
		}
	}
?>