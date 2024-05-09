import ApiCallUrl from './ApiCallUrl';
import axios from 'axios';


async function ApiService(basePoint, endPoint, methodType, reqBody, auth) {
    try {
        const response = await axios({
            url: ApiCallUrl(basePoint, endPoint),
            method: methodType,
            headers: {
                'Content-Type': 'application/json'
            },
            data: reqBody,
            auth: {
                username: auth.username,
                password: auth.password
            },
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export default ApiService;