import React, { createContext, useCallback, useState, useEffect, ReactNode } from 'react';
import { API_URL } from '../config/config';

export const userContext = createContext<UserContext>({
    isLoggedIn: false,
    loadingAuth: true,
    userID: undefined,
    userName: undefined,
    qrCode: undefined,
    setUserName: () => undefined,
    setIsLoggedIn: () => false,
    setuserID: () => undefined,
    userData: null,
});

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [userID, setuserID] = useState<number | undefined>();
    const [userName, setUserName] = useState<string | undefined>();
    const [qrCode, setQr] = useState<string | undefined>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
    const [userData, setUserData] = useState<UserContext['userData']>(null);

    const isAuth = useCallback(() => {
        setLoadingAuth(true);
        fetch(`${API_URL}/user/details`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(response => {
                if (response.status_code === 401) {
                    setIsLoggedIn(false);
                } else {
                    setIsLoggedIn(true);
                }
                setLoadingAuth(false);
                setUserData(response.message);
            })
            .catch(e => {
                console.log(e);
                setLoadingAuth(false);
            });
    }, [userID]);

    const getQr = useCallback(() => {
        fetch(`${API_URL}/pr/qr`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status_code === 200) {
                    setQr(data.message);
                } else setQr('');
            })
            .catch(e => console.log(e));
    }, [loadingAuth, isLoggedIn]);

    useEffect(() => {
        isAuth();
        getQr();
    }, [isAuth]);

    return (
        <userContext.Provider
            value={{
                setIsLoggedIn,
                setuserID,
                setUserName,
                isLoggedIn,
                loadingAuth,
                userID,
                userName,
                qrCode,
                userData,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider;
