<?php
// Conectarse a la base de datos MySQL
$connection = mysqli_connect("localhost", "toledan1_gus", "sfreud1978");

// Establecer el conjunto de caracteres a utf8
mysqli_set_charset($connection, "utf8");

// Obtener el contenido JSON de la solicitud POST
$str_json = file_get_contents("php://input");
$x = json_decode($str_json);

mysqli_select_db($connection,"toledan1_pedrueza");


// Realizar la consulta SQL para obtener los nombres y puntajes de la tabla 'familia'
$respuesta = mysqli_query($connection, "SELECT nombre, puntaje FROM familia ORDER BY puntaje DESC LIMIT 100");

// Obtener todas las filas de resultados
$rows = mysqli_fetch_all($respuesta, MYSQLI_ASSOC);

// Devolver los resultados en formato JSON
echo json_encode($rows, JSON_NUMERIC_CHECK);

// Cerrar la conexión a la base de datos
mysqli_close($connection);
?>
