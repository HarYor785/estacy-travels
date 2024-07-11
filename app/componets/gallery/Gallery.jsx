import Image from 'next/image'
import tour1 from '@images/tour1.png'
import tour2 from '@images/tour2.png'
import tour3 from '@images/tour3.png'

const Gallery = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-3 p-0">
            <div className="w-full h-full overflow-hidden p-0 m-0">
            <Image src={tour1} className="w-full h-full min-h-[300px] 
            object-cover hover:scale-105
                transition-all transform duration-300 ease-in-out" 
            width={500} height={500}
            alt="Estacy Travels Gallery Image1"/>
            </div>
            <div className="w-full h-full overflow-hidden p-0 m-0">
            <Image src={tour2} className="w-full h-full min-h-[300px] object-cover
                transition-all transform duration-300 ease-in-out hover:scale-105" 
                width={500} height={500}
                alt="Estacy Travels Gallery Image2"/>
            </div>
            <div className="w-full h-full overflow-hidden p-0 m-0">
            <Image src={tour3} className="w-full h-full min-h-[300px] object-cover hover:scale-105
                transition-all transform duration-300 ease-in-out" 
                width={500} height={500}
            alt="Estacy Travels Gallery Image3"/>
            </div>
    </div>
  )
}

export default Gallery