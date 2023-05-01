import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popup } from "./components/popup";
// import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isPop, setIsPop] = useState(false);
  const navigate = useNavigate();

  // const [confirmPass, setConfirmPass] = useState("");
  const SignupData = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    fetch("https://important-suit-tuna.cyclic.app/api/v1/users", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    }).then(res=> res.json())
      .then((res) => {
        console.log(res);
        if (res?.error) {
          setIsPop(true);
          setTimeout(() => {
            setIsPop(false);
          }, 3500);
          return
        }
        navigate("/blog");
      })
      .catch((error) => console.log(error));
  };
  const logger = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  };
  return (
    <>
      {isPop ? <Popup /> : null}
      <div className="container">
        <div className="register">
          <form onSubmit={logger}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="your name"
            />
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
            {/* <label htmlFor="confirmedPassword">Password</label>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            placeholder="confirm password"
          /> */}
            <p>
              Already have account{" "}
              <Link className="link" to="/signup">
                Login
              </Link>
            </p>
            <button onClick={SignupData} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;