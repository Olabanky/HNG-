import React from "react";
import "./Social.css";
import slack from "./assets/slack.png";
import github from "./assets/github.png";

const Social = () => {
  return (
    <section className="social">
      <div className="container">
        <div className="content1">
          <div className="social_icons">
            <img src={slack} alt="" />
            <img src={github} alt="" />
            {/* <button id="slack button">
              <img src={slack} alt="" />
            </button>
            <button id="github">
              <img src={github} alt="" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
