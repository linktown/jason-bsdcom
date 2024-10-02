import React from "react";
import "./home.scss";
import Navbar from "../Section/Header/navbar.jsx";
import Banner from "../Section/Banner/banner.jsx";
import About from "../Section/About/about.jsx";
import Promo from "../Section/Promo/promo.jsx";
import Produk from "../Section/Produk/produk.jsx";
import ScrollToHashElement from "../Pages/ScrollToHashElement.js";

const home = () => {
  const fungsiganteng = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281818160028&text=Halo%20Christine,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Produk%20Kota%20Wisata%20https://marketing-kotawisata.id//&type=phone_number&app_absent=0";
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="home">
      <ScrollToHashElement />
      <Navbar />
      <Banner />
      <About />
      <Promo />
      <Produk />
    </div>
  );
};

export default home;
