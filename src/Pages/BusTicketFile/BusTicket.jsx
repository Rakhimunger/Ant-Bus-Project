import React from "react";
import BusHeader from "./BusHeader";
import Offers from "./Offers";
import PopularIndian from "./PopularIndian";
import AmenitiesSection from "./AmenitiesSection";
import PopularSearches from "./PopularSearches";
import GalleryImages from "./GalleryImages";
import BookBusant from "../../Pages/BusHirePages/BookBusant";

function BusTicket() {
  return (
    <div>
      <BusHeader />
      <Offers />
      <PopularIndian />
      <AmenitiesSection />
      <PopularSearches />
      <GalleryImages />
      <BookBusant />
    </div>
  );
}

export default BusTicket;
