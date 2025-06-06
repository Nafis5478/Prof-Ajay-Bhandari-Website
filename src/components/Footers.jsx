import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaResearchgate } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { FaOrcid } from "react-icons/fa6";
export default function () {
  return (
    <div className="relative w-full">
      <div className="bg-gray-200 bottom-0 py-2 md:px-40 border-2">
        <div className="flex flex-col text-left gap-10 md:gap-10 md:flex-col justify-center">
          <div className="flex flex-col gap-1 md:mx-auto">
            <div className="font-semibold text-center md:text-left">
              &copy; Prof. Ajay Bhandari all rights reserved
            </div>
            <div>
              <ul>
                <li className="flex flex-row gap-2 md:gap-10">
                  <div className="font-semibold mr-1">Office:</div>
                  <div>Room-225 B, Mechanical Department, IIT(ISM) Dhanbad</div>
                </li>
                <li className="flex flex-row gap-2 md:gap-10">
                  <div className="font-semibold">Phone:</div>
                  <div className="flex flex-col md:flex-row md:gap-5">
                  
                    <div>
                      <a
                        href="tel:+913262235347"
                        className="text-blue-700 hover:underline"
                      >
                        +91-326-223-5347
                      </a>{" "}
                      (Office)
                    </div>
                  </div>
                </li>
                <li className="flex flex-row gap-2 md:gap-10">
                  <div className="font-semibold mr-2">Email:</div>
                  <div className="flex flex-col md:flex-row md:gap-5">
                    <div>
                      <a
                        href="mailto:ajayb@iitism.ac.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        ajayb@iitism.ac.in
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:ajaybhandari25@gmail.com
                    "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        ajaybhandari25@gmail.com
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-row text-2xl md:text-4xl gap-5 md:gap-5 mt-3 justify-center">
              <a
                href="https://www.linkedin.com/in/dr-ajay-bhandari-74628169/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ajaybhandari25@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-500"
              >
                <HiOutlineMail />
              </a>
              <a
                href="https://www.researchgate.net/profile/Ajay-Bhandari-2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-500"
              >
                <FaResearchgate />
              </a>
              <a
                href="https://scholar.google.co.in/citations?user=Zuji5l4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-500"
              >
                <SiGooglescholar />
              </a>
              <a
                href="https://orcid.org/0000-0002-5384-9353"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-500"
              >
                <FaOrcid />
              </a>
            </div>
          </div>
          <div className="font-semibold text-center md:mx-auto">
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
      </div>
    </div>
  );
}
