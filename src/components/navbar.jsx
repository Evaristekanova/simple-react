import autoAnimate from "@formkit/auto-animate";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const parentRef = useRef()
  // autoAnimate(parentRef, {
  //   duration: 300,
  //   easing: "ease-in-out",
  //   direction: "alternate",
  //   iterations: 1,
  //   fill: "forwards",
  //   keyframes: [
  //     { transform: "translateX(0)" },
  //     { transform: "translateX(100%)" },
  //   ],
  // })
    useEffect(() => {
      if (parentRef.current) {
        autoAnimate(parentRef.current);
      }
    }, [parentRef]);


  const showNavHandler = () => setShowNav(!showNav);
  return (
    <>
      <span className="humberger-icon">
        {showNav ? (
          <FaBars onClick={showNavHandler} />
        ) : (
          <AiFillCloseCircle onClick={showNavHandler} />
        )}
      </span>
      {!showNav && <div className={!showNav ? "active" : "nav-container"}>
        <nav className="responsive-nav">
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
      </div>}
    </>
  );
};
export default Navbar;
