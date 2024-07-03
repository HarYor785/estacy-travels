
import Container from 'app/componets/Container'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import Link from 'next/link'
import Offers from 'app/componets/offers/Offers'
import BlogPage from 'app/componets/blog/BlogPage'
import { client } from 'app/utils/configSanity'


export const metadata = {
  title: "Our Blogs - Estacy Travels",
  description: "Explore insightful travel and birth services blogs and tips from Estacy Travels.",
  alternates: {
    canonical: "/blog"
  }
}

export const revalidate = 0
const page = async () => {
  const blogPosts = await client.fetch(`*[_type == 'blog'] | order(_createdAt desc)`)
  return (
    <Container>
        <SectionHeader title={'Our Blog'}>
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

            <BlogPage posts={blogPosts}/>

        </section>

        {/* OFFERS */}
        <Offers/>
    </Container>
  )
}

export default page