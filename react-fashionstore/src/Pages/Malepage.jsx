import React from "react";

import { Link } from "react-router-dom";
import posture from '../img/poster_male.png';
import Logo from '../img/Logo.png';
import men1 from '../img/maleimg.jpg';
import men2 from '../img/maleimg1.jpg';
import men3 from '../img/maleimg2.jpg';
import men4 from '../img/maleimg3.jpg';

function Malepage()  {
    return(
  <div className="body">
                <div className="nav1">
                    <Link to="/"><img  src={Logo} className="logo" alt="Logo"/></Link>
                    <Link to="/female" className="input">Female</Link>
                    <Link to="/male" className="input1">Male</Link>
                    <Link to="/kids" className="input1">Kids</Link>
                    
                    
                    <input  type="search" placeholder="search" className="input2"/>   
                    <Link className="logo1" to="/carts
        " ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-bag-heart nav2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                    </svg></Link> 
                    <Link className="logo1" to="like.html"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-heart-fill nav2" viewBox="0 0 16 16" >
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg></Link>
                    <Link className="logo1"to="Account.html"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-person-circle nav2" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg></Link>
                </div>
                <div className="nav2">     
                            <h5 className="heading"><b>MALE COLLECTION </b></h5>
                            
                            <li className="nav-item dropdown ">
                            <Link className="nav-link dropdown-toggle dropdown-text" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              TOPWEAR
                            </Link>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">All Toopwears</Link></li>
                            <li><Link className="dropdown-item" to="#">Jeans</Link></li>
                            <li><Link className="dropdown-item" to="#">Pants</Link></li>
                            </ul>
                            </li>
                             
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle dropdown-text1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                              BOTTOM-WEAR
                            </Link>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">All Bottom</Link></li>
                            <li><Link className="dropdown-item" to="#">Jeans</Link></li>
                            <li><Link className="dropdown-item" to="#">Pants</Link></li>
                            </ul>
                            </li>
                
                           <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle dropdown-text1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              FOOT WEAR
                            </Link>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Sneakers</Link></li>
                            <li><Link className="dropdown-item" to="#">Socks</Link></li>
                            <li><Link className="dropdown-item" to="#">Sneakers Care</Link></li>
                            </ul>
                            </li>
                
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle dropdown-text1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ACCESSORIES
                            </Link>
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/perfumes">Perfumes</Link></li>
                            <li><Link className="dropdown-item" to="#">Caps</Link></li>
                            <li><Link className="dropdown-item" to="#">Back-packs</Link></li>
                            </ul>
                            </li>
                            
                            <Link  to="/carts
                " className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" class="bi bi-bag-heart nav2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" className="icon" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                            </svg></Link> 
                            <Link  to="#" className="icon1"><svg   xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" class="bi bi-heart-fill nav2" viewBox="0 0 16 16" >
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg></Link>
                            <Link   to="/account" className="icon1"><svg  xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" class="bi bi-person-circle nav2" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg></Link>
                </div>
    <img src={posture} class="poster_img" alt="maleimg"/> 
    <div class="container2">Effortless style meets everyday comfort – elevate your wardrobe with ease!</div>
    <div class="new">NEW ARRIVAL</div>
    <div class="main_page_img">
        <div class="box">
       <img src={men1} class="img_size" alt="maleimg"/>
        <p>Effortlessly Smart: Rust Linen Shirt with Cream Trousers</p><hr/>
        <p>Men's Casual Smartwear</p>
        <p>₹ 1229</p>
        <button type="submit" ><Link class="button"  to="/carts">Add To Cart</Link></button>
        </div>
    
        <div class="box">
        <img src={men2} class="img_size" alt="maleimg"/>\
        <p>Beach Vibes: Blue Tropical Shirt with White Shorts</p><hr/>
        <p>Men's Resort Wear</p>
        <p>₹ 1199</p>
        <button type="submit"><Link class="button"  to="/carts">Add To Cart</Link></button>
        
    </div> 
      
        <div class="box">
        <img src={men3} class="img_size" alt="maleimg" />
        <p>Urban Fresh: Embroidered Sky Blue Shirt & Wide-Leg Trousers</p><hr/>
        <p>Street Style Inspired Look</p>
        <p>₹ 1499</p>
        <button type="submit" ><Link class="button"  to="/carts">Add To Cart</Link></button>
        </div>
    
      
        <div class="box">
        <img src={men4} class="img_size" alt="maleimg"/>
        <p >Classic Charm: Dusty Rose Shirt with Black Pants</p><hr/>
        <p> Everyday Casualwear</p>
        <p>₹1299</p>
        <button type="submit"  ><Link class="button"  to="/carts">Add To Cart</Link></button>
        </div>
    

    
    </div>
        </div>
        



);
}

export default Malepage;