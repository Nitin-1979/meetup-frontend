import ApiCallUrl from './ApiCallUrl';
import axios from 'axios';


async function ApiService(basePoint, endPoint, methodType, reqBody, auth) {
    try {
        const axiosConfig = {
            url: ApiCallUrl(basePoint, endPoint),
            method: methodType,
            headers: {
                'Content-Type': 'application/json'
            },
            data: reqBody,
        };

        if (auth && auth.username && auth.password) {
            axiosConfig.auth = {
                username: auth.username,
                password: auth.password
            };
        }

        const response = await axios(axiosConfig);
        return response;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export default ApiService;