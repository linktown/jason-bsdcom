import React, {useState} from "react";
import "./navbar.scss";
import Logo from "../../Media/logobsd.png";
import {HashLink} from "react-router-hash-link";
import {FaBars} from "react-icons/fa";
import {RiCloseLine} from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281818160028&text=Halo+Christine,%20Saya%C2%A0bisa%20minta%20detail%20Promo%20terbaru%20rumah%20Kota%20Wisata%20Cibubur%20(Promo)+https://marketing-kotawisata.id/&type=phone_number&app_absent=0";
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className={isOpen ? "menus active" : "menus"}>
          <ul>
            <li>
              <HashLink className="link" smooth to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#promo">
                Promo
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#rumah">
                Residentials
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#lokasi">
                Location
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="icons" onClick={toggleMenu}>
          <FaBars className={isOpen ? "bars active" : "bars"} />
          <RiCloseLine className={isOpen ? "close active" : "close"} />
        </div>
        <div className="container-wa">
          <button className="buttonpenawaran" onClick={handleConsultationClick}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
