<?php
$connection = mysqli_connect("localhost","toledan1_gus","sfreud1978");
@mysqli_query($connection,"SET NAMES 'utf8'");

$str_json = file_get_contents("php://input");
$jsonObj = json_decode($str_json);

mysqli_select_db($connection,"toledan1_pedrueza");
 
$tabla='6Bsumaslv1';

$peticion = mysqli_query($connection, "SELECT  registro, puntaje FROM $tabla WHERE nombre = '".$jsonObj->nom."'");
$fila = mysqli_fetch_row($peticion);
$gus = $fila[0];
$gus2 = $fila[1];

$peticion2 = mysqli_query($connection, "SELECT  MAX(intentos) FROM $tabla WHERE nombre = '".$jsonObj->nom."'");
$fila2 = mysqli_fetch_row($peticion2);
$intentos = $fila2[0] +1;

$peticion3 = mysqli_query($connection, "SELECT  puntaje As puntajeOld FROM $tabla WHERE nombre = '".$jsonObj->nom."' ORDER BY puntaje DESC LIMIT 100");

$rows = mysqli_fetch_all($peticion3, MYSQLI_ASSOC);
echo json_encode($rows, JSON_NUMERIC_CHECK);

if ($gus == 0) {
    mysqli_query($connection, "INSERT INTO $tabla (nombre, puntaje, registro, intentos ) VALUES ('".$jsonObj->nom."','".$jsonObj->pun."', 1, 1)");
} 

else if ($gus == 1) {
    mysqli_query($connection, "INSERT INTO $tabla (nombre, puntaje, registro, intentos ) VALUES ('".$jsonObj->nom."','".$jsonObj->pun."', 1, $intentos)");
}



?>