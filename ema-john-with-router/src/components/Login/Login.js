import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Log In" />
      </form>
      <p>
        New to ema john <Link to="/signup">Create a New Account</Link>
      </p>
    </div>
  );
};

export default Login;
