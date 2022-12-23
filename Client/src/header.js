import React from "react";
import './stylesheet/header.css';
import logo from './images/icon@2x.png';
import { Link } from "react-router-dom";
import cam from './images/cam.png'



const HeaderFunction = () => {

    return (

        <header>
            <div className="header insta-logo">
                <img src={logo} alt="instagramLogo" className="logo"></img>
            </div>

            <div className="header title">
                <h1 className="header_h1">Instaclone</h1>
            </div>
            
            <Link className="header camera-logo" to="/addPost">
            {/* <Link className="link-button" >Enter</Link> */}
                <img src={cam}
                         alt="cameraLogo" className="logo cam_logo"></img>         
            </Link>
        </header>
    );
}

export default HeaderFunction;
