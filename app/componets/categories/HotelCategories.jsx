import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { imageUrl } from 'app/utils/sanityImage';

const HotelCategories = ({data}) => {

  return (
    <div className='p-3 bg-white shadow-shadow-dark w-full flex 
    flex-col items-start gap-6'>
        <h2 className='md:text-xl text-lg font-anton font-bold uppercase'>
            Other Available Hotels
        </h2>
        <div className='w-full flex flex-col items-center gap-4'>
            {
                data?.map((item,i)=>(
                    <Link key={i} href={`/hotels/${item?.slug?.current}`}
                    className='w-full flex items-start gap-4 p-1 hover:bg-primary 
                    transition-all duration-300 ease-in-out'>
                        <Image src={imageUrl(item?.image?.asset)} 
                        alt={item?.title}
                        width={50} height={50}
                        className='w-[50px] h-[50px]'/>
                        <div className='w-full flex flex-col items-start gap-2'>
                            <h2 className='text-sm text-black font-bold'>
                                {item?.title}
                            </h2>
                            <div className='w-full flex items-start justify-between flex-wrap'>
                                <span className='text-xs text-gray-500 flex items-center gap-2'>
                                    <FaLocationDot size={12} className='text-xs text-gray-500'/>
                                    {item?.location}
                                </span>
                                <p className='text-xs text-red-700 font-bold'>
                                    ₦{item?.price}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default HotelCategories