import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Protected } from "../components/Protected"
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
                <Route path='/' element={<Protected />}>
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}