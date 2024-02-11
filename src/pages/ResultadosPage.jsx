import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/createContext";
import { useNavigate } from "react-router-dom"; 

export const ResultadosPage = () => {
  const { nombre, puntaje1, setNombre, setPuntaje1} = useContext(UserContext);
  const [datos, setDatos] = useState(null);
  const url = "../SumasReact/php/enviar.php";
  const url2 = "../SumasReact/php/recibir.php";
  const navigate = useNavigate(); 

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

  const reiniciar =  () => {
    setDatos(null);
    setNombre('');
    setPuntaje1(0);
    navigate("/Bienvenida");

  }

  useEffect(() => {
    if (nombre !== '') {
      enviarNombre().then(() => recibirData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependencias actualizadas

  return (
    <>
      <h1>¡Resultados!</h1>
      <h4>Hola {nombre}, tu puntaje es de {puntaje1}</h4>
      <div className="tablafinal">
        <table>
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Nombre</th>
              <th className="centered">Puntaje</th> {/* Agregamos una clase para centrar */}
            </tr>
          </thead>
          <tbody>
            {/* Utiliza un bucle para recorrer los primeros diez datos y mostrar las filas de la tabla */}
            {datos?.slice(0, 10).map((dato, index) => (
              <tr key={index}>
                <td>
                  {index === 0 && "1º"}
                  {index === 1 && "2º"}
                  {index === 2 && "3º"}
                  {index === 3 && "4º"}
                  {index === 4 && "5º"}
                  {index === 5 && "6º"}
                  {index === 6 && "7º"}
                  {index === 7 && "8º"}
                  {index === 8 && "9º"}
                  {index === 9 && "10º"}
                </td>
                <td>{dato.nombre}</td>
                <td className="centered">{dato.puntaje}</td> {/* Aplicamos la clase para centrar */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={reiniciar}>Volver a jugar</button>
    </>
  );
  
};
