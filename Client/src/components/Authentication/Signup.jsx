import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import lscss from './loginsignup.module.css'
// import useNavigate from 'react-router-dom'


function LoginSignup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigateTo = useNavigate();
  // const [copassword, setCoPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the server
    Axios.post('http://localhost:3000/api/signup', {
      username, email, password
    }) .then((response) => {
      console.log(response)
      // navigateTo('/auth/login')
    }).catch((error) => {
      console.log(error);
    })
  }

  // const handleCoPasswordChange = (e) => {
  //   setCoPassword(e.target.value);
  // }


  return (
    <>
    <div className={`${lscss.fullpage}`}>
    <Link to="/"><button className={`${lscss.Backbtn}`}>Back</button></Link>
    <br /><br />
    <div className={`${lscss.container}`}>
      <div className={`${lscss.welcome}`}>
        <h1>Welcome to the ArtVista !</h1>
        <p>The One and only Enthusiastic platform to browse and share your talent</p>
        <p>Get Started by filling this form and create your account</p>
        <p>Already have an account? <Link to="/auth/login">Login</Link></p>
      </div>
    <div className={`${lscss.signup}`}>
        <h2>SignUp</h2>
        <form className={`${lscss.form}`} onSubmit={handleSubmit}>
            <div className={`${lscss.formdiv}`}>
              <label className={`${lscss.labeltxt}`} htmlFor="username">Username:</label>
              <input
              className={`${lscss.inputbox}`} 
              type='text' 
              placeholder='username' 
              onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className={`${lscss.formdiv}`}>
              <label className={`${lscss.labeltxt}`} htmlFor="email">Email:</label>
              <input
              className={`${lscss.inputbox}`} 
              type='email' 
              placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
            <div className={`${lscss.formdiv}`}>
              <label className={`${lscss.labeltxt}`} htmlFor="password">Password:</label>
              <input
              className={`${lscss.inputbox}`} 
              type='text' 
              placeholder='******' 
              onChange={(e) => setPassword(e.target.value)}/>
            </div>

            {/* <div className={`${lscss.formdiv}`}>
              <label className={`${lscss.labeltxt}`} htmlFor="password">Confirm Password:</label>
              <input
              className={`${lscss.inputbox}`} 
              type='text' 
              placeholder='******' 
              onChange={handleCoPasswordChange}/>
            </div> */}

            <div>
            <button className={`${lscss.submitbtn}`} type='submit'>Sign up</button>
            <Link to="/auth/login"><button className={`${lscss.sidebtn}`}>Already a user ?</button></Link>
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default LoginSignup;