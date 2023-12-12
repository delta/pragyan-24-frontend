import { Configuration } from '../../fest-web-client/client/src';
import { API_URL, HOME_URL, PREFER_DEV_OVERRIDE } from '../config/config';
export class ApiError extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const apiConfig = new Configuration({
    basePath: API_URL,
    headers: PREFER_DEV_OVERRIDE ? { Prefer: PREFER_DEV_OVERRIDE } : {},
    middleware: [
        {
            pre: async context => {
                const headers = context.init.headers;
                context.init.headers = {
                    ...headers,
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                };
                return context;
            },
            post: async context => {
                const statusCode = context.response.status;
                if (statusCode === 401 || statusCode === 403) {
                    localStorage.removeItem('token');
                    window.location.href = `${HOME_URL}/login`;
                    // window.location.reload();
                }
                if (statusCode >= 400) {
                    const body = await context.response.json();
                    throw new ApiError(statusCode, body?.message ?? 'Unknown error');
                }
                return context.response;
            },
        },
    ],
});

export const authConfig = new Configuration({
    basePath: API_URL,
    headers: PREFER_DEV_OVERRIDE ? { Prefer: PREFER_DEV_OVERRIDE } : {},
    middleware: [
        {
            post: async context => {
                const status = context.response.status;
                if (status >= 400) {
                    const body = await context.response.json();
                    throw new ApiError(status, body?.message ?? 'Unknown error');
                }
                return context.response;
            },
        },
    ],
});
