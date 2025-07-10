import React from "react";
import { Link } from "react-router-dom";

function Accountpage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic or redirect here
  };

  return (
    <div>
      <div className="acbody">
        <h1>Fashion Store</h1>
        <br />

        <form className="acbox" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label htmlFor="Username"></label>
          <input type="text" id="Username" placeholder="Username or email" required />
          <br />
          <br />

          <label htmlFor="Password"></label>
          <input type="password" id="Password" placeholder="Enter your password" required />
          <br />
          <br />

          <button type="submit" className="acbutton">Log in</button>
          <p className="acp">New User <Link to="/signup"> Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Accountpage;
