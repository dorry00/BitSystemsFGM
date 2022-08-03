import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { LoginCall } from "../../api calls/apicalls";
import "../SignUp/SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[err, setErr] = useState(null);

  const { dispatch, error, isFetching, user } = useContext(AuthContext);

  const LoginUser = (e) => {
    e.preventDefault();
    LoginCall({ name, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="center">
        <h1>User Login</h1>
        <form>
          <div className="login-container">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" type="submit" onClick={LoginUser}>
              Login
              
            </button>
            {error && <span style={{ color:"red", fontSize: "12px"}}>*Invalid username or password</span>}
           

         
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
