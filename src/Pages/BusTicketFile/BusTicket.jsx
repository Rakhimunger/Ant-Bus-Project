import React from "react";
import BusHeader from "./BusHeader";
import Offers from "./Offers";
import PopularIndian from "./PopularIndian";
import AmenitiesSection from "./AmenitiesSection";
import PopularSearches from "./PopularSearches";
import GalleryImages from "./GalleryImages";

function BusTicket() {
  return (
    <div>
      <BusHeader />
      <Offers />
      <PopularIndian />
      <AmenitiesSection />
      <PopularSearches />
      <GalleryImages />
    </div>
  );
}

export default BusTicket;
