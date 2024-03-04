import React from "react";
import { Link } from "react-router-dom";
import lablogo from "../assets/Lablogo.png";
import logo2 from "../assets/logo2.png";
import profile from "../assets/profile.jpg";
import { GiExitDoor } from "react-icons/gi";
export default function Home() {
  return (
    <div className="h-full border-2">
      <div className=" bg-gray-200  mx-auto flex flex-col items-center justify-center pt-28 pb-2 pl-4 md:flex-row">
        <div className="px-4 flex flex-col justify-center h-full md:w-2/3">
          <p className="text-black py-4 max-w text-center md:text-left md:px-10">
            <span className="text-3xl font-semibold">
              Explore the Innovations at
            </span>
            <br />
            <span className="text-3xl font-bold">Bio-Fluids Research Lab</span>
          </p>
          <div className="flex p-4 justify-center md:justify-between  md:px-10">
            <Link
              to={"/lab"}
              className="hover:scale-105 transition duration-500 text-white w-fit px-6 py-3 my-2 flex items-center gap-4 rounded-md bg-slate-500"
            >
              <span>Explore Labs</span>
              <span className="text-3xl">
                <GiExitDoor />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 py-14 md:py-0">
          <img
            src={logo2}
            alt="logo2"
            className="mx-auto w-64 h-28 md:w-96 md:h-44"
          />
        </div>
      </div>
      <div className="shadow-gray-500 shadow-lg my-4 flex-col lg:mx-28 lg:p-10 flex md:flex-row justify-center">
        <div className="md:w-1/3 p-3 gap-1">
          <div>
            <img
              src={profile}
              alt="profile"
              className="w-2/3 mx-auto md:w-4/5 rounded-full shadow-black shadow-lg  "
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-semibold text-3xl">Prof. Ajay Bhandari</p>
            <p className="text-lg">Assistant professor</p>
            <p className="text-lg">Department of Mechanical Engineering</p>
            <p className="text-lg">
              Indian Institute of Technology (ISM), Dhanbad
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto md:w-2/3 justify-center  lg:mt-10 lg:ml-5 lg:pl-20 py-">
          {/* for description */}
          <div className="flex flex-col gap-5">
            <p className="text-md md:text-lg">
              With the globalized world's unceasing need for medical advancement
              and innovation, it is essential to revolutionize the health
              sector. This revolutionization can be achieved by bridging the gap
              between engineering and healthcare, compounding engineering design
              and problem-solving skills with biological knowledge of medical
              sciences. Modern medicine and healthcare rely substantially on
              engineering solutions to help medical specialists diagnose,
              improve prognosis, enhance treatment efficacy, and improve quality
              of life. To this end, biofluid mechanics is a progressing area
              that involves the application of fluid mechanics principles to
              further the understanding of physiological flows in the human
              body. Motivated by it, I am fervent to comprehend biological flows
              using computational models augmented with real-time medical
              imaging data and in-vitro experiments.
            </p>
            <p className="text-md md:text-lg">
              My research group at IIT Dhanbad, "
              <span className="font-semibold">Biofluids Research Lab</span>"{" "}
              <span className="font-semibold">(BFRL)</span>, is actively
              involved in unraveling the biomechanics present in different human
              tissues and their impact on drug delivery mechanisms through
              numerical simulations and experiments. Simultaneously, my group
              focuses on the image-based modeling aspect, which involves the
              extraction of patient-specific parameters and their incorporation
              into the computational models, taking a forward stride toward
              personalized medicine.
            </p>
          </div>
          <div className="mt-10 md:mt-20">
            <h1 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900">
              Research Interest
            </h1>
            <p className="mt-5 mb-2 md:mt-7 md:text-lg">
              Bio-Fluid Mechanics, Computational Oncology, Medical-Image Based
              Numerical Modelling, Patient-specific Computational Models, Cancer
              And Ocular Drug Delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
