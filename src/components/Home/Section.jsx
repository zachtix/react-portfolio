import '../../style/Home/Section.css'

function Section(props) {
  const { personaldata } = props;
  return(
    <>
    <div className="warpper">
      <div className="hero">
        <div className="content">
          <h3>Web Developer</h3>
          <h1>{personaldata.name}</h1>
          <p>{personaldata.motto}</p>
        </div>
        <div className="imageBox">
          <img src={personaldata.prosonalImage} alt="person image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Section