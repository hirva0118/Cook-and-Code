import React from "react";
import { Images } from "../assets/Images";
import Buttons from "../Component/Buttons";
import { Icons } from "../assets/Icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate=useNavigate()
  return (
    <>
      <div className="sm:relative">
        <img className="w-full" src={Images.bg} />
        <div className="mt-5 sm:absolute font-playfair top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-center">
          <p className=" text-sm sm:text-xl md:text-4xl lg:text-6xl xl:text-8xl">
            Best food for
            <br />
            your taste
          </p>
          <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-xl sm:mt-4 md:mt-8 ">
            Discover delectable cuisine and unforgettable moments <br />
            in our welcoming, culinary haven.
          </p>
          <div className="mt-6 space-x-2 lg:mt-10 sm:space-x-8 ">
            <Buttons
              className=" text-sm p-3 md:py-5 md:px-8 text-white"
              styleType="filled"
              text="Book a table"
              onClick={()=>navigate("/bookTable")}
            ></Buttons>
            <Buttons
              className="text-sm p-3 md:py-5 md:px-8 border border-black"
              text="Explore menu"
              onClick={()=>navigate("/menu")}
            ></Buttons>
          </div>
        </div>
      </div>

      <div className="container mt-10 mb-12">
        <div>
          <p className="flex justify-center font-playfair text-[30px] md:text-[40px] lg:text-[55px]">
            Browse Our Menu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-between mt-10 ">
            <div className=" border border-gray-400 p-4 flex flex-col justify-center">
              <img className=" mx-auto mb-7" src={Icons.icon1} alt="logo" />
              <div className="flex justify-center  font-sans sm:text-xl md:text-2xl font-bold">
                Breakfast
              </div>
              <p className="text-center items-center mt-4">
                In the new era of technology we look in the future with
                certainty and pride for our life
              </p>
              <p onClick={()=>navigate("/menu")} className="cursor-pointer mt-5 text-red_diff flex justify-center">
                Explore Menu
              </p>
            </div>

            <div className="p-3 flex flex-col justify-center border border-gray-400 ">
              <img className=" mx-auto mb-7" src={Icons.icon2} alt="logo" />
              <div className="flex justify-center font-sans sm:text-xl md:text-2xl font-bold">
                Main Dishes
              </div>
              <p className="mt-4 text-center">
                In the new era of technology we look in the future with
                certainty and pride for our life
              </p>
              <p onClick={()=>navigate("/menu")} className="cursor-pointer mt-5 text-red_diff flex justify-center">
                Explore Menu
              </p>
            </div>

            <div className=" p-3 flex flex-col justify-center border border-gray-400 ">
              <img className="mb-7  mx-auto" src={Icons.icon3} alt="logo" />
              <div className="flex justify-center font-sans sm:text-xl md:text-2xl font-bold">
                Drinks
              </div>
              <p className="mt-4 text-center">
                In the new era of technology we look in the future with
                certainty and pride for our life
              </p>
              <p onClick={()=>navigate("/menu")} className="cursor-pointer mt-5 text-red_diff flex justify-center">
                Explore Menu
              </p>
            </div>

            <div className=" p-3 flex flex-col justify-center border border-gray-400 ">
              <img className=" mb-7  mx-auto" src={Icons.icon4} alt="logo" />
              <div className="flex justify-center font-sans sm:text-xl md:text-2xl font-bold">
                Desserts
              </div>
              <p className="mt-4 text-center">
                In the new era of technology we look in the future with
                certainty and pride for our life
              </p>
              <p onClick={()=>navigate("/menu")} className="cursor-pointer mt-5 text-red_diff flex justify-center">
                Explore Menu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
