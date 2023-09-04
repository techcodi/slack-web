import React from "react";
import "./Hero.css";

//import MaterialIcon, { colorPalette } from "material-icons-react";

const Hero = () => {
  return (
    <section className="h-wraper">
      <div className="flexContent h-container container ">
        <div className="hero-left">
          <h1 className="her-h1">
            Made for people.
            <br />
            <span className="h-detail">Built for productivity</span>
          </h1>
          <p className="hero-pRA">
            Connect the right people, find anything you need and automate the
            rest. That’s work in Slack, your productivity platform.
          </p>
          <div className=" hero-email sign-up-box">
            <a href="#" className="a-email">
              SIGN UP WITH EMAIL
            </a>
            <a href="#" className="e-google">
              SIGN UP WITH GOOGLE
            </a>
          </div>
          <div className="m-details">
            <p>Slack is free to try for as long as you’d like</p>
          </div>
          <a href="#" className="e-android">
            GET SLACK FOR ANDROID
          </a>
        </div>
        <div className="hero-right">
          <video
            title="Team discussing work in the Slack app"
            role="img"
            data-js-id="hero"
            loop
            muted
            playsinline
            poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.jpg"
          >
            …
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
