import '../style/Section.css'

function Section(props) {
  const { data } = props;
  return(
    <>
    <div className="warpper">
      <div className="hero">
        <div className="content">
          <h3>Web Developer</h3>
          <h1>{data.name}</h1>
          <p>{data.motto}</p>
        </div>
        <div className="imageBox">
          <img src={data.prosonalImage} alt="person image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Section