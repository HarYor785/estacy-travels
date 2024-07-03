'use client'


import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { CiClock2, CiLocationOn, CiCalendarDate } from "react-icons/ci";
import Pagination from 'app/componets/pagination/Pagination'
import { useState } from 'react'
import Link from 'next/link'
import { imageUrl } from 'app/utils/sanityImage';

const PER_PAGE = 15;

const Packages = ({packages}) => {

    const [data, setData] = useState(packages?.slice(0, PER_PAGE));
    const total = packages?.length;

    const handlePageChange = (page) => {
        const start = (page - 1) * PER_PAGE;
        const paginatedData = packages?.slice(start, start + PER_PAGE);
        setData(paginatedData);
    };
  return (
    
        <div className='w-full flex flex-col items-center justify-center gap-2'>
            <div className='w-full flex flex-col items-center gap-6 bg-white md:p-4 p-2 
            rounded-md shadow-shadow-dark'>
                {
                    data.map((item, i)=>(
                        <div key={i}
                        className='w-full flex md:flex-row flex-col 
                        items-start gap-4 transition-all duration-300 
                        ease-in-out p-3 hover:bg-primary'>
                            <Link href={`/packages/${item?.slug?.current}`} 
                            className='w-full md:w-[500px] md:h-[300px] h-[400px]'>
                                <Image src={imageUrl(item?.image?.asset)} alt={item?.title}
                                className='w-full h-full md:object-cover object-fill rounded-md
                                    transition-all duration-300 transform hover:scale-105'
                                width={500} height={300}/>
                            </Link>
                            <div className='w-full flex flex-col gap-3 items-start'>
                                {/* RATING AND CATEGORY */}
                                <div className='w-full flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar size={17} className=' text-yellow-500'/>
                                        <FaStar size={17} className=' text-yellow-500'/>
                                        <FaStar size={17} className=' text-yellow-500'/>
                                        <FaStar size={17} className=' text-yellow-500'/>
                                        <FaStar size={17} className=' text-yellow-500'/>
                                    </div>
                                    <span className='text-sm text-red-600 font-bold italic'>
                                        {item?.category}
                                    </span>
                                </div>
                                {/* TITLE */}
                                <h1 className='text-3xl text-secondary font-anton font-bold uppercase'>
                                    {item?.title}
                                </h1>
                                <p className='text-sm text-gray-600 font-roboto'>
                                    {item?.shortDescription}
                                </p>
                                <div className='flex items-center gap-2'>
                                    <CiClock2 size={20}/>
                                    <span className='text-sm text-secondary font-bold'>
                                        {item?.days}
                                    </span>
                                </div>
                                <div className='w-full flex items-center md:gap-4 gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <CiLocationOn  size={20}/>
                                        <span className='text-sm text-secondary font-bold'>
                                            {item?.location}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <CiCalendarDate  size={20}/>
                                        <span className='text-sm text-secondary font-bold'>
                                            {item?.date}
                                        </span>
                                    </div>
                                </div>
                                {/* PRICE AND BUTTON */}
                                <div className='w-full flex items-center justify-between gap-2'>
                                    <span className='flex items-center gap-1 text-2xl text-red-600 
                                    font-anton font-extrabold'>
                                        ₦{item?.price}/<small className='text-sm text-gray-600 uppercase'>
                                            {item?.priceState}
                                        </small>
                                    </span>
                                    <Link href={`/packages/${item?.slug?.current}`}
                                    className='py-4 px-8 text-white text-sm bg-secondary shadow-shadow-dark
                                        rounded-md font-bold hover:shadow-none hover:opacity-80 transition-all 
                                        duration-300 ease-in-out'>
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Pagination total={total} perPage={PER_PAGE} onPageChange={handlePageChange} />
        </div>
  )
}

export default Packages