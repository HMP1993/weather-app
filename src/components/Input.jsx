import React from "react";
import { UilSearchAlt, UilMapMarkerQuestion } from "@iconscout/react-unicons";

function Input() {
  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="City...."
          className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearchAlt
          size={25}
          className="text-white cursor-pointer ease-out hover:scale-125"
        />
        <UilMapMarkerQuestion
          size={25}
          className="text-white cursor-pointer ease-out hover:scale-125"
        />
      </div>
      <div className=" flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className=" text-xl text-white font-light">
          ℃
        </button>
        <p className=" text-white text-xl mx-1">|</p>
        <button name="imperial" className=" text-xl text-white font-light">
          ℉
        </button>
      </div>
    </div>
  );
}

export default Input;
