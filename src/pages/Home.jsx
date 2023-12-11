// import Navbar from '../components/Navbar'
import Section from '../components/Section'
import About from '../components/About'
import ProjectsHome from '../components/ProjectsHome'
import Skills from '../components/Skills'
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
// import Footer from '../components/Footer'

function Home(props) {
  const { data, projects } = props;
  useEffect(() => {
    if (localStorage.getItem('owner') !== 'true'){
      axios.get('https://api.ipify.org?format=json')
      .then((resIP)=>{
        axios.post('http://45.91.133.158:8000/access', {
          'ip':resIP.data.ip,
          'page': '/'
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });
  return(
    <>
      <Section data={data}/>
      <About data={data}/>
      <ProjectsHome projects={projects}/>
      <Skills />
    </>
  )
}

export default Home