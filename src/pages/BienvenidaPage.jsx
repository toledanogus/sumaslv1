import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import { UserContext } from "../context/createContext";

export const BienvenidaPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { nombre, setNombre, setContinuidad,} = useContext(UserContext);
  const navigate = useNavigate(); // Usa el hook useNavigate

  const onInputChange2 = ({ target }) => {
    setNombre(target.value);
  };

  const siguiente = () => {
    if (nombre !== '') {
      setContinuidad(1);
      navigate("/sumas"); // Navega a la ruta /sumas
    }
    else{
      alert('Escribe tu nombre.');
    }
  };

  useEffect(() => {
   setNombre('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <>
      <h1>¡Bienvenido!</h1>
      <fieldset>
        <p>Comencemos escribiendo tu nombre de usuario:</p>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={onInputChange2}
        />
        <p>Tienes un minuto para realizar la mayor cantidad de sumas.</p>
        <button type="button" className="comenzar" onClick={siguiente}>
          Comenzar
        </button>
      </fieldset>
    </>
  );
};
