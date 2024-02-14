import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function () {
  return (
    <div className="relative w-full">
      <div className="bg-gray-200 bottom-0 py-7 md:px-40 border-2">
        <div className="flex flex-col text-center gap-2 md:flex-row justify-between">
          <div>&copy; Prof. Ajay Bhandari all rights reserved</div>
          <div>
            Developed and Managed by{" "}
            <a
              href="https://nafisportfoliosite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline"
            >
              Nafis Raza
            </a>
          </div>
        </div>
        <div className="">
            <div>

            </div>
        </div>
      </div>
    </div>
  );
}
