import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = () => {
      signIn(email, password, navigate);
    }

    const handleProvider = () => {
      signUpProvider();
      navigate('/');
    }

  return (
    <div className="register">
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={e => setPassword(e.target.value)}
            ></input>
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Login"
            onClick={handleLogin}
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProvider}
        >
          Contunie With Google
        </button>
      </div>
      <div className="form-image">
        <img className="background-image" src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
    </div>
  );
};

export default Login;
