import React from "react";
import Buttons from "../Component/Buttons";
import Cards from "../Component/Cards";
import { Images } from "../assets/Images";
import { useNavigate } from "react-router-dom";

const pages = () => {
  const cardData = [
    {
      id:1,
      image: Images.mask1,
      description: "How to prepare a delicious gluten free sushi",
      para: "January 3,2023",
    },
    {
      id:2,
      image: Images.mask2,
      description: "How to prepare the perfect fries in an air fryer",
      para: "January 3,2023",
    },
    {
      id:3,
      image: Images.mask3,
      description: "How to prepare the perfect  Pizza with cheesy flavor",
      para: "January 3,2023",
    },
    {
      id:4,
      image: Images.mask4,
      description: "How to prepare delicious chicken tenders",
      para: "January 3,2023",
    },
    {
      id:5,
      image: Images.mask5,
      description: "5 great cooking gadgets you can buy to save time",
      para: "January 3,2023",
    },
    {
      id:6,
      image: Images.mask6,
      description: "The secret tips & tricks to prepare a perfect burger",
      para: "January 3,2023",
    },
    {
      id:7,
      image: Images.mask7,
      description: "7 delicious bread recipes you can prepare",
      para: "January 3,2023",
    },
    {
      id:8,
      image: Images.mask8,
      description: "5 great pizza restaurants you should visit this city",
      para: "January 3,2023",
    }
  ];

  const navigate = useNavigate();
    
  return (
    <div>
      <div className="container mb-16">
        <div className="flex justify-center items-center flex-col mt-10">
          <p className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Our Blogs & Articles</p>
          <p className="font-sans text-lg mt-5 text-center">
            We consider all the drivers of change gives you the components
            <br />
            you need to change to create a truly happens.
          </p>
          
        </div>
        <div className="mt-20 w-full">
          <Cards className="cursor-pinter" cardData={cardData} />
        </div>
      </div>
    </div>
  );
};

export default pages;
