import Link from "next/link"


export const Button = ({text, className, ...props})=>{
    return(
        <button
        className={`${className} relative py-2 px-8 text-secondary text-base font-bold 
        nded-full overflow-hidden bg-white rounded-full transition-all 
        duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white 
        hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full 
        before:w-full before:h-full before:bg-gradient-to-r before:from-secondary 
        before:to-secondaryLight before:transition-all before:duration-500 before:ease-in-out 
        before:z-[-1] before:rounded-full hover:before:left-0`}
        {...props}
        >
            {text}
        </button>

    )
}

export const ButtonLink = ({text, className, ...props})=>{
    return(
        <Link
        className={`${className} relative py-2 px-8 text-secondary text-base font-bold 
        nded-full overflow-hidden bg-white rounded-full transition-all 
        duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white 
        hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full 
        before:w-full before:h-full before:bg-gradient-to-r before:from-secondary 
        before:to-secondaryLight before:transition-all before:duration-500 before:ease-in-out 
        before:z-[-1] before:rounded-full hover:before:left-0`}
        {...props}
        >
            {text}
        </Link>

    )
}
