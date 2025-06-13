import React from "react";
import HeaderPage from "../Components/HeaderPage";
import SeaterAc from "../Pages/SeaterAc";
import ACBusDetail from "../Pages/ACBusDetail";
import BusTariffPage from "../Pages/BusTariffPage";
import Facilities from "../Pages/Facilities";

const Details = () => {
  return (
    <div>
      <HeaderPage />
      <ACBusDetail />
      <SeaterAc />
      <BusTariffPage />
      <Facilities />
    </div>
  );
};

export default Details;
