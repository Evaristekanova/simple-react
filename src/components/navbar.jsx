import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  //   const { showIcon, setShowIcon } = useState(false);
  const showNavHandler = () => setShowNav(!showNav);
  return (
    <>
      <span className="humberger-icon">
        <FaBars onClick={showNavHandler} />
      </span>
      <div className={showNav ? "active" : "nav-container"}>
        <nav className="responsive-nav">
          <span className="close-icon"><AiFillCloseCircle /></span>
          <li>
            <Link className="nav-link" to="/signup">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              Signup
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/blog">
              Blogs
            </Link>
          </li>
          {/* <li>
          <Link className="nav-link" to="/blog">
            My work
          </Link>
        </li> */}
          <li>
            <Link className="nav-link" to="/blog">
              Contact
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
};
