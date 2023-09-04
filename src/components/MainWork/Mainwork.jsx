import React from "react";
import "./Mainwork.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Mainwork = () => {
  return (
    <section className="m-wraper">
      <div className="m-container">
        <div className="flexContent m-first-coln">
          <div className="m-left">
            <div className="main-img m-first-img">
              <img
                src="https://a.slack-edge.com/8d7ec90/marketing/img/homepage/mobile-focused/inline-images/01-messaging-that-means-business-android@2x.png"
                alt="images1"
              />
            </div>
            <video src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"></video>
          </div>
          <div className=" m-right">
            <h2>
              Bring your team <br />
              together
            </h2>
            <p>
              At the heart of Slack are channels: organized spaces for everyone
              and everything you need for work. In channels, it’s easier to
              connect across departments, offices, time zones and even other
              companies.
            </p>
            <a href="#" className="m-link">
              Learn more about channels <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="flexContent cont-left">
          <div className="main-img m-mindle">
            <img
              src="https://a.slack-edge.com/8d7ec90/marketing/img/homepage/mobile-focused/inline-images/02-bring-your-team-together-android@2x.png"
              alt="images3"
            />
          </div>
          <div className=" m-right">
            <h2>
              Choose how you,
              <br />
              want to work
            </h2>
            <p>
              In Slack, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live.
            </p>
            <a href="#" className="m-link">
              Learn more about flexible communication <AiOutlineArrowRight />
            </a>
          </div>
          <div className="m-left">
            <video src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm"></video>
          </div>
        </div>

        <div className="flexContent m-left-last">
          <div className="m-left">
            <div className="main-img">
              <img
                src="https://a.slack-edge.com/8d7ec90/marketing/img/homepage/mobile-focused/inline-images/03-choose-how-you-work-android@2x.png"
                alt="image"
              />
            </div>
            <video src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"></video>
          </div>
          <div className=" m-right">
            <h2>
              Move faster with your <br /> tools in one place
            </h2>
            <p>
              With your other work apps connected to Slack, you can work faster
              by switching tabs less. <br /> And with powerful tools like
              Workflow Builder, you can automate away routine tasks.
            </p>
            <a href="#" className="m-link">
              Learn more about channels
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainwork;
