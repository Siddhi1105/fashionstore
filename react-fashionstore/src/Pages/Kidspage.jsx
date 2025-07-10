import React from "react";
import { Link } from "react-router-dom";
import img from '../img/Logo.png';
import posture from '../img/poster_kids.png';
import kid1 from '../img/kidsimg.jpg';
import kid2 from '../img/kidsimg1.jpg';
import kid3 from '../img/kidsimg2.jpg';
import kid4 from '../img/kidsimg3.jpg';

function Kidspage() {
  return (
    <div>
      {/* Navigation */}
      <div className="nav1">
        <Link to="/"><img src={img} className="logo" alt="Logo" /></Link>
        <Link to="/female" className="input">Female</Link>
        <Link to="/male" className="input1">Male</Link>
        <Link to="/kids" className="input1">Kids</Link>
        <input type="search" placeholder="search" className="input2" />
      </div>

      <div className="nav2">
        <h5 className="heading"><b>KIDS COLLECTION</b></h5>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle dropdown-text" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TOPWEAR
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">All Topwears</Link></li>
            <li><Link className="dropdown-item" to="#">Jeans</Link></li>
            <li><Link className="dropdown-item" to="#">Pants</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle dropdown-text1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

        <Link to="/carts" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" className="bi bi-bag-heart nav2" viewBox="0 0 16 16">
            <path fillRule="evenodd" className="icon" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
          </svg>
        </Link>

        <Link to="#" className="icon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" className="bi bi-heart-fill nav2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg>
        </Link>

        <Link to="/account" className="icon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="currentColor" className="bi bi-person-circle nav2" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        </Link>
      </div>

      <img src={posture} className="poster_img" alt="kidimg" />

      <div className="container2">Adorable styles and comfy fits – perfect looks for every little adventure!</div>
      <div className="new">NEW ARRIVAL</div>

      <div className="main_page_img">
        <div className="box">
          <img src={kid1} className="img_size" alt="kidimg" />
          <p>Chic & Comfy: Coral Red Co-ord Set</p><hr />
          <p>Girls' Casual Wear</p>
          <p>₹999</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={kid2} className="img_size" alt="kidimg" />
          <p>Chic & Comfy: Denim</p><hr />
          <p>Girls' Casual Wear</p>
          <p>₹899</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={kid3} className="img_size" alt="kidimg" />
          <p>Tropical Vibes: Leaf Print Shirt with White Shorts Set</p><hr />
          <p>Boys' Holiday Wear</p>
          <p>₹1049</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>

        <div className="box">
          <img src={kid4} className="img_size" alt="kidimg" />
          <p>Earthy Cool: Embroidered Cotton Co-ord Set</p><hr />
          <p>Boys' Casual Wear</p>
          <p>₹999</p>
          <button type="submit"><Link className="button" to="/carts">Add To Cart</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Kidspage;
