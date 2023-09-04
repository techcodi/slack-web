import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Card.css";

const Card = () => {
  return (
    <section className="c-cards">
      <h3>Take a deeper dive into a new way to work</h3>
      <div className="flexContent cards-container">
        <div className="flexContent first-card">
          <a href="#" className="card-box">
            <div className="card">
              <img
                src="https://a.slack-edge.com/b37cac3/marketing/img/promos/promo-card-dreamforce-2023.png"
                alt="ai-too"
              />
              <small>Report</small>
              <h5>The State work of 2023</h5>
              <div className=" flexContent read-more sdc-card">
                <b>READ MORE </b>
                <AiOutlineArrowRight />
              </div>
            </div>
          </a>

          <a href="#" className="card-box card-box-big">
            <div className="card">
              <img
                src="https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg"
                alt="card-ai "
              />
              <small>On-demand</small>
              <h5>
                Big things are launching. Relive the highlights of World Tour
                New York!
              </h5>
              <div className=" flexContent read-more bg-sdc-card">
                <b>READ MORE </b>
                <AiOutlineArrowRight />
              </div>
            </div>
          </a>
        </div>

        <div className="flexContent second-card">
          <a href="#" className="card-box">
            <div className="card">
              <img
                src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-open-ai.jpg"
                alt="prono ai"
              />
              <small>Customer Story The next t</small>
              <h5>The next big thing? AI for everyone.3</h5>
              <div className=" flexContent read-more">
                <b>READ MORE </b>
                <AiOutlineArrowRight />
              </div>
            </div>
          </a>

          <a href="#" className="card-box">
            <div className="card">
              <img
                src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg"
                alt="company card"
              />
              <small>Webinar</small>
              <h5>Top Slack tips to boost productivity</h5>
              <div className=" flexContent read-more">
                <b>READ MORE </b>
                <AiOutlineArrowRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
