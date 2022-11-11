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
<<<<<<< HEAD
    user: LoggedUser | null;
=======
    signOut: () => void;
>>>>>>> 3cbb03859da3179b407c75bc213e3b880f2d9b7d
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
        window.location.reload();
    };

    const auth: Auth = {
        isLogged: isLogged,
<<<<<<< HEAD
        user: user
=======
        signOut: signOut,
>>>>>>> 3cbb03859da3179b407c75bc213e3b880f2d9b7d
    }

    return auth
}