
import Container from 'app/componets/Container'
import Carousel from 'app/componets/packages/Carousel'
import Image from 'next/image'
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { CiClock2, CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { LuPackageOpen } from "react-icons/lu";
import { IoBoatOutline } from "react-icons/io5";
import BookingForm from 'app/forms/BookingForm';
import PackageCategories from 'app/componets/categories/PackageCategories';
import { client } from 'app/utils/configSanity';
import { imageUrl } from 'app/utils/sanityImage';
import PortableText from 'app/componets/portableText/PortableText';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import vacationImg1 from '@images/vacation-img1.png'


export async function generateMetadata({params:{slug}}){
    const decodedSlug = decodeURIComponent(slug)
    const packages = await client.fetch(`*[_type == 'packages' && slug.current == '${decodedSlug}'][0]`)
    return {
        title: `${packages?.title} - Estacy Travels`
    }
}

export default async function page({params:{slug}}){
    const decodedSlug = decodeURIComponent(slug)
    const packages = await client.fetch(`*[_type == 'packages' && slug.current == '${decodedSlug}'][0]`)

    const relatedPackages = await client.fetch(`*[_type == 'packages' && slug.current != '${decodedSlug}' && _id != '${packages?._id}']{
        title,
        shortDescription,
        image,
        slug
    }`);


    return (
    <Container>
        <ToastContainer/>
        <Carousel>
            <div className='w-full h-full flex flex-col items-center justify-center p-9 gap-5'>
                {/* RATING AND CATEGORY */}
                <div className='w-full flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-1'>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                        <FaStar size={17} className=' text-yellow-500'/>
                    </div>
                    <span className='text-sm text-red-600 font-bold italic'>
                        {packages?.category}
                    </span>
                </div>
                {/* TITLE */}
                <h1 className='text-5xl text-white font-anton font-bold uppercase'>
                    {packages?.title}
                </h1>
                <div className='w-full flex items-center justify-center md:gap-9 gap-4'>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn  size={20} className='md:text-ld text-sm 
                        text-gray-200 font-bold font-anton'/>
                        <span className='md:text-xl text-sm text-white font-bold'>
                            {packages?.location}
                        </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiCalendarDate  size={20} className='md:text-ld text-sm 
                        text-gray-200 font-bold font-anton'/>
                        <span className='md:text-xl text-sm text-white font-bold'>
                            {packages?.date}
                        </span>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center md:gap-9 gap-4'>
                    <div className='flex items-center gap-2'>
                        <CiClock2 size={20} className='md:text-ld text-sm 
                        text-gray-200 font-bold font-anton'/>
                        <span className='md:text-xl text-sm text-white font-bold'>
                            {packages?.days}
                        </span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className='flex items-center gap-1 md:text-4xl text-2xl text-white 
                        font-anton font-extrabold'>
                            ₦{packages?.price}/<small className='text-sm text-gray-100 uppercase'>
                            {packages?.priceState}
                            </small>
                        </span>
                        {
                            packages?.perChild &&
                            <span className='flex items-center gap-1 md:text-4xl text-2xl text-white 
                            font-anton font-extrabold'>
                                {packages?.perChild}
                            </span>
                        }
                    </div>
                </div>
            </div>
        </Carousel>
        <section className='container min-h-screen mt-10 mb-10 md:p-0 p-3 flex flex-col 
        md:gap-14 gap-6 relative items-center justify-center'
        style={{marginBottom: '3rem', marginTop: '3rem'}}>

            <div className='viewport flex items-start md:justify-between justify-center md:gap-14 
            gap-6 md:flex-row flex-col relative'>
                {/* PACKAGE INFORMATION */}
                <div className='w-full p-3 bg-white shadow-shadow-dark'>
                    <div className='w-full flex flex-col items-start gap-4'>
                        <Image src={imageUrl(packages?.image?.asset)} 
                        width={500} height={300}
                        alt={packages?.title}
                        className='w-full h-[500px] object-fill rounded-md'/>
                        <p className='p-1 text-sm text-gray-700 font-poppins'>
                            {packages?.shortDescription}
                        </p>
                        {/* DESCRIPTION */}
                        <PortableText value={packages?.description}/>
                        {/* PACKAGES AND TOUR INCLUDE */}
                        <div className='w-full flex md:flex-row flex-col items-start 
                        justify-between gap-2 mt-4'>
                            {
                                packages?.package && 
                                <div className='flex flex-col gap-3 items-start'>
                                    <h3 className='text-black md:text-xl text-lg font-bold font-anton'>
                                        Package Include
                                    </h3>
                                    {
                                        packages?.package?.map((item, i)=>(
                                            <div className='flex items-center gap-4' key={i}>
                                                <LuPackageOpen className='text-xl text-red-600'/>
                                                <span className='text-sm text-gray-700 font-roboto'>
                                                    {item}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                            {
                                packages?.tour && 
                                <div className='flex flex-col gap-3 items-start'>
                                    <h3 className='text-black md:text-xl text-lg font-bold font-anton'>
                                        Tour Include
                                    </h3>
                                    {
                                        packages?.tour?.map((item, i)=>(
                                            <div className='flex items-center gap-4' key={i}>
                                                <IoBoatOutline className='text-xl text-green-600'/>
                                                <span className='text-sm text-gray-700 font-roboto'>
                                                    {item}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
                {/* FORM AND CATEGORIES */}
                <div className='md:w-[550px] w-full flex flex-col gap-4'>
                    {/* BOOKING FORM */}
                    <div className='w-full flex flex-col gap-4 
                    bg-white p-3 shadow-shadow-dark rounded-md'>
                        <h2 className='text-2xl font-anton font-bold uppercase'>
                            Book this Tour
                        </h2>
                        <BookingForm tour={packages?.title} label={'Tour'}/>
                    </div>
                    {/* OTHER PACKAGES */}
                    <PackageCategories data={relatedPackages}/>
                    <div className='flex flex-col gap-4 items-start bg-white p-3 shadow-shadow-dark 
                    rounded-md'>
                        <Link href="/packages" className="w-full h-fit">
                            <Image src={vacationImg1} width={300} height={300}
                            className="w-full h-fit"/>
                        </Link>
                    </div>
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

