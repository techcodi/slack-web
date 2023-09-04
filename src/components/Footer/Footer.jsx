import React from "react";
import "./Footer.css";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
  const [footerShow, setFooterShow] = useState(false);
  return (
    <section className="footer">
      <div className="flexContent footer-container">
        <div className="footer-left">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstLpn8Hxh8UEfDz1AG04WisF83Xyyq-xERR4YxX778D7XOXN-ooBH18HoEOsogh-3dkc&usqp=CAU"
              alt="footer-icon"
            />
          </a>
        </div>

        <div className="flexContents fooRight okRihht">
          <div className="flexColn footer-right">
            <div className="flexContent arrow">
              <b>Why Slack ? </b>
            </div>
            <div
              className={`flexColn colnLink ${
                footerShow ? "active" : "inactive"
              }`}
            >
              <a href="#">Slack vs Email</a>
              <a href="#">Channels</a>
              <a href="#">Engagement</a>
              <a href="#">Scale</a>
              <a href="#">Watch the Demo</a>
            </div>
          </div>
          {/* Coln2 */}
          <div className="flexColn footer-right odt">
            <div className="flexContent arrow">
              <b>Product</b>
            </div>
            <div className="flexColn">
              <a href="#">Features</a>
              <a href="#">Integrations</a>
              <a href="#">Enterpriset</a>
              <a href="#">Solutions</a>
            </div>
          </div>
          {/* Coln3 */}
          <div className="flexColn footer-right odt">
            <div className="flexContent arrow">
              <b>Pricing</b>
            </div>
            <a href="#">Plans</a>
            <a href="#">Paid vs Free</a>
          </div>
          <div className="flexColn footer-right odt">
            <div className="flexContent">
              <b>Resources</b>
            </div>

            <a href="#"> Partners</a>
            <a href="#"> Developers</a>

            <a href="#">Community</a>
            <a href="#"> Apps</a>
            <a href="#"> Blog</a>
            <a href="#">Help Center</a>
            <a href="#"> Events</a>
          </div>

          <div className="flexColn footer-right odt">
            <div className="flexContent">
              <b> Company</b>
            </div>

            <a href="#"> About Us</a>
            <a href="#"> Leadership</a>
            <a href="#"> News</a>
            <a href="#"> Media Kit</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
