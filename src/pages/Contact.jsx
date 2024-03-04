import React from "react";
import linkedinlogo from "../assets/linkedinlogo.png";
import gmaillogo from "../assets/gmaillogo.png";
import googlescholarlogo from "../assets/googlescholarlogo.png";
import { MdDoubleArrow } from "react-icons/md";

export default function Contact() {
  return (
    <div className="h-full lg:h-full pt-28 md:pt-24 flex flex-col gap-3 px-5 md:px-2">
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Prospective Students / Vacancies
        </h1>
        <div className="py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="md:text-lg">
            If you are fascinated by and want to deeply explore fluid flows,
            indeed keen on rigorous research in Fluid Mechanics and plan to
            publish your work in reputed journals and international conferences,
            then this is the right place for you!
          </p>
          <p className="md:text-lg">
            Curious, research-driven, honest, enthusiastic, motivated, dedicated
            and hardworking people are welcome to join the NatFlows Lab. We are
            constantly looking for such people.
          </p>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Interested PhD/MS/MTech Students{" "}
        </h1>
        <div className="md:text-lg py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="font-semibold text-start ml-4 mr-2 md:ml-8 md:mr-4">
            Presuming that you have read through the NatFlows Lab homepage, if
            you are interested and planning to join our lab, then here is the
            process.
          </p>
          <ul className="flex flex-col gap-2 mx-4 md:mx-20">
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Admissions are based on Competitive GATE score, so have one
                  such.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Admissions take place once (or sometime, twice) every year:
                  May (sure) and December (not always!). Apply to Mechanical
                  Engineering Department for the program of your choice
                  (PhD/MS/MTech). Please monitor the Department website for
                  Admission Announcements.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Screened applicants (PhD/MS) have to go through written exam
                  (most likely) and an interview.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Admitted students have the freedom to choose the Advisor in
                  the first semester.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  This step is very important. If you are interested to work in
                  NatFlows Lab, then please contact Sachin Y. Shinde
                  (sachin@iitk.ac.in). Early contact is always encouraged to not
                  miss out the lab vacancies. Moreover, early choice of research
                  area helps in choosing the right courses appropriate to your
                  research problem.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Dual-Degree BTMT Students: You are welcome to visit the lab
                  and interact with the lab group. You can write to Sachin Y.
                  Shinde (sachin@iitk.ac.in) for appointment, and we can meet to
                  discuss the mutual research interest and prospective research
                  problem. The important requirement is curiosity and problem
                  solving attitude apart from thorough understanding of ME231
                  course.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Recommended Courses
        </h1>
        <div className="md:text-lg py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="font-semibold text-start ml-4 mr-2 md:ml-8 md:mr-4">
            We work in fluid flow problems using experiments blended with theory
            and simulation, therefore, crediting some of the following courses,
            but not limited to, depending upon your research problem would
            prepare you for the research work.
          </p>
          <ul className="flex flex-col gap-2 mx-4 md:mx-20">
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME631: Viscous Flow Theory</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME681: Mathematics for Engineers</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME647: Introduction to Turbulent Flows</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME674: Fluid Mechanics of Flapping Foils</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME666: Inviscid Flows</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>ME630: Computational Fluid Dynamics and Heat Transfer</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Prospective PhD (Research Students)
        </h1>
        <div className="md:text-lg py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="font-semibold text-start ml-4 mr-2 md:ml-8 md:mr-4">
            If you are doing/have performed well in some of the above courses
            and you are willing to join our lab, then please email Sachin Y.
            Shinde (sachin@iitk.ac.in) with following documents:
          </p>
          <ul className="flex flex-col gap-2 mx-4 md:mx-20">
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>Your resume (CV)</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Short research proposal (~ one page) stating the research
                  statement and plan (if you have one) which can be discussed
                  when we meet
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Few lines stating why do you want to work in NatFlow Lab, and
                  your plan after graduation
                </p>
              </div>
            </li>
          </ul>
          <p className="text-gray-950 underline decoration-gray-500 text-start ml-4 mr-2 md:ml-8 md:mr-4">
            Prospective Students providing these documents would be considered
            favourably.
          </p>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Prospective MTech Students
        </h1>
        <div className="md:text-lg py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="font-semibold text-start ml-4 mr-2 md:ml-8 md:mr-4">
            If you are doing/have performed well in some of the above courses
            and you are willing to join our lab, then please email Sachin Y.
            Shinde (sachin@iitk.ac.in) with following documents:
          </p>
          <ul className="flex flex-col gap-2 mx-4 md:mx-20">
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>Your resume (CV)</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-2">
                <p>
                  <MdDoubleArrow className="inline-block" />
                </p>
                <p>
                  Few lines stating why do you want to work in NatFlows Lab, and
                  your future plan after MTech
                </p>
              </div>
            </li>
          </ul>
          <p className="text-gray-950 underline decoration-gray-500 text-start ml-4 mr-2 md:ml-8 md:mr-4">
            Prospective Students providing these documents would be considered
            favourably.
          </p>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4 ">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Prospective SUMMER Intern Students
        </h1>
        <div className="md:text-lg py-2 md:py-4 md:ml-20 md:mr-20 md:px-2 my-3 shadow-gray-500 shadow-lg flex flex-col gap-2">
          <p className="font-semibold md:text-start ml-4 mr-2 md:ml-8 md:mr-4">
            If you are indeed keen on doing serious research work, then you are
            most welcome to join the NatFlows Lab. Please contact Sachin Y.
            Shinde (sachin@iitk.ac.in) with your CV and short plan of work.
          </p>
          <p className="text-start ml-4 mr-2 md:ml-8 md:mr-4">
            However, if you are aiming only to get a recommendation and PVF at
            the end of internship, you will be disappointed! Such students
            should refrain from applying!
          </p>
        </div>
      </div>
      <div className="md:mx-28 md:mt-4">
        <h1 className="text-3xl text-center md:text-left font-semibold px-8 underline md:no-underline md:border-b-2 md:border-gray-900">
          Contact Us
        </h1>
        <div className="py-2 md:py-4 md:ml-20 md:mr-20 px-2 my-3 shadow-gray-500 shadow-lg flex flex-col md:flex-row gap-2 justify-between">
          <div className="text-left md:w-2/5 md:pt-10">
            <h1 className="text-3xl text-center font-semibold px-8 ">
              Connect me through
            </h1>
            <div className="flex flex-col mt-10 gap-20 md:py-20 items-center pb-5">
              <div className="flex flex-row justify-between gap-10 md:gap-40">
                <a
                  href="https://www.linkedin.com/in/dr-ajay-bhandari-74628169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100px] hover:shadow-blue-500 hover:shadow-lg transition duration-500"
                >
                  <img src={linkedinlogo} alt="linkedinlogo" />
                </a>
                <a
                  href="mailto:ajaybhandari25@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100px] hover:shadow-yellow-500 hover:shadow-lg transition duration-500"
                >
                  <img src={gmaillogo} alt="gmaillogo" />
                </a>
              </div>
              <div className="flex flex-row justify-between gap-10 md:gap-40">
                <a
                  href="https://wa.me/+917755057692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] hover:shadow-orange-500 hover:shadow-lg transition duration-500"
                >
                  <img src={googlescholarlogo} alt="googlescholarlogo" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-2xl font-semibold items-center flex justify-center ">
            Or
          </div>
          <div className=" md:w-1/2 mb-5 md:pt-10 rounded-lg px-5 md:px-0 py-2 ">
            <h1 className="text-3xl text-center font-semibold px-8">
              Drop me a message
            </h1>
            <div className="flex justify-center mt-5">
              <form
                action="https://getform.io/f/62ec3233-38ce-42aa-80c8-da4e77b08364"
                method="POST"
                className="flex flex-col w-full "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-4"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                />
                <button className="text-white bg-gray-500 px-6 py-3 my-8 mx-auto flex items-center w-[95%] hover:bg-gray-200 hover:text-black hover:font-semibold justify-center rounded-md hover:scale-105 duration-300">
                  Click to send me your message...
                </button>
              </form>
            </div>
            {/* <div className="py-10 md:ml-40 md:mr-20">
          
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
