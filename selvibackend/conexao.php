<?php


function connect(){
	$database = "selvi";
	$usuario = "root";
	$senha = "";
	$hostname ="localhost";

	$mysqli = new mysqli($hostname,$usuario,$senha,$database) or die("CONNECT ERROR");
	return $mysqli;
}


?>