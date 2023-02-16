import "./App.css";
import { Login } from "./login";
import { SignUp } from "./components/signup";
import { Blogs } from "./components/blogs"
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <li>
            <Link className="nav-link" to="/signup">
              Login
            </Link>
          </li>
        </nav>{" "}
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
        <li>
          <Link className="nav-link" to="/blog">
            My work
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">
            Contact
          </Link>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
