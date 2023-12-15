import '../../style/Home/About.css'

function About(props) {
  const { personaldata } = props;
  return(
    <>
    <div className="warpper">
      <div className="about-me">
        <h3>About me</h3>
        <p>{personaldata.personalRecord}</p>
      </div>
    </div>
    </>
  )
}

export default About