import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import { UserContext } from "../context/createContext";

export const BienvenidaPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { nombre, setNombre, setContinuidad, selectedOption, setSelectedOption } = useContext(UserContext);
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onInputChange2 = ({ target }) => {
    setNombre(target.value);
  };

  const siguiente = () => {
    if (nombre !== '' && selectedOption !== '') {
      setContinuidad(1);
      navigate("/sumas"); // Navega a la ruta /sumas
    }
    else{
      alert('Escribe tu nombre y selecciona tu grupo.');
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
        <div>Selecciona tu grupo: </div>
        <div>
      {/* Etiqueta select para la lista desplegable */}
      <select value={selectedOption} onChange={handleSelectChange}>
        {/* Opciones de la lista desplegable */}
        <option value="">Selecciona una opción</option>
        <option value="6a">6º A</option>
        <option value="6b">6º B</option>
      </select>
    </div>
        <p>Tienes un minuto para realizar la mayor cantidad de sumas.</p>
        <button type="button" className="comenzar" onClick={siguiente}>
          Comenzar
        </button>
      </fieldset>
    </>
  );
};
