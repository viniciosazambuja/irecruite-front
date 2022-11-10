interface Auth {
    isLogged: boolean;
    signOut: () => void;
}

export function useAuth(): Auth {
    const isLogged: boolean = Boolean(localStorage.getItem('token'));

    const signOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    const auth: Auth = {
        isLogged: isLogged,
        signOut: signOut,
    }

    return auth
}