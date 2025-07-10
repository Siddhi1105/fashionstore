import React from "react";
import { Link } from "react-router-dom";
import posture from '../img/poster_male.png';
import Logo from '../img/Logo.png';
import men1 from '../img/maleimg.jpg';
import men2 from '../img/maleimg1.jpg';
import men3 from '../img/maleimg2.jpg';
import men4 from '../img/maleimg3.jpg';

function Malepage() {
  return (
    <div className="body">
      <div className="nav1">
        <Link to="/"><img src={Logo} className="logo" alt="Logo" /></Link>
        <Link to="/female" className="input">Female</Link>
        <Link to="/male" className="input1">Male</Link>
        <Link to="/kids" className="input1">Kids</Link>

        <input type="search" placeholder="search" className="input2" />
        <Link className="logo1" to="/carts">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-bag-heart nav2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
          </svg>
        </Link>
        <Link className="logo1" to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-heart-fill nav2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg>
        </Link>
        <Link to="#" className="logo1">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-person-circle nav2" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        </Link>
      </div>

      <div>
        <img src={posture} className="poster_img" alt="maleimg" />
      </div>

      <div className="container2">Step up your fashion game – explore the newest arrivals in men’s wear, shoes, and more!</div>
      <div className="new">NEW ARRIVAL</div>

      <div className="main_page_img">
        <div className="box">
          <img src={men1} alt="men1" />
          <p>Classic Black Denim Jacket</p><hr />
          <p>Men's Outerwear</p>
          <p>₹ 2299</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={men2} alt="men2" />
          <p>Casual Checked Shirt</p><hr />
          <p>Men's Shirts</p>
          <p>₹ 1199</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={men3} alt="men3" />
          <p>Running Sneakers – Grey/Blue</p><hr />
          <p>Men's Footwear</p>
          <p>₹ 2499</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={men4} alt="men4" />
          <p>Cotton Joggers – Olive Green</p><hr />
          <p>Men's Bottomwear</p>
          <p>₹ 1599</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Malepage;
