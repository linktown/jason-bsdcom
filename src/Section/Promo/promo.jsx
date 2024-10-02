import React from "react";
import "./promo.scss";
import promoimg from "../../Media/KHI_Hardsell.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCheckDouble,
  faClock,
  faDumbbell,
  faMedal,
  faN,
  faSwimmingPool,
  faTv,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Cherrywa = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=6281388880983&text=Halo%20Maida,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Produk%20Kota%20Harapan%20Indah%20Promo%20https://kota-harapan-indah.id//&type=phone_number&app_absent=0";
  window.location.href = whatsappLink;
};

const promo = () => {
  return (
    <div id="promo" className="promolagoon">
      <div className="background">
        <div className="container-promo">
          <div className="promo-gambar">
            <img src={promoimg} alt={promoimg} />
          </div>
          <div className="containercontent">
            <div className="judul">
              <h1>PROMO KOTA HARAPAN INDAH</h1>
            </div>
            <div className="pointpenawaran">
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Siap Huni</span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Free DP</span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Free PPN</span>
              </div>

              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Free BPHTB</span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Free Biaya KPR</span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Free AJB & PPJB
                </span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Free Internet 12 Bulan
                </span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Free Kitchen Set
                </span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>&nbsp;&nbsp;Free Canopy</span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Free Smart Door Lock
                </span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Free Smart Home System
                </span>
              </div>
              <div className="penawaranpoin">
                <FontAwesomeIcon icon={faMedal} />
                <span style={{color: "white"}}>
                  &nbsp;&nbsp;Voucher Furniture
                </span>
              </div>
            </div>
            <div className="disclaimer">*Disclaimer</div>
            <button className="buttonpenawaran" onClick={Cherrywa}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default promo;
