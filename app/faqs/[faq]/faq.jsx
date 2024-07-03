'use client'

import React, { useState } from 'react'
import Accordion from 'app/componets/accordion/Accordion';

const Faqs = ({faqs}) =>{
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <div className='w-full flex flex-col items-center gap-4 bg-white 
        p-3 shadow-shadow-dark rounded-md'>
            {
                faqs.faqs.map((faq, i)=>(
                    <Accordion key={i}
                    question={faq.question} 
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onClick={()=>handleClick(i)}/>
                ))
            }
        </div>
    )
}

export default Faqs