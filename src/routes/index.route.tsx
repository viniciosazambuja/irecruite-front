import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home</div>}>
                    <Route path="signup">
                        <Route path="user" element={<div>Cadastro usuário</div>} />
                        <Route path="company" element={<div>Cadastro empresa</div>} />
                    </Route>
                    <Route path="login" element={<div>Entrar</div>} />
                    <Route path="jobs">
                        <Route path="/" element={<div>Jobs</div>} />
                        <Route path=":id" element={<div>Job</div>} />
                    </Route>
                    <Route path="companies">
                        <Route path=":id" element={<div>Company</div>}>
                            <Route path="edit" element={<div>Company Edit</div>} />
                            <Route path="jobs" element={<div>Company Jobs</div>}>
                                <Route path="new" element={<div>Company New Job</div>} />
                                <Route path=":id" element={<div>Company Job</div>} />                            
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}