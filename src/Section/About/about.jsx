import React from "react";
import "./about.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import aboutimg from "../../Media/Ruko BSD/Capital Cove/Capital Cove (4).webp";

const About = () => {
  const aboutwa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6282213501915&text=Halo%20Albert,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Rumah%20https://marketing-alteablvd.com/%20()&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div className="about">
      <div id="about" className="container-about">
        <div className="container-desk">
          <div className="desk">
            BSD City merupakan kawasan seluas 6.000 hektar yang dikeembangkan
            oleh developer Sinarmasland Tbk. Selain menawarkan Perumahan BSD
            City Juga menawarkan Area Commercial seperti Ruko, Office, Kavling,
            Serta Warehouse. Kami memiliki berbagai jenis tipe properti yang
            siap untuk mengembangkan bisnis anda.
          </div>
        </div>
        <div className="container-benefit">
          <div className="benefit-list">
            <ul>
              <li>Sourrounded by Many Residential</li>
              <li>More Than 200.000+ Residents</li>
              <li>Easy Access</li>
              <li>Strategic Location</li>
              <li>More Than 136 Residential</li>
              <li>Premium Facilities</li>
            </ul>
          </div>
        </div>
        <div className="button">
          <button className="wa" onClick={aboutwa}>
            <FontAwesomeIcon icon={faWhatsapp} />
            &nbsp; More Info
          </button>
        </div>
      </div>
      <div className="gambarabout">
        <img src={aboutimg} alt={aboutimg} />
      </div>
    </div>
  );
};

export default About;
