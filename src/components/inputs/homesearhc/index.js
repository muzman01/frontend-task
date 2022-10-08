import React, { useEffect } from "react";
import {IoLocation} from "react-icons/io5";
import {FiSearch} from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
function HomeSearch() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div data-aos="zoom-in-up" className="w-4/5 bg-white h-16 rounded-full grid grid-cols-3 gap-4 shadow-xl">
      <div className="text-blue-800 flex px-7 py-5">
        <IoLocation size={20} />
        <span className="ml-2 font-bold ">Anywhere</span>
      </div>
      <div className="col-span-2  px-7 py-5  border-l-2 border-gray-100 flex justify-between text-gray-300">
        <input type="text" className="w-full h-full outline-none" placeholder="Search by Title, Company or Keywords..." />
        <FiSearch size={20} />
      </div>
    </div>
  );
}

export default HomeSearch;
