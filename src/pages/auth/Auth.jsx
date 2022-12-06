
import React from "react";
import { siginIn } from "../../firebase/firebase";
import "./auth.scss";
const Auth = () => {
  
  return (
    <div className="auth">
      <div className="auth__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <h1>Youtube Clone</h1>
        <button onClick={siginIn}>Login with google</button>
      </div>
    </div>
  );
};

export default Auth;
