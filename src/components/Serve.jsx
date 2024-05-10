import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

const Serve = ({ data }) => {
  return (
    <>
      <div className="relative w-[250px] h-[330px] bg-red-200 rounded-3xl overflow-hidden mr-3 mb-4">
        <div className="rt h-full w-full bg-[url('/src/assets/the.jpeg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute h-1 w-12 rounded-2xl bg-white top-52 left-[100px]"></div>
          <h3 className=" text-white absolute top-56 text-center  w-full text-xl font-semibold ">
            {data.title}
          </h3>
        </div>
        <Link to={`/service/${data.page}`}>
          <div className="btn absolute top bottom-0 w-full h-10 flex justify-center items-center gap-2 text-white cursor-pointer">
            <MdOpenInNew
              style={{
                fontSize: "1.2rem",
              }}
            />
            <h2>MAKE CHANGES</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Serve;
