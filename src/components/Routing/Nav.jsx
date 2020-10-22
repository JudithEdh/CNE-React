import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

function Nav(){
    return(
        <>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/shop">Shop Now</Link>
        </Router>
        </>
    );
}

export default Nav;