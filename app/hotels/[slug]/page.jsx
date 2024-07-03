
import Container from 'app/componets/Container'
import Carousel from 'app/componets/packages/Carousel'
import Image from 'next/image'
import Link from 'next/link';
import BookingForm from 'app/forms/BookingForm';
import { FaStar } from 'react-icons/fa';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import HotelCategories from 'app/componets/categories/HotelCategories';
import { client } from 'app/utils/configSanity'
import { imageUrl } from 'app/utils/sanityImage';
import PortableText from 'app/componets/portableText/PortableText';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export async function generateMetadata({params:{slug}}){
    const decodedSlug = decodeURIComponent(slug)
    const hotels = await client.fetch(`*[_type == 'hotels' && slug.current == '${decodedSlug}'][0]`)
    return {
        title: `${hotels?.title} - Estacy Travels`
    }
}



export default async function page({params:{slug}}){
    const decodedSlug = decodeURIComponent(slug)
    const hotels = await client.fetch(`*[_type == 'hotels' && slug.current == '${decodedSlug}'][0]`)

    const relatedHotels = await client.fetch(`*[_type == 'hotels' && slug.current != '${decodedSlug}' && _id != '${hotels?._id}']{
        title,
        image,
        slug
    }`);
  return (
    <Container>
        <ToastContainer/>
        <Carousel>
            <div className='w-full h-full flex flex-col items-center j
            ustify-center p-9 gap-5'>
                {/* RATING AND CATEGORY */}
                <div className='w-full flex items-start justify-between gap-2'>
                    <div className='flex items-center gap-1'>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                    </div>
                </div>
                {/* TITLE */}
                <h1 className='text-5xl text-white font-anton font-bold uppercase'>
                    {hotels?.title}
                </h1>

                <div className='w-full flex items-center justify-center md:gap-9 gap-4'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn  size={20} className='md:text-ld text-sm 
                        text-gray-200 font-bold font-anton'/>
                        <span className='md:text-xl text-sm text-white font-bold'>
                            {hotels?.location}
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiClock2 size={20} className='md:text-ld text-sm 
                        text-gray-200 font-bold font-anton'/>
                        <span className='md:text-xl text-sm text-white font-bold'>
                            {hotels?.size}
                        </span>
                    </div>
                    <span className='md:text-4xl text-2xl text-white 
                    font-anton font-extrabold'>
                        {hotels?.price}
                    </span>
                </div>
            </div>
        </Carousel>
        <section className='container min-h-screen mt-10 mb-10 md:p-0 p-3 flex flex-col 
        md:gap-14 gap-6 relative items-center justify-center'
        style={{marginBottom: '3rem', marginTop: '3rem'}}>

            <div className='viewport flex items-start md:justify-between justify-center md:gap-14 
            gap-6 md:flex-row flex-col relative'>

                {/* HOTEL INFORMATION */}
                <div className='w-full p-3 bg-white shadow-shadow-dark'>
                    <div className='w-full flex flex-col items-start gap-4'>
                        <Image src={imageUrl(item?.image?.asset)} 
                        width={500} height={300}
                        alt={hotels?.title}
                        className='w-full h-[500px] object-fill rounded-md'/>
                        <PortableText value={hotels?.description}/>
                    </div>
                </div>

                <div className='md:w-[550px] w-full flex flex-col gap-3'>
                    {/* BOOKING FORM */}
                    <div className='w-full flex flex-col gap-3 
                    bg-white p-3 shadow-shadow-dark rounded-md'>
                        <h2 className='text-2xl font-anton font-bold uppercase'>
                            Book this Hotel
                        </h2>
                        <BookingForm tour={hotels?.title} label={'Hotel'}/>
                    </div>
                    {/* CATEGORIES */}
                    <HotelCategories data={relatedHotels}/>
                </div>
            </div>

            {/* CONTACT */}
            <div className='md:w-[600px] w-full md:h-[200px] p-8 flex flex-col items-center 
            justify-center gap-5 bg-secondaryLight rounded-lg shadow-shadow-dark'>
                <h4 className='md:text-3xl text-lg text-white font-bold'>
                    For Futher Enquiries Contact Us
                </h4>
                <Link href={'/contact'}
                className='py-3 px-6 rounded-sm bg-secondary text-white font-bold
                shadow-shadow-dark hover:opacity-80 transition-all duration-300 ease-in-out'>
                    Contact Us
                </Link>
            </div>
        </section>

    </Container>
  )
}

