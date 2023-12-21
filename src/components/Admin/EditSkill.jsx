import { useState } from 'react'
import axios from 'axios';

function EditSkill(props) {
  const { VITE_API_ENDPOINT } = import.meta.env
  //destructuring 
  const { id, skill, level, iconUrl, iconName, description, onShow } = props.item;
  const [item, setItem] = useState({
    id, skill, level, iconUrl, iconName, description, onShow
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
    axios.put(VITE_API_ENDPOINT+'/editskill', item, 
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
      }
    })
    .then((response) => {
      alert(response.data.msg);
      props.clickEdit();
    }).catch(error=>{
      alert(error.response.data.msg);
    });
  };
  return(
    <>
    <h1>Edit {skill}</h1>
    <div className="editForm">
      <div className="inputBox">
        <label htmlFor="">ID</label>
        <input className='inputID' type="text" value={id} />
      </div>
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
        <button onClick={handleSave}>Save</button>
        <button onClick={props.clickEdit}>Close</button>
      </div>
    </div>
    </>
  )
}

export default EditSkill