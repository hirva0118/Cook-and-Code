import React from 'react';
import Buttons from '../Component/Buttons';
import { Images } from '../assets/Images';
import { useState } from 'react';
import * as Yup from 'yup'
 //Using only Yup:handle validation

const BookTable = () => {

const [formData, setFormData] = useState({
  date:"",
  time:"",
  name:"",
  phone:"",
  total:""
});
const handleChange =(e) =>{
  const {name,value} =e.target;
  setFormData({
    ...formData,
    [name]:value,
  });
};

const [Errors, setErrors] = useState({})

const validationSchema = Yup.object({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  name: Yup.string().min(2, "Name must have at least 2 characters").required("Name is required"),
  phone: Yup.string().matches(/^\d{10}$/,"Phone number must be of 10 digit").required("Phone Number is required"),
  total: Yup.string()
  .required("Please select the total number of persons")
  .oneOf(["1", "2", "3", "4", "5", "6"], "Invalid selection"),
})

const handleSubmit =async (e) => {
  e.preventDefault();
  try{
    await validationSchema.validate(formData,{abortEarly: false});
    console.log("submitted" ,formData)
    setFormData({
      date: '',
      time: '',
      name: '',
      phone: '',
      total: '',
    });
    setErrors({});
    alert("Submitted");
  }
  catch(error){
    const newError ={};
    error.inner.forEach((err) => {
      newError[err.path]=err.message;
    });
    setErrors(newError);
  }
};

  return (
    <div className=" bg-white_light">
      <div className="text-center mt-5 p-3 ">
        <p className="font-playfair text-2xl sm:text-4xl md:text-6xl lg:text-8xl">Book A Table</p>
        <p className="font-sans text-lg mt-6 ">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
        <div className="p-3 mt-5 md:mt-12 lg:mt-20 flex justify-center items-center ">
          <div className="z-50 max-w-xs sm:max-w-lg md:w-full md:max-w-2xl border border-gray-300 rounded-xl shadow-lg bg-white p-3 md:p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-1 md:gap-6">
              <div className="flex flex-col ">
                <label className="text-left font-semibold mb-1 md:mb-2 text-sm " htmlFor="date">
                  Date
                </label>
                <input
                  className="border border-gray-300 rounded-full py-1 px-3 md:px-4 md:py-2 focus:ring"
                  type="date"
                  value={formData.date}
                  id="date"
                  name="date"
                  onChange={handleChange}
                />
                {Errors?.date && <div className='text-red-700 text-left error'>{Errors.date}</div>}
              </div>

              <div className="flex flex-col">
                <label className="text-left font-semibold mb-1 md:mb-2 text-sm" htmlFor="time">
                  Time
                </label>
                <input
                  className="border border-gray-300 rounded-full py-1 px-3 md:px-4 md:py-2 focus:ring"
                  type="time"
                  value={formData.time}
                  id="time"
                  name="time"
                  placeholder="06:30 PM"
                  onChange={handleChange}
                />
                {Errors?.time && <div className='text-red-700 text-left  error'>{Errors.time}</div>}
              </div>

              <div className="flex flex-col">
                <label className="text-left font-semibold mb-1 md:mb-2 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="border border-gray-300 rounded-full py-1 px-3 md:px-4 md:py-2 focus:ring"
                  type="text"
                  value={formData.name}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                {Errors?.name && <div className='text-red-700 text-left  error'>{Errors.name}</div>}
              </div>

              <div className="flex flex-col">
                <label className="text-left font-semibold mb-1 md:mb-2 text-sm" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border border-gray-300 rounded-full py-1 px-3 md:px-4 md:py-2 focus:ring"
                  type="text"
                  value={formData.phone}
                  id="phone"
                  name="phone"
                  placeholder="x-xxx-xxx-xxxx"
                  onChange={handleChange}
                />
                {Errors?.phone && <div className='text-red-700 text-left  error'>{Errors.phone}</div>}
              </div>

              <div className="flex flex-col  col-span-2 ">
                <label className="text-left font-semibold mb-1 md:mb-2 text-sm" htmlFor="phone">
                  Total Person
                </label>
                <select
                  className="border border-gray-300 rounded-full px-4 py-2 focus:ring"
                  id="total"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}               
                >
                  <option value="" disabled >
                    Select number of persons
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6">6 Persons</option>
                </select>
                {Errors?.total && <div className="text-red-700 text-left  error">{Errors.total}</div>}
              </div>

              <Buttons
                className=" flex col-span-2 justify-center p-2 md:p-3 max-w-full text-white"
                styleType="filled"
                text="Book a table"
                // onClick={console.log('clicked')}
                onClick={handleSubmit}
              ></Buttons>
            </form>
          </div>
        </div>
      </div>
      <img className="-mt-48" src={Images.map}></img>
    </div>
  );
};

export default BookTable;
