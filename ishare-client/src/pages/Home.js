import React from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import IShareButton from "../components/IShareButton";
import IShareLogo from "../components/IShareLogo";
import SectionTitles from "../components/SectionTitles";
import CardOne from "../assets/card_one.svg";
import CardOneIcon from "../assets/card_one_icon.svg";
import CardTwo from "../assets/card_two.svg";
import CardTwoIcon from "../assets/card_two-icon.svg";
import CardThree from "../assets/card_three.svg";
import CardThreeIcon from "../assets/card_three_icon.svg";
import AboutImage from "../assets/about-section.jpg";
import MoreLeft from "../assets/more_about_one.jpg"
import MoreRight from "../assets/more_about_two.jpg"
import {ReactComponent as ArrowRight} from '../assets/arrow-right.svg'

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
              <img
                src={require("../assets/copy-cicle.svg").default}
                alt="Copy Left"
              />
              <div className="copy-circle__content">
                <p>12.9k</p>
                <p>Users in place</p>
              </div>
            </div>
            <div className="copy-image">
              <img
                src={require("../assets/copy-image.svg").default}
                alt="Copy  Right"
              />
            </div>
          </div>
        </section>
        <section className="section flex features-section">
          <FeatureCard
            cardImage={CardOne}
            cardIcon={CardOneIcon}
            cardTitle={`Upload your photos <br/> to the application`}
            cardContent={"Select any photo you have and your want"}
          />
          <FeatureCard
            cardImage={CardTwo}
            cardIcon={CardTwoIcon}
            cardTitle={`Share your photos <br/> with your friends`}
            cardContent={"Select any photo you have to share"}
          />
          <FeatureCard
            cardImage={CardThree}
            cardIcon={CardThreeIcon}
            cardTitle={`View photos shared to <br/> your by your friends`}
            cardContent={"Like and comment  on your friends photos"}
          />
        </section>
        <section className="section flex-column about-section">
          <SectionTitles
            topText={"Who we are"}
            middleText={`What we have been <br/> working on so far`}
            bottomText={`We are striving to build a powerful photo sharing tool that will enable you to <br/>
              share you photos with only a select few and revoke this access at any time.`}
          />
          <div className="flex about-section__bottom">
            <img src={AboutImage} alt="About Section" />
          </div>
        </section>
        <section className="section flex more-section">
            <div className="flex-column more-section__left">
                <SectionTitles
                    topText={"Who we are"}
                    middleText={`Know more <br/>
                    about who<br/>
                    we are`}
                />
                <div className="more-section__left-image">
                    <img src={MoreLeft} alt="More Left" />
                </div>
            </div>
            <div className="flex-column more-section__right">
                <div className="flex more-section__right-image"><img src={MoreRight} alt="More Right" /></div>
                <div className="flex-column more-section__right-content">
                <p className='section-titles__bottom-text'>
                    We make sharing, storing and finding your <br/>
                    photos easy, Sharing to only the select few <br/>
                    whom you have granted permission. You <br/>
                    can also like, comment and message your <br/>
                    friends at anytime
                </p>
                <Link to="/" className='flex card-link'>
            Read More
            <ArrowRight />
        </Link>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
