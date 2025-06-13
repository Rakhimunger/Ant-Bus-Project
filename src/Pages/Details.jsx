import React from "react";
import HeaderPage from "../Components/HeaderPage";
import SeaterAc from "../Pages/SeaterAc";
import ACBusDetail from "../Pages/ACBusDetail";
import BusTariffPage from "../Pages/BusTariffPage";
import GallerySection from "./GallerySection";

const Details = () => {
  return (
    <div>
      <HeaderPage />
      <ACBusDetail />

      <SeaterAc />
      <BusTariffPage />
      <GallerySection />
    </div>
  );
};

export default Details;
