import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const logger = (e) => {
    e.preventDefault();
    console.log(email, password, name, confirmPass);
  };
  return (
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
          <label htmlFor="confirmedPassword">Password</label>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            placeholder="confirm password"
          />
          <p>Already have account <Link to='/signup'>Login</Link></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
