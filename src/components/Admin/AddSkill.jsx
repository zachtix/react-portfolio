import axios from 'axios';
import { useEffect, useState } from 'react';

function AddSkill({ onAddSkill }) {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [item, setItem] = useState({
    id:'',
    skill:'',
    level:'',
    iconUrl:'',
    iconName:'',
    description:'',
    onShow:'true'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleSave = () => {
    const accessToken = localStorage.getItem('access_token')
    axios.post(VITE_API_ENDPOINT+'/addskill', item, 
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
      }
    })
    .then((response) => {
      alert(response.data.msg);
      onAddProject();
    }).catch(error=>{
      alert(error.response.data.msg);
    });
  };
  return(
    <>
    <h1>Add Skill</h1>
    <div className="addForm">
      <div className="inputBox">
        <label htmlFor="">Skill</label>
        <input type="text" value={item.skill} name="skill" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Level</label>
        <input type="text" value={item.level} name="level" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Icon URL</label>
        <img src={item.iconUrl} alt="" />
        <input type="text" value={item.iconUrl} name="iconUrl" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Icon Name</label>
        <input type="text" value={item.iconName} name="iconName" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Description</label>
        <input type="text" value={item.description} name="description" onChange={handleInputChange} />
      </div>
      {/* <div className="inputBox">
        <label htmlFor="">Show Skill</label>
        <input type="text" value={item.onShow} name="onShow" onChange={handleInputChange} />
      </div> */}
      <div className="choiceBoxs">
        <div className="inputBox">
          <label htmlFor="">Show Skill</label>
          {/* <input type="text" value={item.onShow} name="onShow" onChange={handleInputChange} /> */}
          <select name="onShow" onChange={handleInputChange}>
            <option value="true" selected={item.onShow == 'true'? 'selected':''} >True</option>
            <option value="false" selected={item.onShow == 'false'? 'selected':''} >False</option>
          </select>
        </div>
      </div>
      <div className="btn-submit">
        <button onClick={handleSave}>Add</button>
        <button onClick={()=>onAddSkill()}>Close</button>
      </div>
    </div>
    </>
  )
}

export default AddSkill