import serviceIcon from '@images/service-icon.png'
import Image from 'next/image'

const SectionHeader = ({title, children, blog}) => {
  return (
    <div className="w-full h-[300px] bg-section-bg bg-no-repeat bg-cover
    flex flex-col gap-4 items-center justify-center bg-center">
        {
          blog ? 
          <h1 className='text-white md:text-2xl text-lg font-extrabold font-anton text-center'>
              {title}
          </h1>
          :
          <h1 className='text-white md:text-5xl text-2xl font-extrabold font-anton text-center'>
              {title}
          </h1>
        }
        <Image src={serviceIcon} width={200} height={200} alt='Services Icon'
        />
        {children}
    </div>
  )
}

export default SectionHeader