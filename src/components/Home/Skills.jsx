import '../../style/Home/Skills.css'

function Skills(props) {
  const { skills } = props;
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