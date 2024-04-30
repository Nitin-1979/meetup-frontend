// import './App.css';
import meetupLogo from '../../assests/img/meetupLogo.svg'
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="App">
        <div>
          Home
        </div>
        <div className='grid'>
          Feature Provides as of now or working on:
          <ul>
            <li>1. Person can signup / login by filling form </li>
            <li>2. If user is loged in then proceed to user home page </li>
            <li>3. Then can create public and private meetup</li>
            <li>4. For public meetup there will be some form</li>
            <li>5. For private it will same.</li>
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  