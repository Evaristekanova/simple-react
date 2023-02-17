import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popup } from "./popup";
export const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [isPop, setIsPop] = useState(false);
  const navigate = useNavigate();
  const LoginData = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("https://important-suit-tuna.cyclic.app/api/v1/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res?.message === "incorrect username or password") {
          setIsPop(true);
          setTimeout(() => {
            setIsPop(false);
          }, 3500);
        } else if (res?.message === "welcome") {
          navigate("/blog");
        } else {
          alert("all field are required");
        }
        // console.log("here agin", res.data.data);
      })
      .catch((error) => console.log(error));
  };
  const register = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      {isPop ? <Popup /> :null}
      <div className="container">
        <div className="register">
          <form onSubmit={register}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="your email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="your password"
            />
            <p>
              Don't have accaunt{" "}
              <Link className="link" to="/">
                Signup
              </Link>
            </p>
            <button onClick={LoginData} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
