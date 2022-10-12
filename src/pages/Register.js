import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegister = () => {
      // const displayName = `${firstName} ${lastName}`
      let displayName;
      if(`${firstName}`&&`${lastName}`){
        displayName=`${firstName} ${lastName}`
        createUser(email, password, displayName, navigate);
      } else{
        alert("Please enter firstname and lastname")
      }
    }
    
    return (
    <div className="register">
      <div className="form-image">
        <img className="background-image" src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="login">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label display-4">
              First name
            </label>
            <input
              type="first-name"
              className="form-control"
              id="first-name"
              placeholder="Enter your Firstname..."
              onChange={(e) => setFirstName(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label display-4">
              Last name
            </label>
            <input
              type="last-name"
              className="form-control"
              id="last-name"
              placeholder="Enter your Last name..."
              onChange={(e) => setLastName(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
              required
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
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Register"
            onClick={handleRegister}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
