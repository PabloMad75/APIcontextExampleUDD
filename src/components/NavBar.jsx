import { useContext } from "react"
import UsersContext from "../context/UsersContext"
import { Link, Outlet } from "react-router-dom"


export const NavBar = () => {
    const userCtx = useContext(UsersContext)

    const { logout, authStatus, usersData } = userCtx

    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to = '/'>
                            Inicio
                        </Link>
                    </li>

                    {
                        authStatus ?
                            <>
                                <li>
                                    <Link to='/books'>
                                        {usersData?.nombre}
                                    </Link>
                                </li>
                                <li onClick = {() => { logout() }}>
                                    <Link to='/login'>
                                        Cerrar Sesion
                                    </Link>
                                </li>
                            </> :
                            <>
                                <li>
                                    <Link to='/signup'>
                                        Registro
                                    </Link>
                                </li>
                                <li>
                                    <Link to= '/login'>
                                        Iniciar Sesion
                                    </Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <Outlet />
        </>
    )


}