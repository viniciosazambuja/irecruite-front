import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export function CompanyProtected(): JSX.Element {
    const { isLogged, user } = useAuth();

    console.log('isLogged', isLogged);
    console.log('user', user);

    if (!isLogged || user?.type !== 'company') {
        return <Navigate to="/" />;
    }

    return (
        <>
            TEXT
        </>
    );
}