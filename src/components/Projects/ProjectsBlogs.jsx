import { useEffect, useState } from 'react'
import '../../style/Projects/ProjectsBlogs.css'
import axios, { Axios } from 'axios';
// import useAxios from '../services/useAxios'
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem'

function ProjectsBlogs(props) {
  const { projects } = props;
  return(
    <>
      <div className="warpper">
        <div className="projectBlogs" id='projects'>
          <div className="header">
            <h3>Projects</h3>
          </div>
          {/* <div className="btn-group">
            <button className="btn btn-select">Web</button>
            <button className="btn">Game</button>
            <button className="btn">Tool</button>
          </div> */}
          <div className="blogs">
            {projects.map(i=>{
              if (i.onShow === 'true') {
                return <ProjectItem project={i} key={i.id}/>
                // console.log(i);
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsBlogs