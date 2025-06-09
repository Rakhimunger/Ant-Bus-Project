import React from "react";
import Minivan from "../Pages/Minivan";
import MiniPage from "../Components/MiniPage";
import BookBusHire from "./BookBusHire";

const MiniVanPage = () => {
  return (
    <div>
      <MiniPage />
      <Minivan />
      <BookBusHire />
    </div>
  );
};

export default MiniVanPage;
