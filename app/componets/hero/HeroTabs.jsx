'use client'

import React, { useState } from 'react'
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { BsTaxiFrontFill } from "react-icons/bs";
import FlightForm from '../../forms/FlightForm';
import HotelForm from '../../forms/HotelForm';
import AirportForm from '../../forms/AirportForm';

const HeroTabs = () => {
    const [tab, setTabs] = useState('flight')
    
  return (
    <div className='md:w-fit w-full m-auto flex flex-col md:px-40 px-5 gap-0'>

        <div className='md:w-fit w-full md:flex md:items-start md:gap-1 grid grid-cols-2
        md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 '>
            <button onClick={()=>setTabs('flight')}
            className={`md:w-fit w-full md:py-3 md:px-4 p-2 
                uppercase md:text-sm text-xs flex 
            items-center gap-2 rounded-tl-md
            ${tab === 'flight' ? 'bg-secondary text-white' 
            : 'bg-white text-secondary'}`}>
                <MdOutlineFlightTakeoff size={20}/>
                Flights
            </button>
            <button onClick={()=>setTabs('hotel')}
            className={`md:w-fit w-full py-3 px-4 uppercase flex 
            items-center gap-2 md:py-3 md:px-4 p-2 md:text-sm text-xs
            ${tab === 'hotel' ? 'bg-secondary text-white' 
            : 'bg-white text-secondary'}`}>
                <FaHotel size={20}/>
                Hotels
            </button>
            <button onClick={()=>setTabs('airport')}
            className={`md:w-fit w-full py-3 px-4 col-span-2 uppercase flex 
            items-center gap-2 md:rounded-tr-md md:border-none border-b-2 
            border-secondary md:py-3 md:px-4 p-2 md:text-sm text-xs
            ${tab === 'airport' ? 'bg-secondary text-white' 
            : 'bg-white text-secondary'}`}>
                <BsTaxiFrontFill size={20}/>
                Airpot Transfer
            </button>
        </div>

        <div className='w-full bg-white shadow-md'>
            {tab === 'flight' && <FlightForm/>}
            {tab === 'hotel' && <HotelForm/>}
            {tab === 'airport' && <AirportForm/>}
        </div>
    </div>
  )
}

export default HeroTabs