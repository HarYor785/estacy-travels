'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaClock  } from "react-icons/fa6";
import Link from 'next/link';
import { imageUrl } from 'app/utils/sanityImage';

const Hotels = ({data}) => {

  return (
    <Swiper
    spaceBetween={20}
    centeredSlides={true}
    autoplay={{
        delay: 2000,
        disableOnInteraction: true
    }}
    slidesPerView={1} // default view for smallest screens
    breakpoints={{
    768: { slidesPerView: 2 }, // view for tablets
    992: { slidesPerView: 2 }, // view for desktops
    1024: { slidesPerView: 3 } // view for desktops
    }}
    pagination={{
        clickable: true
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    loop={true}
    className='w-full h-full'
    >
        {
            data?.map((item, i)=>(
                <SwiperSlide className='relative' key={i}>
                    <div className='w-full relative h-fit flex flex-col overflow-hidden
                    items-start gap-2 rounded-md shadow-shadow-dark bg-white'>
                        <Image src={imageUrl(item?.image?.asset)} alt={item?.title}  
                        width={300} height={300}
                        className='w-full md:h-full h-[300px] transition-all duration-300
                        transform hover:scale-105 rounded-md object-cover' />
                        <div className='w-full flex flex-col items-start gap-3 p-4'>
                            <Link href={`'/hotels/${item?.slug?.current}`} 
                            className='md:text-lg text-sm text-black font-roboto
                            font-bold hover:underline'>
                                {item?.name}
                            </Link>
                            <div className='w-full flex flex-col items-start gap-3 p-2 bg-[rgba(92,0,89,0.1)]'>
                                <div className='flex items-center gap-1'>
                                    <FaStar size={17} className=' text-secondary'/>
                                    <FaStar size={17} className=' text-secondary'/>
                                    <FaStar size={17} className=' text-secondary'/>
                                    <FaStar size={17} className=' text-secondary'/>
                                    <FaStar size={17} className=' text-secondary'/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaLocationDot size={20} className='text-secondary'/>
                                    <span className='text-sm text-secondary font-bold'>
                                        {item?.location}
                                    </span>
                                </div>
                                <div className='w-full flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <FaClock  size={20} className='text-secondary'/>
                                        <span className='text-sm text-secondary font-bold'>
                                            {item?.size}
                                        </span>
                                    </div>
                                    <span className=' text-sm text-gray-500'>
                                        <b className='text-black'>₦{item?.price}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default Hotels