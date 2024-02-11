import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/createContext";


export const SumasPage = () => {

const [aleatorio1, setAleatorio1] = useState(null);
const [aleatorio2, setAleatorio2] = useState(null);
const [resultadoJs, setResultadoJs] = useState('');
const [resultadoUsuario, setResultadoUsuario] = useState('');
const {puntaje1, setPuntaje1} = useContext(UserContext);
const [timer, setTimer] = useState(60);
// eslint-disable-next-line no-unused-vars
const {nombre, setNombre} = useContext(UserContext);
const navigate = useNavigate();

const generaAleatorios = () =>{
    setAleatorio1 (Math.floor(Math.random()*100));
    setAleatorio2 (Math.floor(Math.random()*100));
}

const onInputChange = ({target}) => {
    setResultadoUsuario(target.value);
}

useEffect(() => {
    setResultadoJs(aleatorio1+aleatorio2);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [aleatorio2]);

useEffect(() => {
    if (timer === 0) {
        navigate("/Resultados");
    }
}, [timer, navigate]);

useEffect(() => {
    if (resultadoJs==resultadoUsuario) {
        setPuntaje1(puntaje1+1);
    } 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [aleatorio2]);

useEffect(() => {
    const interval = setInterval(() => {
        setTimer(prevTimer => {
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

  return (
    <>
    <h1>SumasApp</h1>
    <button type="button" onClick={generaAleatorios}>Verificar</button>
    <div>{aleatorio1}</div>
    <div>{aleatorio2}</div>
    <input type="number" id="number" value={resultadoUsuario} onChange={onInputChange} />
    <div>Puntaje: {puntaje1}</div>
    <div>{timer}</div>
    </>
  )
}
