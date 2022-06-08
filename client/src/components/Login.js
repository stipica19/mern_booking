import React from "react";

import SociralLogin from "./SociralLogin";
const Login = () => {
  const googleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <section class="">
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <SociralLogin />
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
