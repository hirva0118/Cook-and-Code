import React from 'react';
import { Images } from '../assets/Images';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="p-5 sm:p-12 md:p-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 lg:gap-14 justify-between bg-gray_new">
      <div className=" flex flex-col">
        <img className="max-w-lg" src={Images.logoWhite} />
        <p className="max-w-xs text-gray_light mt-7">
          In the new era of technology we look a 
          in the future with certainty and pride to 
          for our company and.
        </p>
      </div>

      <div className="flex flex-col text-center text-gray_light">
        <p className="mb-4 font-sans font-bold">Pages</p>
        <Link to="/" className="mb-3">
          Home
        </Link>
        <Link to="/about" className="mb-3">
          About
        </Link>
        <Link to="/menu" className="mb-3">
          Menu
        </Link>
        <Link to="/pages" className="mb-3">
          Pages
        </Link>
        <Link to="/contact" className="mb-3">
          Contact
        </Link>
      </div>

      <div className="flex flex-col text-gray_light">
        <p className="mb-4 font-sans font-bold">Utility Pages</p>
        <p className="mb-3">Start Here</p>
        <p className="mb-3">Styleguide</p>
        <p className="mb-3">Password Protector</p>
        <p className="mb-3">404 not found</p>
        <p className="mb-3">Licenses</p>
        <p className="mb-3">Changelog</p>
        <p className="mb-3">View more</p>
      </div>

      <div className="grid gap-3 rounded-lg">
      <p className="mb-1 lg:mb-4 font-sans font-bold text-gray_light text-xl">Follow us on Instagram</p>
        <div className=" grid grid-cols-2 gap-3">         
          <img className='h-16 lg:h-24' src={Images.card2} />
          <img className='h-16 lg:h-24' src={Images.card3} />
          <img className='h-16 lg:h-24' src={Images.card1} />
          <img className='h-16 lg:h-24' src={Images.card4} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
