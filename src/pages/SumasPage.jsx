import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/createContext";

export const SumasPage = () => {
  const [aleatorio1, setAleatorio1] = useState(null);
  const [aleatorio2, setAleatorio2] = useState(null);
  const [resultadoJs, setResultadoJs] = useState("");
  const [resultadoUsuario, setResultadoUsuario] = useState("");
  const { puntaje1, setPuntaje1 } = useContext(UserContext);
  const [timer, setTimer] = useState(6000);
  // eslint-disable-next-line no-unused-vars
  const { nombre, setNombre } = useContext(UserContext);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const inputRef = useRef(null);

  const generaAleatorios = () => {
    if (resultadoUsuario !== '' && resultadoJs == resultadoUsuario) {
        setPuntaje1(puntaje1 + 1);
    }
    setAleatorio1(Math.floor(Math.random() * 100));
    setAleatorio2(Math.floor(Math.random() * 100));
    setResultadoUsuario('');
}


  const onInputChange = ({ target }) => {
    setResultadoUsuario(target.value);
  };

  useEffect(() => {
    setResultadoJs(aleatorio1 + aleatorio2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aleatorio2]);

  useEffect(() => {
    if (timer === 0) {
      navigate("/Resultados");
    }
  }, [timer, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval); // Detener el intervalo cuando el temporizador llega a cero
          return 0; // Establecer el temporizador en cero
        } else {
          return prevTimer - 1; // Reducir el temporizador en 1
        }
      });
    }, 1000);
    // Devolver una función de limpieza
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generaAleatorios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <h1>SumasApp</h1>
      <button type="button" onClick={generaAleatorios}>
        Verificar
      </button>
      <div className="suma">
        <div className="numeros">
          <span className="numero">{aleatorio1}</span>
          <span className="operador">+</span>
          <span className="numero">{aleatorio2}</span>
          <span className="linea"></span>
        </div>
      </div>
      <input
        type="number"
        id="number"
        value={resultadoUsuario}
        onChange={onInputChange}
        onKeyDown={(event) => {
            if (event.keyCode === 13) {
                generaAleatorios();
            }
        }}
      />
      <div>Puntaje: {puntaje1}</div>
      <div className="timer">Tiempo restante:{timer}</div>
    </>
  );
};
