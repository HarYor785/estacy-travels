import Image from "next/image";
import Container from "./componets/Container";
import Hero from "./componets/hero/Hero";
import Services from "./componets/services/Services";
import aboutImg1 from '@images/estacy12.png'
import aboutImg2 from '@images/estacy13.png'
import aboutImg3 from '@images/estacy14.png'
import birthImg from '@images/estacy-birth2.png'
import Link from "next/link";
import Testimonials from "./swipers/Testimonials";
import Offers from "./componets/offers/Offers";
import Blog from "./componets/blog/Blog";
import Packages from './swipers/Packages'
import Hotels from './swipers/Hotels'
import Destinations from "./swipers/Destinations";
import Gallery from "./componets/gallery/Gallery";
import { client } from "./utils/configSanity";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedSection from "./componets/animation/AnimateSection";


export const metadata = {
  title: "Estacy Travels - Your Gateway to Unforgettable Journeys",
  description: "Welcome to Estacy Travels, your premier destination for curated travel experiences. Explore our tour packages, travel tips, and comprehensive birth services. Start your adventure with us today!",
  alternates: {
    canonical: "/"
  }
};

export const revalidate = 0
export default async function Home() {
  // FETCH BLOGS
  const blogPosts = await client.fetch(`*[_type == 'blog'] | order(_createdAt desc)`)
  // FETCH PACKAGES
  const packagesPost = await client.fetch(`*[_type == 'packages'] | order(_createdAt desc)`)
  // FETCH HOTELS
  const hotelsPost = await client.fetch(`*[_type == 'hotels'] | order(_createdAt desc)`)

  return (
    <Container>
      <ToastContainer/>
      {/* HERO SECTION */}
      <section className="w-full min-h-screen">
        <Hero/>
      </section>
      {/* SERVICES SECTION */}
      <AnimatedSection className="container flex flex-col items-start px-4 gap-10 
      w-full min-h-screen">
        <div className='flex flex-col items-start gap-2'>
            <h2 className='md:text-2xl text-xl text-secondary font-bold'>
                WHAT WE SERVE
            </h2>
            <h1 className='md:text-4xl text-2xl text-black font-bold 
            text-right font-roboto ml-5'>
                TOP VALUES
                <br/>
                FOR YOU!
            </h1>
        </div>
        <Services/>
      </AnimatedSection>

      {/* PACKAGES SECTION */}
      <AnimatedSection className=" mt-20 mb-12 px-4 w-full 
      min-h-screen bg-package-bg bg-cover bg-no-repeat">
        <div className="container w-full flex flex-col items-center
        gap-10 md:p-2 p-6 justify-center">
          {/* TITLE */}
          <div className='flex flex-col items-center gap-2'>
            <h2 className='md:text-2xl text-xl text-red-500 font-bold'>
              Our Tour Packages
            </h2>
            <h1 className='md:text-4xl text-2xl text-white font-extrabold font-roboto text-center'>
                Visit Popular Destinations <br className="md:flex hidden"/> in the World
            </h1>
          </div>
          {/* PACKAGES */}
          <Packages data={packagesPost}/>

          <Link href={'/packages'}
          className="py-2 px-6 text-white text-sm bg-red-700 rounded-sm">
            View more
          </Link>
        </div>
      </AnimatedSection>

      {/* ABOUT US */}  
      <AnimatedSection className="container mt-28 mb-12 px-4 w-full 
      min-h-screen">
        <div className="about-container w-full flex items-center justify-between 
        md:p-2 gap-5 md:flex-row flex-col">
          {/* LEFT ITEM */}
          <div className="w-full relative flex">
            <Image src={aboutImg1} alt="About Estacy Image1"
            className="w-full h-[600px] object-cover rounded-[50px] md:ml-[100px]
            ml-[50px]"/>
            <div className="w-[200px] h-[250px] absolute top-0 left-0 
            bg-primary md:p-[40px] p-[30px] rounded-[80px]">
              <Image src={aboutImg2} alt="About Estacy Image2"
              className="w-full h-full rounded-[80px]"/>
            </div>
            <div className="w-[270px] h-fit rounded-3xl flex items-center gap-2
            absolute bottom-10 left-0 shadow-shadow-dark bg-primary p-3">
              <Image src={aboutImg3} className="w-[80px] h-[80px]"/>
              <h3 className="text-sm text-black font-bold">
                We have more than 10 years experience
              </h3>
            </div>
          </div>

          {/* RIGHT ITEM */}
          <div className="w-full md:px-6 px-2 py-3 flex flex-col items-start 
          gap-4">
            <h3 className="md:text-2xl text-xl text-secondary">
              GET TO KNOW US
            </h3>
            <h1 className="md:text-3xl text-xl text-black font-bold">
              Plan Your Next Trip with Estacy Travels
            </h1>
            <p className="text-sm text-gray-700 text-left">
              We are a highly trained and experienced team fully 
              committed to your travel needs. Your perfect travel 
              experience from pre sales to after all services has been
              rendered by us or our partners and vendors is our success story.
            </p>
            <h2 className="md:text-2xl text-lg text-secondary mt-4 mb-4">
              An Excellent Opportunity to Travel and Experience Adventure
            </h2>
            <div className="w-full flex flex-col items-start gap-3">

              <div className="relative flex items-center gap-3">
                <span className="w-[1rem] h-[1rem] content-[''] rounded-full bg-secondary"></span>
                <span className="text-sm text-black font-bold">
                  Experience & Expertise
                </span>
              </div>
              <div className="relative flex items-center gap-3">
                <span className="w-[1rem] h-[1rem] content-[''] rounded-full bg-secondary"></span>
                <span className="text-sm text-black font-bold">
                  Excellent Customer Service
                </span>
              </div>
              <div className="relative flex items-center gap-3">
                <span className="w-[1rem] h-[1rem] content-[''] rounded-full bg-secondary"></span>
                <span className="text-sm text-black font-bold">
                  High Success Story
                </span>
              </div>
              <div className="relative flex items-center gap-3">
                <span className="w-[1rem] h-[1rem] content-[''] rounded-full bg-secondary"></span>
                <span className="text-sm text-black font-bold">
                  Competitive Pricing
                </span>
              </div>
              <div className="relative flex items-center gap-3">
                <span className="w-[1rem] h-[1rem] content-[''] rounded-full bg-secondary"></span>
                <span className="text-sm text-black font-bold">
                  Free Eligibility & Visa Counsel
                </span>
              </div>

            </div>
            <Link href={'/about'}
            className="md:py-5 py-3 md:px-7 px-5 mt-6 text-white bg-secondary
             rounded-md shadow-shadow-dark hover:shadow-none transition-all 
             duration-300 ease-in-out">
              Discover more
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* HOTELS */}
      {
        hotelsPost?.length > 0 &&
        <AnimatedSection className="mt-28 mb-12 px-4 w-full 
        min-h-screen bg-hotel-bg bg-cover bg-no-repeat">
          <div className="container w-full flex flex-col items-center gap-7 p-4">
            {/* TITLE */}
            <h1 className='md:text-4xl text-2xl text-white font-extrabold 
            font-roboto text-center uppercase'>
                Hotels
            </h1>

            {/* HOTELS */}
            <Hotels data={hotelsPost}/>

            <Link href={'/hotels'}
            className="py-2 px-6 text-white text-sm bg-red-700 rounded-sm">
              View more
            </Link>
          </div>
        </AnimatedSection>
      }

      {/* DESTINATIONS */}
      <AnimatedSection className="container mt-28 mb-12 md:mx-auto mx-4 w-full 
      flex items-center justify-center">
        <div className="w-full flex items-center md:justify-between md:flex-row 
        flex-col md:gap-2 gap-6 overflow-hidden md:px-3 px-8 md:py-2 py-5">
          {/* LEFT ITEM */}
          <div className="flex flex-col items-start gap-5 md:w-[350px] w-full">
            <h3 className="md:text-2xl text-xl text-secondary uppercase">
              DESTINATION LIST
            </h3>
            <h1 className="md:text-3xl text-xl text-black font-roboto font-bold">
              Explore the Beautiful Places Around World
            </h1>
            <p className="text-sm text-left text-gray-700">
              Discover breathtaking destinations worldwide. Uncover 
              hidden gems, iconic landmarks, and beautiful places 
              that promise unforgettable experiences.
            </p>
            <Link href={'/packages'}
            className="relative md:py-5 py-3 md:px-7 px-5 mt-6 text-white bg-secondary
             rounded-md shadow-shadow-dark hover:shadow-none transition-all 
             duration-300 ease-in-out">
              Discover more
            </Link>
          </div>
          {/* RIGHT ITEM */}
          <div className="relative md:w-[500px] w-full flex-1 md:px-14">
            <Destinations/>
          </div>
        </div>
      </AnimatedSection>

      {/* BIRTH SERVICES SECTION */}
      <AnimatedSection className="mt-28 mb-12 px-4 w-full 
      min-h-screen bg-birth-bg bg-cover bg-no-repeat">
        <div className="container w-full flex flex-col items-center gap-16 p-5">
          <div className='flex flex-col items-center gap-2'>
            <h2 className='md:text-4xl text-xl text-white font-bold uppercase'>
              BIRTH SERVICES
            </h2>
            <h1 className='md:text-xl text-sm text-white font-bold text-center 
            font-roboto '>
                We’re here to offer seamless, affordable, stress-free,
                <br className="md:block hidden"/> pre- and post-natal care overseas
            </h1>
          </div>
          <div className="birth-services w-full flex items-center justify-center 
          gap-8 md:flex-row flex-col">
            <div className="w-fit flex flex-col items-start gap-4">
              <h1 className="md:text-4xl text-2xl text-left text-white font-bold">
                Comprehensive Prenatal, Birth, and Postnatal Care
              </h1>
              <p className="md:text-lg text-sm text-gray-300 font-poppins">
                Estacy Travels specializes in organizing and facilitating 
                birthing experiences abroad. Our services are designed 
                to cater to the unique needs of expecting parents, ensuring 
                a smooth and stress-free journey from start to finish.
                <br/>
                Whether it’s your medical history, desired destination, 
                budget, or any special needs, we cover all bases to create 
                a customized plan just for you.
              </p>
              <Link href={'/services/birth-services'}
              className=" py-5 px-7 mt-6 text-white bg-secondary
              rounded-md shadow-shadow-light hover:shadow-none transition-all 
              duration-300 ease-in-out">
                Read more
              </Link>
            </div>
            <Image src={birthImg} width={600} height={300} 
            alt="Estacy Travels Birthing in Abroad"
            className="w-[600px] h-full object-cover"/>
          </div>
        </div>
      </AnimatedSection>

      {/* GALLERY */}
      <AnimatedSection className="mt-28 mb-12 px-4 w-full 
       p-6 flex flex-col items-center gap-8">
        <h1 className="text-2xl text-secondary font-bold font-roboto uppercase">
          Our Gallery
        </h1>
        <Gallery/>
      </AnimatedSection>

      {/* BLOG */}
      <AnimatedSection className="mt-28 mb-12 px-4 w-full 
       p-6 flex flex-col items-center gap-8">
        <div className='flex flex-col items-center gap-2'>
            <h2 className="md:text-2xl text-lg text-secondary 
            font-roboto font-extrabold uppercase">
              Our Blog
            </h2>
            <h1 className='md:text-4xl text-2xl text-black font-bold text-center 
            font-roboto'>
                Stay Update with Estacy Travels
            </h1>
        </div>
        {/* BLOG CARD */}
        <Blog blogPosts={blogPosts}/>
        <Link href={'/blog'}
          className="py-2 px-6 text-white text-sm bg-red-700 rounded-sm">
            View more
          </Link>
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <AnimatedSection className="container mt-28 mb-12 px-4 w-full 
       p-6 flex flex-col items-center gap-8 min-h-[80vh]">
        <div className='flex flex-col items-center gap-2'>
            <h2 className="md:text-2xl text-lg text-secondary 
            font-roboto font-extrabold uppercase">
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
      </AnimatedSection>

      {/* SPECIAL OFFERS */}
      <Offers/>

    </Container>
  );
}
