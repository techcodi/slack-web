import React from "react";
import "./FooterAccordion.css";
import { useState } from "react";
import Accordion from "../../Accordion";

const FooterAccordion = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = [
    {
      title: "WHY SLACK",
      content1: `Slack vs Email`,
      content2: `Channels`,
      content3: `Engagement`,
      content4: `Scale`,
      content5: `Wacth the Demo`,
    },
    {
      title: "FEATURESS",
      content1: `Features`,
      content2: `Integrations`,
      content3: `Enterprise`,
      content4: `Solutions`,
    },
    {
      title: "RESOURCES",
      content1: `Plan`,
      content2: `Plan vs Free`,
    },
    {
      title: "RESOURCES",
      content1: `Developers`,
      content2: `Community`,
      content3: `Apps`,
      content4: `Blog`,
      content5: `Help Center`,
      content6: `Event`,
    },
    {
      title: "ABOUTUS",
      content1: `News`,
      content2: ` Media Kit`,
      content3: `Careers`,
      content4: ` Swag Store`,
      content5: `Help Center`,
      content6: `Leadership`,
    },
  ];

  const { title, content1, content2, content3, content4, content5, content6 } =
    accordionData;
  return (
    <footer>
      <div className="accordionContainer">
        <React.Fragment>
          <div className="accordion-img">
            <img
              src="https://image.pngaaa.com/950/6584950-middle.png"
              alt="footer-icon"
            />
            <div className="accordion">
              {accordionData.map(
                ({
                  title,
                  content1,
                  content2,
                  content3,
                  content4,
                  content5,
                  content6,
                }) => (
                  <Accordion
                    title={title}
                    content1={content1}
                    content2={content2}
                    content3={content3}
                    content4={content4}
                    content5={content5}
                    content6={content6}
                  />
                )
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    </footer>
  );
};

export default FooterAccordion;
