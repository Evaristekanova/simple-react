import { Link, useSearchParams, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
 const location = useLocation();
  const params = new URLSearchParams(location.search);
  const myParam = params.get("id");
  localStorage.setItem("isAdmin", JSON.stringify(myParam));
  console.log(myParam);
  useEffect(() => {
    axios
      .get("https://important-suit-tuna.cyclic.app/api/v1/blogs/all")
      .then((res) => {
        // console.log(res);
        const { data } = res.data;
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <>
      <div className="blogs-block section">
        {blogs.map((el) => {
          return (
            <div key={el._id} className="blog">
              <img src={el.imageUrl} alt="" />
              <div className="article">
                <h3 className="blog-title">{el.title}</h3>
                <p>
                  {el.shortDescription}
                  <span>
                    <Link
                      onClick={(e) => {setSearchParams({ id: el._id })}}
                      className="link"
                      to={"/blog?id=" + el._id}
                    >
                      read more
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
