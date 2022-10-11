import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Jobs } from "../pages/Jobs"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"
import { Register } from "../pages/Register"

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}