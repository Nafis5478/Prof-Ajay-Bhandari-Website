import React from "react";
import kartik from "../assets/kartik.jpg";
import gautam from "../assets/gautam.jpg";
import sourav from "../assets/sourav.jpg";
import dhruv from "../assets/dhruv.jpg";
import anant from "../assets/anant.jpg";
import anand from "../assets/anand.jpg";
export default function People() {
  return (
    <div className="h-full pt-28 lg:pt-32 px-5 lg:px-28">
      <div className="text-left lg:items-center lg:mb-10">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-black py-2">
          PhD Students
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50 ">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={kartik}
                    alt="kartik"
                    className="rounded-lg h-[150px] md:h-96 shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Kartika Chandra Tripathy
                  </h1>
                  <p>
                    I have completed my B.Tech Mechanical Engineering from
                    Nalanda Institute of Technology, Bhubaneswar, in 2017. Then,
                    I joined Thermax as a graduate trainee. I worked there for
                    eight months in the department of quality assurance. I
                    completed my M.Tech in thermal engineering at Veer Surendra
                    Sai University of Technology (Formerly UCE, Burla), Burla,
                    Odisha. My M.Tech project was on "Natural convection heat
                    transfer in a heat sink with branched and interrupted fins".
                    After completing my M.Tech, I joined IIT(ISM), Dhanbad, for
                    Ph.D. I am currently pursuing my Ph.D. research in the
                    Biofluid research lab under the supervision of <span className="font-semibold">Prof. Ajay
                    Bhandari</span>. My research interests are Biofluid mechanics and
                    heat transfer, CFD investigation of upper respiratory
                    system, Hemodynamics, Fluid-structure interactions, and
                    Virtual surgery. The title of my thesis is "<span className="font-semibold">Investigation of
                    Nasal Septal Deviation and Implications of Virtual
                    Septoplasty: An Image-based Numerical and Experimental
                    Analysis</span>".
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50 ">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={gautam}
                    alt="gautam"
                    className="rounded-lg h-[150px] md:h-72 shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Gautam Kumar</h1>
                  <p>
                    I have completed my B.E. in Mechanical Engineering from
                    Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal. I have
                    completed my M.Tech in thermal engineering at National
                    Institute of Technology Patna Bihar. My M.Tech project was
                    on "Enhancing the performance of photovoltaic panel by air
                    cooling" after completing my M.Tech, I joined IIT(ISM),
                    Dhanbad, for my Ph.D. I am pursuing my Ph.D. research in
                    the Biofluid research lab under the supervision of <span className="font-semibold">Prof.
                    Ajay Bhandari</span> my research interests are Biofluid mechanics
                    and Hemodynamics, Fluid-structure interactions. The title of
                    my thesis is "<span className="font-semibold">Computational and Experimental Investigation
                    of Ophthalmic Artery Aneurysms: Enhancing Diagnostic
                    Approaches and Insights</span>".
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left lg:items-center">
        <h1 className="text-3xl text-center lg:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-black py-2">
          M.Tech Students
        </h1>
        <div className="py-10 lg:ml-40 lg:mr-20">
          <ul className="flex flex-col gap-2 lg:gap-3 lg:text-lg ">
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5">
                  <img
                    src={dhruv}
                    alt="dhruv"
                    className="rounded-lg shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Dhruvajyoti Roy</h1>
                  <p>
                    I am from Coochbehar district of West Bengal. Currently, I
                    am pursuing my M.Tech degree in Mechanical Engineering at
                    IIT(ISM) Dhanbad will commence on July 2024. My M.Tech
                    project is "<span className="font-semibold">Optimization of probe positioning and probe parameters in heterogeneous vascular density and blood flow of Radiofrequency ablation in human brain tumor</span>". I got placed in TATA Motors as a PGET. I have completed my B.Tech
                    in Mechanical Engineering from Jalpaiguri Government
                    Engineering College, Jalpaiguri, in the year 2021. My B.Tech
                    project was "Exergy Analysis of Thermal Power Plant."
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={sourav}
                    alt="sourav"
                    className="rounded-lg shadow-lg shadow-gray-700 md:h-96"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Sourav Choudhury</h1>
                  <p>
                    I am currently pursuing an MTech in Mechanical Engineering
                    with a specialization in the Thermal domain at IIT ISM
                    Dhanbad, will be commence in December 2024. My MTech project
                    focuses on "<span className="font-semibold">CFD simulation of thermosensitive drug delivery in heterogeneous human brain tumors</span>". Prior to this, I completed a six-month internship at Tata Steel, Jamshedpur, where I worked on a project titled "Graphene from waste oil" during my MTech course. Previously, I served as a Junior
                    Research Fellow at CSIR-CMERI, Durgapur, from August 2019 to
                    January 2021, contributing to the project "Design and
                    Development of Small Utility Compact Tractor." Before that,
                    I gained experience as a Graduate Apprenticeship Trainee at
                    DTPS, DVC Durgapur, from October 2018 to August 2019. I
                    graduated with a Bachelor's degree in Mechanical Engineering
                    from Aryabhatta Institute of Engineering and Management,
                    Durgapur, in 2018.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={anant}
                    alt="anant"
                    className="rounded-lg shadow-lg shadow-gray-700 md:h-72"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Anant Prakash Mishra
                  </h1>
                  <p>
                    I am basically from Bokaro Steel City, Jharkhand. Currently,
                    I am pursuing my M.Tech degree in Mechanical Engineering at
                    IIT(ISM) Dhanbad which will be completed by July 2025. My
                    M.Tech project is "<span className="font-semibold">Numerical (CFD) Investigation of targeted drug delivery in human nasal cavities</span>". I have completed my B.Tech in Mechanical Engineering from B.I.T SINDRI, Dhanbad, Jharkhand in the year 2021. My B.Tech project was "LPG Based Refrigeration System".
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={anand}
                    alt="anand"
                    className="rounded-lg shadow-lg shadow-gray-700 md:h-72"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Anand Kumar</h1>
                  <p>
                    I am from Buxar district of Bihar. Currently I am working as
                    a PGET in ESG and sustainability cell in Jindal Stainless
                    Limited, Hisar , I have pursued my M.Tech degree in
                    Mechanical Engineering at IIT(ISM) Dhanbad in June 2023. My
                    M.Tech project is "<span className="font-semibold">Numerical investigation of radiofrequency ablation assisted thermosensitive liposome in heterogeneous environment of human brain tumors</span>". I have completed my graduation in Production Engineering from Jadavpur
                    University, Kolkata in the year 2018. My B.Tech project was
                    "study of surface integrity of Micro EDM through Response
                    surface Methodology (RSM)."
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
