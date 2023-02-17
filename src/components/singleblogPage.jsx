import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SingleBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://important-suit-tuna.cyclic.app/api/v1/blogs/all", {
      mode: "cors",
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const { data } = res;
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="single-blog-page-container">
        {blogs.map((el, i) => {
          return (
            <div key={el._id} className="blog-list-container">
              <div className="blog-single-list">
                <div className="article-list">
                  <Link className="link" to="/singleBlogPage">
                    {el.title}
                  </Link>
                  <p>{el.shortDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
