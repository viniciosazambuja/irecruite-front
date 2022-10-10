import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Jobs } from "../pages/Jobs"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </BrowserRouter>
    )
}