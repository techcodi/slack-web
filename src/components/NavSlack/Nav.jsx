import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [navWraper, setNavbar] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const changeNavBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  document.addEventListener("scroll", changeNavBackground);
  return (
    <nav className={navWraper ? "navWraper active" : "navWraper"}>
      <div className="flexContent nav-container">
        <div className="flexContent nav-left">
          <div className="navImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/100px-Slack_Technologies_Logo.svg.png"
              alt="nav-logo"
            />
          </div>
          <div
            className={`flexContent  generaled ${openNav ? "active" : null}`}
            ref={menuRef}
          >
            <div className="navigation-link">
              <li
                onClick={() => {
                  setShow(!show);
                }}
              >
                Features <AiOutlineDown />
                <div className={`display-none ${show ? "active" : "inactive"}`}>
                  <div className="flexContent coln-left">
                    <div className="flexContent">
                      <div className="flexColn ">
                        <div>
                          <p>Channels</p>
                          <a href="#">Focused project spaces</a>
                        </div>

                        <div>
                          <p>Slack Connects</p>
                          <a href="#">Shared partner channels</a>
                        </div>

                        <div>
                          <p>Messaging</p>
                          <a href="#">Organized team chat</a>
                        </div>

                        <div>
                          <p>Huddles</p>
                          <a href="#">Audio and video calls</a>
                        </div>
                        <div>
                          <p>Clips</p>
                          <a href="#">Record and share info</a>
                        </div>
                      </div>

                      <div className="flexColn">
                        <div>
                          <p>Apps and Integrations</p>
                          <a href="#">Connect to other services</a>
                        </div>

                        <div>
                          <p>Workflow Builder</p>
                          <a href="#">Automate routine actions</a>
                        </div>

                        <div>
                          <p>Search</p>
                          <a href="#">Access shared knowledge</a>
                        </div>

                        <div>
                          <p>File Sharing</p>
                          <a href="#">See and share files</a>
                        </div>
                      </div>

                      <div className="flexColn">
                        <div>
                          <p>Security </p>
                          <a href="#">Protect company data</a>
                        </div>

                        <div>
                          <p>Enterprise Key Management</p>
                          <a href="#">Control visibility and access</a>
                        </div>

                        <div>
                          <p>Slack Atlas</p>
                          <a href="#">Profiles and org charts</a>
                        </div>

                        <div>
                          <p>Canvas</p>
                          <a href="#">Text docs, right in Slack</a>
                        </div>
                      </div>
                    </div>

                    <div className="left-img">
                      <b>Features</b>
                      <img src="./promo-open-ai.jpg" />
                      <p>
                        Slack GPT: A new day for <br /> work, powered by AI
                      </p>
                      <div className="a-link">
                        <a href="#" className="a">
                          Read Announcement
                        </a>
                      </div>

                      <p className="left-p"> What is Slack? </p>
                      <p>Slack vs.Email</p>
                      <p> Accessibility</p>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              Solutions <AiOutlineDown />
              <div className={`display-none ${show ? "active" : "inactive"}`}>
                <div className="flexContent coln-left">
                  <div className="flexContent">
                    <div className="flexColn ">
                      <div>
                        <p>Channels</p>
                        <a href="#">Focused project spaces</a>
                      </div>

                      <div>
                        <p>Slack Connects</p>
                        <a href="#">Shared partner channels</a>
                      </div>

                      <div>
                        <p>Messaging</p>
                        <a href="#">Organized team chat</a>
                      </div>

                      <div>
                        <p>Huddles</p>
                        <a href="#">Audio and video calls</a>
                      </div>
                      <div>
                        <p>Clips</p>
                        <a href="#">Record and share info</a>
                      </div>
                    </div>

                    <div className="flexColn">
                      <div>
                        <p>Apps and Integrations</p>
                        <a href="#">Connect to other services</a>
                      </div>

                      <div>
                        <p>Workflow Builder</p>
                        <a href="#">Automate routine actions</a>
                      </div>

                      <div>
                        <p>Search</p>
                        <a href="#">Access shared knowledge</a>
                      </div>

                      <div>
                        <p>File Sharing</p>
                        <a href="#">See and share files</a>
                      </div>
                    </div>

                    <div className="flexColn">
                      <div>
                        <p>Security </p>
                        <a href="#">Protect company data</a>
                      </div>

                      <div>
                        <p>Enterprise Key Management</p>
                        <a href="#">Control visibility and access</a>
                      </div>

                      <div>
                        <p>Slack Atlas</p>
                        <a href="#">Profiles and org charts</a>
                      </div>

                      <div>
                        <p>Canvas</p>
                        <a href="#">Text docs, right in Slack</a>
                      </div>
                    </div>
                  </div>

                  <div className="left-img">
                    <b>Features</b>
                    <img
                      className="T-image"
                      src="https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg"
                      alt="image"
                    />
                    <p>
                      Slack GPT: A new day for <br /> work, powered by AI
                    </p>
                    <a href="#" className="m-link">
                      Read Announcement
                    </a>

                    <p> What is Slack? </p>
                    <p>Slack vs.Email</p>
                    <p> Accessibility</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="pricing-link">
                Enterprise
              </a>
            </li>
            <li>
              Resources <AiOutlineDown />
            </li>
            <a href="#">Pricing</a>
            <div className="navigation-buttons">
              <div className="navflexBtn">
                <button className="btn-In">Sign in</button>
                <button className="btn-primary-Nav">Download Slack</button>
              </div>
            </div>
          </div>
          {/* NAVIGATON BUUTTONS */}
        </div>

        <div className="flexContent right-n-wraper">
          <AiOutlineSearch className="nav-search-icon" />

          <a href="#" className="nav-sign">
            Sign in
          </a>
          <div className="flexContent t-links-n-wraper">
            <a href="#" className="btn-primary btn-download">
              DOWNLOAD
            </a>
            <AiOutlineMenu
              className="nav-menu-icon"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            />

            <a href="#" className="btn-primary">
              Talk to sales
            </a>
            <a href="#" className="btn nav-buttons">
              Try for free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
