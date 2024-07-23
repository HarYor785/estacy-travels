import Container from 'app/componets/Container'
import PortableTextBox from 'app/componets/portableText/PortableText';
import { client } from 'app/utils/configSanity';
import React from 'react'

export const metadata = {
    title: "Terms and Conditions - Estacy Travels",
    description: "Review the terms and conditions for using Estacy Travels' services. Understand the rules and regulations for bookings, payments, cancellations, and more.",
    alternates: {
        canonical: "/terms-and-conditions"
    }
};

export const revalidate = 0
export default async function page(){
    const termsAndCond = await client.fetch(`*[_type == 'terms-and-conditions']`)
    
  return (
    <Container>
        <section className='container'>
        <div class="w-full mx-auto p-6">
        <PortableTextBox value={termsAndCond[0]?.web}/>
        </div>
        </section>
    </Container>
  )
}

