import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Hutesh</div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
        <li>
          <a href="/resume/Hutesh-Kumar-Resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
