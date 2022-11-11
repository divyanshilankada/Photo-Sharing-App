import React from "react";
import { Link } from "react-router-dom";
import './stylesheet/landingPage.css'
import landingImg from './images/lens-1418954.png'

function LandingPadeFunction()
{
    return (
        <main className="landing-page-main">
            <div className="landing-page-container">
                <section className="landing-page-image box">
                    <img className="image " src={landingImg} alt="landing page"></img>
                </section>
                <section  className="landing-page-description box">
                    <h1 className="description_h4">10x Team 04</h1>
                    <button className="description_button">
                        <Link className="link-button" to="/instaClone">Enter</Link>
                    </button>
                </section>
            </div>
        </main>
    );
}

export default LandingPadeFunction;