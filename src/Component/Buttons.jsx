import React from "react";

const Buttons = ({ text, type = "submit",className="",styleType, onClick }) => {

const variant={
    filled :" bg-red_diff text-white "
};
  return (
    
      <button type={type} onClick={onClick} className={` ${className} ${variant[styleType]} h-auto border font-semibold  rounded-full `}>
        {text}
      </button>
  );
};

export default Buttons;
