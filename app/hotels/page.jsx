
import Container from 'app/componets/Container'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import Link from 'next/link'
import Offers from 'app/componets/offers/Offers'
import Hotels from 'app/componets/hotels/Hotels'
import { client } from 'app/utils/configSanity'

export const metadata = {
  title: "Our Hotels - Estacy Travels",
  description: "Discover a selection of exquisite hotels curated for your comfort and convenience by Estacy Travels. Explore our range of accommodations in prime locations, offering unparalleled service and luxury.",
  alternates: {
    canonical: "/hotels"
  }
};

export const revalidate = 0

const page = async () => {
  const hotels = await client.fetch(`*[_type == 'hotels'] | order(_createdAt desc)`)

  return (
    <Container>
        <SectionHeader title={'Our Hotels'}>
          <div className='flex  items-center gap-3'>
            <Link href={'/'}
            className='text-sm text-gray-300 underline'>
              Home
            </Link>
            <span className='text-sm text-gray-300'>/</span>
          </div>
        </SectionHeader>
        <section className='container w-full mt-12 p-2 mb-16'
        style={{marginBottom:'3rem', marginTop: '3rem'}}>

            <Hotels hotelPosts={hotels}/>

        </section>

        {/* OFFERS */}
        <Offers/>
    </Container>
  )
}

export default page