import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);
    const [person, setPerson] = useState(null);
    const [allapps, setAllapps] = useState(null)
    const [users, setUsers] = useState(null);
    const [update, setupdate] = useState(true);

    useEffect(() => {
        // for refresh purpose
        me();
    }, [])

    function login(user) {
        setUser(user);
    }

    function logout() {
        fetch(`${process.env.BASE_URL}/user/logout`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        setUser(null);
    }

    function me() {
        fetch(`${process.env.BASE_URL}/user/me`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err))
    }

    function getallapps() {
        fetch(`${process.env.BASE_URL}/app`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setAllapps(data))
            .catch(err => console.log(err))
    }

    function getusers() {
        fetch(`${process.env.BASE_URL}/users`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    return {
        user,
        allapps,
        users,
        getallapps,
        getusers,
        login,
        logout,
        person,
        setPerson,
        update,
        setupdate,
    }
}