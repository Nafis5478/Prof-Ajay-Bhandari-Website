import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import slaprinter from "../assets/slaprinter.jpg";
import laserbeamexpander from "../assets/laserbeamexpander.jpg";
import highspeedcamera from "../assets/highspeedcamera.jpg";
import highspeedcamera2 from "../assets/highspeedcamera2.jpg";
import hscl from "../assets/hscl.jpg";
import das from "../assets/das.jpg";
import tyron from "../assets/tyron.jpg"
import amd from "../assets/amd.jpg"
import asrock from "../assets/asrock.jpg"
import hpz6 from "../assets/hpz6.jpg"
export default function Lab() {
  return (
    <div className="h-full pt-28 lg:pt-32 px-5 lg:px-28">
      <div className="text-left lg:items-center lg:mb-10">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 border-b-2 border-black py-2">
          Major Experimental Facilities
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={slaprinter}
                    alt="slaprinter"
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">SLA Printer</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row-reverse p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={laserbeamexpander}
                    alt="laserbeamexpander"
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Laser Beam Expander
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={highspeedcamera}
                    alt="highspeedcamera"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[200px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">FASTEC High Speed Camera</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row-reverse p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={highspeedcamera2}
                    alt="highspeedcamera2"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[250px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">Baumer High Speed Camera</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={hscl}
                    alt="hscl"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[200px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">High-Speed Camera Lens</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row-reverse p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={das}
                    alt="das"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[250px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">Data Acquisition System</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left lg:items-center">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 border-b-2 border-black py-2">
          Computational Facilities
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={tyron}
                    alt="tyron"
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">Tyron Workstation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row-reverse p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={hpz6}
                    alt="hpz6"
                    className="rounded-lg hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    HP Z6 Workstation
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={asrock}
                    alt="asrock"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[200px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">Asrock Workstation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="hover:shadow-gray-500 transition duration-500 hover:shadow-lg flex flex-col lg:flex-row-reverse p-3 gap-2 border-2 border-black rounded-lg bg-gray-50">
                <div className="flex justify-center lg:w-2/5">
                  <img
                    src={amd}
                    alt="amd"
                    className="rounded-lg hover:scale-105 transition duration-500 h-[250px]"
                  />
                </div>
                <div className="p-2 lg:w-3/5">
                  <h1 className="text-3xl font-semibold">AMD-Ryzen Workstation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eligendi optio vero, autem minus, natus quasi enim
                    quos voluptatibus nostrum, iusto quo saepe voluptates quas!
                    Magni, omnis excepturi perspiciatis eum repellat, incidunt
                    aliquam cupiditate ullam a, consequuntur numquam
                    exercitationem et reiciendis magnam? Quod repellat accusamus
                    dolorum ducimus, veritatis ullam neque quos sint perferendis
                    provident?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
