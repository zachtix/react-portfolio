import axios from 'axios';
import { useEffect, useState } from 'react';
import '@style/Admin/PanelLog.css'

function PanelLog() {
  const { VITE_API_ENDPOINT } = import.meta.env
  const [ logs, setLogs ] = useState([])
  const accessToken = localStorage.getItem('access_token')
  useEffect(() => {
    axios({
      url: VITE_API_ENDPOINT+'/getlog',
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+accessToken
        }
    })
    .then(response => {
        setLogs(response.data)
        setShouldFetchData(false);
    }).catch(error=>{
      alert(error.response.data.msg);
    });
  }, []);
  return(
    <>
    <h1>Log</h1>
    <table className='tableLog'>
      <tr>
        <th>Date</th>
        <th>IP</th>
        <th>Page</th>
      </tr>
      {logs.map(e=>(
        <tr>
          <td>{e.time}</td>
          <td>{e.ip}</td>
          <td>{e.page}</td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default PanelLog