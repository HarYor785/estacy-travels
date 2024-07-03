import Container from 'app/componets/Container'
import Offers from 'app/componets/offers/Offers'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import Services from 'app/componets/services/Services'
import Link from 'next/link'


export const metadata = {
  title: "Our Services - Estacy Travels",
  description: "Discover the range of travel services offered by Estacy Travels, including visa assistance, tours, and personalized birth services.",
  alternates: {
    canonical: "/services"
  }
}

const page = () => {
  return (
    <Container>
        <SectionHeader title={'Our Services'}>
          <div className='flex  items-center gap-3'>
            <Link href={'/'}
            className='text-sm text-gray-300 underline'>
              Home
            </Link>
            <span className='text-sm text-gray-300'>/</span>
          </div>
        </SectionHeader>
        <section className='container w-full mt-12 pt-24 mb-16'>
            <Services/>
        </section>

        <Offers/>
    </Container>
  )
}

export default page