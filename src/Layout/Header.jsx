import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../assets/Images";
import Buttons from "../Component/Buttons";
import { Icons } from "../assets/Icons";

const Header = () => {

  const navigate=useNavigate()
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  // console.log(isButtonOpen);
  const toggleButton = () => {
    // console.log("hi");
    setIsButtonOpen(!isButtonOpen);
  };
  const location=useLocation();
  useEffect(()=> {
    setIsButtonOpen(false)
  },[location])

  const navigationList = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Menu",
      path: "/menu",
    },
    {
      label: "Pages",
      path: "/pages",
    },
    {
      label: "Contact",
      path: "/contact",
    }, 
  ];

  return (
    <div className="container flex justify-center h-[55px] mt-8 pb-7 ">
      <nav className="flex justify-between sm:justify-between items-center w-full">
        <img
          className="font-semibold w-[100px] h-auto sm:w-[211px] sm:h-12 "
          src={Images.logo}
          alt="Logo"
        ></img>

        <div className=" space-x-4 lg:space-x-8 hidden lg:flex ">
          {navigationList.map((item) => (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray_light rounded-3xl px-5 py-1"
                  : "bg-white rounded-3xl px-5 py-1"
              }
              to={item.path}
              onClick={() => setIsButtonOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex space-x-8 items-center ">
          <Buttons 
            className="px-2 py-2 lg:py-4 lg:px-6 border border-black "
            text="Book a table"
            onClick={()=>navigate("/bookTable")}
          ></Buttons>
          <div className="block lg:hidden relative">
            <img src={Icons.hamburger} onClick={toggleButton} />

            {isButtonOpen && (
              <div className="bg-white absolute top-16 z-50 right-0 w-34 p-5 rounded-lg shadow-lg flex flex-col space-y-2">
                {navigationList.map((item) => (
                  <NavLink
                    key={item.label}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray_light rounded-3xl px-5 py-1"
                        : "bg-white rounded-3xl px-5 py-1"
                    }
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
