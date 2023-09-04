import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <section className="c-wraper">
      <h4>TRUSTED BY COMPANIES ALL OVER THE WORLD</h4>

      <div className="container flexContent">
        <div className="company-logo">
          <img
            src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png"
            alt="sponsors company"
          />
        </div>
        <div className="company-logo">
          <img
            src="https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png"
            alt="Uber-logo"
          />
        </div>
        <div className="company-logo">
          <img
            src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png"
            alt="sponsors company"
          />
        </div>
        <div className="company-logo" alt="sponsors company">
          <img
            src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png"
            alt="sponsors company"
          />
        </div>
        <div className="company-logo">
          <img
            src="https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png"
            alt="sponsors company"
          />
        </div>
        <div className="company-logo">
          <img
            src="https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png"
            alt="sponsors company"
          />
        </div>
      </div>
    </section>
  );
};

export default Company;
