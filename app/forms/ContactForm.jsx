'use client'

import axios from 'axios';
import {Button} from '../componets/ui/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';


const ContactForm = () => {
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
        const {firstName, lastName, email, mobile, message} = data

        const description = `
            Contact Form Submission Details:
            ---------------------------------
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone Number: ${mobile}

            Message:
            --------
            ${message}
        `;
    
        const newData = {
            description
        }
    
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_MAIL_URL}`, newData)
            if(res?.data?.ok){
                toast.success('Message sent successfully!');
                reset()
            }else{
                toast.error('Failed to send message. Please try again!');
            }
        } catch (error) {
            console.log(error)
            toast.error('Failed to send message. Please try again.');
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
                Messsage <span className='text-xs text-red-600'>*</span>
            </label>
            <textarea rows={4}
            className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
            rounded-sm resize-none' placeholder='Message'
            {...register('message',{
                required: 'This field is required'
            })}/>
            {errors.message && <span className="text-xs text-red-500">
                {errors?.message?.message}  
            </span>}
        </div>
        <button disabled={isLoading}
        className='w-full py-3 px-6 rounded-sm bg-secondary text-white font-bold
        shadow-shadow-dark hover:opacity-80 transition-all duration-300 ease-in-out
        disabled:bg-opacity-70 disabled:cursor-not-allowed'>
            {isLoading ? 'Loading...' : 'Submit'} 
        </button>
    </form>
  )
}

export default ContactForm