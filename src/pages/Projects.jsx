import { useEffect } from 'react';
import ProjectsBlogs from '../components/ProjectsBlogs'
import axios, { Axios } from 'axios';

function Projects(props) {
  const { projects } = props;
  useEffect(() => {
    if (localStorage.getItem('owner') !== 'true'){
      axios.get('https://api.ipify.org?format=json')
      .then((resIP)=>{
        axios.post('http://45.91.133.158:8000/access', {
          'ip':resIP.data.ip,
          'page': '/projects'
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
      <ProjectsBlogs projects={projects}/>
    </>
  )
}

export default Projects