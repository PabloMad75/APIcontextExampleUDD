import { useContext, useEffect } from 'react'
import UsersContext from "../context/UsersContext"


export const UserList = () => {
    
    const  globalContext = useContext(UsersContext)
    
    const { usersData, getUsers } = globalContext


    useEffect(() => {
        getUsers()
    }, [])

    return (
    <>
        <h2> Lista de Usuarios </h2>

        {
            usersData.map(user => {
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
