const baseUrl={
    "user": "/api",
}
const endPointUrl={
    "login": "/login",
    "signup": "/signup"
}


function ApiCallUrl(basePoint,endPoint) {
    return "http://localhost:8080" + baseUrl[basePoint]+ endPointUrl[endPoint]
}
export default ApiCallUrl;
