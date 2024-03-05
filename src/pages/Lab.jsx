import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import slaprinter from "../assets/slaprinter.jpg";
import laserbeamexpander from "../assets/laserbeamexpander.jpg";
import highspeedcamera from "../assets/highspeedcamera.jpg";
import highspeedcamera2 from "../assets/highspeedcamera2.jpg";
import hscl from "../assets/hscl.jpg";
import das from "../assets/das.jpg";
import tyron from "../assets/tyron.jpg";
import amd from "../assets/amd.jpg";
import asrock from "../assets/asrock.jpg";
import hpz6 from "../assets/hpz6.jpg";
import syringepump from "../assets/syringepump.jpg";
import magneticstrrier from "../assets/magneticstrrier.jpg";
import ultrasonicbath from "../assets/ultrasonicbath.jpg";
export default function Lab() {
  return (
    <div className="h-full pt-28 lg:pt-32 px-5 lg:px-28">
      <div className="text-left lg:items-center lg:mb-10">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-black py-2">
          Major Experimental Facilities
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50 ">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={slaprinter}
                    alt="slaprinter"
                    className="rounded-lg h-[150px] md:h-72"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">SLA Printer</h1>
                  <p>
                    It is used for 3D printing transparent objects which can be
                    used for flow visualization. This printer uses
                    light-reactive thermoset materials called “resin”. When SLA
                    resins are exposed to certain wavelengths of light,short
                    molecular chains join together,polymerizing monomers and
                    oligomers into solidified rigid geometries.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">
                    FormLabs 3B+, USA corp, 45µm native resolution and 25-100µm
                    cure depth
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={laserbeamexpander}
                    alt="laserbeamexpander"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Laser Beam Expander
                  </h1>
                  <p>
                    Use to enhance the laser beam diameter for adequate flow
                    visualization. Currently, 3X and 5X Laser beam expanders are
                    available.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">Edmund optics</p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={highspeedcamera}
                    alt="highspeedcamera"
                    className="rounded-lg h-[200px]"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    FASTEC High Speed Camera
                  </h1>
                  <p>
                    Fastec IL5 high-speed camera is compact yet versatile
                    recording systems used for lab research, where speed and
                    accuracy are needed. Common applications include flow
                    visualization in transparent 3D printed human organ
                    phantoms.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">
                    Resolution: 3.375µm/pixel 1920 x 1080 (HD: 1080p) Frame rate
                    : 634 fps
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={highspeedcamera2}
                    alt="highspeedcamera2"
                    className="rounded-lg h-[250px]"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Baumer High Speed Camera
                  </h1>
                  <p>
                    These cameras are known for its High frame rates,
                    exceptional image quality and ease of integration. This is a
                    model with Precision Time Protocol (PTP) for precise time
                    synchronization in Ethernet networks, with polarization
                    sensor for the complete detection of the linear polarization
                    state of surfaces, as well as global shutter, rolling
                    shutter, or global reset shutter. Currently being used for
                    flow visualization in human body phantoms.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">
                    Resolution: 800 × 620 pixel, max. 1550 fps
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img src={hscl} alt="hscl" className="rounded-lg h-[200px]" />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    High-Speed Camera Lens
                  </h1>
                  <p>
                    Two types of lenses, namely telecentric and wide angle are
                    currently employed for high speed flow visualization in
                    laboratory.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">
                    Telecentric and Wide angle lens (Make: Myutron)
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img src={das} alt="das" className="rounded-lg h-[250px]" />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Data Acquisition System
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
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={syringepump}
                    alt="syringepump"
                    className="rounded-lg h-[200px]"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Syringe Pump</h1>
                  <p>
                    Syringe pump, also known as a syringe driver, is an infusion
                    pump that helps deliver an accurate amount of fluids,
                    whether nutrients or medications, into the patient's body in
                    a controlled manner. In our lab it is usually used for
                    delivering patient specific flow rates for in vitro blood
                    flow experiments.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">NiscomMed,SP-04</p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={magneticstrrier}
                    alt="magneticstrrier"
                    className="rounded-lg h-[250px]"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Magnetic Strrier with Hot Plate
                  </h1>
                  <p>
                    A magnetic stirrer with a hot plate is a device that
                    combines heating and stirring capabilities. It features a
                    flat hot plate for heating liquids and a motorized magnet
                    underneath to stir the contents using a magnetic stir bar.
                    In our lab it is used for preparing Newtonian and non
                    Newtonian blood mimicking fluids.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">LABWAN,LW-28</p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={ultrasonicbath}
                    alt="ultrasonicbath"
                    className="rounded-lg h-[200px]"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Digital ultrasonic Bath Sonicator
                  </h1>
                  <p>
                    An ultrasonic bath sonicator is a device that uses
                    high-frequency sound waves to agitate in a liquid medium. It
                    consists of a tank filled with solvent where samples are
                    immersed, and features controls for adjusting parameters
                    like sonication time and power. Used for tasks like cell
                    disruption and sample homogenization, it offers enhanced
                    mixing.
                  </p>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <p className="text-blue-900 font-semibold">
                    Labtronics, LT350B
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left lg:items-center">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-black py-2">
          Computational Facilities
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={tyron}
                    alt="tyron"
                    className="rounded-lg duration-500"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Tyron Workstation</h1>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <ul className="flex flex-col gap-2 text-blue-900 font-semibold">
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>2 X Intel® Xeon® Gold 5218 R Processor @2.99 GHz</p>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>
                          192 GB DDR4-2933 RAM with 48 cores and 2TB storage
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={hpz6}
                    alt="hpz6"
                    className="rounded-lg duration-500"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">HP Z6 Workstation</h1>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <ul className="flex flex-col gap-2 text-blue-900 font-semibold">
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>2 X Intel® Xeon® Gold 5218 R Processor @2.99 GHz</p>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>
                          128 GB DDR4-2933 RAM with 40 cores and 1TB storage
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={asrock}
                    alt="asrock"
                    className="rounded-lg duration-500"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Asrock Workstation</h1>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <ul className="flex flex-col gap-2 text-blue-900 font-semibold">
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>Intel® Xeon® W7-3445 Processor @4.6 GHz</p>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>
                          128 GB DDR5-4800 RAM with 40 cores and 1TB storage
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={amd}
                    alt="amd"
                    className="rounded-lg duration-500"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    AMD-Ryzen Workstation
                  </h1>
                  <h1 className="text-red-500 font-semibold">Specifications</h1>
                  <ul className="flex flex-col gap-2 text-blue-900 font-semibold">
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>AMD Ryzen 9 5900X Processor @3.70 GHz</p>
                      </div>
                    </li>
                    <li className="flex flex-row">
                      <div className="flex flex-row gap-2">
                        <p>
                          <MdDoubleArrow className="inline-block" />
                        </p>
                        <p>128 GB RAM with 12 cores and 1TB storage</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
