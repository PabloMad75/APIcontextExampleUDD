import { useReducer } from 'react'
import UsersContext from './UsersContext'
import { reducer } from './UserReducer'
import { axiosClient } from '../config/api'

export const UserState = ({children}) => {

    const initialState = {
        users: [
            {
                id: 0,
                nombre: 'Alan',
                apellido: 'García',
                rut: '18569777-0',
                edad: 29,
                correo: 'aegarmus@gmail.com'
            }
        ] 
    }

    const [globalState, dispatch] = useReducer(reducer, initialState)

    const getUsers = async() => {
        try {
            const response = await axiosClient.get('/users')
            console.log(response)

            dispatch({
                type: "OBTENER_USUARIO",
                payload: response.data 
            })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <UsersContext.Provider 
            value={{
                usersData: globalState.users,
                getUsers,
            }}
        >{children}</UsersContext.Provider>
    )
}