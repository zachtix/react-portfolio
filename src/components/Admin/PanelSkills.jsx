import axios from 'axios';
import { useEffect, useState } from 'react';
import '@style/Admin/PanelSkills.css';
// import '@style/Admin/FormSkill.css';
import '@style/Admin/FormProject.css'
import EditSkill from '@components/Admin/EditSkill';
import AddSkill from '@components/Admin/AddSkill';

function PanelSkills() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ skillsData, setSkillsData] = useState([])
  const [ edit, setEdit] = useState(false)
  const [ addSkill, setAddSkill ] = useState(false);
  const [ item, setItem] = useState([])
  useEffect(()=>{
    axios.get(VITE_API_ENDPOINT+'/getskills')
    .then(response => {
      setSkillsData(response.data)
    })
  }, [edit, addSkill]);
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
    setAddSkill((prevEdit) => !prevEdit);
  }
  const handleContent = ()=>{
    if (addSkill) {
      return <AddSkill onAddSkill={() => setAddSkill(false)} />;
    } else if (edit) {
      return <EditSkill item={item} clickEdit={clickEdit} />
    }
    else {
      return(
        <>
        <h1>Skills</h1>
          <button onClick={clickAdd}>Add Skill</button>
        <div className="boxSkills">
          {skillsData.map((e)=>(
            <div className='boxSkill'>
              <div className="detail">
                <p>
                  {e.onShow? <i class="fa-solid fa-circle" style={{color: "lightgreen"}}></i>:<i class="fa-solid fa-circle" style={{color: "red"}}></i>}
                  {e.skill}
                </p>
                <img src={e.iconUrl} alt="" />
              </div>
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

export default PanelSkills