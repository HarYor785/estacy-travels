import React, { useState } from "react";
import parse from 'html-react-parser';
import { FaPlus, FaMinus } from "react-icons/fa6";

const HtmlContent = ({ html }) => {
  return <div className='p-2'>{parse(html)}</div>;
};

const Accordion = ({ question, answer, isOpen, onClick }) => {


  return (
    <div className="w-full border-b border-gray-200 rounded-md overflow-hidden">
      <h2
        className="p-4 cursor-pointer bg-secondary text-white
        flex items-center justify-between"
        onClick={onClick}
      >
        {question}
        {
            isOpen ? <FaMinus size={15} className=" text-white"/>
            : <FaPlus size={15} className=" text-white"/>
        }
      </h2>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-fit p-2" : "max-h-0 p-0"
        }`}
      >
        <HtmlContent html={answer}/>
      </div>
    </div>
  );
};


export default Accordion