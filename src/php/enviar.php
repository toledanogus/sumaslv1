<?php
$connection = mysqli_connect("localhost","toledan1_gus","sfreud1978");
@mysqli_query($connection,"SET NAMES 'utf8'");

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

mysqli_select_db($connection,"toledan1_pedrueza");

$peticion = mysqli_query($connection, "SELECT  registro, puntaje FROM familia WHERE nombre = '".$jsonObj->nom."'");
$fila = mysqli_fetch_row($peticion);
$gus = $fila[0];
$gus2 = $fila[1];

if ($gus == 0) {
    mysqli_query($connection, "INSERT INTO familia (nombre, puntaje, registro) VALUES ('".$jsonObj->nom."','".$jsonObj->pun."', 1)");
} 
else if ($gus2 < $jsonObj->pun) {
    mysqli_query($connection, "UPDATE familia SET puntaje = '".$jsonObj->pun."' WHERE nombre = '".$jsonObj->nom."'");
} 
?>