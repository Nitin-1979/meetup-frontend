import  ApiCallUrl  from './ApiCallUrl';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const username = 'nitin';
const password = 'kumar';
function ApiService (basePoint,endPoint,methodType,reqBody){
    console.log("methodType",methodType)
    axios({
        url: ApiCallUrl(basePoint,endPoint),
        method: methodType,
        headers: {
            // 'Authorization': 'Basic bml0aW46a3VtYXI=',
            'Content-Type': 'application/json'
        },
        data: reqBody,
        auth: {
            username: username,
            password: password
          },
    })
      .then(response => {
        console.log("sefes",response);
      })
      .catch(error => {
        console.error(error);
      });

}
export default ApiService;