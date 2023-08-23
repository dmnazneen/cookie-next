import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);
    const [allapps, setAllapps] = useState(null)
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // for refresh purpose
        // me();
    }, [])

    function login(user) {
        setUser(user);
    }

    function logout() {
        setUser(null);
    }

    function me() {
        fetch(`${process.env.BASE_URL}/user/me`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    function getallapps() {
        fetch(`${process.env.BASE_URL}/app`)
            .then(res => res.json())
            .then(data => setAllapps(data))
            .catch(err => console.log(err))
    }

    function getusers() {
        fetch(`${process.env.BASE_URL}/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    return {
        user,
        allapps,
        users,
        loading,
        getallapps,
        getusers,
        login,
        logout
    }
}