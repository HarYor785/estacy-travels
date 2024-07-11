'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import bgImg1 from '@images/estacy-bg8.png'
import bgImg2 from '@images/estacy-bg6.png'
import herobg1 from '@images/hero-bg1.png'
import herobg2 from '@images/hero-bg2.png'

import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import {ButtonLink} from '../componets/ui/Button';

const AutoplaySwiper = () => {

  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: true
    }}
    modules={[Autoplay, EffectFade]}
    loop={true}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    className='hero home w-full h-[90vh]'
    style={{paddingTop: '0 !important', paddingBottom: '0 !important'}}
    >
        <SwiperSlide className='w-full relative h-full'>
          <div className="relative w-full h-full">
            {/* Dark overlay */}
          <div className="absolute inset-0 opacity-50 bg-black w-full 
          h-full top-0 left-0 content-[''] z-30"></div>
            <Image src={herobg1} alt="Slide 1" layout="fill" 
            className="swiper-image md:object-fill object-cover" />
            <div className="content absolute top-0 left-0 w-full h-full flex 
            flex-col md:justify-center justify-start items-center md:px-12 
            text-white z-50 gap-3 md:pt-0 pt-12">
              <h3 className='text-2xl text-primary'>
                Welcome to
              </h3>
              <h1 className="md:text-6xl text-4xl font-extrabold font-anton text-primary">
                ESTACY TRAVELS 
              </h1>
              <h2 className="md:text-2xl text-xl capitalize font-extrabold text-white">
                Explore the world with us.          
              </h2>
              <p className='text-center md:text-sm text-sm md:p-2 p-4'>
                Embark on unforgettable journeys with Estacy Travels. 
                Discover captivating destinations tailored just for you. 
                <br/>
                Start your adventure today.
              </p>
              <ButtonLink text={'Explore'} href={'/packages'}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative h-screen'>
          <div className="relative w-full h-full">
            {/* Dark overlay */}
            <div className="absolute inset-0 opacity-50 bg-black w-full 
          h-full top-0 left-0 content-[''] z-30"></div>

            <Image src={bgImg2} alt="Slide 2" layout="fill"
            className="swiper-image md:object-fill object-cover" />
            <div className="content absolute top-0 left-0 w-full h-full flex 
            flex-col md:justify-center justify-start items-start z-50 
            md:px-12 px-4 gap-3 md:pt-0 pt-12">
              <h2 className="md:text-4xl text-2xl font-bold text-white">
                Birthing in Abroad
              </h2>
              <h2 className="md:text-4xl text-3xl font-extrabold text-primary font-roboto">
                EXPERIENCE WORLD-CLASS 
                <br/>
                MATERNITY CARE OVERSEAS
              </h2>
              <ButtonLink text={'Read More'} href={'/services/birth-services'}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full relative h-screen'>
          <div className="relative w-full h-full">
            {/* Dark overlay */}
            <div className="absolute inset-0 opacity-50 bg-black w-full 
          h-full top-0 left-0 content-[''] z-30"></div>

            <Image src={herobg2} alt="Slide 2" layout="fill"
            className="swiper-image md:object-fill object-cover" />
            <div className="content absolute top-0 left-0 w-full h-full flex 
            flex-col md:justify-center justify-start items-start z-50 
            md:px-12 px-4 md:gap-5 gap-6 md:pt-0 pt-12">
              <h2 className="md:text-4xl text-2xl font-bold text-white">
                Your Partner in Exceptional Experiences
              </h2>
              <p className="md:text-lg text-sm font-semibold text-white 
              font-roboto md:max-w-[600px] text-left w-full">
                Discover amazing local and international flight deals on the 
                Estacy Travels, offering affordable options for your next journey.
              </p>
              <ButtonLink text={'Book Now'} href={'/packages'}/>
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default AutoplaySwiper