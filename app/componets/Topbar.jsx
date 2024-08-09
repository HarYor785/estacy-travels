'use client'


import Link from 'next/link';
import logo from '@images/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import AppBar from './AppBar';

const NavLink = ({href, text,children, className, icon: Icon, setOpen}) => {
    const pathname = usePathname()
    const isActive = href === '/' ? pathname === href : pathname.includes(href)

    return (
        <li className={`md:w-fit w-full block ${className}`}
        onClick={()=>setOpen(false)}>
            <Link href={href} 
            className={`text-md py-2 px-3 rounded-sm
            flex items-center gap-2 hover:bg-secondary 
            hover:text-white hover:opacity-80 transition-all 
            duration-300 ease-in-out md:w-auto w-full group
            ${isActive ? 'bg-secondary text-white' : 
            'text-secondary font-bold'}`}>
                {text}
                {
                    Icon && <Icon size={20} className=" text-secondary 
                    group-hover:text-white"/>
                }
                
            </Link>
            {children}
        </li>
    )
}

const subNavlinks = [
    {
        name: 'Birth Services',
        url: '/services/birth-services'
    },
    {
        name: 'Flight & Ticketing',
        url: '/services/flight-&-ticketing'
    },
    {
        name: 'Hotel Reservation',
        url: '/services/hotel-reservation'
    },
    {
        name: 'Vacation Packages',
        url: '/services/Vacation-packages'
    },
    {
        name: 'Visa Services',
        url: '/services/visa-services'
    },
    {
        name: 'School Services',
        url: '/services/school-services'
    },
]


export default function Topbar({res}){
    
    const [open, setOpen] = useState(false)
  return (
    <header className='w-full flex md:flex-col'>
        {/* TOPBAR */}
        <AppBar res={res}/>
        {/* NAVBAR */}
        <nav className='navbar w-full flex md:items-center 
        md:justify-between md:py-2 md:px-20 bg-white shadow-md z-[999]'>
            <div className='navbar-item w-full flex items-center md:justify-normal 
            justify-between md:gap-10 relative'>
                {/* LOGO */}
                <a href="/">
                    <Image src={'/images/logo.png'} alt='Estacy-Travels Logo'
                    width={50} height={100} className=' w-[50px] h-[50px] rounded-full'/>
                </a>
                {/* OVERLAY */}
                {open && <div onClick={()=>setOpen(false)}
                className="w-full h-screen absolute top-0 right-[-2rem] z-[988] 
                content-[''] bg-[rgba(0,0,0,0.29)] animate-fadeIn"></div>}

                {/* NAVLINKS */}
                <ul className={`flex md:relative md:flex-row md:bg-transparent 
                md:items-center md:w-full md:h-auto gap-3 absolute top-0 w-[250px] 
                md:left-0 h-screen flex-col items-start bg-white z-[999] md:p-0 p-3
                animate-slideIn ${open ? 'left-[-2rem]' : 'left-[-100%]' }`}>
                    {/* LOGO */}
                    <a href="/" className="md:hidden">
                        <Image src={logo} alt='Estacy-Travels Logo'
                        width={50} height={100} className=' w-[50px] h-[50px] rounded-full'/>
                    </a>
                    <NavLink href={'/'} text={'Home'} setOpen={setOpen}/>
                    <NavLink href={'/services'} className="relative group" 
                    text={'Services'} icon={IoIosArrowDown} setOpen={setOpen}>
                        
                        <ul className="absolute hidden group-hover:flex flex-col bg-white
                        mt-2 rounded-lg w-max top-7 z-[999] p-3 shadow-shadow-dark gap-2">
                            {
                                subNavlinks.map((item, i)=>(
                                    <li key={i}>
                                        <Link href={item.url}
                                        className="w-full md:text-sm text-xs text-secondary p-2 
                                        hover:bg-secondary rounded-sm hover:text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </NavLink>
                
                    <NavLink href={'/packages'} text={'Packages'} setOpen={setOpen}/>
                    <NavLink href={'/faqs'} text={'FAQs'} setOpen={setOpen}/>
                    <NavLink href={'/blog'} text={'Blogs'} setOpen={setOpen}/>
                    <NavLink href={'/about'} text={'About us'} setOpen={setOpen}/>
                    <NavLink href={'/contact'} text={'Contact us'} setOpen={setOpen}/>
                </ul>

                <button onClick={()=>setOpen(!open)}
                className="p-2 md:hidden self-end text-lg">
                    <IoMenu size={22} color="#000"/>
                </button>
            </div>
            <Link href={'https://wa.me/message/AWRDD4XEIXZGF1'} target='_blank'
            className="chat-btn md:flex hidden py-3 px-5 text-sm text-white 
            bg-secondary items-center gap-3 rounded-md hover:bg-transparent 
            hover:border-2 border-secondary hover:text-secondary transition-all 
            duration-300 ease-in-out">
                <FaWhatsapp size={20}/>
                Chat
            </Link>
        </nav>
    </header>
  )
}
