import axios from 'axios';
import { useEffect, useState } from 'react';
import '@style/Admin/PanelPersonal.css'

function PanelPersonal() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ personalData, setPersonalData ] = useState({})
  useEffect(()=>{
    axios({
      url: VITE_API_ENDPOINT+'/getpersonaldata',
      method: 'get',
      headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
      setPersonalData(response.data[0])
    })
  }, []);
  const submitEdit = ()=>{
    const accessToken = localStorage.getItem('access_token')
    axios.put(VITE_API_ENDPOINT+'/editpersonaldata',
    {
      "name": personalData.name,
      "birthday": personalData.birthday,
      "age": personalData.age,
      "location": personalData.location,
      "phone": personalData.phone,
      "email": personalData.email,
      "motto": personalData.motto,
      "personalRecord": personalData.personalRecord,
      "personalImage": personalData.prosonalImage,
      "contactImage": personalData.contactImage
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
      }
    })
    .then((response) => {
      alert(response.data.msg);
    });
  }
  return(
    <>
    <h1>Personal Data</h1>
    <div className="formEdit">
      <div className="firstForm">
        <div className="inputBox">
          <label htmlFor='name'>ชื่อ-สกุล</label>
          <input id='name' type="text" value={personalData.name} onChange={(e)=>setPersonalData({...personalData, name:e.target.value})} />
        </div>
        <div className="inputBox">
          <label htmlFor='birthday'>วันเกิด</label>
          <input id='birthday' type="text" value={personalData.birthday} onChange={(e)=>setPersonalData({...personalData, birthday:e.target.value})}/>
        </div>
        <div className="inputBox">
          <label htmlFor='age'>อายุ</label>
          <input id='age' type="text" value={personalData.age} onChange={(e)=>setPersonalData({...personalData, age:e.target.value})}/>
        </div>
      </div>
      <div className="secondForm">
        <div className="inputBox">
          <label htmlFor='phone'>เบอร์</label>
          <input id='phone' type="text" value={personalData.phone} onChange={(e)=>setPersonalData({...personalData, phone:e.target.value})}/>
        </div>
        <div className="inputBox">
          <label htmlFor='email'>Email</label>
          <input id='email' type="text" value={personalData.email} onChange={(e)=>setPersonalData({...personalData, email:e.target.value})}/>
        </div>
        <div className="inputBox">
          <label htmlFor='location'>บ้าน</label>
          <input id='location' type="text" value={personalData.location} onChange={(e)=>setPersonalData({...personalData, location:e.target.value})}/>
        </div>
      </div>
      <div className="thirdForm">
        <div className="inputBox">
          <label htmlFor='motto'>คติ</label>
          <input id='motto' type="text" value={personalData.motto} onChange={(e)=>setPersonalData({...personalData, motto:e.target.value})}/>
        </div>
        <div className="inputBox">
          <label htmlFor='record'>About Box</label>
          <input id='record' type="text" value={personalData.personalRecord} onChange={(e)=>setPersonalData({...personalData, personalRecord:e.target.value})}/>
        </div>
      </div>
      <div className="fourForm">
        <div className="imgInput">
          <img src={personalData.prosonalImage} alt="" />
          <div className="inputBox">
            <label id='home-img' htmlFor='home-img'>Home Image</label>
            <input type="text" value={personalData.prosonalImage} onChange={(e)=>setPersonalData({...personalData, prosonalImage:e.target.value})}/>
          </div>
        </div>
        <div className="imgInput">
          <img src={personalData.contactImage} alt="" />
          <div className="inputBox">
            <label htmlFor='contact-img'>Contact Image</label>
            <input id='contact-img' type="text" value={personalData.contactImage} onChange={(e)=>setPersonalData({...personalData, contactImage:e.target.value})}/>
          </div>
        </div>
      </div>
        <button onClick={submitEdit}>Save</button>
    </div>
    </>
  )
}

export default PanelPersonal