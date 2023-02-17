import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  axios
    .get("https://important-suit-tuna.cyclic.app/api/v1/blogs/all")
    .then((res) => {
      // console.log(res);
      const { data } = res.data;
      console.log(data);
    //   setBlogs(data);
     setBlogs(data)
    });
};
