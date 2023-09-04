import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import "./CopyRight.css";

const CopyRight = () => {
  return (
    <div className="copyRight">
      <hr />
      <div className="copyRight-container">
        <div className="details-copyRight">
          <div className="flexContent">
            <a href="#">Status </a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Your Privacy Choices</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Contact Us</a>
            <a href="#" className="flexSocial">
              <LanguageIcon /> Change Region
            </a>
          </div>
        </div>
        <div className="socials-copyRight">
          <div className="flexContent social-link">
            <b>
              {" "}
              <a href="#" className="flexContent social-color">
                <CloudDownloadOutlinedIcon />
                Download Slack
              </a>
            </b>
            <br />
            <div className="other-socil">
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <small className="copy-small">
        ©2023 Slack Technologies, LLC, a Salesforce company. All rights
        reserved. Various trademarks held by their respective owners.
      </small>
    </div>
  );
};

export default CopyRight;
