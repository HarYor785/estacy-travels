import Container from 'app/componets/Container'
import Offers from 'app/componets/offers/Offers';
import SectionHeader from 'app/componets/sectionHeader/SectionHeader'
import ContactForm from 'app/forms/ContactForm';
import { faqsArray } from 'app/lib/faqsArray';
import Link from 'next/link'
import Faqs from './faq';


export  function generateMetadata({params:{faq}}){
    const decodedSlug = decodeURIComponent(faq)
    return {
        title: `${decodedSlug} - Estacy Travels`
    }
}


const generateUrlParam = (title) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

export default function page({params}){
    const faqs = faqsArray.find((faq) => generateUrlParam(faq.topic) === params.faq);

  return (
    <Container>
        <SectionHeader title={faqs?.topic}>
            <div className='flex  items-center gap-3'>
                <Link href={'/'}
                className='text-sm text-gray-300 underline'>
                    Home
                </Link>
                <span className='text-sm text-gray-300'>/</span>
                <Link href={'/faqs'}
                className='text-sm text-gray-300 underline'>
                    FAQs
                </Link>
            </div>
        </SectionHeader>
        <section className='w-full mt-12 p-2 mb-16'
        style={{marginBottom:'3rem'}}>
            <div className='container w-full flex md:flex-row flex-col md:justify-between 
            justify-center gap-4'>
                {/* FAQS */}
                
                <Faqs faqs={faqs}/>
                <div className='md:w-[500px] w-full h-fit flex flex-col items-start gap-6 
                bg-white shadow-shadow-dark p-3 rounded-md'>
                    <h3 className='md:text-2xl text-lg font-bold font-anton
                     text-secondary'>
                        Keep in touch with us
                    </h3>
                    <ContactForm/>
                </div>
            </div>
        </section>

        {/* OFFERS */}
        <Offers/>
    </Container>
  )
}
