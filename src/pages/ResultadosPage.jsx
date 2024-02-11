import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/createContext";

export const ResultadosPage = () => {
  const { nombre, puntaje1 } = useContext(UserContext);
  const [datos, setDatos] = useState(null);
  const url = "../SumasReact/php/enviar.php";
  const url2 = "../SumasReact/php/recibir.php";

  let datosJson = {
    nom: nombre,
    pun: puntaje1,
  };

  const enviarNombre = async () => {
    // eslint-disable-next-line no-unused-vars
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datosJson),
      headers: { "Content-Type": "application/json" },
    });
    // Puedes agregar un console.log aquí para verificar si se envió correctamente
  };

  const recibirData = async () => {
    const resp = await fetch(url2, {
      method: "POST",
      body: JSON.stringify(datosJson),
      headers: { "Content-Type": "application/json" },
    });
    const data = await resp.json();
    setDatos(data); // Actualiza el estado con la respuesta del servidor
    console.log(data); // Verifica la respuesta en la consola
  };

  useEffect(() => {
    enviarNombre().then(() => recibirData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependencias actualizadas

  return (
    <>
      <h1>¡Resultados!</h1>
      <h4>
        Hola {nombre}, tu puntaje es de {puntaje1}
      </h4>
      <div className="tablafinal">
        {/* Usa un operador lógico y un operador de acceso opcional para verificar que datos tenga el elemento con el índice que buscas */}
        {datos?.[0] && (
          <p>
            Primer Lugar: <span className="bold">{datos[0].nombre}</span> con un puntaje de {datos[0].puntaje}
          </p>
        )}
        {datos?.[1] && (
          <p>
            Segundo Lugar: {datos[1].nombre} con un puntaje de{" "}
            {datos[1].puntaje}
          </p>
        )}
        {datos?.[2] && (
          <p>
            Tercer Lugar: {datos[2].nombre} con un puntaje de {datos[2].puntaje}
          </p>
        )}
        {datos?.[3] && (
          <p>
            Cuarto Lugar: {datos[3].nombre} con un puntaje de {datos[3].puntaje}
          </p>
        )}
        {datos?.[4] && (
          <p>
            Quinto Lugar: {datos[4].nombre} con un puntaje de {datos[4].puntaje}
          </p>
        )}
        {datos?.[5] && (
          <p>
            Sexto Lugar: {datos[5].nombre} con un puntaje de {datos[5].puntaje}
          </p>
        )}
      </div>
    </>
  );
};
