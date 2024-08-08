'use client'

import axios from 'axios';
import {Button} from '../componets/ui/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const BookingForm = ({tour,label}) => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        mode: 'onChange'
    })

    const onsubmit = async (data)=>{
        setIsLoading(true)
        const {tour, firstName, lastName, email, mobile, details} = data
        const name = label === 'Tour' ? 'Tour Package' : 'Hotel'
        const title = label === 'Tour' ? 'Tour Packages Booking' : 'Hotel Booking'
        const message = `
            ${title}:
            - ${name}: ${tour}
            - Customer's First Name: ${firstName}
            - Customer's Last Name: ${lastName}
            - Customer's Email: ${email}
            - Customer's Phone Number: ${mobile}
            - Addtional Details: ${details}
        `;
    
        const newData = {
            title: title,
            message
        }
    
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_FORMSPREE_BOOKING_MAIL_URL}`, newData)
            if(res?.data?.ok){
                toast.success('Request sent successfully!');
                reset()
            }else{
                toast.error('Failed to send request. Please try again!');
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to send request. Please try again.');
        }finally{
            setIsLoading(false)
        }
    }


  return (
    <form onSubmit={handleSubmit(onsubmit)}
    className='w-full flex flex-col items-center gap-3 p-1'>
        <div className='w-full grid grid-cols-1 md:gap-2 gap-1 md:grid-cols-2 lg:grid-cols-2
            xl:grid-cols-2'>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                    First Name <span className='text-xs text-red-600'>*</span>
                </label>
                <input type="text"
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='First name'
                {...register('firstName',{
                    required: 'Enter your firstname!'
                })}/>
                {errors.firstName && <span className="text-xs text-red-500">
                    {errors?.firstName?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                    Last Name <span className='text-xs text-red-600'>*</span>
                </label>
                <input type="text"
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Last name'
                {...register('lastName',{
                    required: 'Enter your lastname!'
                })}/>
                {errors.lastName && <span className="text-xs text-red-500">
                    {errors?.lastName?.message}  
                </span>}
            </div>
        </div>
        <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
            <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                Mobile Number <span className='text-xs text-red-600'>*</span>
            </label>
            <input type="text"
            className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
            rounded-sm' placeholder='Mobile number'
            {...register('mobile',{
                required: 'Enter your mobile number!'
            })}/>
            {errors.mobile && <span className="text-xs text-red-500">
                {errors?.mobile?.message}  
            </span>}
        </div>
        <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
            <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                Email Address <span className='text-xs text-red-600'>*</span>
            </label>
            <input type="text"
            className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
            rounded-sm' placeholder='Email address'
            {...register('email',{
                required: 'Enter your email address!'
            })}/>
            {errors.email && <span className="text-xs text-red-500">
                {errors?.email?.message}  
            </span>}
        </div>
        <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
            <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                {label}
            </label>
            <input type="text"
            className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
            rounded-sm' placeholder='Tour' value={tour} readOnly
            {...register('tour',{
                required: 'Enter tour package!'
            })}/>
            {errors.tour && <span className="text-xs text-red-500">
                {errors?.tour?.message}  
            </span>}
        </div>
        <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
            <label className='md:text-sm text-xs text-black flex items-start gap-1'>
                Addtional Details
            </label>
            <textarea rows={4}
            className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
            rounded-sm resize-none' placeholder='Additional details'
            {...register('details')}/>
            {errors.details && <span className="text-xs text-red-500">
                {errors?.details?.message}  
            </span>}
        </div>
        <button disabled={isLoading}
        className='w-full py-3 px-6 rounded-sm bg-secondary text-white font-bold
        shadow-shadow-dark hover:opacity-80 transition-all duration-300 ease-in-out
        disabled:bg-opacity-70 disabled:cursor-not-allowed'>
            {isLoading ? 'Loading...' : 'Book'} 
        </button>
    </form>
  )
}

export default BookingForm