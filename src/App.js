import "./App.css";
import { Login } from "./login";
import { SignUp } from "./components/signup";
import { Blogs } from "./components/blogs";
import { SingleBlogPage } from "./components/singleblogPage";
import { Navbar } from "./components/navbar";
import {Route, Routes } from "react-router-dom";
function App() {
  // const humberger = document.querySelector(".humberger-icon");
  // const close = document.querySelector(".close-icon");
  // const nav = document.querySelector(".responsive-nav");
  // humberger.addEventListener("click", () => {
  //   nav.classList.add("open");
  // });
  // close.addEventListener("click", () => {
  //   nav.classList.remove("open");
  // });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blogs />} />
        {/* <Route path="/sing" element={<SingleBlogPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
