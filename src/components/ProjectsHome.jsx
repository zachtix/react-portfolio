import '../style/ProjectsHome.css'
import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem'

function ProjectsHome(props) {
  const { projects } = props;
  // const [ projects, setProjects ] = useState([]);
  // useEffect(() => {
  //   axios.get('http://45.91.133.158:8000/projectitems')
  //   .then((res) => {
  //     setProjects(res.data);
  //   });
  // }, []);
  return(
    <>
      <div className="warpper">
        <div className="projectHome" id='projects'>
          <div className="header">
            <h3>Projects</h3>
          </div>
          <div className="blogs">
            {projects.map(i=>{
              if (i.showHome === 'true') {
                // return(
                //   <div className="card">
                //     <div className="imageBox">
                //       <img src={i.thumbnailUrl} alt="image project Thumbnaill" />
                //     </div>
                //     <div className="content">
                //       <h3>{i.title}</h3>
                //       <div className="stacks">
                //         {/* <p>Javascript</p>
                //         <p>ReactJS</p>
                //         <p>ExpressJS</p>
                //         <p>MySQL</p> */}
                //         {i.stacks.split(',').map(v=><p>{v}</p>)}
                //       </div>
                //       <p className='description'>{i.thumbnailDes}</p>
                //     </div>
                //     {/* <a href="" className="btn-read">Read</a> */}
                //     <Link className="btn-read" to={"/project/"+i.id}>Read</Link>
                //   </div>
                // )
                
                return <ProjectItem project={i} key={i.id}/>
              }
            })}
            {/* <div className="card">
              <div className="imageBox">
                <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image project Thumbnaill" />
              </div>
              <div className="content">
                <h3>Title Project</h3>
                <div className="tags">
                  <p>Javascript</p>
                  <p>ReactJS</p>
                  <p>ExpressJS</p>
                  <p>MySQL</p>
                </div>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus provident ipsum omnis in voluptate eius voluptates hic dolorem ex earum.</p>
              </div>
            </div>
            <div className="card">
              <div className="imageBox">
                <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image project Thumbnaill" />
              </div>
              <div className="content">
                <h3>Title Project</h3>
                <div className="tags">
                  <p>Javascript</p>
                  <p>ReactJS</p>
                  <p>ExpressJS</p>
                  <p>MySQL</p>
                </div>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus provident ipsum omnis in voluptate eius voluptates hic dolorem ex earum.</p>
              </div>
            </div> */}
          </div>
          {/* <a href="/projects" className="btn see-projects">See All Projects</a> */}
          <Link to='/projects' className='btn see-projects'>See All Projects</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectsHome