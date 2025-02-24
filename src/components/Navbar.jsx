import { Link } from "react-router-dom"
function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src="/SELHONO.png" alt="SELHONO Logo" />
        </div>
        <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    )
  }
  

export default Navbar
