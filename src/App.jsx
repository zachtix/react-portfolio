import { useState, useEffect  } from 'react'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from '@pages/Home'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import ErrorPage from '@pages/404'
import AdminRoutes from '@/AdminRoutes'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Project from '@pages/Project'
// import useAxios from '@services/useAxios'
import axios from 'axios';

function App() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ personaldata, setPersonaldata ] = useState([]);
  const [ projects, setProjects ] = useState([]);
  const [ skills, setSkills ] = useState([]);
  useEffect(() => {
    axios.get(VITE_API_ENDPOINT+'/getpersonaldata')
    .then((res) => {
      setPersonaldata(res.data[0]);
    });
  }, []);
  useEffect(() => {
    axios.get(VITE_API_ENDPOINT+'/getprojects')
    .then((res) => {
      setProjects(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(VITE_API_ENDPOINT+'/getskills')
    .then((res) => {
      setSkills(res.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" exact element={
          <>
            <Navbar />
            <Home  personaldata={personaldata} projects={projects} skills={skills} />
            <Footer />
          </>
        } />
        
        <Route path="/projects" element={
          <>
            <Navbar />
            <Projects projects={projects}/>
            <Footer />
          </>
        } />
        <Route path="/project/:projectId" element={
          <>
            <Navbar />
            <Project data={projects}/>
            <Footer />
          </>
        } />
        
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact data={personaldata}/>
            <Footer />
          </>
        } />
        
        <Route path="/admin/*" element={
          <AdminRoutes />
        } />
        
        <Route path="*" element={
          <>
            <Navbar />
            <ErrorPage />
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App