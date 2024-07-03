import Container from 'app/componets/Container'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import about1 from '@images/estacy-about1.png'
import about2 from '@images/estacy-about2.png'
import about3 from '@images/estacy10.jpg'
import Testimonials from 'app/swipers/Testimonials'
import Offers from 'app/componets/offers/Offers'

export const metadata = {
  title: "About Us - Estacy Travels",
  description: "Learn more about Estacy Travels, our mission, values, and the dedicated team behind our exceptional travel and birth services. Discover how we create unforgettable experiences tailored just for you.",
  alternates: {
    canonical: "/about"
  }
};

const page = () => {
  return (
    <Container>
      <SectionHeader title={'About Us'}>
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

          <div className='container flex flex-col items-center gap-8'>
            {/* OUR MSSION */}
            <div className='w-full flex md:flex-row flex-col items-center 
            md:justify-between justify-center md:gap-12 gap-4 '>
              <div className='flex flex-col items-start gap-4'>
                <h3 className='text-2xl font-bold text-secondary'>
                  Our Story
                </h3>
                <p className='md:text-lg text-sm text-gray-900'>
                  Welcome to Estacy Travels & Birth Services, where our passion for 
                  exploration and care converge to create exceptional experiences 
                  for our clients. Our journey began with a simple yet profound idea: 
                  to merge the joy of travel with the support and guidance needed during 
                  one of life’s most significant events—bringing a new life into the world.
                </p>
              </div>
              <Image src={about1} width={300} height={300}
              alt='About us img'
              className='md:w-[500px] w-full h-[300px] object-cover'/>
            </div>

            {/* OUR MISION */}
            <div className='w-full flex md:flex-row flex-col items-center 
            md:justify-between justify-center md:gap-12 gap-4 '>
              <Image src={about2} width={300} height={300}
              alt='About us img'
              className='md:w-[500px] w-full h-[300px] object-cover'/>
              <div className='flex flex-col items-start gap-4'>
                <h3 className='text-2xl font-bold text-secondary'>
                  Our Mision
                </h3>
                <p className='md:text-lg text-sm text-gray-900'>
                  At Estacy Travels, our mission is to inspire and support our clients 
                  through every step of their journey. We aim to create unforgettable 
                  travel experiences that broaden horizons and enrich lives, while also 
                  providing compassionate and professional birth services that ensure 
                  safety, comfort, and peace of mind.
                </p>
                <h3 className='text-lg font-bold'>
                  We are committed to:
                </h3>
                <ul className='pl-6 list-decimal md:text-lg text-sm'>
                  <li>
                    <b>Excellence in Service:</b> Delivering top-notch, personalized 
                    services that cater to the unique needs and desires of each client.
                  </li>
                  <li>
                    <b>Supportive Care:</b> Offering comprehensive and empathetic 
                    support for expectant parents, from prenatal care to postpartum 
                    assistance.
                  </li>
                  <li>
                    <b>Innovation and Adaptability:</b> Continuously improving our services 
                    through innovation and adapting to the evolving needs of our clients.
                  </li>
                  <li>
                    <b>Integrity and Trust:</b> Building relationships based on trust, 
                    transparency, and integrity, ensuring our clients feel confident and 
                    valued throughout their journey with us.
                  </li>
                </ul>
              </div>
          
            </div>

            {/* OUR VISSION */}
            <div className='w-full flex md:flex-row flex-col items-center 
            md:justify-between justify-center md:gap-12 gap-4 '>
              <div className='flex flex-col items-start gap-4'>
                <h3 className='text-2xl font-bold text-secondary'>
                  Our Vision
                </h3>
                <p className='md:text-lg text-sm text-gray-900'>
                  Our vision at Estacy Travels is to be the leading provider of 
                  integrated travel and birth services, recognized for our dedication 
                  to excellence, compassion, and the unique fusion of exploration and care.
                </p>
                <h3 className='text-lg font-bold'>
                  We aspire to:
                </h3>
                <ul className='pl-6 list-decimal md:text-lg text-sm'>
                  <li>
                    <b>Be a Beacon of Inspiration:</b> Inspiring people to explore the world 
                    and experience the richness of different cultures and landscapes.
                  </li>
                  <li>
                    <b>Set the Standard for Care:</b> Setting a benchmark in birth services by providing 
                    holistic, personalized, and cutting-edge care that prioritizes the well-being 
                    of both mother and child.
                  </li>
                  <li>
                    <b>Foster a Community of Trust:</b> Creating a community where clients feel supported, 
                    understood, and empowered throughout their travel and birthing experiences.
                  </li>
                </ul>
              </div>
              <Image src={about3} width={300} height={300}
              alt='About us img'
              className='md:w-[500px] w-full h-[300px] object-cover'/>
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
            <h1 className='md:text-4xl text-2xl text-black font-bold text-center 
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