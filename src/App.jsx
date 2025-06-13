// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import BusHirePage from "./Pages/BusHirePages/BusHirePage";
import MiniVanPage from "./Pages/MiniVanPage";
import CarHirePage from "./Pages/CarHirePage";
import BusTicket from "./Pages/BusTicketFile/BusTicket";
import BusTourPage from "./Pages/BusTourPage";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import AcLuxuryBusHire from "./Pages/BusHirePages/AcLuxuryBusHire";
import AcDeluxeBusHire from "./Pages/BusHirePages/AcDeluxeBusHire";
import Details from "./Pages/Details";
import AcSleeperBusHire from "./Pages/BusHirePages/AcSleeperBusHire";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BusHirePage />} />
        <Route path="/mini-van" element={<MiniVanPage />} />
        <Route path="/car-hire" element={<CarHirePage />} />
        <Route path="/bus-ticket" element={<BusTicket />} />
        <Route path="/bus-tour" element={<BusTourPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/ac-delux-bus" element={<AcDeluxeBusHire />} />
        <Route path="/ac-luxury-bus" element={<AcLuxuryBusHire />} />
        <Route path="/ac-sleeper-bus" element={<AcSleeperBusHire />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
