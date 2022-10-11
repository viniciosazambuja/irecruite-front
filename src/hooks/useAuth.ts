interface Auth {
    isLogged: boolean;
}

export function useAuth() {
    const isLogged: boolean = Boolean(localStorage.getItem('token'));

    const auth: Auth = {
        isLogged: isLogged
    }

    return auth
}