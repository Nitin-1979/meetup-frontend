// import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleLoginClick = () =>{
    console.log(userName,password);
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
