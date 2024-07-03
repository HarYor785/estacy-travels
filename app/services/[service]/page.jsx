
import Container from 'app/componets/Container'
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import { servicesArray } from 'app/lib/servicesArray';
import Image from 'next/image'
import parse from 'html-react-parser';
import Link from 'next/link';

export  function generateMetadata({params:{service}}){
  const decodedSlug = decodeURIComponent(service)
  return {
      title: `${decodedSlug} - Estacy Travels`
  }
}

const HtmlContent = ({ html }) => {
  return <div className='md:p-6 p-2'>{parse(html)}</div>;
};

const generateUrlParam = (title) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};


export default function page({params}){
    const service = servicesArray.find((serv) => generateUrlParam(serv.title) === params.service);

  return (
    <Container>
        <SectionHeader title={service?.title}>
          <div className='flex  items-center gap-3'>
            <Link href={'/'}
            className='text-sm text-gray-300 underline'>
              Home
            </Link>
            <span className='text-sm text-gray-300'>/</span>
            <Link href={'/services'}
            className='text-sm text-gray-300 underline'>
              Services
            </Link>
          </div>
        </SectionHeader>
        <section className='container w-full flex md:items-start items-center md:flex-row p-2
        flex-col md:justify-between justify-center md:gap-10 gap-4 mt-16 mb-24'
        style={{marginTop: '3rem', marginBottom: '6rem'}}>

          <div className='w-full flex flex-col gap-4 p-3 bg-white shadow-shadow-dark rounded-md'>
            <Image src={service?.img}
            width={300} height={300}
            alt={service?.title}
            className="w-full h-[500px] rounded-md object-cover"/>
            <p className='text-gray-600 text-sm'>
              {service?.shortDesc}
            </p>
            <HtmlContent html={service?.description}/>
          </div>

          <div className='flex flex-col items-center bg-white shadow-shadow-dark 
          rounded-md md:p-4 p-3 gap-4 md:w-[550px] w-full'>
            <h3 className='w-full text-black md:text-xl text-lg font-bold uppercase mb-3 pb-2 
            border-b-[1px] border-gray-400'>
              Other Services
            </h3>
            {
              servicesArray?.map((item, i)=>(
                item?.id !== service?.id && (
                  <Link href={`/services/${generateUrlParam(item?.title)}`} key={i} 
                  className='flex items-center gap-4 p-1 rounded-md cursor-pointer 
                  hover:bg-primary transition-all duration-300 ease-in-out'>
                    <Image src={item?.img} width={80} height={80}
                    alt={item?.title}
                    className='md:w-[80px] md:h-[80px] w-[50px] h-[40px] rounded-md 
                    object-cover'/>
                    <div className='flex flex-col items-start gap-1'>
                      <h3 className='md:text-lg text-sm text-secondary font-bold'>
                        {item?.title}
                      </h3>
                      <p className='md:text-sm text-xs text-gray-600'>
                        {item?.shortDesc.slice(0,80)+'...'}
                      </p>
                    </div>
                  </Link>
                )
              ))
            }
          </div>
        </section>
    </Container>
  )
}
