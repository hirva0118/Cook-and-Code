import React from "react";
// import { Link } from "react-router-dom";
import { NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom';

const Cards = ({ cardData }) => {
  const location = useLocation();
  const navigate = useNavigate();

// const handleNavigation = (itemID) =>{
//   if(location.path !== './menu')
//   {
//     navigate('/page/${item.id}')
//   }
// };

  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {cardData.map((item, index) => (
        
          <div 
            // to={`/page/${item.id}`}
            key={index}
            className={`bg-white rounded-lg border border-gray_light max-w-sm ${
              location.pathname === "/pages" ? "cursor-pointer hover:border-blue-700" : ""
            }`} 

            onClick={() => {
              if(location.pathname ==="/pages"){
                // console.log("page")
                navigate(`/page/${item.id}`) 
              }
              else{
                // console.log("error")
              }
            }}
          > 
          <img
            className="w-full h-40 object-cover rounded-t-lg"
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-2xl font-bold mt-4 text-center text-red_diff ">{item.title}</h2>
          <p className="text-gray-600 mt-2 text-center font-sans font-bold text-xl p-2">{item.description}</p>
          <p className="text-center font-sans text-sm mt-2 mb-2 p-2 ">{item.para}</p>
          </div>
      ))}
    </div>
  );
};

export default Cards;
