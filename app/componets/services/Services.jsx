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
            <ServiceCard name={'Visa Services'} link={'visa-services'} image={`https://estacytravels.netlify.app/images/estacy-2.png`}/>
            <ServiceCard name={'Birth Services'} link={'birth-services'} image={`https://estacytravels.netlify.app/images/estacy-3.png`}/>
            <ServiceCard name={'Vacation Packages'} link={'vacation-packages'} image={`https://estacytravels.netlify.app/images/estacy-4.png`}/>
            <ServiceCard name={'School Services'} link={'school-services'} image={`https://estacytravels.netlify.app/images/estacy-5.png`}/>
            <ServiceCard name={'Flight & Ticketing'} link={'flight-&-ticketing'} image={`https://estacytravels.netlify.app/images/estacy-6.png`}/>
            <ServiceCard name={'Hotel Reservation'} link={'hotel-reservation'} image={`https://estacytravels.netlify.app/images/estacy-7.png`}/>
        </div>
  )
}

export default Services
