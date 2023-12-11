import { useState, useEffect } from 'react';
import '../style/Contact.css'
import axios, { Axios } from 'axios';

function Contact(props) {
  const { data } = props;
  useEffect(() => {
    if (localStorage.getItem('owner') !== 'true'){
      axios.get('https://api.ipify.org?format=json')
      .then((resIP)=>{
        axios.post('http://45.91.133.158:8000/access', {
          'ip':resIP.data.ip,
          'page': '/contact'
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });
  return(
    <>
    <div className="warpper">
      <div className="contact">
        <div className="imageBox">
          <img src={data.contactImage} alt="" />
        </div>
        <div className="content">
          <h1>{data.name}</h1>
          <h5><i class="fa-solid fa-location-pin"></i> {data.location}</h5>
          <h3><i class="fa-solid fa-mobile-screen"></i> {data.phone}</h3>
          <h3><i class="fa-solid fa-envelope"></i> {data.email}</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact