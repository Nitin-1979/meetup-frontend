import Login from './login/Login';
import './App.css';
import { Routes, Route } from "react-router-dom"
import SignUp from './login/Signup';
import Home from './home/home';
import meetupLogo from '../assests/img/meetupLogo.svg'
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <div className='flex gap-20'>
        <div className='h-5 w-5'>
        <Link to=""> <img src={meetupLogo} alt="Description of the image" /></Link>
        </div>
        <div className='flex gap-3'>
          <div><Link to="signup">SignUp</Link></div>
          <div><Link to="about">About</Link></div>
        </div>
      </div>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <SignUp/> } />
      </Routes>
    </div>
  );
}

export default App;
