
import { useState } from 'react'
import { UserContext } from './createContext'

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
const [nombre, setNombre] = useState('');
const [puntaje1, setPuntaje1] = useState(0);
const [continuidad, setContinuidad] = useState(0);

  return (
    
    <UserContext.Provider value={{nombre, setNombre, puntaje1, setPuntaje1, continuidad, setContinuidad}}>
        {children}
    </UserContext.Provider>
  )
}
