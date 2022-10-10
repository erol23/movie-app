import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { signOut } from "../auth/firebase";

const Navbar = () => {
  const history = useNavigate();
  const { curentUser } = useContext(AuthContext);
  console.log(curentUser);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            React Movie App
          </a>
          <div className="buttons">
            {curentUser ? (
              <h3>{curentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => history("/login")}
              >
                Login
              </button>
            )}

            {curentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                // onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => history("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
