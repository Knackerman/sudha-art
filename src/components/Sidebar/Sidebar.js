// libs
import React from "react";
import { Collapse } from "reactstrap";

// style
import "./Sidebar.css";

// assets
import Logo from "../../assests/logo.png";

// render method
const Sidebar = ({ onClick }) => {
  // state values
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar__wrapper">
      <div className="container px-0">
        <div className="sidebar__scroll sidebar__container">
          <img
            src={Logo}
            alt="logo image"
            className="sidebar__logo"
            onClick={() => {
              window.location.reload();
            }}
          />
          <ul className="sidebar__items">
            <li className="sidebar__collapse" onClick={() => toggle()}>
              Galleries <span className="pl-1">{isOpen ? "+" : "-"}</span>
            </li>
            <Collapse isOpen={!isOpen}>
              <ul onClick={onClick}>
                <li className="sidebar__item">Tanjore</li>
                <li className="sidebar__item">Oil</li>
                <li className="sidebar__item">Ceramic</li>
                <li className="sidebar__item">Colored Pencil</li>
                <li className="sidebar__item">Fabric</li>
                <li className="sidebar__item">Meenakari</li>
                <li className="sidebar__item">Mixed Media</li>
                <li className="sidebar__item">Kerala Mural</li>
              </ul>
            </Collapse>
            <ul className="bottom">
              <li className="sidebar__item">contact</li>
              <li className="sidebar__item">
                <a href="#" target="_blank" className="sidebar__link">
                  facebook
                </a>
              </li>
              <li className="sidebar__item">
                <a href="#" target="_blank" className="sidebar__link">
                  instagram
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="sidebar__bottom text-center">
          Hoover Tung Photography
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
