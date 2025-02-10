import React, { useEffect } from "react";
import Buttons from "../Component/Buttons";
import Cards from "../Component/Cards";
import { Images } from "../assets/Images";
import { useState } from "react";


const Menu = () => {
  const cardData = [
    {
      image: Images.card1,
      description: "Fried Eggs.",
      title: "$ 9.99",
      para: "Made with eggs, lettuce, salt, oil and other ingredients.",
      category: "Breakfast"
    },
    {
      image: Images.card2,
      description: "Hawaiian Pizza.",
      title: "$ 15.99",
      para: "A sweet and savory mix of pineapple, ham, and cheese.",
      category: "Main dishes"
    },
    {
      image: Images.card3,
      description: "Martinez Cocktail",
      title: "$ 7.25",
      para: "A classic gin-based cocktail with a hint of sweetness.",
      category: "Drinks"
    },
    {
      image: Images.card4,
      description: "Butterscotch Cake",
      title: "$ 20.99",
      para: "Rich layers of cake with creamy butterscotch flavor.",
      category: "Desserts"
    },
    {
      image: Images.card5,
      description: "Classic Waffles",
      title: "$ 12.99",
      para: "Crispy, fluffy waffles perfect with any topping.",
      category: "Breakfast"
    },
    {
      image: Images.card6,
      description: "Cheese Burger",
      title: "$ 12.55",
      para: "A juicy patty topped with melted cheese and fresh fixings.",
      category: "Main dishes"
    },
    {
      image: Images.card7,
      description: "Chocolate Icecream",
      title: "$ 18.05",
      para: "Indulge in the rich and creamy taste of chocolate ice cream, made with premium cocoa.",
      category: "Desserts"
    },
    {
      image: Images.card8,
      description: "Mint Lemonade",
      title: "$ 5.89",
      para: "A cool and refreshing drink with the perfect balance of zesty lemon .",
      category: "Drinks"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(cardData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredData(cardData); 
    } else {
      setFilteredData(cardData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);
  return (
    <div>
      <div className="container mb-16">
        <div className="flex justify-center items-center flex-col mt-10">
          <p className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-8xl">Our menu</p>
          <p className="font-sans text-lg mt-5 text-center">
            We consider all the drivers of change gives you the components{" "}
            <br />
            you need to change to create a truly happens.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
            <Buttons
              className=" font-bold py-2 px-6 md:py-4 sm:px-12  border-black"
              styleType={selectedCategory === "All" ? "filled" : "py-2 px-6 sm:py-4 sm:px-12 border border-black"}
              text="All"
              onClick={() => setSelectedCategory("All")}
            ></Buttons>
            <Buttons
              className="py-2 px-6 sm:py-4 sm:px-12 border border-black"
              styleType={selectedCategory === "Breakfast" ? "filled" : "py-2 px-6 sm:py-4 sm:px-12 border border-black"}
              text="Breakfast"
              onClick={() => setSelectedCategory("Breakfast")}
            ></Buttons>
            <Buttons
              className="py-2 px-6 sm:py-4 sm:px-12 border border-black"
              styleType={selectedCategory === "Main dishes" ? "filled" : "py-2 px-6 sm:py-4 sm:px-12 border border-black"}
              text="Main dishes"
              onClick={() => setSelectedCategory("Main dishes")}
            ></Buttons>
            <Buttons
              className="py-2 px-6 sm:py-4 sm:px-12 border border-black"
              text="Drinks"
              styleType={selectedCategory === "Drinks" ? "filled" : "py-2 px-6 sm:py-4 sm:px-12 border border-black"}
              onClick={() => setSelectedCategory("Drinks")}
            ></Buttons>
            <Buttons
              className="py-2 px-6 sm:py-4 sm:px-12 border border-black"
              text="Desserts"
              styleType={selectedCategory === "Desserts" ? "filled" : "py-2 px-6 sm:py-4 sm:px-12 border border-black"}
              onClick={() => setSelectedCategory("Desserts")}
            ></Buttons>
          </div>
        </div>
        <div className="mt-20 w-full">
          <Cards cardData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
