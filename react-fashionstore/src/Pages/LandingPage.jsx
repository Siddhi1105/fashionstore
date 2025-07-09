import React from "react";
import Logo from '../img/Logo.png';
import Main from '../img/Main1.jpg';
import img1 from '../img/Main2.png';
import img2 from '../img/Main3.png';
import { Link } from "react-router-dom";


function LandingPage() {
  return (
   <div>
   
   {/* <!-- Navbar --> */}
    <div className="body">
      <div className="nav1">
          <Link to="/"><img  src={Logo} className="logo" alt="Logo"/></Link>
          <Link to="/female" className="input">Female</Link>
          <Link to="/male" className="input1">Male</Link>
          <Link to="/kids" className="input1">Kids</Link>
          
          
          <input  type="search" placeholder="search" className="input2"/>   
          <Link className="logo1" to="/carts" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-bag-heart nav2" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
          </svg></Link> 
          <Link className="logo1" to="like.html"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-heart-fill nav2" viewBox="0 0 16 16" >
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg></Link>
          <Link className="logo1"to="/account"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-person-circle nav2" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg></Link>
      </div>
    {/* <!-- Main Content --> */}       
      <div>
    
        <img src={Main} className="main_img" alt="Main1"/>
        
       <div className="container4"><b> Discover and shop the latest trends, all in one place!</b></div>

       <img src={img1} className="img" alt="Main2 "/>
       <img src={img2} className="img" alt="Main3 "/>

    

       </div>
      <b><h1 className="heading">Over <b>Six Million</b> Happy Customers</h1></b>
       <div className="container3"></div> </div>
      </div>
    

   
  );
}

export default LandingPage;