import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const AppBar = ({res})=>{
  return (
    <div className='w-full md:flex hidden items-center justify-between 
        px-4 py-2 bg-secondary'>
            {/* CONTACT INFO */}
            <div className='flex items-center gap-5'>
                <a href="tel:+1234567890" 
                className='flex items-center gap-2 text-white text-sm'>
                    <IoMdCall size={15} color='#fff'/>
                    {res[0]?.phone}
                </a>
                <a href="mailto:info@estacytravels.com"
                className='flex items-center gap-2 text-white text-sm'>
                    <MdMail size={15} color='#fff'/>
                    {res[0]?.email}
                </a>
            </div>
            {/* SOCIAL MEDIA ICONS */}
            <div className='flex items-center gap-2'>
                <a href={res[0]?.facebook} className='text-sm text-white'>
                    <FaFacebookSquare size={20}/>
                </a>
                <a href={res[0]?.x} className='text-sm text-white'>
                    <FaXTwitter size={20}/>
                </a>
                <a href={res[0]?.instagram} className='text-sm text-white'>
                    <FaInstagramSquare size={20}/>
                </a>
                <a href={res[0]?.linkedin} className='text-sm text-white'>
                    <FaLinkedin size={20}/>
                </a>
            </div>
        </div>
  )
}

export default AppBar
