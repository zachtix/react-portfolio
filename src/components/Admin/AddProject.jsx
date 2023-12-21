import axios from 'axios';
import { useEffect, useState } from 'react';

function AddProject({ onAddProject }) {
  const { VITE_API_ENDPOINT } = import.meta.env
  //destructuring 
  // const { id, title, description, tag, stacks, typeContent, liveSite, repo, thumbnailUrl, thumbnailDes, contents, onShow, showHome } = props.item;
  const [item, setItem] = useState({
    id:'',
    title:'',
    description:'',
    tag:'',
    stacks:'',
    typeContent:'',
    liveSite:'',
    repo:'',
    thumbnailUrl:'',
    thumbnailDes:'',
    contents:'',
    onTop:'false',
    onShow:'true',
    showHome:'false'
  });
  
  const contentsArray = item.contents.split(',');
  const stacksArray = item.stacks.split(',');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleRemoveStack = (index) => {
    const updatedStacks = [...stacksArray.slice(0, index), ...stacksArray.slice(index + 1)];
    setItem((prevItem) => ({
      ...prevItem,
      stacks: updatedStacks.join(','),
    }));
  };
  const handleRemoveContent = (index) => {
    const updatedContents = [...contentsArray.slice(0, index), ...contentsArray.slice(index + 1)];
    setItem((prevItem) => ({
      ...prevItem,
      contents: updatedContents.join(','),
    }));
  };
  

  const handleSave = () => {
    // alert('add');
    // onAddProject();
    const accessToken = localStorage.getItem('access_token')
    axios.post(VITE_API_ENDPOINT+'/addproject', item, 
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
    <h1>Add Project</h1>
    <div className="addForm">
      <div className="inputBox">
        <label htmlFor="">Title</label>
        <input type="text" value={item.title} name="title" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Description</label>
        <input type="text" value={item.description} name="description" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Tag</label>
        <input type="text" value={item.tag} name="tag" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Stacks</label>
        <div className="stacks">
        {stacksArray.map((content, index) => (
            <>
              <input
                type="text"
                name={`content-${index + 1}`}
                value={content.trim()}  /* ลบช่องว่างที่อาจมีอยู่ด้านหน้าหรือด้านหลังของข้อมูล */
                onChange={(e) => {
                  const updatedStacks = stacksArray.map((c, i) => (i === index ? e.target.value : c));
                  setItem((prevItem) => ({
                    ...prevItem,
                    stacks: updatedStacks.join(','),
                  }));
                }}
              />
              <button onClick={() => handleRemoveStack(index)}>Remove</button>
            </>
          ))}
        </div>
        <button onClick={()=>{
          if (stacksArray.length < 10) {
            setItem({...item, stacks: item.stacks+',Stack'})
          } else {
            alert('limit stacks 10!')
          }
        }}>Add Stack</button>
      </div>
      <div className="inputBox">
        <label htmlFor="">Type Content</label>
        <input type="text" value={item.typeContent} name="typeContent" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Live Site</label>
        <input type="text" value={item.liveSite} name="liveSite" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Git Repo</label>
        <input type="text" value={item.repo} name="repo" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Thumb Img</label>
        <img src={item.thumbnailUrl} alt="" />
        <input type="text" value={item.thumbnailUrl} name="thumbnailUrl" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Thumb Description</label>
        <input type="text" value={item.thumbnailDes} name="thumbnailDes" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Contents</label>
        <div className='contents'>
        {contentsArray.map((content, index) => (
            <div className='content'>
              <div className="top">
                <img src={content} alt="" />
                <button onClick={() => handleRemoveContent(index)}>Remove</button>
              </div>
              <input
                type="text"
                name={`content-${index + 1}`}
                value={content.trim()}  /* ลบช่องว่างที่อาจมีอยู่ด้านหน้าหรือด้านหลังของข้อมูล */
                onChange={(e) => {
                  const updatedContents = contentsArray.map((c, i) => (i === index ? e.target.value : c));
                  setItem((prevItem) => ({
                    ...prevItem,
                    contents: updatedContents.join(','),
                  }));
                }}
              />
            </div>
          ))}
        </div>
        <button onClick={()=>{
          if (contentsArray.length < 20) {
            setItem({...item, contents: item.contents+',URL Image'})
          } else {
            alert('limit images 20!')
          }
        }}>Add Img</button>
      </div>
      {/* <div className="inputBox">
        <label htmlFor="">Show Top</label>
        <input type="text" value={item.onTop} name="onTop" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Show Project</label>
        <input type="text" value={item.onShow} name="onShow" onChange={handleInputChange} />
      </div>
      <div className="inputBox">
        <label htmlFor="">Show Project on Home</label>
        <input type="text" value={item.showHome} name="showHome" onChange={handleInputChange} />
      </div> */}
      <div className="choiceBoxs">
        <div className="inputBox">
          <label htmlFor="">Show Top</label>
          <select name="onTop" onChange={handleInputChange}>
            <option value="true" name="onTop" selected={item.onTop == 'true'? 'selected':''} >True</option>
            <option value="false" name="onTop" selected={item.onTop == 'false'? 'selected':''} >False</option>
          </select>
        </div>
        
        <div className="inputBox">
          <label htmlFor="">Show Project</label>
          <select name="onShow" onChange={handleInputChange}>
            <option value="true" name="onShow" selected={item.onShow == 'true'? 'selected':''} >True</option>
            <option value="false" name="onShow" selected={item.onShow == 'false'? 'selected':''} >False</option>
          </select>
        </div>
        
        <div className="inputBox">
          <label htmlFor="">Show Project on Home</label>
          <select name="showHome" onChange={handleInputChange}>
            <option value="true" name="showHome" selected={item.showHome == 'true'? 'selected':''} >True</option>
            <option value="false" name="showHome" selected={item.showHome == 'false'? 'selected':''} >False</option>
          </select>
        </div>
      </div>
      <div className="btn-submit">
        <button onClick={handleSave}>Add</button>
        <button onClick={()=>onAddProject()}>Close</button>
      </div>
    </div>
    </>
  )
}

export default AddProject