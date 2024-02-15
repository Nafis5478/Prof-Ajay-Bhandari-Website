import React from "react";
import { MdDoubleArrow } from "react-icons/md";
export default function Teaching() {
  return (
    <div className="h-full lg:h-full pt-28 md:pt-32 md:pb-36 px-5 md:px-28">
      <div className="text-left md:items-center">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8">
          Courses Taught and Developed
        </h1>

        <div className="py-10 md:ml-40 md:mr-20">
          <ul className="flex flex-col gap-2 md:gap-3 md:text-xl ">
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                <span className="font-semibold">Research Methodology and Statistics</span> (PG) (Monsoon Semester 2020-21, Winter Semester 20-21, 21-22)
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                <span className="font-semibold">Conduction and Radiation</span> (UG and PG) (Winter Semester 21-22, 22-23, 23-24)
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                <span className="font-semibold">Fluid Mechanics</span> (UG) (Monsoon Semester 23-24)
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                <span className="font-semibold">Fluid Mechanics Lab</span> (Monsoon Semester 22-23, 23-24)
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                <span className="font-semibold">CFD Lab</span> (Winter Semester 21-22, Winter Semester 22-23, 23-24)
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  <span className="font-semibold">Biofluid Mechanics</span> (Newly developed course for PG students)
                </p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
