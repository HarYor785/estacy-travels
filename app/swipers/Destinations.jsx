'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import Link from 'next/link';

import { destinationsArray } from 'app/lib/destinationsArray';

const Destinations = () => {
  return (
    <Swiper
    spaceBetween={10}
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
            destinationsArray.map((item, i)=>(
                <SwiperSlide className='relative' key={i}>
                    <div className='relative md:w-[200px] w-full h-[300px] rounded-[30px] 
                    overflow-hidden shadow-shadow-dark'>
                        <Image src={item.img} className='w-full h-full object-cover
                        transition-all transform duration-300 ease-in-out' width={300} height={300}/>
                        <div className='w-full h-[50px] absolute left-0 bottom-0 bg-gradient-to-t 
                        from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.3)] flex items-center 
                        justify-center'>
                            <Link href={`/packages`} 
                            className='text-2xl text-white font-bold text-center hover:underline
                            hover:text-red-600'>
                                {item.name}
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default Destinations