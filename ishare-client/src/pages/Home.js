import React from "react";
import { Link } from "react-router-dom";
import IShareButton from "../components/IShareButton";
import IShareLogo from "../components/IShareLogo";
import SectionTitles from "../components/SectionTitles";

const Home = () => {
  return (
    <div className="flex-column main-body">
      <nav className="flex flex-between">
        <div>
          <IShareLogo />
        </div>
        <div className="flex nav-left">
          <ul className="flex nav-left__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
          <IShareButton
            linkTo="/login"
            buttonName={"Login"}
            buttonStyle={"nav-login__button"}
          />
        </div>
      </nav>
      <main className="home-body">
        <section className="section flex-column hero-section">
          <div className="flex-center__column hero-section__content">
            <p className="section-titles__top-text">
              Take control of your images
            </p>
            <p>
              Share Your <br /> Photos <span>Privately</span> <br /> With Anyone
            </p>
            <p>
              Simple and powerful image sharing application , to easily share{" "}
              <br />
              privately your images
            </p>
            <IShareButton
              buttonName={"Get Started"}
              buttonStyle={"nav-login__button"}
              linkTo="/signup"
            />
          </div>
          <div className="flex hero-section__bottom">
            <img
              src={require("../assets/hero__image-left.svg").default}
              alt="Hero Left"
            />
            <img
              src={require("../assets/hero__image-right.svg").default}
              alt="Hero Right"
            />
          </div>
        </section>
        <section className="section flex copy-section">
          <SectionTitles
            topText={"Powerful photo sharing"}
            middleText={`Simple and powerful <br/>
                    image sharing application`}
            bottomText={
              "We help you control who and when you share  your photos"
            }
          />
          <div className="copy-section__left">
            <div className="copy-circle">
                <img src={require("../assets/copy-cicle.svg").default} alt="Copy Left"/>
                <div className="copy-circle__content">
                    <p>
                        12.9k
                    </p>
                    <p>
                        Users in place
                    </p>
                </div>
            </div>
            <div className="copy-image">
                <img src={require("../assets/copy-image.svg").default} alt="Copy  Right"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
