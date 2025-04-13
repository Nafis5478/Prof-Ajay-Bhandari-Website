import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import iitklogo from "../assets/iitklogo.png";
import uietlogo from "../assets/uietlogo.png";
export default function About() {
  return (
    <div className="h-full pt-28 md:pt-32  md:px-28">
      <h1 className="text-3xl font-semibold px-8">About Me</h1>
      <div className="flex flex-col gap-2 py-10 md:px-4 mx-3 md:mx-10 shadow-gray-500 shadow-lg my-4">
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Education
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-5">
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2">
                  <span>
                    <MdDoubleArrow className="inline-block" />
                  </span>
                  <span className="font-semibold">PhD (2020)</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Mechanical Engineering, Indian Institute of Technology,
                  Kanpur, India
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p className="font-semibold">
                    M.Tech (2018) <br />{" "}
                    <span className="text-md">(Joint M.Tech-PhD)</span>
                  </p>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Mechanical Engineering, Indian Institute of Technology,
                  Kanpur, India
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p className="font-semibold">BE (2013)</p>
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
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Experiences
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-5">
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2">
                  <span>
                    <MdDoubleArrow className="inline-block" />
                  </span>
                  <span className="font-semibold">July 2023- Present</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Assistant Professor (Grade I), Indian Institute of Technology
                  (Indian School of Mines), Dhanbad
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2">
                  <span>
                    <MdDoubleArrow className="inline-block" />
                  </span>
                  <span className="font-semibold">June 2023- July 2023</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Visiting Researcher, King&apos;s College University of
                  Aberdeen, Aberdeen, UK, Sponsor: The Royal Society
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg ">
                <div className="flex flex-row gap-2">
                  <span>
                    <MdDoubleArrow className="inline-block" />
                  </span>
                  <span className="font-semibold">July 2020- July 2023</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Assistant Professor (Grade II), Indian Institute of Technology
                  (Indian School of Mines), Dhanbad
                </span>
              </li>

              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2">
                  <span>
                    <MdDoubleArrow className="inline-block" />
                  </span>
                  <span className="font-semibold">Jan 2020- June 2020</span>
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
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Invited Talks and Webinars Organized
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Delivered one online lecture as an expert speaker on the topic  “
                    <span className="font-semibold">
                      CFD applications in healthcare 
                    </span>
                    " Refresher course on "
                    <span className="font-semibold">
                      CFD in Engineering
                    </span>
                    " under the Malaviya Mission Teachers Training Program (MMTTP) organized by Department of Mechanical Engineering, IIT(ISM) Dhanbad, INDIA in March 2024.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Delivered one online lecture as an expert speaker on the
                    topic “
                    <span className="font-semibold">
                      Emerging trends of multidisciplinary research in fluid
                      mechanics
                    </span>
                    ” Short term course organized by Department of Mechanical
                    Engineering, NIT Rourkela, INDIA in September 2023.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Delivered one online lecture as an expert speaker on the
                    topic “
                    <span className="font-semibold">
                      Basics and Application of Computational fluid Dynamics
                      (CFD) in Understanding Human Nasal Airflow
                    </span>
                    ” Digital Designing and manufacturing of Pediatric Facial
                    Prosthesis organized by Department of Oral and Maxillofacial
                    Surgery King George&apos;s Medical University, Lucknow in
                    October 2021.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Delivered one online lecture as an expert speaker on the
                    topic “
                    <span className="font-semibold">
                      Image-based numerical modeling of chemotherapeutic drug
                      transport in human brain tumors
                    </span>
                    ” in the AICTE sponsored Faculty Development Program on
                    Advanced Computational Fluid Dynamics organized by the
                    Department of Mechanical Engineering, Institute of
                    Engineering and Technology, Lucknow in November 2020.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Organized webinar as a convener on the topic “
                    <span className="font-semibold">
                      Mechanical Engineering Solutions to Biomedical Problems
                    </span>
                    ” sponsored by TEQIP-III in Department of Mechanical
                    Engineering at IIT (ISM) Dhanbad from 24-27th September
                    2020.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Reaseach Collaboration
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Department of Radiology, Fortis Memorial Research Institute
                    Gurugram
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Department of Biomedical Engineering. All Indian Institute
                    of Medical Sciences (AIIMS)-Delhi
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Advanced Eye center, Post Graduate Institute of Medical
                    Sciences (PGI)-Chandigarh
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Centre for Biomedical Engineering, Indian Institute of
                    Technology (IIT) Delhi
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>University Of Aberdeen, Scotland</p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Imperial College, London
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                  Toronto Metropolitan University, Canada 
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                  Cranfield University, UK
                  </p>  
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Indiana University, USA
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Institut Pprime, University of Poitiers, France
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Administrative Responsibilities
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Department Grievance Committee Member March 2024-till
                    present.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>Coordinator Media from April 2023-till present.</p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Member of Department post graduate committee (DPGC) from
                    July 2020 - July 2022
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Faculty-in-Charge (FIC) Placements of Department of
                    Mechanical Engineering from June 2022-till present.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>In charge of Departmental website.</p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Co-Faculty in charge of Advanced fluid mechanics and heat
                    transfer lab.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
          Membership of Scientific Societies
          </h1>
          <div className="py-10 md:ml-40 md:mr-20 px-2 md:px-0">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg">
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                  Association for Research in Vision and Ophthalmology (ARVO): Member 2025
                  </p>
                </div>
              </li> 
            </ul>
          </div>
        </div>
        
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Educational Details
          </h1>
          <div className="flex flex-col gap-2 pt-10 md:ml-40 md:mr-20">
            <h1 className="font-semibold text-xl underline text-center md:text-start">
              PhD Thesis
            </h1>
            <div className="md:ml-5 px-2 md:px-0">
              <p className="text-lg">
                <span className="font-semibold">Thesis Title</span>- Dynamic
                Contrast Enhanced-Magnetic Resonance Imaging (DCE-MRI) based
                numerical modeling of anticancer drug transport in human brain
                tumors.
              </p>
              <p className="font-semibold text-xl text-center md:text-start">
                Salient outcomes and clinical implications of PhD research
              </p>
              <ul className="flex flex-col gap-2 md:gap-3 md:ml-3 md:text-lg">
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      Developed an image-based computational model in
                      open-source programming software OpenFOAM to insilico
                      predict the hydraulic environment, drug transport
                      (irrespective of any treatment and drug administration
                      mode) in the tumor microenvironment, and the associated
                      brain tumor healing.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      For patient-specific predictions, the computational model
                      was reinforced with real-time medical imaging data
                      (Acquired from AIIMS Delhi), facilitating the oncologists'
                      use these tools to improve prognosis, survival, and
                      patient quality of life
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      The results of the developed computational model were
                      validated with in-house DCE-MRI experimental data of
                      various human brain tumor patients, thus developing a
                      patient-specific framework that oncologists can use to
                      test the efficacy of different chemotherapeutic drugs
                      beforehand when administered systemically
                    </p>
                  </div>
                </li>
              </ul>
              <p className="font-semibold text-xl  underline text-center md:text-start">
                Adviser
              </p>
              <ul className="flex flex-col gap-2 md:gap-3 md:ml-3 md:text-lg">
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      <a
                        href="https://home.iitk.ac.in/~nsinha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline font-semibold"
                      >
                        Prof. Niraj Sinha
                      </a>
                      , Professor, Department of Mechanical Engineering, IIT
                      Kanpur.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      <a
                        href="https://iitr.ac.in/~ME/Ankit_Bansal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline font-semibold"
                      >
                        Prof. Ankit Bansal
                      </a>
                      , Associate Professor, Department of Mechanical and
                      Industrial Engineering, IIT Roorkee.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      <a
                        href="https://web.iitd.ac.in/~anupsm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline font-semibold"
                      >
                        Prof. Anup Singh
                      </a>
                      , Associate Professor, Centre for Biomedical Engineering,
                      IIT Delhi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-10 md:ml-40 md:mr-20">
            <h1 className="font-semibold text-xl underline text-center md:text-start">
              M.Tech Thesis
            </h1>
            <div className="md:ml-5 px-2 md:px-0">
              <p className="text-lg">
                <span className="font-semibold">Thesis Title</span>- Numerical
                modeling of drug transport in the anterior human eye to treat
                Primary Open Angle Glaucoma (POAG).
              </p>
              <p className="font-semibold text-xl text-center md:text-start">
                Salient outcomes and clinical implications of Masters research{" "}
              </p>
              <ul className="flex flex-col gap-2 md:gap-3 md:ml-3 md:text-lg">
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      Modeled three different drug delivery modes, namely
                      therapeutic lens, topical administration, and
                      subconjunctival implants, and compared their treatment
                      efficacy concerning POAG.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      Numerically investigated the effect of aging and eye
                      orientation on heat transfer, fluid flow, and drug
                      delivery in the anterior human eye.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      Developed a computational model that ophthalmologists can
                      use to understand the washout and retention behavior of
                      drugs in different eye domains and to predict the best eye
                      orientation for optimized drug delivery.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="font-semibold text-xl text-center md:text-start underline">
                Adviser
              </p>
              <ul className="flex flex-col gap-2 md:gap-3 md:ml-3 md:text-lg">
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      <a
                        href="https://home.iitk.ac.in/~nsinha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline font-semibold"
                      >
                        Prof. Niraj Sinha
                      </a>
                      , Professor, Department of Mechanical Engineering, IIT
                      Kanpur.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-10 md:ml-40 md:mr-20">
            <h1 className="font-semibold text-xl underline text-center md:text-start">
              BE Project
            </h1>
            <div className="md:ml-5 px-2 md:px-0">
              <p className="text-lg">
                <span className="font-semibold">Thesis Title</span>- To reduce
                the rejection/rework of the gearbox line in Mahindra and
                Mahindra Ltd. Swaraj Divison Mohali.
              </p>
              <p className="font-semibold text-xl text-center md:text-start">
                Salient outcomes of undergraduate project{" "}
              </p>
              <ul className="flex flex-col gap-2 md:gap-3 md:ml-3 md:text-lg">
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      To reduce the rejection/rework of the gearbox line and the
                      forklift movement in the heavy machine shop.
                    </p>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <p>
                      <MdDoubleArrow className="inline-block" />
                    </p>
                    <p>
                      Installation of an inverter to invert and rotate the
                      differential housings used in tractors on differential
                      housing lines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-left md:items-center">
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 text-center md:text-start underline md:no-underline md:border-b-2 md:border-gray-900">
            Alma Maters
          </h1>
          <div className="flex flex-col pt-5 md:flex-row items-center">
            <div className="md:mx-16 p-5">
              <a
                href="https://www.iitk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700"
              >
                <img
                  src={iitklogo}
                  alt="iitklogo"
                  className="mx-auto w-1/2 md:w-1/2"
                />
                <p className="text-center py-2 font-semibold">
                  Indian Institute of Technology, Kanpur
                </p>
              </a>
            </div>
            <div className="md:mx-16 p-5">
              <a
                href="https://uiet.puchd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-700"
              >
                <img
                  src={uietlogo}
                  alt="uietlogo"
                  className="mx-auto w-1/2 md:w-1/3"
                />
                <p className="text-center py-2 font-semibold">
                  University Institute of Engineering and Technology (UIET),
                  Panjab University (PU), Chandigarh
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
