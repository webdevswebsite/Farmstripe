import { useState } from "react";
import history from "../../../utils";
import Hamburger from "./asset/hamburger (2)/1x/outline_menu_black_24dp.png";
import SideNav from "./sideBar/index";
import "./style.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   history.push("/login");
  // };
  const handleChange = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <section>
        <div className="Navbar">
          <div>
            <h1>Farmstripe</h1>
          </div>
          
          <div className="navbar-button">
            <button>Contact us</button>
          </div>
          <div className="hamburger" onClick={handleChange}>
            <img src={Hamburger} alt="" />
          </div>
        </div>
        <SideNav isActive={isActive} onClose={() => setIsActive(!isActive)} />
      </section>
    </>
  );
};

export default Navbar;
