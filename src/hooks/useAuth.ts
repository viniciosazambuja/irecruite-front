import { User } from "../interfaces/user.interfaces";
import { useState, useEffect } from 'react'

interface LoggedUser {
    idUser: number;
    name: string;
    email: string;
    type: 'company' | 'user';
}

interface Auth {
    isLogged: boolean;
    user: LoggedUser | null;
    signOut: () => void;
}

export function useAuth(): Auth {
    const isLogged: boolean = Boolean(localStorage.getItem('token'));
    const [user, setUser] = useState<LoggedUser | null>(null);

    useEffect(() => {
        if (isLogged) {
            const userData: string = localStorage.getItem('user') || '';
            const companyData: string = localStorage.getItem('company') || '';

            if(userData || companyData) {
                const user = JSON.parse(userData || companyData);

                setUser({
                    idUser: user.id,
                    name: user.name,
                    email: user.email,
                    type: userData ? 'user' : 'company'
                });
            }
        }
    }, [isLogged]);


    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('company');
        window.location.reload();
    };

    const auth: Auth = {
        isLogged: isLogged,
        user: user,
        signOut: signOut,
    }

    return auth
}