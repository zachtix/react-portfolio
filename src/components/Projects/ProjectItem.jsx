import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectItem(props) {
  const { project } = props;
  const [ thumImg, setThumImg ] = useState('')
  useEffect(() => {
    if (project.typeContent == 'video') {
      setThumImg ("https://img.youtube.com/vi/"+project.contents+"/0.jpg")
    } else if (project.thumbnailUrl == null) {
      setThumImg ("https://placehold.co/600x400?text=No+Image")
    } else {
      setThumImg (project.thumbnailUrl)
    }
  });
  return(
    <>
    <div className="card">
      <div className="imageBox">
        <img src={thumImg} alt="image project Thumbnaill" />
      </div>
      <div className="content">
        <h3>{project.title}</h3>
        <div className="stacks">
          {project.stacks.split(',').map(v=><p key={v}>{v}</p>)}
        </div>
        <p className='description'>{project.thumbnailDes}</p>
      </div>
      <Link className="btn-read" to={"/project/"+project.id}>See</Link>
    </div>
    </>
  )
}

export default ProjectItem