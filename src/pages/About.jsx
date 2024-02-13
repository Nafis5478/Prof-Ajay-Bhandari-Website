import React from "react";
import { MdDoubleArrow } from "react-icons/md";
export default function About() {
  return (
    <div className="h-screen pt-28 md:pt-32  md:px-28">
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
                  <span className="font-semibold">July 2020- Present</span>
                </div>
                <span className="text-left w-full md:w-2/3">
                  Assistant Professor, Indian Institute of Technology (Indian
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
                  Visiting Researcher, King’s College University of Aberdeen,
                  Aberdeen, UK, Sponsor: The Royal Society
                </span>
              </li>
              <li className="flex flex-col gap-1 md:flex-row md:justify-between md:text-lg">
                <div className="flex flex-row gap-2 items-center">
                  <span>
                    <MdDoubleArrow />
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
          <h1 className="text-2xl md:mx-16 font-semibold text-gray-900 border-b-2 border-gray-900">
            Awards and Recognitions
          </h1>
          <div className="py-10 md:ml-40 md:mr-20">
            <ul className="flex flex-col gap-2 md:gap-3 md:text-lg ">
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Our idea, “Scrap to Advanced Materials by Guiding the
                    Communities,” has been selected in the top 75 best ideas out
                    of 2538 ideas form 67 countries for the LiFE Global Call for
                    Ideas and Papers by Niti Aayog, Government of India.{" "}
                    <a
                      href="https://www.niti.gov.in/documents/reports"
                      className="text-blue-700 hover:underline"
                    >
                      https://www.niti.gov.in/documents/reports
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Got the “Royal Society Yusuf Hamied International Exchange
                    Award” funded by The Yusuf and Farida Hamied Foundation.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    My research article (ASME JBME Journal paper) was selected
                    by Research Matters (Entrepreneurship Cell) at Indian
                    Institute of Science (IISc) Bangalore as cutting-edge
                    research and a research story was published on it, which
                    appeared as a media coverage.{" "}
                    <a
                      href="https://researchmatters.in/news/packaging-anti-cancer-drugs-liposomes-safer-chemotherapy"
                      className="text-blue-700 hover:underline"
                    >
                      https://researchmatters.in/news/packaging-anti-cancer-drugs-liposomes-safer-chemotherapy
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    The ASCHT 2017 conference paper was selected to publish in a
                    special issue of the International Journal of Advances in
                    Engineering Science and Applied Mathematics. Only 8 out of
                    200 conference papers were selected for the journal.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Lalit Kishore Chaudhary Memorial Scholarship for best
                    research paper of the Mechanical Department of IIT Kanpur.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Full scholarship to present international conference in
                    Sendai, Japan. Funding agency: IIT Kanpur, Funding amount
                    INR 1.5 Lac
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Qualified GATE in 2014 in Mechanical Engineering and got
                    MHRD scholarship during Ph.D. 2014-19.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Secured third position and first division with honors in
                    Mechanical Engineering Batch in BE in 2013.
                  </p>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <p>
                    <MdDoubleArrow className="inline-block" />
                  </p>
                  <p>
                    Secured first position in 10+2 and was awarded scholarship,
                    certificate of merit and state level award by Chief minister
                    of Punjab
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>{/* for administrative responsibilites part */}</div>
        <div>{/* for educational details part */}</div>
        <div>{/* for advisers part */}</div>
        <div>{/* for alma mater part */}</div>
      </div>
    </div>
  );
}
