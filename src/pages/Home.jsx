import Section from '../components/Home/Section'
import About from '../components/Home/About'
import ProjectsHome from '../components/Home/ProjectsHome'
import Skills from '../components/Home/Skills'
import { useEffect } from 'react';
import axios from 'axios';

function Home(props) {
  const { personaldata, projects, skills } = props;
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
      <Section personaldata={personaldata}/>
      <About personaldata={personaldata}/>
      <ProjectsHome projects={projects}/>
      <Skills skills={skills} />
    </>
  )
}

export default Home