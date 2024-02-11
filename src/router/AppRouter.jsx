
import { Navigate, Route, Routes } from 'react-router-dom';
import { BienvenidaPage } from '../pages/BienvenidaPage';
import { ResultadosPage } from '../pages/ResultadosPage';
import { SumasPage } from '../pages/SumasPage';
import { UserProvider } from '../context/UserProvider';

export const AppRouter = () => {
  return (
    
      <UserProvider>
        <Routes>
          <Route path="Bienvenida" element={<BienvenidaPage />} />
          <Route path="Sumas" element={<SumasPage />} />
          <Route path="Resultados" element={<ResultadosPage />} />
          <Route path="/" element={<Navigate to="/Bienvenida" />} />
        </Routes>
      </UserProvider>
    
  );
};
