import Image from 'next/image'
import Link from 'next/link'
import { imageUrl } from 'app/utils/sanityImage';

const PackageCategories = ({data}) => {

  return (
    <div className='p-3 bg-white shadow-shadow-dark w-full flex 
    flex-col items-start gap-6'>
        <h2 className='md:text-xl text-lg font-anton font-bold uppercase'>
            Other Available Tours
        </h2>
        <div className='w-full flex flex-col items-center gap-4'>
            {
                data?.map((item,i)=>(
                    <Link key={i} 
                    href={`/packages/${item?.slug?.current}`}
                    className='w-full flex items-start gap-4 p-1 hover:bg-primary 
                    transition-all duration-300 ease-in-out'>
                        <Image src={imageUrl(item?.image?.asset)} alt={item?.title}
                        width={50} height={50}
                        className='w-[50px] h-[50px]'/>
                        <div className='w-full flex flex-col items-start gap-2'>
                            <h2 className='text-sm text-black font-bold'>
                                {item?.title}
                            </h2>
                            <p className='text-xs text-gray-500'>
                                {item?.shortDescription?.slice(0, 85)+'...'}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default PackageCategories