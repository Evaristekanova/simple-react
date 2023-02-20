import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const SingleBlogPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://important-suit-tuna.cyclic.app/api/v1/blogs/all", {
      mode: "cors",
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        setBlogs(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="single-blog-page-container">
        <div class="blogs-block-single">
          {blogs
            .filter((el) => el._id === id)
            .map((el) => {
              return (
                <>
                  <div key={el._id} class="blog-single">
                    <img id="current-blog" src={el.imageUrl} alt="" />
                    <div class="article">
                      <h3 className="blog-title">{el.title}</h3>
                      <p className="current-paragraph">{el.fullDescription}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="blog-list-container">
          {blogs.map((el, i) => {
            return (
              <div key={el._id} className="blog-single-list">
                <div className="article-list">
                  <Link className="link" to={"/singleBlogPage?id=" + el._id}>
                    {el.title}
                  </Link>
                  <p>{el.shortDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
