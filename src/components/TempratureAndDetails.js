import React from "react";
import {
  UilArrowDown,
  UilArrowUp,
  UilTemperatureHalf,
  UilRaindropsAlt,
  UilWindsock,
  UilDesert,
  UilSunset,
} from "@iconscout/react-unicons";

function TempratureAndDetails() {
  return (
    <div>
      <div className=" flex items-center justify-center py-6 text-xl to-cyan-300">
        <p>Windy</p>
      </div>
      <div className=" flex flex-row items-center justify-between text-white py-3">
        <img src="" />
        <p className=" text-5xl">30°</p>
        <div className=" flex flex-col space-y-2">
          <div className=" flex font-light text-sm items-center justify-center">
            <UilTemperatureHalf size={18} className="ml-1" />
            Real feel
            <span className=" font-medium ml-1">32°</span>
          </div>
          <div className=" flex font-light text-sm items-center justify-center">
            <UilRaindropsAlt size={18} className="ml-1" />
            Humidity
            <span className=" font-medium ml-1">80%</span>
          </div>
          <div className=" flex font-light text-sm items-center justify-center">
            <UilWindsock size={18} className="ml-1" />
            Wind speed
            <span className=" font-medium ml-1">6 KM/H</span>
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 ">
        <UilDesert />
        <p className=" font-light">
          {" "}
          Rise:
          <span className=" font-medium ml-1">5:45 AM</span>
        </p>
        <p className=" font-light">|</p>

        <UilSunset />
        <p className=" font-light">
          {" "}
          Set:
          <span className=" font-medium ml-1">4:45 PM</span>
        </p>
        <p className=" font-light">|</p>
        <UilArrowUp />
        <p className=" font-light">
          {" "}
          High:
          <span className=" font-medium ml-1">12°</span>
        </p>
        <p className=" font-light">|</p>
        <UilArrowDown />
        <p className=" font-light">
          {" "}
          Low:
          <span className=" font-medium ml-1">3°</span>
        </p>
      </div>
    </div>
  );
}

export default TempratureAndDetails;
