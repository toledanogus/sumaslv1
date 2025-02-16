import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/createContext";
import { useNavigate } from "react-router-dom";
import sonido from '../assets/triunfo.mp3';
import confetti from 'canvas-confetti';

export const ResultadosPage = () => {
  const { nombre, puntaje1, setNombre, setPuntaje1, setContinuidad} = useContext(UserContext);
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
    const respu = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datosJson),
      headers: { "Content-Type": "application/json" },
    });
    const dataOld = await respu.json();
    setDatosOld(dataOld); // Actualiza el estado con la respuesta del servidor
    console.log('Datos primeros', dataOld);
 // Verifica la respuesta en la consola// Puedes agregar un console.log aquí para verificar si se envió correctamente
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
      setContinuidad(0);
    }
    else {
      navigate("/Bienvenida");
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
            {datos?.slice(0, 3).map((dato, index) => (
              <tr key={index}>
                <td>
                  <span className="bold">{index === 0 && "1º"}</span>
                  {index === 1 && "2º"}
                  {index === 2 && "3º"}
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
