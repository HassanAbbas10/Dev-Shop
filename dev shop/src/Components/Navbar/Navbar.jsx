import React from "react";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="shop-name">Dev Shop</div>
          <div className="item">
            <Link className="links" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="links" to="/products/all">Catalog</Link>
          </div>
          <div className="item">
            <Link className="links" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />

            <div className="cart">
              <LocalMallOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
