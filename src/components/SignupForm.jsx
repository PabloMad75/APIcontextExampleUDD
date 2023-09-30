import { useContext, useState } from "react"
import UsersContext from "../context/UsersContext"
import { useNavigate } from "react-router-dom"


export const SignupForm = () => {

    const navigate = useNavigate();

    const userCtx = useContext(UsersContext)

    const {signupUser} = userCtx

    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        rut: '',
        edad: '',
        correo: '',
        password: ''
    })

    const onChangeData = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const user = signupUser(data)
        console.log(user)
        navigate('/')
    }

    return (
        <>
            <div>
                <h2 className="text-center">Registrarse como Usuario</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit = {(e) => {onSubmitData(e)}}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <div>
                            <input 
                                type="text"
                                name = "nombre"
                                id = "nombre"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="apellido">apellido</label>
                        <div>
                            <input 
                                type="text"
                                name = "apellido"
                                id = "apellido"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="rut">rut</label>
                        <div>
                            <input 
                                type="text"
                                name = "rut"
                                id = "rut"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="edad">edad</label>
                        <div>
                            <input 
                                type="number"
                                name = "edad"
                                id = "edad"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="correo">correo</label>
                        <div>
                            <input 
                                type="email"
                                name = "correo"
                                id = "correo"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <div>
                            <input 
                                type="password"
                                name = "password"
                                id = "password"
                                onChange= {(e) => {onChangeData(e)}}
                                required /> 
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center text-center">
                        <button className="btn btn-primary" type="submit">Registrame</button>
                    </div>
                </form>
            </div>
        </>
    )
}