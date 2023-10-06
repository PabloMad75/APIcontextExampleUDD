
import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { SignupPage } from "../pages/SignupPage"
import { LoginPage } from "../pages/loginPage"
import { NavBar } from "../components/NavBar"
import { PrivateRoute } from "./PrivateRoute"
import { ShoppingPage } from "../pages/ShoppingPage"


export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<HomePage />} /> 
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route 
                        path='books/*' 
                        element = {
                            <PrivateRoute >
                                <ShoppingPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to='/login' />} />

                </Route>
            </Routes>

        </>
    )
}