import React from 'react'
import { Link } from 'react-router-dom'
import lablogo from '../assets/Lablogo.png'
import profile from '../assets/profile.jpg'
import { GiExitDoor } from "react-icons/gi";
export default function Home() {
  return (
    <div className='h-full border-2'>
        <div className=" bg-gray-200  mx-auto flex flex-col items-center justify-center pt-20 pb-2 pl-4 md:flex-row">
        <div className="px-4 flex flex-col justify-center h-full md:w-2/3">
          
          <p className="text-black py-4 max-w text-center md:text-left md:px-10">
            <span className='text-3xl font-semibold'>Explore the Innovations at</span>
            <br />
            <span className='text-3xl font-bold'>Bio-Fluid Research Labs</span>
          </p>
          <div className="flex p-4 justify-center md:justify-between  md:px-10">
            <Link to={'/lab'} className="hover:scale-105  text-white w-fit px-6 py-3 my-2 flex items-center gap-4 rounded-md bg-slate-500">
              <span>
                Explore Labs
              </span>
              <span className='text-3xl'>
                <GiExitDoor />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/3">
          <img
            src={lablogo}
            alt="lablogo"
            className="mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
      <div className='flex-col lg:mx-28 lg:p-10 flex md:flex-row justify-center'>
        <div className='md:w-1/3 p-3 gap-1'>
            <div>
            <img src={profile} alt="profile" className='w-2/3 mx-auto md:w-4/5 rounded-full shadow-black shadow-lg  ' />
            </div>
            <div className='text-center mt-4'>
              <p className='font-semibold text-3xl'>Prof. Ajay Bhandari</p>
              <p className='text-lg'>Assistant professor</p>
              <p className='text-lg'>Department of Mechanical Engineering</p>
              <p className='text-lg'>Indian Institute of Technology (ISM), Dhanbad</p>
            </div>

        </div>
        <div className='w-[90%] mx-auto md:w-2/3 justify-center  lg:mt-10 lg:ml-5 lg:pl-20 py-'>
            {/* for description */}
            <div className='flex flex-col gap-5'>
            <p className='text-md md:text-lg'>Curious by and about ‘nature’, I am passionate to understand natural flows which are simple but elegant, yet mysteriously challenging! Using simple mechanical models, I deal largely with experiments supplemented with a blend of theory and numerical simulations. With broad interest in Fluid Mechanics, my research activities span problems in bio-fluid dynamics with special focus on swimming, hovering, flying, flapping foil propulsion, and the mysteries revolving around the fish schooling patterns. Simultaneously, I am trying to unravel the entrainment dynamics of cloud-like flows and turbulent flows.</p>
            <p className='text-md md:text-lg'>
            Currently, my research group at IIT Kanpur – “Natural Flows Laboratory” (NatFlows Lab) is curious to explore the inherently coupled and intricate interactions between fluid and flexible surfaces through extensive experiments and simulations. The larger goal is to get insights into the role of flexibility that is ubiquitously present in the wings and fins of natural swimming and flying animals which they exploit for their advantage during cruising, hovering, manoeuvring as well as while schooling and flocking.

            </p>
            </div>
            <div className='mt-10 md:mt-20'>
              <h1 className='text-2xl font-semibold text-blue-900 border-b-2 border-blue-900'>Research Interest</h1>
              <p className='mt-5 mb-2 md:mt-7'>Bio-Fluid Mechanics, Computational Oncology, Medical-Image Based Numerical Modelling, Patient-specific Computational Models, Cancer And Ocular Drug Delivery.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
