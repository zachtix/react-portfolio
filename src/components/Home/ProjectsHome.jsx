import '@style/Home/ProjectsHome.css'
import { Link } from 'react-router-dom';
import ProjectItem from '@components/Projects/ProjectItem'

function ProjectsHome(props) {
  const { projects } = props;
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
                return <ProjectItem project={i} key={i.id}/>
              }
            })}
          </div>
          <Link to='/projects' className='btn see-projects'>See All Projects</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectsHome