import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/Project.css'
import axios, { Axios } from 'axios';

function Project(props) {
  const { data } = props;
  const { projectId } = useParams();
  useEffect(()=>{
    const funcSeachProject = ()=>{
      for(let i=0;i<data.length;i++){
        if (data[i].id == projectId){
          setProject(data[i])
          break
        }
      }
    }
    funcSeachProject();
  });

  const [ project, setProject] = useState([])
  const [ images, setImages ] = useState([])
  const [ stacks, setStacks] = useState([])
  const [ btnGitHub, setBtnGitHub ] = useState()
  const [ btnLiveSite, setBtnLiveSite ] = useState()
  useEffect(()=>{
    try {
      if (project.contents=== null) {
        return ["https://placehold.co/600x400?text=No+Image"]
      } else {
        const contentArr = project.contents.split(',');
        setImages(contentArr)
      }
      if (project.liveSite !== null) {
        setBtnLiveSite(<p className=''><strong>Project URL: </strong><a href={project.liveSite} target='_blank'>Live Site</a></p>)
      }
      if (project.repo !== null) {
        setBtnGitHub(<p className=''><strong>Repository : </strong><a href={project.repo} target='_blank'>Github</a></p>)
      }
      const contentArr = project.stacks.split(',');
      setStacks(contentArr)
    }catch {}
  }, [project]);
  useEffect(() => {
    if (localStorage.getItem('owner') !== 'true'){
      axios.get('https://api.ipify.org?format=json')
      .then((resIP)=>{
        axios.post('http://45.91.133.158:8000/access', {
          'ip':resIP.data.ip,
          'page': '/project/'+projectId
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
      <div className="warpper">
        <div className="projectCard">
          <div className="header">
            <Link to='/projects'><i class="fa-solid fa-arrow-left"></i></Link>
            <h1>{project.title}</h1>
          </div>
          <div className="contents">
            <div className="imagesContent">
              {images.map(img=>(
                <img src={img} alt="" className="" />
              ))}
            </div>
            <div className="content">
              <h2>Project Infomation</h2>
              <hr />
              <h3>Category: {project.tag}</h3>
              <h3 className='stacks'>Stack: {stacks.map(e=>(
                <p>{e}</p>
              ))}</h3>
              {btnLiveSite}
              {btnGitHub}
              <hr />
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project