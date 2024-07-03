
import Image from 'next/image'
import React from 'react'
import logo from '@images/logo.png'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='w-full bg-secondary flex flex-col'>
        <div className='w-full p-10 mx-auto'>
            {/* FOOTER MAIN CONTENT */}
            <div className='w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 
            xl:grid-cols-4'>
                <div className='w-full flex flex-col items-start gap-3'>
                    <Image src={logo} alt='Estacy-Travels Logo'
                    width={50} height={100} className=' w-[50px] h-[50px] rounded-full'/>
                    <p className='text-sm text-white'>
                        Discover the world with Estacy Travels. We handle every detail, 
                        so you can enjoy a seamless and unforgettable journey. Travel 
                        with us and experience the difference.
                    </p>
                </div>
                {/* FOOTER QUICKLINKS */}
                <div className='w-full flex flex-col items-start gap-4'>
                    <h3 className='text-2xl text-white font-bold uppercase'>
                        Quick Links
                    </h3>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <Link href={'/'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Home
                        </Link>
                        <Link href={'/services'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Services
                        </Link>
                        <Link href={'/blog'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Our Blog
                        </Link>
                        <Link href={'/packages'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Packages
                        </Link>
                    </div>
                </div>
                {/* FOOTER SUPPORT */}
                <div className='w-full flex flex-col items-start gap-4'>
                    <h3 className='text-2xl text-white font-bold uppercase'>
                        Support
                    </h3>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <Link href={'/about'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            About Us
                        </Link>
                        <Link href={'/contact'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Contact Us
                        </Link>
                        <Link href={'/faqs'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            FAQs
                        </Link>
                        <Link href={'/terms-and-conditions'} className='w-full flex items-center gap-2 
                        text-sm text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <MdKeyboardArrowRight/>
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
                {/* FOOTER CONTACT */}
                <div className='w-full flex flex-col items-start gap-4'>
                    <h3 className='text-2xl text-white font-bold'>
                        Contact Us
                    </h3>
                    <div className='w-full flex flex-col items-start gap-2'>
                        <a href={'tel:+2348027813575'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <BiSolidPhoneCall/>
                            +2348027813575
                        </a>
                        <a href={'mailto:info@estacytravels.com'} className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <IoIosMail/>
                            info@estacytravels.com
                        </a>
                        <p  className='w-full flex items-center gap-2 text-sm 
                        text-white py-1 border-b-[1px] border-gray-300 hover:text-gray-400 
                        transition-all duration-300 ease-in-out'>
                            <IoLocation/>
                            29 Alfred Rewane Street, Ikoyi, Lagos, Nigeria.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* FOOTER ADDONS */}
        <div className=' flex md:flex-row flex-col items-center 
        md:justify-between justify-center p-3 bg-main gap-2'>
            <span className='md:text-sm text-xs text-gray-200'>
                {new Date().getFullYear()} © Copyrights Estacy Travels All right reserved.
            </span>
            <a href="https://wa.me/message/ZYOFIWOSI7BWB1" 
            className='md:text-sm text-xs text-gray-200'>
                Developed by HayPro Solutions
            </a>
            {/* SOCIAL MEDIA ICONS */}
            <div className='flex items-center gap-2'>
                <a href="#" className='md:text-sm text-xs text-white'>
                    <FaFacebookSquare size={20}/>
                </a>
                <a href="#" className='md:text-sm text-xs text-white'>
                    <FaXTwitter size={20}/>
                </a>
                <a href="#" className='md:text-sm text-xs text-white'>
                    <FaInstagramSquare size={20}/>
                </a>
                <a href="#" className='md:text-sm text-xs text-white'>
                    <FaLinkedin size={20}/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer