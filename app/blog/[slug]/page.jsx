
import Container from 'app/componets/Container'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import SectionHeader from 'app/componets/sectionHeader/SectionHeader';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import user from '@images/user.png'
import Offers from 'app/componets/offers/Offers';
import { client } from 'app/utils/configSanity';
import moment from 'moment'
import { imageUrl } from 'app/utils/sanityImage';
import PortableText from 'app/componets/portableText/PortableText';
import vacationImg2 from '@images/vacation-img2.png'


export async function generateMetadata({params:{slug}}){
    const decodedSlug = decodeURIComponent(slug);
    const blogPosts = await client.fetch(`*[_type == 'blog' && slug.current == '${decodedSlug}'][0]`)
    return {
        title: `${blogPosts?.title} - Estacy Travels`
    }
}

export const revalidate = 0

export default async function page({params:{slug}}){

    const decodedSlug = decodeURIComponent(slug);
    const blogPosts = await client.fetch(`*[_type == 'blog' && slug.current == '${decodedSlug}'][0]{
        title,
        category,
        image,
        publishedAt,
        shortDescription,
        body,
        author->{
        _id,
        name,
        }
    }`)
    const relatedPosts = await client.fetch(`*[_type == 'blog' && slug.current != '${decodedSlug}' && _id != '${blogPosts?._id}']{
        title,
        category,
        image,
        publishedAt,
        slug
    }`);

  return (
    <Container>
        <SectionHeader title={blogPosts?.title} blog={true}>
            <div className='flex  items-center gap-3'>
                <Link href={'/'}
                className='text-sm text-gray-300 underline'>
                    Home
                </Link>
                <span className='text-sm text-gray-300'>/</span>
                <Link href={'/blog'}
                className='text-sm text-gray-300 underline'>
                    Blog
                </Link>
            </div>
        </SectionHeader>
        <section className='min-h-screen mb-10 md:p-0 p-3 flex flex-col 
        md:gap-14 gap-6'
        style={{marginBottom: '3rem',marginTop:'3rem'}}>
            <div className='container viewport w-full flex md:flex-row flex-col items-start 
            md:justify-between justify-center md:gap-6 gap-3'>

                <div className='w-full md:p-3 p-2 bg-white rounded-md shadow-shadow-dark
                flex flex-col gap-3 items-start'>
                    <span className='p-1 px-4 text-xs text-center text-white bg-red-600 
                    font-bold'>
                        {blogPosts?.category}
                    </span>
                    <h1 className='md:text-3xl text-xl text-black font-bold font-anton'>
                        {blogPosts?.title}
                    </h1>
                    <div className='w-full flex items-center gap-3'>
                        <div className='flex items-center gap-2'>
                            <Image src={blogPosts?.author?.image?.asset?.url ?? user} 
                            alt={blogPosts?.author?.name}
                            width={40} height={40}
                            className='w-[30px] h-[30px] rounded-full'/>
                            <span className='md:text-sm text-xs text-gray-400'>
                                By <b className=' text-gray-700'>{blogPosts?.author?.name}</b>
                            </span>
                        </div>
                        <span className='text-sm text-gray-300'>
                            -
                        </span>
                        <span className='md:text-sm text-xs text-gray-400'>
                            {moment(blogPosts?.publishedAt).format('DD MMMM YYYY, h:mm A')}
                        </span>
                    </div>
                    {/* BLOG IMAGE */}
                    <Image src={imageUrl(blogPosts?.image?.asset)} 
                    alt={blogPosts?.title}
                    width={500} height={500}
                    className='w-full md:h-[500px] h-[400px] md:object-cover object-fill 
                    rounded-sm'/>
                    {/* BLOG SHORT DESCRIPTION */}
                    <p className='mt-2 mb-2 md:text-sm text-xs text-gray-600 font-poppins'>
                        {blogPosts?.shortDescription}
                    </p>
                    {/* BLOG MAIN DESCRIPTION */}
                    <PortableText value={blogPosts?.body}/>
                </div>

                {/* SEARCH AND CATEGORIES */}
                <div className='md:w-[500px] w-full flex flex-col gap-8'>
                    <div className='flex flex-col gap-4 items-start bg-white p-3 shadow-shadow-dark 
                    rounded-md'>
                        <Link href="/packages" className="w-full h-fit">
                            <Image src={vacationImg2} width={300} height={300}
                            className="w-full h-fit"/>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4 items-start bg-white p-3 shadow-shadow-dark 
                    rounded-md'>
                        <h2 className='text-2xl text-black font-poppins'>
                            Recent Posts
                        </h2>
                        <hr className='w-full'/>
                        {/* OTHER RELATED POSTS */}
                        <div className='w-full flex flex-col items-center gap-3'>
                            {
                                relatedPosts?.map((item, i)=>(
                                    <div key={i} className='w-full flex items-start gap-3'>
                                        <Image src={imageUrl(item?.image?.asset)}
                                        alt={item?.title}
                                        width={80} height={80}
                                        className='w-[80px] h-[80px] object-cover rounded-md'/>
                                        <div className='w-full flex flex-col items-start gap-2'>
                                            <div className='w-full flex items-center gap-4'>
                                                <div className='flex items-center gap-2'>
                                                    <MdAccessTimeFilled size={15} className='text-gray-400'/>
                                                    <span className='text-xs text-gray-400'>
                                                        {moment(item?.publishedAt).format('DD MMMM YYYY')}
                                                    </span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <FaTags size={15} className='text-gray-400'/>
                                                    <span className='text-xs text-gray-400'>
                                                        {item?.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <Link href={`/blog/${item?.slug?.current}`}
                                            className='text-black text-[0.85rem] font-bold'>
                                                {item?.title}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Offers/>
        </section>
    </Container>
  )
}
