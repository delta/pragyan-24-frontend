import { useCallback, useContext, useState } from 'react';
import { userContext } from '@/contexts/UserContext';
import { useRouter } from 'next/router';
import { API_URL, DAUTH_CLIENT_ID, DAUTH_REDIRECT_URI } from '@/config/config';

enum AuthStatusEnum {
    PRE,
    START,
    WAITING,
    ACCEPTED,
    REJECTED,
    AUTH,
    ERROR,
}

const DAuthLogin: any = ({ isMobile }: { isMobile: boolean }) => {
    const [authStatus, setAuthStatus] = useState(AuthStatusEnum.PRE);
    const { setuserID, setIsLoggedIn } = useContext(userContext);

    const router = useRouter();

    const generateDauthAuthorizeUrl = () => {
        const dauthAuthorizeURL = new URL('https://auth.delta.nitt.edu/authorize');

        const dauthQueryParameters = {
            client_id: DAUTH_CLIENT_ID,
            redirect_uri: DAUTH_REDIRECT_URI,
            response_type: 'code',
            state: 'code',
            grant_type: 'authorization_code',
            scope: 'email+openid+profile+user',
            nonce: '',
        };

        const appendQueryParametersToURL = (url: URL, queryParams: Object) => {
            Object.keys(queryParams).forEach(query => {
                url.searchParams.append(query, (queryParams as any)[query]);
            });
        };

        appendQueryParametersToURL(dauthAuthorizeURL, dauthQueryParameters);

        return dauthAuthorizeURL;
    };

    const sendAuthCodeToServer = useCallback(async (code: string) => {
        try {
            setAuthStatus(AuthStatusEnum.WAITING);
            //backend url
            fetch(API_URL + '/auth/dauth/web', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: code,
                }),
            })
                .then(async res => {
                    if (res.status != 200) {
                        setAuthStatus(AuthStatusEnum.ERROR);
                    } else {
                        return await res.json();
                    }
                })
                .then(data => {
                    if (data.status_code === 200) {
                        setIsLoggedIn(true);
                        setuserID(data.message.user_id);
                        router.push('/');
                    }
                });
        } catch (err) {
            console.log(err);
            setAuthStatus(AuthStatusEnum.ERROR);
        }
    }, []);

    const BASE_URL = typeof window !== 'undefined' ? window.location.origin : null;

    const receiveMessage = useCallback(
        async (event: MessageEvent) => {
            if (event.origin !== BASE_URL) {
                return;
            }
            const { data } = event;
            if (data.source === 'dauth-login-callback') {
                if (!data.code) {
                    setAuthStatus(AuthStatusEnum.REJECTED);
                } else {
                    setAuthStatus(AuthStatusEnum.ACCEPTED);
                    sendAuthCodeToServer(data.code);
                }
            }
        },
        [BASE_URL, sendAuthCodeToServer],
    );

    const [windowObjectReference, setWindowObjectReference] = useState<Window | null>(null);
    const [previousUrl, setPreviousUrl] = useState<string | null>(null);

    const openSignInWindow = useCallback(
        (url: string, name: string) => {
            window.removeEventListener('message', receiveMessage);

            const strWindowFeatures = isMobile
                ? '_blank'
                : 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

            if (windowObjectReference === null || windowObjectReference.closed) {
                setWindowObjectReference(window.open(url, name, strWindowFeatures));
            } else if (previousUrl !== url) {
                setWindowObjectReference(window.open(url, name, strWindowFeatures));
                windowObjectReference?.focus();
            } else {
                windowObjectReference.focus();
            }
            setAuthStatus(AuthStatusEnum.WAITING);

            window.addEventListener('message', receiveMessage, false);

            setPreviousUrl(url);
        },
        [previousUrl, receiveMessage, windowObjectReference],
    );

    const generateDauthStringAndOpenUrl = useCallback(() => {
        const dauthURL = generateDauthAuthorizeUrl();
        openSignInWindow(dauthURL.toString(), 'dauthURL');
        setAuthStatus(AuthStatusEnum.START);
    }, [openSignInWindow]);
};

export default DAuthLogin;
