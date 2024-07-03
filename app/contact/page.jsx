import Container from 'app/componets/Container'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import Link from 'next/link'
import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import ContactForm from 'app/forms/ContactForm';
import Testimonials from 'app/swipers/Testimonials';
import Offers from 'app/componets/offers/Offers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: "Contact Us - Estacy Travels",
    description: "Get in touch with Estacy Travels for any inquiries, bookings, or support. We're here to help you with your travel and birth service needs.",
    alternates: {
        canonical: "/contact"
    }
};


const page = () => {
  return (
    <Container>
        <ToastContainer/>
        <SectionHeader title={'Contact Us'}>
            <div className='flex  items-center gap-3'>
                <Link href={'/'}
                className='text-sm text-gray-300 underline'>
                Home
                </Link>
                <span className='text-sm text-gray-300'>/</span>
            </div>
        </SectionHeader>
        <section className='w-full mt-12 p-2 mb-16'
        style={{marginBottom:'3rem'}}>
            {/* CONTACT FORM & DETAILS */}
            <div className='container w-full flex md:flex-row flex-col 
            justify-center items-start md:gap-4 gap-8 bg-white md:py-8 py-2 
            shadow-shadow-dark md:px-14 px-2'>

                <div className='w-full flex flex-col items-start gap-8'>
                    <h3 className='md:text-2xl text-lg font-bold font-anton
                     text-secondary'>
                        Contact Details
                    </h3>
                    <div className='flex items-center gap-4'>
                        <BsFillTelephoneFill size={20} className="text-gray-400"/>
                        <a href="tel:+2349818747467"
                        className='text-sm text-gray-700'>
                            +2348027813575
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdEmail size={20} className="text-gray-400"/>
                        <a href="mailto:info@estacytravels.com"
                        className='text-sm text-gray-700'>
                            info@estacytravels.com
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaLocationDot size={20} className="text-gray-400"/>
                        <p
                        className='text-sm text-gray-700'>
                            29 Alfred Rewane Street, Ikoyi, Lagos, Nigeria.
                        </p>
                    </div>
                    <div className='flex items-start gap-4'>
                        <FaClock size={20} className="text-gray-400"/>
                        <div className='flex flex-col items-start gap-1'>
                            <p
                            className='text-sm text-gray-700'>
                                Mon-Fri : 9am – 6pm
                            </p>
                            <p
                            className='text-sm text-gray-700'>
                                Sat-Sun : Closed
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[1px] min-h-full h-[400px] hidden content-[""] 
                bg-gray-300 self-center md:flex'></div>
                <div className='w-full flex flex-col items-start gap-6'>
                    <h3 className='md:text-2xl text-lg font-bold font-anton
                     text-secondary'>
                        Keep in touch with us
                    </h3>
                    <ContactForm/>
                </div>
            </div>
        </section>
        {/* TESTIMONIALS */}
        <section className="container mt-28 mb-12 md:mx-auto mx-4 w-full 
        p-6 flex flex-col items-center gap-8 min-h-[80vh]">
            <div className='flex flex-col items-center gap-2'>
                <h2 className="md:text-2xl text-lg text-secondary 
                font-roboto font-extrabold">
                Customer Reviews
                </h2>
                <h1 className='md:text-3xl text-xl text-black font-bold text-center 
                font-roboto'>
                    What Our Customers Are Saying About Us
                </h1>
            </div>
            <div className="w-full relative">
            <Testimonials/>
            </div>
        </section>

        {/* OFFERS */}
        <Offers/>
    </Container>
  )
}

export default page