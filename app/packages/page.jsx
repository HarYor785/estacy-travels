import Container from 'app/componets/Container'
import Offers from 'app/componets/offers/Offers'
import Packages from 'app/componets/packages/Packages'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import { client } from 'app/utils/configSanity'
import Link from 'next/link'


export const metadata = {
  title: "Discover Our Tour Packages - Estacy Travels",
  description: "Explore our curated tour packages and insightful travel tips from Estacy Travels.",
  alternates: {
    canonical: "/packages"
  }
}

export const revalidate = 0

const page = async () => {
  const packagesPost = await client.fetch(`*[_type == 'packages'] | order(_createdAt desc)`)

  return (
    <Container>
        <SectionHeader title={'Our Packages'}>
          <div className='flex  items-center gap-3'>
            <Link href={'/'}
            className='text-sm text-gray-300 underline'>
              Home
            </Link>
            <span className='text-sm text-gray-300'>/</span>
          </div>
        </SectionHeader>
        
        {/* PACKAGES */}
        <section className='container w-full mt-12 pt-24 mb-16'>
            <Packages packages={packagesPost}/>
        </section>

        {/* OFFERS */}
        <Offers/>
    </Container>
  )
}

export default page