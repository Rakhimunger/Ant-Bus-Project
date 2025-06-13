// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import BusHirePage from "./Pages/BusHirePage";
import MiniVanPage from "./Pages/MiniVanPage";
import CarHirePage from "./Pages/CarHirePage";
import BusTicketPage from "./Pages/BusTicketPage";
import BusTourPage from "./Pages/BusTourPage";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import Details from "./Pages/Details";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BusHirePage />} />
        <Route path="/mini-van" element={<MiniVanPage />} />
        <Route path="/car-hire" element={<CarHirePage />} />
        <Route path="/bus-ticket" element={<BusTicketPage />} />
        <Route path="/bus-tour" element={<BusTourPage />} />
        <Route path="/home" element={<Home />} />

        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
