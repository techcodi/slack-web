import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion-item">
        <div
          className="flexContent accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div>
            <b className="title">{title}</b>
          </div>
          <div className="accordionIcon">
            {isActive ? <ExpandMoreIcon /> : <NavigateNextIcon />}
          </div>
        </div>
        {isActive && (
          <div className="accordion-content">
            {" "}
            <a href="/">{content1}</a>
            <a href="/">{content2}</a>
            <a href="/">{content3}</a>
            <a href="/">{content4}</a>
            <a href="/">{content5}</a> <a href="/">{content6}</a>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
