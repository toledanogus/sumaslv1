import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { UserContext } from '../context/createContext';

export const BienvenidaPage = () => {
  const { nombre, setNombre } = useContext(UserContext);
  const navigate = useNavigate(); // Usa el hook useNavigate

  const onInputChange2 = ({ target }) => {
    setNombre(target.value);
  };

  const siguiente = () => {
    navigate('/sumas'); // Navega a la ruta /sumas
  };

  return (
    <>
      <h1>¡Bienvenido!</h1>
      <fieldset>
      <p>Comencemos escribiendo tu nombre de usuario:</p>
      <input type="text" id="nombre" value={nombre} onChange={onInputChange2} />
      <p>Tienes un minuto para realizar la mayor cantidad de sumas.</p>
      <button type="button" className="comenzar" onClick={siguiente}>
        Comenzar
      </button>
      </fieldset>
    </>
  );
};
