import { client } from 'app/utils/configSanity'
import { imageUrl } from 'app/utils/sanityImage'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'


const Blog = async ({blogPosts}) => {

  return (
    <div className="container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-3 gap-8">
        {blogPosts?.map((item, i)=>(
            <div key={i}
            className="w-full relative flex items-center justify-center p-1 
            bg-white shadow-shadow-dark rounded-md overflow-hidden h-[400px]">
                <Image src={imageUrl(item?.image?.asset)} 
                width={300} height={300}
                alt={item?.title}
                className="w-full h-full rounded-sm object-cover transition-all
                transform duration-300 ease-in-out hover:scale-105"/>
                <div className="w-full absolute left-0 bottom-0">
                    <div className="w-full flex flex-col p-2 items-start gap-1 
                    bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.04)]">
                        <time className="text-sm text-white font-roboto">
                            {moment(item?.publishedAt).format('DD MMMM YYYY h:mm A')}
                        </time>
                        <Link href={`/blog/${item?.slug?.current}`}
                        className="text-white text-xl font-bold font-poppins leading-6">
                            {item?.title}
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Blog