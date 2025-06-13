import React from "react";
import HeaderPage from "../Components/HeaderPage";
import CardsBuses from "../Pages/CardsBuses";
import AcDeluxeBusHire from "../Pages/AcDeluxeBusHire";
const BusHirePage = () => {
  return (
    <div>
      <HeaderPage />
      <CardsBuses />
      <AcDeluxeBusHire />
    </div>
  );
};

export default BusHirePage;
