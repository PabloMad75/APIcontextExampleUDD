
import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { SignupPage } from "../pages/SignupPage"

export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<HomePage />} /> 
                <Route path="signup" element={<SignupPage />} />
            </Routes>

        </>
    )
}