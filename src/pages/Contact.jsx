import React from 'react';
import Buttons from '../Component/Buttons';
import * as Yup from 'yup'
import {useFormik} from "formik";
//Used formik and yup

const Contact = () => {

  const validationSchema = Yup.object({
    name: Yup.string().min(2,"Name must be atleast of 2 characters").required("Please enter name"),
    email: Yup.string().email("Invalid email format").required("Please enter email"),
    subject: Yup.string().required("Please enter Subject"),
    message: Yup.string().required("Please enter Message"),
  })

  const initialValues ={
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted" ,values)
    handleSubmit(); 
  };

  const {values, errors, handleChange, handleSubmit} =useFormik({
    initialValues:initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values,{ resetForm })=>{
      resetForm();
      alert("Submitted");
    }
  })

  return (
    <div className="bg-white_light mt-8 lg:mt-16 flex flex-col justify-center items-center">
      <p className="font-playfair text-3xl sm:text-6xl md:text-8xl">
        Contact Us
      </p>
      <p className="font-sans p-3 text-sm sm:text-lg mt-6 text-center max-w-sm sm:max-w-lg">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="mt-10 lg:mt-20 flex justify-center items-center w-[90%] md:w-[60%] ">
        <div className="z-50 p-3 max-w-sm sm:max-w-lg md:w-full md:max-w-2xl border border-gray-300 rounded-xl shadow-lg bg-white sm:p-4 md:p-8">
          <form onSubmit={handleCustomSubmit} className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="flex flex-col">
              <label className="text-left font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2 focus:ring"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className='text-red-700 text-left'>{errors.name}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-left font-semibold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2  focus:ring"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className='text-red-700 text-left'>{errors.email}</p>}
            </div>

            <div className="flex flex-col col-span-2">
              <label className="text-left font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="border border-gray-300 rounded-full px-3 py-1 md:px-4 md:py-2  focus:ring"
                type="text"
                id="subject"
                name="subject"
                placeholder="Write your subject"
                value={values.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className='text-red-700 text-left'>{errors.subject}</p>}
            </div>

            <div className="flex flex-col col-span-2 ">
              <label className="text-left font-semibold mb-2 " htmlFor="phone">
                Message
              </label>
              <textarea
                className="border border-gray-300 rounded-xl px-3 py-1 md:px-4 md:py-2  w-full  focus:ring resize-none"
                type="text"
                id="message"
                name="message"
                placeholder="Write your message"
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && <p className='text-red-700 text-left'>{errors.message}</p>}
            </div>

            <Buttons
              className=" flex col-span-2 justify-center p-1 md:p-3 max-w-full text-white"
              styleType="filled"
              text="Send"
              // onClick={console.log('clicked')}
            ></Buttons>
          </form>
        </div>
      </div>

        <div className="grid  sm:grid-cols-3 gap-3 w-[50%] sm:w-[60%] md:w-[65%] lg:w-[55%] mt-10 md:mt-20 mb-16">
          <div>
            <p className="font-sans text-base sm:text-xl font-bold">Call Us:</p>
            <p className="text-red_diff text-sm mt-6 font-bold">
              +1-234-567-8900
            </p>
          </div>

          <div>
            <p className="font-sans text-base sm:text-xl font-bold">Hours:</p>
            <p className="font-sans mt-6">Mon-Fri: 11am-8pm </p>
            <p className="font-sans">Sat,Sun: 9am-10pm</p>
          </div>

          <div>
            <p className="font-sans text-base sm:text-xl font-bold">
              Our Location:{' '}
            </p>
            <p className="max-w-sm mt-6">
              123 Bridge Street Nowhere Land, LA 12345 United States
            </p>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;
