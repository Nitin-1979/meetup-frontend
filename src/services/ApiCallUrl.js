const baseUrl={
    "user": "http://localhost:8080/api",
}
const endPointUrl={
    "user": "/users",
}


function ApiCallUrl(basePoint,endPoint) {
    return baseUrl[basePoint]+ endPointUrl[endPoint]
}
export default ApiCallUrl;
