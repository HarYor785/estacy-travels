'use client'

import React, { useState } from 'react'
import Pagination from '../pagination/Pagination';
import { blogs } from 'app/lib/blogArray';
import Image from 'next/image'
import Link from 'next/link';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { imageUrl } from 'app/utils/sanityImage';
import moment from 'moment';
import vacationImg2 from '@images/vacation-img2.png'

const PER_PAGE = 15;



const BlogPage = ({posts}) => {
    
    const [data, setData] = useState(posts?.slice(0, PER_PAGE));
    const [value, setValue] = useState('')
    const total = posts?.length;

    const handlePageChange = (page) => {
        const start = (page - 1) * PER_PAGE;
        const paginatedData = posts?.slice(start, start + PER_PAGE);
        setData(paginatedData);
    };

    const generateUrlParam = (title) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };

    const filteredBlog = data?.filter((item)=>{
        return item.title.toLowerCase().includes(value.toLowerCase())
    })

  return (
    <div className='container viewport w-full flex md:flex-row flex-col items-start 
        md:justify-between justify-center md:gap-6 gap-3'>
            {/* BLOG POSTS */}
            <div className='w-full flex flex-col items-center gap-6'>
                    {/*BLOG POSTS  */}
                <div className='w-full flex-col items-center gap-5 bg-white p-2 
                shadow-shadow-dark'>
                    {
                        filteredBlog?.map((item, i)=>(
                            <div key={i} 
                            className='w-full flex md:flex-row flex-col items-start gap-7 p-2 
                            hover:bg-primary transition-all duration-300 ease-in-out'>
                                <Link href={`/blog/${item?.slug?.current}`}
                                className='md:w-[400px] w-full h-[300px]'>
                                    <Image src={imageUrl(item?.image?.asset)}
                                    alt={item?.title}
                                    width={300} height={300}
                                    className='w-full h-full min-w-full rounded-md object-cover transition-all
                                        duration-300 ease-in-out hover:scale-105'/>
                                </Link>
                                <div className='w-full flex flex-col items-start gap-4'>
                                    <span className='p-1 px-4 text-xs text-center text-white bg-red-600 
                                    font-bold'>
                                        {item?.category}
                                    </span>
                                    <Link href={`/blog/${item?.slug?.current}`}
                                    className='md:text-2xl text-xl text-black font-bold font-roboto'>
                                        {item?.title}
                                    </Link>
                                    <div className='flex items-center gap-2'>
                                        <MdAccessTimeFilled size={20} className='text-gray-500'/>
                                        <span className='md:text-sm text-xs text-gray-500 font-poppins'>
                                            {moment(item?.publishedAt).format('DD MMMM YYYY h:mm A')}
                                        </span>
                                    </div>
                                    <p className='md:text-sm text-xs text-gray-600 font-poppins'>
                                        {item?.shortDescription.slice(0,200)}
                                    </p>
                                    <Link href={`/blog/${item?.slug?.current}`}
                                    className='py-3 px-7 text-sm text-white font-bold bg-secondary
                                    rounded shadow-shadow-dark transition-all duration-300 ease-in-out 
                                    hover:opacity-80'>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* PAGINATION */}
                <Pagination total={total} perPage={PER_PAGE} onPageChange={handlePageChange} />
            </div>
            {/* SEARCH AND CATEGORIES */}
            <div className='md:w-[500px] w-full flex flex-col gap-8'>
                <div className='w-full p-2 bg-white rounded-md shadow-shadow-dark'>
                    <div className='w-full bg-gray-200 flex items-center gap-0 border-2 
                    rounded-[30px] h-[40px]'>
                        <input type='text' name='search'
                        placeholder='Search..'
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        className='p-3 w-full h-full outline-none bg-transparent border-none 
                        text-black text-sm duration-300 placeholder:text-lg placeholder:font-bold'/>
                        <CiSearch className='text-lg p-1 text-gray-500' size={30}/>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-start bg-white p-3 shadow-shadow-dark 
                rounded-md'>
                    <Link href="/packages" className="w-full h-fit">
                        <Image src={vacationImg2} width={300} height={300}
                        className="w-full h-fit"/>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default BlogPage