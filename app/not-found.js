import React from 'react'
import Container from './componets/Container'
import Link from 'next/link'
import Image from 'next/image'
import image from '@images/404.png'
import Offers from './componets/offers/Offers'

const NotFound = () => {
  return (
    <Container>
      <section className='w-full md:h-[80] h-auto flex md:flex-row flex-col 
      items-center justify-center md:p-12 p-6 gap-4'>
        <div className='flex flex-col items-start gap-9'>
          <h3 className='md:text-4xl text-2xl text-black font-anton font-bold'>
            Oops! The page you were <br/>
            looking for doesn't exist
          </h3>
          <p className='md:text-base text-sm text-gray-600'>
            You may have misstyped the address or the page may have been moved.
          </p>
          <Link href={'/'}
          className='py-3 px-6 bg-secondary text-white text-base rounded-sm'
          >
            Back to home
          </Link>
        </div>
        <div>
          <Image
          src={image}
          alt='404-image'
          width={300}
          height={300}
          className='w-full h-full object-contain'
          />
        </div>
      </section>
      <Offers/>
    </Container>
  )
}

export default NotFound