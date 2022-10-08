import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function FiterHome() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-full  h-20 flex items-center ">
      <div className="inline-flex w-4/5 items-center justify-between">
        <div data-aos="zoom-in-right" className="font-bold">
            Showing <span className="text-blue-800"> Full-time jobs</span>
        </div>
        <div data-aos="zoom-in-left">
            
        <label 
    for="toogleA"
    class="flex items-center cursor-pointer"
  >
    <div class="-ml-3 text-gray-700 font-medium">
      Job Alerts
    </div>
    <div className="relative ml-5">
  
      <input id="toogleA" type="checkbox" className="sr-only" />
   
      <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

      <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>


  </label>
        </div>
      </div>
    </div>
  );
}

export default FiterHome;
