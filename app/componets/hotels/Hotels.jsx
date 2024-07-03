'use client'

import Image from 'next/image'
import React from 'react'
import {ButtonLink} from '../ui/Button'
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaClock  } from "react-icons/fa6";
import { useState } from 'react'
import Pagination from '../pagination/Pagination';
import { imageUrl } from 'app/utils/sanityImage';

const PER_PAGE = 15;

const Hotels = ({hotelPosts}) => {
    const [data, setData] = useState(hotelPosts?.slice(0, PER_PAGE));
    const total = hotelPosts?.length;

    const handlePageChange = (page) => {
        const start = (page - 1) * PER_PAGE;
        const paginatedData = hotelPosts?.slice(start, start + PER_PAGE);
        setData(paginatedData);
    };


  return (
    <div className='w-full flex flex-col items-center gap-4'>
        <div className='relative w-full flex items-center justify-center gap-6 
        flex-wrap'>
            {
                data?.map((item, i)=>(
                    <div key={i}
                    className='md:w-[350px] w-full h-fit p-3 bg-white 
                    rounded-md shadow-shadow-dark relative'>
                        <Image src={imageUrl(item?.image?.asset)} alt={item?.title}
                        width={300} height={300}
                        className='w-full h-[300px] object-cover'/>
                        <div className='w-full flex flex-col items-start gap-1 p-3'>
                            <div className='flex items-center gap-1'>
                                <FaStar size={17} className=' text-secondary'/>
                                <FaStar size={17} className=' text-secondary'/>
                                <FaStar size={17} className=' text-secondary'/>
                                <FaStar size={17} className=' text-secondary'/>
                                <FaStar size={17} className=' text-secondary'/>
                            </div>
                            <h2 className='text-xl text-black font-poppins font-bold'>
                                {item?.title}
                            </h2>
                            <p className='text-sm text-gray-500 flex items-center gap-1'>
                                <FaLocationDot size={15} className='text-sm text-gray-500'/>
                                {item?.location}
                            </p>
                            <p className='text-sm text-gray-500 flex items-center gap-1'>
                                <FaClock size={15} className='text-sm text-gray-500'/>
                                {item?.size}
                            </p>
                            <div className='w-full flex items-center justify-between'>
                                <span className='text-xl text-red-700 font-bold font-roboto'>
                                    ₦{item?.price}
                                </span>
                                <ButtonLink text={'Book'} 
                                href={`/hotels/${item?.slug?.current}`}/>
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

export default Hotels