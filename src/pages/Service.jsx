import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Serve from "../components/Serve.jsx";

const Service = () => {
  const data = [
    { title: "Theartrical", page: "theartical" },
    { title: "Mangazine", page: "theartical" },
    { title: "Branded Kiosk", page: "theartical" },
    { title: "Voucher Distribution", page: "theartical" },
    { title: "Flight Ticket", page: "theartical" },
    { title: "Commercial Video Ad", page: "theartical" },
    { title: "Commercial Visual Photo Ad", page: "theartical" },
    { title: "Business Insight", page: "businessInsight" },
    { title: "Home Screen", page: "theartical" },
  ];

  return (
    <div className="bg-gray-30">
      <div className="container flex items-start justify-center min-h-screen px-6 mx-auto flex-wrap content-start w-full">
        <div
          className="h-24 w-screen border-b-2  border-l-2
       border-r-2 rounded-b-xl  mb-8 flex  justify-center  items-center gapx-x-[60rem]"
        >
          {/* <img src={logo} alt="" className="w-[170px] h-10 sm:h-8" />
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md flex justify-evenly items-center gap-1">
              <MdOpenInNew 
                 style={{
                fontSize: "1.2rem",
                 }}
              />
              Log Out
            </button>
             */}
        </div>

        {data.map((item, index) => (
          <Serve data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Service;
