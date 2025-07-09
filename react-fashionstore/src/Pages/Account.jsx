import React from "react";
import { Link } from "react-router-dom";

function Account()
{
    return(
        <div>
            
       <div className="acbody" >
        <h1 >Fashion Store</h1>
          <br/>
          
        <form action="./SouledStore.html" class="acbox" >
          <h3>Login</h3>
          <label for="Username" ></label>
          <input type="text" id="Username" placeholder="Username or email" required />
          <br/>
          <br/>

          <label for="Password"></label>
          <input type="password" id="Password" placeholder="Enter you password" required />
          <br/>
          <br/>

          
          <button type="Submit;" className="acbutton">Log in</button>
          <p className="acp">New User <Link to="/signup"> Sign up</Link></p>
          </form>
       </div>


        </div>
    )
}
export default Account;