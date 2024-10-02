import React from "react";
import "./produk.scss";
import data from "../../Component/Card/data.json";
import Card from "../../Component/Card/card";
import Xlaneimages from "../../Media/Ruko BSD/Xline/Xline";
import Cascadeimages from "../../Media/Ruko BSD/Cascade/Cascade";
import Delreyimages from "../../Media/Ruko BSD/Delrey/Delrey";
import Tamanteknoimages from "../../Media/Ruko BSD/Taman Tekno/Tamantekno";
import Northpointimages from "../../Media/Ruko BSD/NTP/Northpoint";
import Capitalcoveimages from "../../Media/Ruko BSD/Capital Cove/Capitalcove";
import Theloopimages from "../../Media/Ruko BSD/The Loop/Theloop";
import Iconiximages from "../../Media/Ruko BSD/Iconix/Iconix";
import Vanyaparkimages from "../../Media/Ruko BSD/Vanya/Vanyapark";
import Northridgeimages from "../../Media/Ruko BSD/Northridge/Northridge";
import Latinosimages from "../../Media/Ruko BSD/Latinos/Latinos";
import westvillageimages from "../../Media/Ruko BSD/West Village/Westvillage";

const imageMap = {
  Xlaneimages,
  Cascadeimages,
  Delreyimages,
  Tamanteknoimages,
  Northpointimages,
  Capitalcoveimages,
  Theloopimages,
  Iconiximages,
  Vanyaparkimages,
  Northridgeimages,
  Latinosimages,
  westvillageimages,
  // Add other image arrays here if you have more sets
};

const produk = () => {
  return (
    <div id="produk" className="produk">
      <div className="cardhome-containerf">
        {data.cards.map((card, index) => {
          // Determine the logo dynamically
          // Determine the logo dynamically
          return (
            <Card
              key={index}
              carousel={imageMap[card.imagesKey]}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              subprice={card.subprice}
              details={card.details}
              whatsappLink={card.whatsappLink} // Pass the WhatsApp link
            />
          );
        })}
      </div>
    </div>
  );
};

export default produk;
