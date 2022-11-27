import React from "react";
import { UilClouds } from "@iconscout/react-unicons";

function Forecast(props) {
  return (
    <div>
      <div className=" flex items-center justify-start mt-6">
        <p className=" text-white font-medium uppercase">{props.title}</p>
      </div>
      <hr className=" my-2" />

      <div className=" flex flex-row items-center justify-between text-white">
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-light text-sm">10:30 AM</p>
          <UilClouds />
          <p className=" font-light text-sm">30°</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-light text-sm">11:30 AM</p>
          <UilClouds />
          <p className=" font-light text-sm">30°</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-light text-sm">12:30 PM</p>
          <UilClouds />
          <p className=" font-light text-sm">30°</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-light text-sm">1:30 PM</p>
          <UilClouds />
          <p className=" font-light text-sm">30°</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className=" font-light text-sm">2:30 PM</p>
          <UilClouds />
          <p className=" font-light text-sm">30°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
