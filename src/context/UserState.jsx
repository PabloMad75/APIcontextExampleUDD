import UsersContext from './UsersContext'

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

    return (
        <UsersContext.Provider 
            value={{initialState}}
        >{children}</UsersContext.Provider>
    )
}