import refererImg from '@images/estacy-refer.png'
import loyaltyImg from '@images/loyalty.png'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '../animation/AnimateSection'


const Offers = () => {
  return (
    <AnimatedSection className="relative mt-20 mb-32 px-4 w-full min-h-[60vh] 
    bg-gradient-to-r from-secondary to-secondaryLight flex items-center 
    justify-center overflow-hidden"
    style={{marginBottom:'3rem'}}>

        <div className="w-full container flex flex-col items-center gap-8">
            <h2 className="md:text-2xl text-lg text-white 
            font-roboto font-extrabold">
                Our Special Offers
            </h2>

            <div className="md:mx-auto mx-4 w-full grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-3 gap-8">

                {/* REFER IMAGE */}
                <Link href={'/'} className="w-full h-[200px] shadow-xl">
                    <Image src={refererImg} width={200} height={200}
                    alt="Estacy Refer and Earn"
                    className="w-full h-[200px]"/>
                </Link>

                {/* SUBSCRIBE FORM */}
                <div className="w-full h-[200px] relative bg-newsletter-bg shadow-lg">
                    <div className="absolute top-0 left-0 w-full flex flex-col 
                    justify-between py-10 px-3 h-full">
                        <h2 className="text-lg text-white font-bold font-poppins text-center 
                        uppercase">
                            SUBSCRIBE TO OUR NEWSLETTER AND JOIN 15,000 + SUBSCRIBERS
                        </h2>
                        <form className="w-full flex items-center gap-0">
                            <input type="email" name="email" placeholder="Enter your email" 
                            className="flex-1 outline-none p-2 h-[40px] bg-white text-black 
                            text-xs border-[1px] border-gray-300 rounded-sm"/>
                            <button className="p-2 h-[40px] text-white bg-secondary rounded-sm 
                            text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* LOYALTY */}
                <Link href={'/'} className="w-full h-[200px] shadow-lg">
                    <Image src={loyaltyImg} width={300} height={300}
                    alt="Estacy Refer and Earn"
                    className="w-full h-[200px]"/>
                </Link>
            </div>
        </div>
    </AnimatedSection>
  )
}

export default Offers