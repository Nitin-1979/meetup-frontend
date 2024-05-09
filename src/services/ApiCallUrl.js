const baseUrl={
    "user": "/api",
}
const endPointUrl={
    "user": "/users",
}


function ApiCallUrl(basePoint,endPoint) {
    return "http://localhost:8080" + baseUrl[basePoint]+ endPointUrl[endPoint]
}
export default ApiCallUrl;
