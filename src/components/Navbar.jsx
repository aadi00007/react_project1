import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate(); // lowercase "navigate" is the convention
    
    return (
        <div className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGE7W96JxSIvT7IXR8leAYNnqTBtRgzXSbnQ&s" alt="logo" className="navbar-logo"/>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/aboutus">About us</NavLink></li> 
                <li><NavLink to="/contact">Contact</NavLink> </li>
                <li><NavLink to="/jobs">Jobs</NavLink> </li>

            </ul>
            <button className="navbar-button" onClick={() => navigate('/aboutus', {replace:true})}>Navi</button>
        </div>
    )
}

export default Navbar;