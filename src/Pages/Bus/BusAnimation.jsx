import React from "react";
import "./BusAnimation.css";

import road from "../../assets/images/road.png";
import fWheel from "../../assets/images/frontwheel.png";
import bWheel from "../../assets/images/backwheel.png";

const BusAnimation = () => {
  return (
    <div className="bottom-part pb-1">
      <div className="road-car">
        <img src={road} className="road_image " alt="Road" />

        <div className="road">
          {/* Buses from Left */}
          <div className="bus left">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus left bus_left_2">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus left bus_left_3">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus left bus_left_4">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus left bus_left_5">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>

          {/* Buses from Right */}
          <div className="bus right">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus right bus_right_2">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus right bus_right_3">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus right bus_right_4">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
          <div className="bus right bus_right_5">
            <img src={fWheel} className="frontwheel" alt="Front Wheel" />
            <img src={bWheel} className="backwheel" alt="Back Wheel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusAnimation;
