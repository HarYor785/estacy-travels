
import dynamic from 'next/dynamic';
import HeroTabs from './HeroTabs';
import AutoplaySwiper from '../../swipers/AutoplaySwiper'


const Hero = () => {

    return(
        <div className='w-full flex flex-col'>
            <div className='relative w-full'>
                <AutoplaySwiper/>
                <div className='w-full relative md:mt-[-100px] mt-[-170px] z-[100] 
                md:mb-[100px] mb-[50px]'>
                    <HeroTabs/>
                </div>
            </div>
        </div>
    )
}

export default Hero