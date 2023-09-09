import { useContext } from 'react'
import UsersContext from "../context/UsersContext"

export const UserList = () => {
  
    const  globalContext = useContext(UsersContext)
    
    const { users } = globalContext.initialState
  
    return (
    <>
        <h2> Lista de Usuarios </h2>

        {
            users.map(user => {
                return (
                    <div key = {user.id}>
                        <h3>{user.nombre} {user.apellido}</h3>
                        <h4>{user.rut}</h4>
                        <h6>{user.correo}</h6>
                    </div>
                )
            })
        }
    </>
  )
}
