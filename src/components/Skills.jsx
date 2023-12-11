import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import '../style/Skills.css'

function Skills() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ skills, setSkills ] = useState([]);
  useEffect(() => {
    axios.get(VITE_API_ENDPOINT+'/getskills')
    .then((res) => {
      setSkills(res.data);
    });
  }, []);
  return(
    <>
      <div className="warpper">
        <div className="skills" id='skills'>
          <div className="header">
            <h3>Skills</h3>
          </div>
          <div className="cards">
            {skills.map(i=>{
              if (i.onShow === 'true') {
                return(
                  <div className="card" key={i.id}>
                    <img src={i.iconUrl} alt="" />
                    <p>{i.skill}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills