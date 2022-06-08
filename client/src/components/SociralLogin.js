import React from "react";
import Google from "../image/google.png";
import Facebook from "../image/facebook.png";
const googleLogin = () => {
  window.open("http://localhost:5000/auth/google", "_self");
};
const SociralLogin = () => {
  return (
    <div className="left">
      <div className="loginButton google" onClick={googleLogin}>
        <img src={Google} alt="" className="icon" />
        Google
      </div>
      <div className="loginButton facebook" onClick={googleLogin}>
        <img src={Facebook} alt="" className="icon" />
        Facebook
      </div>
    </div>
  );
};

export default SociralLogin;
