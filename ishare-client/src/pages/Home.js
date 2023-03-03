import React from "react";
import { Link } from "react-router-dom";
import IShareButton from "../components/IShareButton";
import IShareLogo from "../components/IShareLogo";

const Home = () => {
  return (
    <div className="flex-column main-body">
      <nav className="flex flex-between">
        <div>
          <IShareLogo />
        </div>
        <div className="flex nav-left">
          <ul className="flex nav-left__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">Contact us</Link></li>
          </ul>
          <IShareButton
            linkTo="/login"
            buttonName={"Login"}
            buttonStyle={"nav-login__button"}
          />
        </div>
      </nav>
      <main className="home-body">
        <section className="hero-section">
          <div className="flex-column hero-section__content">
            <p>Take control of your images</p>
            <p>
              Share Your <br/> Photos <span>Privately</span> With Anyone
            </p>
            <p>
              Simple and powerful image sharing application , to easily share
              privately your images
            </p>
            <IShareButton buttonName={"Get Started"} buttonStyle={"nav-login__button"} linkTo="/signup"/>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
