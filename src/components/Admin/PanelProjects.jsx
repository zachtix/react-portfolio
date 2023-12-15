import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../style/Admin/PanelProjects.css'

function PanelProjects() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ projectsData, setProjectsData] = useState([])
  useEffect(()=>{
    axios.get(VITE_API_ENDPOINT+'/getprojects')
    .then(response => {
      setProjectsData(response.data)
    })
  }, []);
  const clickDelete = (id)=>{
    const accessToken = localStorage.getItem('access_token')
    axios.delete(VITE_API_ENDPOINT+'/deleteproject',
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
      },
      data: {
        "id": id
      }
    } )
    .then((response) => {
      console.log(response.data);
    });
  }
  return(
    <>
    <h1>Skills</h1>
    <div className="boxProjects">
      {projectsData.map((e)=>(
        <div className='boxProject'>
          <div className="detail">
            <p>{e.title}</p>
            <img src={e.thumbnailUrl} alt="" />
          </div>
          {/* <p>{e.onShow}</p> */}
          <div className="btn-group">
            <button className="btn-edit">Edit</button>
            <button className="btn-delete" onClick={()=>clickDelete(e.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default PanelProjects