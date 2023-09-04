import React from "react";
import "./Emoji.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Emoji = () => {
  return (
    <section className="e-wraper">
      <div className="container">
        <div className="flexContent-emoji">
          <span className="emoji-link-span-1"> &#127970; 11 </span>
          <span> &#128758; 12</span>
        </div>
        <div className="flexContent emoji-detail">
          <span> &#128201; 5 </span>
          <div className="link-details">
            <h2>Teams large and small rely on Slack</h2>
            <p>
              Slack securely scales up to support collaboration at the world’s
              biggest companies.
            </p>
          </div>
          <span className="span-enter">&#129309; 9</span>
        </div>
        <div className="flexContent link">
          <span> &#128274; 27 </span>
          <div className="flexContent flexLink">
            <a href="#">MEET SLACK FOR ENTERPRSE</a>
            <a href="#" className="sale">
              TALK TO SALES
            </a>
          </div>
          <span className="last-span"> &#128758; 12</span>
        </div>

        {/* PERCENTAGE SECTION  */}
        <div className="p-wraper flexContent">
          <div className="p-wraper-detail">
            <h2>82%</h2>
            <small>
              of users say Slack has <br /> improved communication*
            </small>
          </div>
          <div className="p-wraper-detail">
            <h2>86%</h2>
            <small>
              feel their ability to work <br /> remotely has improved*
            </small>
          </div>
          <div className="p-wraper-detail">
            <h2>88%</h2>
            <small>
              feel more connected to their <br /> teams*
            </small>
          </div>
        </div>
      </div>
      <div className="v-wraper section">
        <div className="flexContent ">
          <div className="v-video">
            <video
              autoPlay
              muted
              playsInline
              loop
              src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4"
            ></video>
          </div>
          <div className=" flexColn v-wraper-left">
            <p>
              “Whether you’re a small or large organization, executing anything
              from a discrete modernization program to a digital transformation
              initiative, Slack is an incredibly powerful tool in the hybrid
              world.”
            </p>
            <div className="v-wraper-author">
              <b>Jennifer Quinlan</b>
              <span>
                Managing Partner, IBM iX Americas Leader - Customer and
                Experience Transformation, IBM
              </span>
              <div className="v-link">
                {" "}
                <a href="#" className="flexContent  m-link">
                  Learn more about channels
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="v-foot">
        <span>
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the U.S., UK, Australia and Canada with a ± 2% margin of
          error at 95% CI (December 2021).
        </span>
      </div>
    </section>
  );
};

export default Emoji;
