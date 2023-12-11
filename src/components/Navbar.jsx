import '../style/Navbar.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return(
    <div className="warpper">
      <div className="navbar">
        <div className="left">
          <NavLink className="item" to="/">Home</NavLink>
        </div>
        <div className="right">
          <NavLink className="item" to="/projects">Projects</NavLink>
          {/* <NavLink className="item" activeClassName='item-active' to="/#skills">Skills</NavLink> */}
          <NavLink className="item" to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar