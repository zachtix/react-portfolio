import '../style/About.css'

function About(props) {
  const { data } = props;
  return(
    <>
    <div className="warpper">
      <div className="about-me">
        <h3>About me</h3>
        <p>{data.personalRecord}</p>
      </div>
    </div>
    </>
  )
}

export default About