import React from "react";
import "./card.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faBed,
  faHouse,
  faMaximize,
  faMedal,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cardrumahdetail = ({
  carousel,
  title,
  subtitle,
  price,
  details,
  whatsappLink,
  subprice,
}) => {
  const settings = {
    dots: carousel.length > 1,
    arrows: carousel.length > 1,
    infinite: carousel.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div className="cardrumahdetail">
      <div className="cluster-card">
        <Slider {...settings}>
          {carousel.map((image, index) => (
            <img
              className="cluster-image"
              key={index}
              src={image}
              alt={`Launching ${index + 1}`}
            />
          ))}
        </Slider>
        <div className="container-rumah">
          <div className="nama-rumah">{title}</div>
          <div className="gridmap">
            <FontAwesomeIcon className="icon" color="#ad7e36" icon={faMedal} />
            <div className="namalokasi">{subtitle}</div>
          </div>
        </div>
        <hr />
        <div className="gridspek">
          <FontAwesomeIcon color="#091c34" icon={faArrowsUpDownLeftRight} />
          <span> {details.area}</span>
          <FontAwesomeIcon color="#091c34" icon={faHouse} />
          <span> {details.buildingSize}</span>
          <FontAwesomeIcon color="#091c34" icon={faBed} />
          <span> {details.floor}</span>
          <FontAwesomeIcon color="#091c34" icon={faShower} />
          <span> {details.bathrooms}</span>
        </div>
        <hr />
        <div className="containercicilan">
          <div className="judulkartu">
            <div className="startfrom">Start From</div>
          </div>
          <div className="cicilansumban">
            <div className="angka">8 Juta/</div>
            <div className="ket">Bulan</div>
          </div>
        </div>

        <div className="cluster-button">
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="cluster-whatsapp">
            <FontAwesomeIcon size="lg" icon={faWhatsapp} />
            &nbsp;Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardrumahdetail;
