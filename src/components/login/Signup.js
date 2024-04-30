import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
function SignUp() {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [dob, setDob] = useState(dayjs(''));
    const [perferences, setPerferences] = useState([]);
    const choiceOptions = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleSignUp=()=>{
      const date = new Date(dob);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      console.log(firstName,lastName,email,password,formattedDate,perferences);
     
    }
    const handleReset=()=>{
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setDob(dayjs(''));
      setPerferences([])
    }
    return (
      <div className="App">
        <div>
          SignUp
        </div>
        <div className='grid justify-center'>
          <div className='flex gap-10'>
            <TextField id="standard-basic" label="First Name" variant="standard" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            <TextField id="standard-basic" label="Last Name" variant="standard" value={lastName}  onChange={(event) => setLastName(event.target.value)}/>
          </div>
          <div className='flex gap-10 mt-3'>
            <TextField id="standard-basic" label="Email/Mobile Number" variant="standard" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='flex mt-3 justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={dob} onChange={(newValue) => setDob(newValue)}/>
            </LocalizationProvider>
          </div>
          <div className='mt-3'>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              value={perferences}
              isMulti
              onChange={(event) => setPerferences(event)}
              options={choiceOptions}
            />
          </div>
          <div className='flex gap-3.5 mt-3 ml-28'>
            <Button variant="outlined" onClick={handleReset}>Reset</Button>
            <Button variant="contained" onClick={handleSignUp}>SignUp</Button>
          </div>
          <div className='flex mt-3 justify-center'>
            <div><Link to="/login">Already Signed Up? Log In</Link></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  