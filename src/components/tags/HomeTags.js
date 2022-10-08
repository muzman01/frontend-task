import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TagBarData } from "./TagBarData";

function HomeTags() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className="w-full  h-16 flex items-center "
    >
    <div className="inline-flex w-4/5 items-center  leading-sm uppercase   rounded-full justify-between">
    {TagBarData.map((item, index) => {
                  return (
                    <span  key={index} className={`${item.cName ? "rounded-full  border-blue-200 px-6 py-3 text-center text-blue-700 bg-blue-100 border-solid border-2  ":"rounded-full  border-gray-200 px-6 py-3 text-center bg-white border-solid border-2  "}`}>
                        {item.title}
                    </span>
                  );
                })}
    </div>
    </div>
  );
}

export default HomeTags;
