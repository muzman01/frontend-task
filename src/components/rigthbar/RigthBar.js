import React, { useContext, useState } from "react";
import { DataContext } from "../../reducers/GlobalState";
import { MdFavorite } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

function RigthBar() {
  const { state, dispatch } = useContext(DataContext);
  const { data } = state;
  const [rating, setRating] = useState(4);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <section className="flex gap-6 duration-1000  sm:z-10">
      <div
        className={`bg-white min-h-screen w-72 duration-500 text-blue-800 px-4 `}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-10 border-b-2 border-gray-200 pb-5">
            <span
              className="ml-40 text-red-700 font-bold text-xl cursor-pointer"
              onClick={() => dispatch({ type: "DATA", payload: [] })}
            >
              X
            </span>
            <img src={data.logo} className="w-20 h-20" />
            <span className="text-black font-bold text-xl mt-6">
              {data.jobTitle}
            </span>
            <span className="mt-1">{data.location}</span>
            <span className="mt-5 flex">
              <MdFavorite size={20} />{" "}
              <span className="font-bold -mt-1 ml-2">saved</span>
            </span>
            <button className="mt-5 bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              apply
            </button>
          </div>
          <div className="flex flex-col mt-5  border-b-2 border-gray-200 pb-5 overflow-y-scroll">
            <h1 className="font-bold text-black">Minumum Qualifications</h1>
            <ul className="mt-4 ml-7 list-disc text-gray-500 ">
              <li className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </li>
              <li className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </li>
              <li className="mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </li>
            </ul>
            <span className="font-bold mt-5 ml-5">read more</span>
          </div>
          <div className="flex flex-col mt-5 pb-5 w-full">
            <h1 className="font-bold text-xl text-black">About the Company</h1>
            <span className="mt-5 font-bold text-black">Glassdoor</span>

            <div className="inline-flex flex-row">
              {" "}
              <Rating
                fillColorArray={[
                  "#f14f45",
                  "#f16c45",
                  "#f18845",
                  "#f1b345",
                  "#f1d045",
                ]}
                transition
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                size={20}
                style={{ cursor: "pointer",display:"flex",flexDirection:"row" }}
              />
            </div>

            <span className="text-gray-300">4.6 - 8.389 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RigthBar;
