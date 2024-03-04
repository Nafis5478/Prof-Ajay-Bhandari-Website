import React from "react";
import { MdDoubleArrow } from "react-icons/md";
export default function Awards() {
  return (
    <div className="h-full pt-28 md:pt-32 px-5 md:px-28">
      <div className="text-left md:items-center">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8">
          Awards and Recognitions
        </h1>

        <div className="py-10 md:ml-28 md:mr-20 shadow-gray-500 shadow-lg px-3 my-4">
          <ul className="flex flex-col gap-2 md:gap-3 md:text-lg ">
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Got “
                  <span className="font-semibold">
                    Gullapalli Young Investigator Award
                  </span>
                  ” at Sign 2024 Conference, Hyderabad for outstanding research
                  work in the field of Computational Oncology and awarded 1000
                  USD cash prize.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Our idea, “
                  <span className="font-semibold">
                    Scrap to Advanced Materials by Guiding the Communities
                  </span>
                  ” has been selected in the top 75 best ideas out of 2538 ideas
                  form 67 countries for the LiFE Global Call for Ideas and
                  Papers by Niti Aayog, Government of India.{" "}
                  <a
                    href="https://www.niti.gov.in/documents/reports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Access Link
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
                  Got the “
                  <span className="font-semibold">
                    Royal Society Yusuf Hamied International Exchange Award
                  </span>
                  ” funded by The Yusuf and Farida Hamied Foundation.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  The research article (ASME JBME Journal paper) got selected by
                  <span className="font-semibold"> Research Matters</span>{" "}
                  (Entrepreneurship Cell) at Indian Institute of Science (IISc)
                  Bangalore as cutting-edge research and a research story was
                  published on it, which appeared as a media coverage.{" "}
                  <a
                    href="https://researchmatters.in/news/packaging-anti-cancer-drugs-liposomes-safer-chemotherapy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Access Link
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
                  POF journal article got selected as{" "}
                  <span className="font-semibold">Scilight</span> article.{" "}
                  <a
                    href="https://pubs.aip.org/aip/sci/article/2024/4/041103/3061517/A-First-Look-at-How-Diabetes-Affects-Retinal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    Access Link
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
                  The ASCHT 2017 conference paper got selected to publish in a
                  special issue of the{" "}
                  <span className="font-semibold">
                    International Journal of Advances in Engineering Science and
                    Applied Mathematics
                  </span>
                  . Only 8 out of 200 conference papers were selected for the
                  journal.
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  <span className="font-semibold">
                    Lalit Kishore Chaudhary Memorial Scholarship
                  </span>{" "}
                  for best research paper of the Mechanical Department of IIT
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
                  Full scholarship to present international conference in
                  Sendai, Japan. Funding agency: IIT Kanpur, Funding amount INR
                  1.5 Lac
                </p>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Qualified GATE in 2014 in Mechanical Engineering and got MHRD
                  scholarship during Ph.D. 2014-19.
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
    </div>
  );
}
