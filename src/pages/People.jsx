import React from "react";
import kartik from "../assets/kartik.jpg";
import gautam from "../assets/gautam.jpg";
import sourav from "../assets/sourav.jpg";
import dhruv from "../assets/dhruv.jpg";
import anant from "../assets/anant.jpg";
import anand from "../assets/anand.jpg";
import nitin from "../assets/nitin.jpg";
import sudanshu from "../assets/sudanshu.jpg";
import anjay from "../assets/anjay.jpg";
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
                    className="rounded-lg h-56 w-48 md:h-72 md:w-64 shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Kartika Chandra Tripathy (Ongoing)
                  </h1>
                  <p>
                    I have completed my B.Tech Mechanical Engineering from
                    Nalanda Institute of Technology, Bhubaneswar, in 2017 and my
                    M.Tech in thermal engineering at Veer Surendra Sai
                    University of Technology (Formerly UCE, Burla), Burla,
                    Odisha. I joined IIT(ISM), Dhanbad, for Ph.D and pursuing my
                    Ph.D. research in the Biofluid research lab under the
                    supervision of{" "}
                    <span className="font-semibold">Prof. Ajay Bhandari</span>.
                    The title of my thesis is "
                    <span className="font-semibold">
                      Investigation of Nasal Septal Deviation and Implications
                      of Virtual Septoplasty: An Image-based Numerical and
                      Experimental Analysis
                    </span>
                    ".
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
                    className="rounded-lg h-40 w-40 md:w-64 md:h-72 shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Gautam Kumar (Ongoing)</h1>
                  <p>
                    I have completed my B.E. in Mechanical Engineering from
                    Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal and my
                    M.Tech in thermal engineering at National Institute of
                    Technology Patna Bihar. I joined IIT(ISM), Dhanbad, for my
                    Ph.D and pursuing my Ph.D. research in the Biofluid research
                    lab under the supervision of{" "}
                    <span className="font-semibold">Prof. Ajay Bhandari</span>{" "}
                    my research interests are Biofluid mechanics and
                    Hemodynamics, Fluid-structure interactions. The title of my
                    thesis is "
                    <span className="font-semibold">
                      Computational and Experimental Investigation of Ophthalmic
                      Artery Aneurysms: Enhancing Diagnostic Approaches and
                      Insights
                    </span>
                    ".
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50 ">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={anjay}
                    alt="anjay"
                    className="rounded-lg h-56 w-48 md:h-68 md:w-56 shadow-lg shadow-gray-700"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Anjay Kumar (Ongoing)
                  </h1>
                  <p>
                    I have completed my B.Tech Mechanical Engineering from
                    Btech from Guru Ghasidas University, Bilaspur in 2015 and my
                    M.Tech from NIT Patna. I joined IIT(ISM), Dhanbad, for Ph.D and pursuing my
                    Ph.D. research in the Biofluid research lab under the
                    supervision of{" "}
                    <span className="font-semibold">Prof. Ajay Bhandari</span>.
                    The title of my thesis is "
                    <span className="font-semibold">
                    Experimental and Numerical investigation of obstructive sleep apnea
                    </span>
                    ".
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
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={anant}
                    alt="anant"
                    className="rounded-lg shadow-lg shadow-gray-700 md:h-56"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Anant Prakash Mishra (Ongoing)
                  </h1>
                  <p>
                    I am pursuing my M.Tech degree in Mechanical Engineering at
                    IIT(ISM) Dhanbad which will be completed by July 2025. My
                    M.Tech project is "
                    <span className="font-semibold">
                    Experimental investigation of intravitreal drug delivery in vitreous humor of human eye
                    </span>
                    ". I have completed my B.Tech in Mechanical Engineering from
                    B.I.T SINDRI, Dhanbad, Jharkhand in the year 2021.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row-reverse p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={nitin}
                    alt="nitin"
                    className="rounded-lg shadow-lg h-64 shadow-gray-700 md:h-64"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">Nitin Pal (Ongoing)</h1>
                  <p>
                    I am pursuing M.Tech in Mechanical Engineering with a
                    specialization in the Thermal Engineering at IIT ISM
                    Dhanbad,which will be completed by July 2026.My
                    M.Tech project is "
                    <span className="font-semibold">
                    Personalized radiopharmaceutical drug delivery to heterogeneous human brain tumors.
                    </span>
                    ".I have
                    completed my B. Tech Mechanical Engineering from NIT Sikkim
                    in 2020. I also worked L&T Power as a GET for one and half
                    years in the department of LMB-Pressure Parts Manufacturing.
                  </p>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="shadow-gray-500 shadow-lg flex flex-col md:flex-row p-4 gap-2 bg-gray-50">
                <div className="flex justify-center md:w-2/5 items-center">
                  <img
                    src={sudanshu}
                    alt="sudanshu"
                    className="rounded-lg shadow-lg shadow-gray-700 h-52 md:h-56"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Sudhanshu Kumar Singh (Ongoing)
                  </h1>
                  <p>
                    I am pursuing my M.Tech degree in Mechanical Engineering at
                    IIT(ISM) Dhanbad which will be completed by July 2026. My
                    M.Tech project is "
                    <span className="font-semibold">
                      Invitro investigation of nasal airflow through particle
                      streak velocimetry (PSV).
                    </span>{" "}
                    I have completed my B.Tech in Mechanical Engineering from
                    Bakhtiyarpur College of Engineering, Patna, Bihar, in the
                    year 2023.
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
                    className="rounded-lg shadow-lg h-56 shadow-gray-700 md:h-64"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Anand Kumar (Completed)
                  </h1>
                  <p>
                    I am working as a PGET in ESG and sustainability cell in
                    Jindal Stainless Limited, Hisar. I have pursued my M.Tech
                    degree in Mechanical Engineering at IIT(ISM) Dhanbad in June
                    2023. My M.Tech project is "
                    <span className="font-semibold">
                      Numerical investigation of radiofrequency ablation
                      assisted thermosensitive liposome in heterogeneous
                      environment of human brain tumors
                    </span>
                    ". I have completed my graduation in Production Engineering
                    from Jadavpur University, Kolkata in the year 2018.
                  </p>
                </div>
              </div>
            </li>
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
                  <h1 className="text-3xl font-semibold">
                    Dhruvajyoti Roy (Completed)
                  </h1>
                  <p>
                    I have pursued my M.Tech degree in Mechanical Engineering at
                    IIT(ISM) Dhanbad. My M.Tech project is "
                    <span className="font-semibold">
                      Optimization of probe positioning and probe parameters in
                      heterogeneous vascular density and blood flow of
                      Radiofrequency ablation in human brain tumor
                    </span>
                    ". I got placed in TATA Motors as a PGET. I have completed
                    my B.Tech in Mechanical Engineering from Jalpaiguri
                    Government Engineering College, Jalpaiguri, in the year
                    2021.
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
                    className="rounded-lg shadow-lg h-64 shadow-gray-700 md:h-64"
                  />
                </div>
                <div className="p-2 md:w-3/5">
                  <h1 className="text-3xl font-semibold">
                    Sourav Choudhury (Completed)
                  </h1>
                  <p>
                    I am pursuing M.Tech in Mechanical Engineering with a
                    specialization in the Thermal domain at IIT ISM
                    Dhanbad,which will be commencing in December 2024. My M.Tech
                    project focuses on "
                    <span className="font-semibold">
                      CFD simulation of tumor treating fields in heterogeneous
                      human brain tumors
                    </span>
                    ". Prior to this, I completed a six-month internship at Tata
                    Steel, Jamshedpur. I graduated with a Bachelor's degree in
                    Mechanical Engineering from Aryabhatta Institute of
                    Engineering and Management, Durgapur, in 2018.
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
