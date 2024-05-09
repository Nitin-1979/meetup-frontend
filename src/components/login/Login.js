// import './App.css';
import Button from '@mui/material/Button';
import ApiService from '../../services/apiService';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  let response = {};
  let statusCode;
  const navigate = useNavigate();
  
  async function fetchData() {
    try {
        let res = await ApiService("user", "user", "get");
        response = res;
        response.statusCode =  res.status;
        response.data =  res.data;
    } catch (error) {
        console.error(error);
    }
  }
  const handleLoginClick = async () => {
    await fetchData();
    if(response.statusCode == 200){
      navigate('/home');
    }else{
      navigate('/signup')
    }
  }
  
  return (
    <div className="App">
      <div>
        Login
      </div>
      <div>
        <div className='flex justify-center gap-10 mt-3.5'>
          <TextField id="standard-basic" label="Email/Mobile Number" variant="standard" value={userName} onChange={(event)=>{ setUserName(event.target.value)}}/>
          <TextField
            id="standard-password-input"
            label="Password"
            variant="standard"
            type="password"
            autoComplete="current-password"
            value={password} onChange={(event)=>{ setPassword(event.target.value)}}
          />
        </div>
        <div className='flex justify-center mt-3.5'>     
          <Button variant="contained" onClick={handleLoginClick}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
