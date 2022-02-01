import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (<div className="nav nav-tabs navbar-expand-lg navbar-dark justify-content-center">
                <div className="logo">
                <a className="navbar-brand" href="/">Logo</a>
                </div>
                <button className="navbar-toggler" type="button"
                 title="menu"
                 data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-center" id="navbarSupportedContent">
                   <NavLink to="../pages/Sale" className="nav-link">
                    Products
                  </NavLink>
                   <NavLink to="../pages/Main" className="nav-link">
                   Main page
                  </NavLink>
                  <NavLink to="../pages/About" className="nav-link">
                    About us
                   </NavLink>
                   <NavLink to="../pages/Contact" className="nav-link">
                  Contact
                </NavLink>
                  <NavLink to="../pages/Cart" className="nav-link">
                 Shopping Cart
                   </NavLink>
                 </div>
                 <NavLink to="../pages/Cart" className="nav-link">
                 <button className="btn d-lg-none cart-btn"
                 title="Shopping cart">
                 <FontAwesomeIcon icon={faShoppingCart} /></button>
                 </NavLink>
      </div>
    );
  };
  export default Navbar;