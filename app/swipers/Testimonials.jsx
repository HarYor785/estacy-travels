'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';

import columnImg from '@images/column-icon.png'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { testimonialsArray } from 'app/lib/testimonialsArray';

const Testimonials = () => {
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
            testimonialsArray.map((item, i)=>(
                <SwiperSlide className='relative' key={i}>
                    <div className='w-full relative h-fit min-h-[300px] flex flex-col overflow-hidden
                    items-start justify-center gap-2 rounded-md shadow-shadow-dark bg-white p-3'>
                        <Image src={columnImg} alt='Testimonial Icon'
                        width={50} height={50}
                        className='w-[50px] h-[50px] object-cover' />
                        <p className='text-left text-gray-700 text-sm font-poppins'>
                            {item.message}
                        </p>
                        <div className='flex items-center gap-2 mt-2 w-full'>
                            <Image src={item.img} alt='Testimonial Avatar' 
                            width={50} height={50} 
                            className='w-[60px] h-[60px] p-2 object-fill bg-white shadow-xl rounded-full' />
                            <div className='w-full flex items-start flex-col gap-1'>
                                <h1 className='text-sm font-extrabold font-anton'>
                                    {item.name}
                                </h1>
                                <span className='text-sm text-gray-500'>
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default Testimonials