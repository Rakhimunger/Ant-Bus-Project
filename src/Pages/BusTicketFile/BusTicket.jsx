import React from "react";
import BusHeader from "./BusHeader";
import Offers from "./Offers";
import PopularIndian from "./PopularIndian";
import AmenitiesSection from "./AmenitiesSection";
import PopularSearches from "./PopularSearches";

function BusTicket() {
  return (
    <div>
      <BusHeader />
      <Offers />
      <PopularIndian />
      <AmenitiesSection />
      <PopularSearches />
    </div>
  );
}

export default BusTicket;
