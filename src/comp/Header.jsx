import React from "react";
import "./Header.css"

function Header() {
  return (
    <>
      <div className="heading">
        {/* Restaurant Logo */}
        <img
          className="images"
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          height="60px"
          width="60px"
          alt="Restaurant Logo"
        />

        {/* Navigation Options */}
        <div className="options">
          <button className="but">Menu</button>
          <button className="but">Starters</button>
          <button className="but">Main Course</button>
          <button className="but">Desserts</button>
          <button className="but">Offers</button>
          <button className="but">Contact</button>
        </div>

        {/* Search */}
        <input className="search" placeholder="Search for dishes..." />

        {/* User Actions */}
        <div className="profile">
          <button className="pro">Login</button>
          <button className="pro">Orders</button>
          <button className="pro">Cart</button>
        </div>
      </div>
    </>
  );
}

export default Header;
