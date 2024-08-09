import React from 'react'
import ServiceCard from './ServiceCard'
import serviceImg1 from '@images/estacy-2.png'
import serviceImg2 from '@images/estacy3.png'
import serviceImg3 from '@images/estacy4.png'
import serviceImg4 from '@images/estacy5.png'
import serviceImg5 from '@images/estacy6.png'
import serviceImg6 from '@images/estacy7.png'

const Services = () => {
  return (
        <div className='w-full grid grid-cols-1 md:gap-5 gap-1 md:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-3 md:px-28'>
            <ServiceCard name={'Visa Services'} link={'visa-services'} image={serviceImg1}/>
            <ServiceCard name={'Birth Services'} link={'birth-services'} image={serviceImg2}/>
            <ServiceCard name={'Vacation Packages'} link={'vacation-packages'} image={serviceImg3}/>
            <ServiceCard name={'School Services'} link={'school-services'} image={serviceImg4}/>
            <ServiceCard name={'Flight & Ticketing'} link={'flight-&-ticketing'} image={serviceImg5}/>
            <ServiceCard name={'Hotel Reservation'} link={'hotel-reservation'} image={serviceImg6}/>
        </div>
  )
}

export default Services
