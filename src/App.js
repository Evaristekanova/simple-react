import "./App.css";
import Login from "./login";
import { SignUp } from "./components/signup";
import { Blogs } from "./components/blogs";
import { SingleBlogPage } from "./components/singleblogPage";
import Navbar from "./components/navbar";
// import Expander from "./components/Expander";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/slider" element={<Expander />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/singleBlogPage" element={<SingleBlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
