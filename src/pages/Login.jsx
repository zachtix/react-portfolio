import '../style/Admin/Login.css'
import imageLogin from '../assets/login-image.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const navigate = useNavigate();
  const [ username, setUser ] = useState('')
  const [ password, setPass ] = useState('')
  const [ rePass, setRePass ] = useState('')
  const [ otherContent, setOtherContent ] = useState(false)
  const handleChangeContent = ()=>{
    if (!otherContent) {
      return(
        <button onClick={submitSignIn}>Sign In</button>
      )
    } else {
      return(
        <>
        <input type="password" class="input-retrypass" placeholder="Re-try Password" value={rePass} onChange={e => setRePass(e.target.value)} maxLength={20}  />
        <button onClick={submitSignUp}>Sign Up</button>
        </>
      )
    }
  }
  const submitSignIn = ()=>{
    axios.post(VITE_API_ENDPOINT+'/login', {
      user: username,
      pass: password
    })
    .then((response) => {
      localStorage.setItem('access_token',response.data.access_token)
      setPass('')
      setRePass('')
      alert('Sign in success');
      navigate('/admin', { replace: true });
    });
  }
  const submitSignUp = ()=>{
    if (password === rePass){
      axios.post(VITE_API_ENDPOINT+'/createuser', {
        user: username,
        pass: password
      })
      .then((response) => {
        // localStorage.setItem('access_token',response.data.access_token)
        console.log(response.data);
        setPass('')
        setRePass('')
        setOtherContent(false)
      });
    } else {
      console.log('pass wrong');
      setPass('')
      setRePass('')
    }
  }
  const handleKeyDown = (e)=>{
    if (e.key === "Enter") { 
      // alert('enter');
      if (!otherContent) {
        submitSignIn()
      } else {
        submitSignUp()
      }
    }
  }
  useEffect(()=>{
    const accessToken = localStorage.getItem('access_token')
    if ( accessToken !== null ){
      // window.location.replace('/admin');
      navigate('/admin', { replace: true });
    }
  }, []);
  return(
    <div class="bg-login">
      <div class="warpper">
        <div class="menu">
          <button class="btn btn-sign-in" onClick={()=>{setOtherContent(false)}}>Sign in</button>
          <button class="btn btn-sign-up" onClick={()=>{setOtherContent(true)}}>Sign up</button>
        </div>
        <div class="content">
          <div class="left-content">
            <h1>Sign In to Admin Panel</h1>
            <img src={imageLogin} alt="" />
          </div>
          <div class="right-content" onKeyDown={handleKeyDown}>
            <input type="text" class="input-user" placeholder="Enter Username" value={username} onChange={e => setUser(e.target.value)} maxLength={20}/>
            <input type="password" class="input-pass" placeholder="Password" value={password} onChange={e => setPass(e.target.value)} maxLength={20} />
            {handleChangeContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login