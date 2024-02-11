
import { useState } from 'react'
import { UserContext } from './createContext'

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
const [nombre, setNombre] = useState('');
const [puntaje1, setPuntaje1] = useState(0);

  return (
    
    <UserContext.Provider value={{nombre, setNombre, puntaje1, setPuntaje1}}>
        {children}
    </UserContext.Provider>
  )
}
