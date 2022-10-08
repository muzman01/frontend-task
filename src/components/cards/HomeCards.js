import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../reducers/GlobalState";
import AOS from "aos";
import "aos/dist/aos.css";
import RigthBar from "../rigthbar/RigthBar";
import { useDispatch } from "react-redux";
import { JobsData } from "./JobsData";
function HomeCards() {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;

  useEffect(() => {
    AOS.init({

    });
  }, []);

  const [cardState, setCardState] = useState("");
  const handleCard = (item) => {
    setCardState(item.title)
    dispatch({ type: "DATA", payload: item });
  };
  return (
    <div className="w-full   flex items-center ">
      <div className=" w-4/5 flex gap-6 flex-col pb-4" data-aos="fade-right">
        {JobsData.map((item, index) => {
          return (
            <li
            
              onClick={() => handleCard(item)}
              key={index}
              className={`${
                item.cName
                  ? "rounded-md h-32  border-blue-200 px-6 py-3 text-center text-blue-700 bg-blue-100 border-solid border-2  "
                  : `${item.title === cardState ? "rounded-lg shadow-xl h-96 duration-500  border-gray-200 px-6 py-3 text-center bg-white border-solid border-2 list-none cursor-pointer":"rounded-lg shadow-xl h-40 duration-500  border-gray-200 px-6 py-3 text-center bg-white border-solid border-2 list-none cursor-pointer"}` 
              }`}
            >
              <div className="flex justify-between grid-cols-3">
                <div className="col-span-2 flex mt-6">
                  <div className="w-10 h-10">
                    <img src={item.logo} alt="" />
                  </div>
                  <div className="ml-7 flex flex-col text-left">
                    <span className="text-black font-bold text-2xl">
                      {item.title}
                    </span>
                    <span>{item.jobTitle}</span>
                    <div className="flex text-left">
                      <span>{item.days} days ago</span>
                      <span>,{item.appied} applied</span>
                    </div>
                  </div>
                </div>
                <div className="py-12">{item.location}</div>
                {
                  item.title === cardState ? (<>
                    <div className=" mt-48 absolute duration-500 -m-7 border-t-2 border-gray-300 w-full">
                      <div className="flex justify-between px-7 py-3">
                        <span className="text-blue-700">Other position at {item.title}</span>
                        <span className="text-blue-800 font-bold">View All</span>
                      </div>
                      <div className="flex flex-row  px-7 py-5 justify-between text-start">
                        <div className="w-44 h-20 border">
                          <p  className="truncate hover:text-clip py-2 px-2 font-bold">Visual Designer, {item.title}</p>
                          <span className=" text-sm px-2">{item.location}</span>
                        </div>
                        <div className="w-44 h-20 border">
                          <p  className="truncate hover:text-clip py-2 px-2 font-bold">İnteraction Designer</p>
                          <span className=" text-sm px-2">{item.location}</span>
                        </div>
                        <div className="w-44 h-20 border">
                          <p  className="truncate hover:text-clip py-2 px-2 font-bold">İnteraction Designer</p>
                          <span className=" text-sm px-2">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  
                  </>) : (<></>)
                }
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default HomeCards;
