import React from "react";
import HeaderPage from "../Components/HeaderPage";
import CardsBuses from "../Pages/CardsBuses";
import BookBusHire from "../Pages/BookBusHire";
const BusHirePage = () => {
  return (
    <div>
      <HeaderPage />
      <CardsBuses />
      <BookBusHire />
    </div>
  );
};

export default BusHirePage;
