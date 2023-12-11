import axios, { Axios } from 'axios';

function useAxios(method, url, body){
  // return `${method}/${url}/${body}`
  if (method === 'get') {
    axios.get(url)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  }
}

export default useAxios