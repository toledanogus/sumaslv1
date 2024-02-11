<?php
//Con este comando se establece la conexión con mysql
$connection = mysqli_connect("localhost","toledan1_gus","sfreud1978");

//Es para meter los nombres a la base de datos con los acentos correctamente
@mysqli_query($connection,"SET NAMES 'utf8'");

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

//Es para seleccionar la base de datos con la que se va a trabajar
mysqli_select_db($connection,"toledan1_pedrueza");

mysqli_query($connection, "INSERT INTO familia (nombre, puntaje) VALUES ('".$jsonObj->nom."','".$jsonObj->pun."')");


?>