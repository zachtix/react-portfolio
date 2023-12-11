import { useState, useEffect  } from 'react'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './components/404'
import Contact from './pages/Contact'
import Project from './components/Project'
import useAxios from './services/useAxios'
import Dashboard from './pages/DashBoard'
import axios from 'axios';
function App() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ personaldata, setPersonaldata ] = useState([]);
  const [ projects, setProjects ] = useState([]);
  useEffect(() => {
    axios.get(VITE_API_ENDPOINT+'/getpersonaldata')
    .then((res) => {
      setPersonaldata(res.data[0]);
    });
    axios.get(VITE_API_ENDPOINT+'/getprojects')
    .then((res) => {
      setProjects(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home  data={personaldata} projects={projects}/>} />

          <Route path="/projects" element={<Projects projects={projects}/>} />
          <Route path="/project/:projectId" element={<Project data={projects}/>} />

          <Route path="/contact" element={<Contact data={personaldata}/>} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
    <Footer />
    </div>
  )
}

export default App
