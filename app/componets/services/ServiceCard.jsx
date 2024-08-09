

import Image from "next/image"
import {ButtonLink} from "../ui/Button"

const loaderProp =({ src }) => {
    return src;
}

const ServiceCard = ({name, image, link}) => {

  return (
    <div className="w-full h-[250px] rounded-md overflow-hidden relative 
     shadow-shadow-dark">
        <Image src={image} className="w-full h-full object-cover transition-all 
        transform duration-300 ease-in-out hover:scale-105" 
        alt={name} loader={loaderProp}
        />
        <div className="absolute left-0 bottom-0 w-full h-fit bg-gradient-to-t 
        from-[rgba(0,0,0,0.63)] to-[rgba(255,255,255,0.04)] flex flex-col
        gap-1 items-center justify-center p-2">
            <h2 className="text-2xl text-white font-poppins font-bold">
                {name}
            </h2>
            <ButtonLink text="Learn more" href={`/services/${link}`}/>
        </div>
    </div>
  )
}

export default ServiceCard
