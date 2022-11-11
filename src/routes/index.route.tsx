import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CompanyProtected } from "../components/CompanyProtected"
import { Protected } from "../components/Protected"
import { Jobs } from "../pages/Jobs"
import { Login } from "../pages/Login"
import { NewJob } from "../pages/NewJob"
import { NotFound } from "../pages/NotFound"
import { Register } from "../pages/Register"
import { RegisterCompany } from "../pages/RegisterCompany"

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/companies/register" element={<RegisterCompany />} />
                <Route path='/' element={<Protected />}>
                    <Route index element={<Navigate to="/jobs" />} />
                    <Route path="jobs">
                        <Route index element={<Jobs />} />
                        <Route path="create" element={<CompanyProtected />}>
                            <Route index element={<NewJob />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}