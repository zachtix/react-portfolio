import axios from 'axios';
import { useEffect, useState } from 'react';
import '@style/Admin/PanelProjects.css'
import '@style/Admin/FormProject.css'
import EditProject from '@components/Admin/EditProject'
import AddProject from '@components/Admin/AddProject'

function PanelProjects() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ projectsData, setProjectsData] = useState([])
  const [ edit, setEdit] = useState(false)
  const [ addProject, setAddProject] = useState(false);
  const [ item, setItem] = useState([])
  useEffect(()=>{
    axios.get(VITE_API_ENDPOINT+'/getprojects')
    .then(response => {
      setProjectsData(response.data)
    })
  }, [edit, addProject]);
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
      alert(response.data.msg);
    });
  }
  const clickEdit = (item)=>{
    setItem(item)
    setEdit((prevEdit) => !prevEdit);
  }
  const clickAdd = ()=>{
    setAddProject((prevEdit) => !prevEdit);
  }
  const handleContent = ()=>{
    if (addProject) {
      return <AddProject onAddProject={() => setAddProject(false)} />;
    } else if (edit) {
      return <EditProject item={item} clickEdit={clickEdit} />
    }
    else {
      return(
        <>
        <h1>Projects</h1>
          <button onClick={clickAdd}>Add Project</button>
        <div className="boxProjects">
          {projectsData.map((e)=>(
            <div className='boxProject'>
              <div className="detail">
                <p>
                  {e.onShow=='true'? <i class="fa-solid fa-circle" style={{color: "lightgreen"}}></i>:<i class="fa-solid fa-circle" style={{color: "red"}}></i>}
                  {e.title}
                </p>
                <img src={e.thumbnailUrl} alt="" />
              </div>
              {/* <p>{e.onShow}</p> */}
              <div className="btn-group">
                <button className="btn-edit" onClick={()=>clickEdit(e)}>Edit</button>
                <button className="btn-delete" onClick={()=>clickDelete(e.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        </>
      )
    }
  }
  return(
    <>
      {handleContent()}
    </>
  )
}

export default PanelProjects