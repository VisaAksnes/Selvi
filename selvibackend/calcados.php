<?php
include "conexao.php";
if (isset($_SERVER['HTTP_ORIGIN'])) { 
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}"); //Trocar para seu dominio
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); //Métodos permitido
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}

function printJsonAndClose($myarray){
	echo (json_encode($myarray));
	exit();
}

function verify_error_db(){
	$mysqli = connect();
	if($mysqli->connect_errno){ //retornar > 0 é erro
		$return = [
			"Connected" => "false",
			"Error" => "Erro ao conectar no banco de dados",
			"NumErro" => $mysqli->connect_errno,
		];
		printJsonAndClose($return);
	}
	else{
		return $mysqli;
	}

}


$sexo='';
$subcategoria ='';
$return = [];
$mysqli = verify_error_db();
if(isset($_GET['sexo'])){ $sexo=" and sexo='".mysqli_escape_string($mysqli,$_GET['sexo'])."'";}
if(isset($_GET['subcategoria'])){ $subcategoria=" and tipo_calçado.tipo='".mysqli_escape_string($mysqli,$_GET['subcategoria'])."'";}

$query = "select distinct calçado.id, tipo_calçado.tipo, sexo.sexo, calçado.img, calçado.nome, calçado.descrição
          from tipo_calçado join calçado join sexo 
          on calçado.id_tipo = tipo_calçado.id 
          and calçado.id_sexo = sexo.id".$sexo.$subcategoria;

$queryResult = $mysqli->query($query);

if($queryResult->num_rows>0){
	while($row = $queryResult->fetch_assoc()){
		$return[] = $row;
	}
}
printJsonAndClose($return);
?>