import React from "react";
import { UilSearchAlt, UilMapMarkerQuestion } from "@iconscout/react-unicons";


function Input() {
  return (
  <div className=" flex flex-row justify-center my-6">
    <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none"/>
    </div>
  </div>);
}

export default Input;
