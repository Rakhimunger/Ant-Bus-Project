import React from "react";
import Minivan from "../Pages/Minivan";
import MiniPage from "../Components/MiniPage";
import AcDeluxeBusHire from "./AcDeluxeBusHire";

const MiniVanPage = () => {
  return (
    <div>
      <MiniPage />
      <Minivan />
      <AcDeluxeBusHire />
    </div>
  );
};

export default MiniVanPage;
