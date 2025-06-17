import React from "react";
import HomePage from "../Pages/HomePage";
import Offers from "../Pages/BusTicketFile/Offers";
import AntTript from "./AntTript";
import HomeAcDelux from "./HomeFiles/HomeAcDelux";
import HomeAcLuxuryBus from "./HomeFiles/HomeAcLuxuryBus";
import HomeAcSleeper from "./HomeFiles/HomeAcSleeper";
import HomeGallery from "./HomeFiles/HomeGellery";

const Home = () => {
  return (
    <div>
      <HomePage />
      <Offers />
      <AntTript />
      <HomeAcDelux />
      <HomeAcLuxuryBus />
      <HomeAcSleeper />
      <HomeGallery />
    </div>
  );
};

export default Home;
