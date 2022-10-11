import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export function Protected(): JSX.Element {
    const { isLogged } = useAuth();

    if (!isLogged) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}