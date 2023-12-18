import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '@style/Admin/Admin.css'
import PanelLog from '@components/Admin/PanelLog'
import PanelPersonal from '@components/Admin/PanelPersonal'
import PanelSkills from '@components/Admin/PanelSkills'
import PanelUM from '@components/Admin/PanelUM'
import PanelProjects from '@components/Admin/PanelProjects'

function Admin() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [toggleFetch, setToggleFetch] = useState(false);
  const navigate = useNavigate();
  const [ selectedButton, setSelectedButton] = useState('personal')
  useEffect(()=>{
    const accessToken = localStorage.getItem('access_token')
    if ( accessToken === null ){
      // window.location.replace('/admin');
      navigate('/admin/login', { replace: true });
    }
  }, []);
  const logout = ()=>{
    localStorage.removeItem('access_token')
    navigate('/admin/login', { replace: true });
  }
  const changeContent = ()=>{
    if ( selectedButton == 'personal') {
      return <PanelPersonal />
    } else if ( selectedButton == 'skills') {
      return <PanelSkills />
    } else if ( selectedButton == 'projects') {
      return <PanelProjects />
    } else if ( selectedButton == 'log') {
      return <PanelLog />
    } else if ( selectedButton == 'um') {
      return <PanelUM />
    }
  }
  return(
    <div className='panelPage'>
      <div className="leftNavbar">
        <div className="header">
          <h1>Panel</h1>
        </div>
        <div className="navList">
          <div className="top">
            <button className={selectedButton==='personal'?'navSelect':''} onClick={()=>setSelectedButton('personal')}><i class="fa-regular fa-address-card"></i>Personal</button>
            <button className={selectedButton==='skills'?'navSelect':''} onClick={()=>setSelectedButton('skills')}><i class="fa-solid fa-book"></i>Skills</button>
            {/* <button><i class="fa-regular fa-address-card"></i>Contact</button> */}
            <button className={selectedButton==='projects'?'navSelect':''} onClick={()=>setSelectedButton('projects')}><i class="fa-regular fa-file-code"></i>Projects</button>
            <button className={selectedButton==='log'?'navSelect':''} onClick={()=>setSelectedButton('log')}><i class="fa-regular fa-rectangle-list"></i>Log Access</button>
            <button className={selectedButton==='um'?'navSelect':''} onClick={()=>setSelectedButton('um')}><i class="fa-regular fa-user"></i>User Management</button>
          </div>
          <div className="bottom">
            <button className='nav-logout' onClick={logout}><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</button>
          </div>
        </div>
      </div>
      <div className="rightPanel">
        <div className="header">
          <h1>Hi, Zachtix</h1>
        </div>
        <div className="panelBox">
          {/* <button onClick={() => setToggleFetch(prev => !prev)}>Toggle Fetch</button> */}
          {changeContent()}
          {/* <PanelPersonal /> */}
          {/* <PanelSkills /> */}
          {/* <PanelProjects /> */}
          {/* <PanelLog /> */}
          {/* <PanelUM /> */}
        </div>
      </div>
    </div>
  )
}

export default Admin