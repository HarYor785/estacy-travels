'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import {ButtonLink} from '../componets/ui/Button';
import { FaRegClock, FaStar } from "react-icons/fa";
import Link from 'next/link';
import { imageUrl } from 'app/utils/sanityImage';

const Packages = ({data}) => {


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
    className='swiper-content w-full h-full'
    >
        {
            data?.map((item, i)=>(
                <SwiperSlide className='relative' key={i}>
                    <div className='w-full relative h-fit md:h-[540px] flex flex-col overflow-hidden
                    items-start gap-3 p-6 rounded-md shadow-shadow-dark bg-white'>
                        <Link href={`/packages/${item?.slug?.current}`} 
                        className='md:text-lg text-sm text-black font-roboto
                        hover:underline uppercase font-bold leading-4'>
                            {item?.title}
                        </Link>
                        <Image src={imageUrl(item?.image?.asset)} 
                        width={300} height={300}
                        alt={item?.title}  
                        className='w-full md:h-full h-[300px] transition-all duration-300
                        transform hover:scale-105 rounded-md object-cover' />
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <FaRegClock size={20}/>
                                <span className='text-sm text-secondary font-bold'>
                                    {item?.days}
                                </span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaStar size={17} className=' text-yellow-600'/>
                                <FaStar size={17} className=' text-yellow-600'/>
                                <FaStar size={17} className=' text-yellow-600'/>
                                <FaStar size={17} className=' text-yellow-600'/>
                                <FaStar size={17} className=' text-yellow-600'/>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <span className=' text-sm text-gray-500'>
                                <b className='text-black'>₦{item?.price}</b>/{item?.priceState}
                            </span>
                            <ButtonLink text={'Book now'} 
                            href={`/packages/${item?.slug?.current}`}/>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default Packages