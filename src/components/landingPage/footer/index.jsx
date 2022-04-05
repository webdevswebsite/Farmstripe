import React from "react";
import "./style.scss";
import Overlay from "./asset/Path 4.png";

const Footer = () => {
  // const handleClick = (id) => {
  //   history.push("/signup");
  // };
  return (
    <>
      <div className="footer">
        <img src={Overlay} alt="" />
        <div className="zou">
          <h1>Farmstripe</h1>
        </div>
        <div className="footer2">
          <div className="in-div">
            <div>
              <h3>COMPANY</h3>
            </div>
            <div>
              <p>
                <a href="/">About Us</a>
              </p>
              <p>
                <a href="/">Team</a>
              </p>
              <p>
                <a href="/">Careers</a>
              </p>
              <p>
                <a href="/">Contact</a>
              </p>
            </div>
          </div>
          <div className="in-div">
            <div>
              <h3>INVEST</h3>
            </div>
            <div className="margin">
              <p>
                <a href="/">Features</a>
              </p>
              <p>
                <a href="/">How it works</a>
              </p>
              <p>
                <a href="/">Pricing</a>
              </p>
              <p>
                <a href="/">Login</a>
              </p>
            </div>
          </div>

          <div className="in-div">
            <div>
              <h3>LEGAL</h3>
            </div>
            <div>
              <p>
                <a href="/">Privacy</a>
              </p>
              <p>
                <a href="/">Terms</a>
              </p>
              <p>
                <a href="/">Security</a>
              </p>
            </div>
          </div>
          <div className="in-div2">
            <h3>Blog Farmstripe</h3>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
