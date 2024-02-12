import React from 'react'
import { Link } from 'react-router-dom'
import lablogo from '../assets/Lablogo.png'
export default function Home() {
  return (
    <div className='h-screen'>
        <div className=" bg-gray-300  mx-auto flex flex-col items-center justify-center pt-20 pb-2 pl-4 md:flex-row">
        <div className="pl-4 flex flex-col justify-center h-full md:w-2/3">
          
          <p className="text-black p-4 max-w">
            <span className='text-3xl font-semibold'>Explore the Innovations at</span>
            <br />
            <span className='text-3xl font-bold'>Bio Fluid Labs</span>
          </p>
          <div className="flex p-4 justify-center md:justify-between">
            <Link to={'/lab'} className="hover:scale-105  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-slate-500">
              Explore Lab
            </Link>
          </div>
        </div>
        <div className="md:w-1/3">
          <img
            src={lablogo}
            alt="lablogo"
            className="mx-auto w-2/3 md:w-full h-72"
          />
        </div>
      </div>
    </div>
  )
}
