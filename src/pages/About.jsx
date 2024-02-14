import React from "react";
import { MdDoubleArrow } from "react-icons/md";
export default function About() {
  return (
    <div className="h-full pt-28 md:pt-32  md:px-28">
      <h1 className="text-3xl font-semibold px-8">About Me</h1>
      <div className="flex flex-col gap-2 py-10 md:px-4 mx-3 md:mx-10">
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 border-b-2 border-gray-900">
            Education
          </h1>
          <div className="py-10 md:ml-40 md:mr-20">
            <ul className="flex flex-col gap-2 md:gap-3">
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">PhD</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Mechanical Engineering, Indian Institute of Technology,
                  Kanpur, India
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">M.Tech</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Mechanical Engineering, Indian Institute of Technology,
                  Kanpur, India
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">BE</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Mechanical Engineering,University Institute of Engineering and
                  Technology (UIET), Panjab University (PU), Chandigarh
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 border-b-2 border-gray-900">
            Experiences
          </h1>
          <div className="py-10 md:ml-40 md:mr-20">
            <ul className="flex flex-col gap-2 md:gap-3">
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">July 2023- Present</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Assistant Professor (Grade I), Indian Institute of Technology (Indian
                  School of Mines), Dhanbad
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">July 2020- July 2023</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Assistant Professor (Grade II), Indian Institute of Technology (Indian
                  School of Mines), Dhanbad
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">June 2023- July 2023</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Visiting Researcher, King&apos;s College University of Aberdeen,
                  Aberdeen, UK, Sponsor: The Royal Society
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
                  </span>
                  <span className="font-semibold">Jan 2020- June 2023</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Senior Research Associate, Department of Mechanical and
                  Industrial Engineering, Indian Institute of Technology (IIT),
                  Roorkee, Sponsors: TBRL/DRDO
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 border-b-2 border-gray-900">
            Invited Talks and Webinars Organized
          </h1>
          <div className="py-10 md:ml-40 md:mr-20">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Delivered one online lecture as an expert speaker on the topic “Emerging trends of multidisciplinary research in fluid mechanics” Short term course organized by Department of Mechanical Engineering, NIT Rourkela, INDIA in September 2023.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Delivered one online lecture as an expert speaker on the topic “Basics and Application of Computational fluid Dynamics (CFD) in Understanding Human Nasal Airflow” Digital Designing and manufacturing of Pediatric Facial Prosthesis organized by Department of Oral and Maxillofacial Surgery King George&apos;s Medical University, Lucknow in October 2021.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Delivered one online lecture as an expert speaker on the topic “Image-based numerical modeling of chemotherapeutic drug transport in human brain tumors” in the AICTE sponsored Faculty Development Program on Advanced Computational Fluid Dynamics organized by the Department of Mechanical Engineering, Institute of Engineering and Technology, Lucknow in November 2020.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Organized webinar as a convener on the topic “Mechanical Engineering Solutions to Biomedical Problems” sponsored by TEQIP-III in Department of Mechanical Engineering at IIT (ISM) Dhanbad from 24-27th September 2020.
                </p>
              </div>
            </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 border-b-2 border-gray-900">
            Administrative Responsibilities
          </h1>
          <div className="py-10 md:ml-40 md:mr-20">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Coordinator Media from April 2023-till present.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Member of Department post graduate committee (DPGC) from July 2020 - July 2022
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Faculty-in-Charge (FIC) Placements of Department of Mechanical Engineering from June 2022 till present. 
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                In charge of Departmental website.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                Co-Faculty in charge of Advanced fluid mechanics and heat transfer lab.
                </p>
              </div>
            </li>
            </ul>
          </div>
        </div>
        
        <div>{/* for educational details part */}</div>
        <div>{/* for advisers part */}</div>
        <div>{/* for alma mater part */}</div>
      </div>
    </div>
  );
}
