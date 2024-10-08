import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>            
            <Link to="/pets">Pets</Link>
            <Link to="/petform">New Pet</Link>
        </nav>
    );
};


export default NavBar;
