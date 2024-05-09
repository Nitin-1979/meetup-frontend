import ApiCallUrl from './ApiCallUrl';
import axios from 'axios';

const username = 'nitin@kumar';
const password = 'nitin';

async function ApiService(basePoint, endPoint, methodType, reqBody) {
    try {
        const response = await axios({
            url: ApiCallUrl(basePoint, endPoint),
            method: methodType,
            headers: {
                'Content-Type': 'application/json'
            },
            data: reqBody,
            auth: {
                username: username,
                password: password
            },
        });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export default ApiService;