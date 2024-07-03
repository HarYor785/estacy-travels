import Container from 'app/componets/Container'
import Offers from 'app/componets/offers/Offers'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import { faqsArray } from 'app/lib/faqsArray'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "FAQs - Estacy Travels",
    description: "Find answers to frequently asked questions about our travel and birth services at Estacy Travels. Get detailed information on bookings, packages, and more.",
    alternates: {
        canonical: "/faqs"
    }
};

const page = () => {
    const generateUrlParam = (title) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };
  return (
    <Container>
        <SectionHeader title={'FAQs'}>
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
            <div className='container w-full flex flex-col items-center justify-center gap-4'>
                <h1 className='md:text-2xl text-xl text-black font-anton font-bold uppercase'>
                    FAQs By Countries
                </h1>
                <p className='md:text-sm text-xs text-gray-600 font-roboto text-center'>
                    Frequently asked questions by countries. Click on a flag of any 
                    country you wish to find out all information about.<br className='md:block hidden'/> If your 
                    question is not answered, feel free to contact us anytime.
                </p>
                <div className='w-full flex items-center justify-center gap-7 flex-wrap'>
                    {
                        faqsArray.map((item, i)=>(
                            <Link key={i} href={`/faqs/${generateUrlParam(item.topic)}`}
                            className='md:w-[230px] w-full h-fit p-3 rounded-md bg-white 
                            shadow-shadow-dark flex flex-col items-center justify-center gap-4'>
                                <Image src={item.img} 
                                alt={item.topic}
                                width={120} height={120}
                                className='w-[120px] h-[120px] rounded-full object-cover'/>
                                <h3 className='md:text-sm text-xs text-secondary font-bold 
                                text-center'>
                                    {item.topic}
                                </h3>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>

        <Offers/>
    </Container>
  )
}

export default page