import axios from 'axios';
import { useEffect, useState } from 'react';
import '@style/Admin/PanelSkills.css'

function PanelSkills() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ skillsData, setSkillsData] = useState([])
  useEffect(()=>{
    axios.get(VITE_API_ENDPOINT+'/getskills')
    .then(response => {
      setSkillsData(response.data)
    })
  }, []);
  const clickDelete = (id)=>{
    const accessToken = localStorage.getItem('access_token')
    axios.delete(VITE_API_ENDPOINT+'/deleteskill',
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

export default PanelSkills