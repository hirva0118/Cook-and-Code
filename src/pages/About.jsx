import React from "react";
import { Images } from "../assets/Images";
import { Icons } from "../assets/Icons";


const About = () => {
  return (
    <div className="container xl:flex xl:flex-row gap-32 mt-10 lg:mt-20 ml-40 mb-36 ">
      <div className="lg:relative md:w-full md:h-full">
        <img className="max-w-[100%] sm:max-w-lg m-auto md:m-auto lg:max-w-none" src={Images.second} />
        <div className="max-w-[100%] m-auto p-4 mt-10 md:max-w-lg left-1/2 lg:absolute bg-gray_new rounded-xl text-white lg:p-12 lg:-right-12 lg:left-56 lg:top-72 sm:m-auto sm:mt-10">
          <p className="font-bold text-lg md:text-2xl font-sans">Come and visit us</p>
          <div className="mt-11 flex flex-row text-white_light">
            <img className="mr-5" src={Icons.phone} />
            <p>(414) 857 - 0107</p>
          </div>

          <div className="mt-6 flex flex-row text-white_light">
            <img className=" text-sm md:text-base  mr-5" src={Icons.mail} />
            <p className="text-sm md:text-base">happytummy@restaurant.com</p>
          </div>

          <div className="mt-6 flex flex-row text-white_light">
            <img className="mr-5 w-6 h-7" src={Icons.location} />
            <p className=" text-sm md:text-base ">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-28 xl:m-auto ">
        <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          We provide healthy food for your family.
        </p>
        <p className="font-sans text-lg mt-6">
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
      </div>
    </div>
  );
};

export default About;
