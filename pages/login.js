import axios from 'axios'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_AUTH } from '../config/creds'
import { SERVER_URL } from '../config/creds'
import { getCookie, removeCookie, setCookie } from '../utils/utils'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        let token = getCookie('token');
        if (token)
            setIsLoggedIn(true);
        else
            setIsLoggedIn(false);
    }, [])

    const loginSuccess = ({ tokenId }) => {
        axios({
            url: `${SERVER_URL}/auth/google`,
            method: 'POST',
            data: {
                idtoken: tokenId
            }
        }).then((result) => {
            setCookie('token', result.data.token);
            Router.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    const loginFailed = (response) => {
        console.log(response);
    }

    const logOut = (response) => {
        removeCookie('token');
        setIsLoggedIn(false)
    }

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center p-2">
            <div className="mx-auto bg-white bg-white max-w-md shadow-xl rounded-xl p-2">
                <div className="p-6">
                    <img src="https://www.baruzotech.com/wp-content/uploads/2020/06/Layer-2.png" />
                </div>
                <div className="text-center mb-1">
                    {isLoggedIn ?
                        <GoogleLogout clientId={GOOGLE_AUTH.CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={logOut}
                        />
                        :
                        <GoogleLogin className="font-extrabold"
                            clientId={GOOGLE_AUTH.CLIENT_ID}
                            buttonText="Login"
                            onSuccess={loginSuccess}
                            onFailure={loginFailed}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
