import { useEffect, useState } from 'react'
import '@style/Projects/ProjectsBlogs.css'
import axios, { Axios } from 'axios';
// import useAxios from '@services/useAxios'
import { Link } from 'react-router-dom';
import ProjectItem from '@components/Projects/ProjectItem'

function ProjectsBlogs(props) {
  const { projects } = props;
  const [topItems, setTopItems] = useState([]);
  const [remainingItems, setRemainingItems] = useState([]);
  useEffect(() => {
    const top = []
    const remain = []
    projects.map(e=>{
      if (e.onTop == 'true') {
        top.push(e)
        console.log('item true');
      } else {
        remain.push(e)
        console.log('item false');
      }
    })
    setTopItems(top);
    setRemainingItems(remain);
  }, [projects])
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
            {topItems.map(i=>{
              if (i.onShow === 'true') {
                return <ProjectItem project={i} key={i.id}/>
              }
            })}
            {remainingItems.map(i=>{
              if (i.onShow === 'true') {
                return <ProjectItem project={i} key={i.id}/>
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsBlogs