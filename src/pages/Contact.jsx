import React from "react";
import linkedinlogo from "../assets/linkedinlogo.png";
import gmaillogo from "../assets/gmaillogo.png";
import googlescholarlogo from "../assets/googlescholarlogo.png";
export default function Contact() {
  return (
    <div className="h-full pt-28 md:pt-24 gap-2 md:gap-0 px-5 md:px-2 flex flex-col-reverse md:flex-row md:justify-between">
      <div className="text-left md:w-2/5 md:pt-10">
        <h1 className="text-3xl text-center font-semibold px-8 ">
          Connect me through
        </h1>
        <div className="flex flex-col mt-10 gap-20 md:py-20 items-center pb-5">
          <div className="flex flex-row justify-between gap-10 md:gap-40">
            <a
              href="https://www.linkedin.com/in/dr-ajay-bhandari-74628169/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100px] hover:shadow-blue-500 hover:shadow-lg transition duration-500"
            >
              <img src={linkedinlogo} alt="linkedinlogo" />
            </a>
            <a
              href="mailto:ajaybhandari25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100px] hover:shadow-yellow-500 hover:shadow-lg transition duration-500"
            >
              <img src={gmaillogo} alt="gmaillogo" />
            </a>
          </div>
          <div className="flex flex-row justify-between gap-10 md:gap-40">
            <a
              href="https://wa.me/+917755057692"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px] hover:shadow-orange-500 hover:shadow-lg transition duration-500"
            >
              <img src={googlescholarlogo} alt="googlescholarlogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold items-center flex justify-center ">
        Or
      </div>
      <div className=" md:w-2/5 mb-5 md:pt-10 rounded-lg px-5 py-2 ">
        <h1 className="text-3xl text-center font-semibold px-8">
          Drop me a message
        </h1>
        <div className="flex justify-center mt-5">
          <form
            action="https://getform.io/f/62ec3233-38ce-42aa-80c8-da4e77b08364"
            method="POST"
            className="flex flex-col w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <button className="text-white bg-gray-500 px-6 py-3 my-8 mx-auto flex items-center w-[95%] hover:bg-gray-200 hover:text-black hover:font-semibold justify-center rounded-md hover:scale-105 duration-300">
              Click to send me your message...
            </button>
          </form>
        </div>
        {/* <div className="py-10 md:ml-40 md:mr-20">
          
        </div> */}
      </div>
    </div>
  );
}
