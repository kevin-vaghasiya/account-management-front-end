import { useEffect, useState } from 'react'
import { getCookie } from '../utils/utils'
import Router from 'next/router'

const PrivateRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        let token = getCookie('token');
        token && setIsLoggedIn(true);
        if (!token)
            Router.push('/login')
    }, [])
    return (
        <>
            { isLoggedIn && children}
        </>
    )
}

export default PrivateRoute
