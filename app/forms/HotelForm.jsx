'use client'

import axios from 'axios';
import {Button} from '../componets/ui/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const HotelForm = () => {
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
        const {destination, checkInDate, checkOutDate, rooms, 
            adults, children, phoneNumber, email} = data
    
        const message = `
            Hotel Request:
            - Destination: ${destination}
            - Check In Date: ${checkInDate}
            - Check Out Date: ${checkOutDate}
            - Room: ${rooms}
            - Adults: ${adults}
            - Children: ${children}
            - Email: ${email}
            - Phone Number: ${phoneNumber}
        `;
    
        const newData = {
            title: 'Hotel Request',
            message
        }
    
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_MAIL_URL}`, newData)
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
    className='w-full flex items-center gap-3 p-4'>
        <div className='w-full grid grid-cols-2 md:gap-5 gap-1 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-5'>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start 
            md:col-span-1 col-span-2'>
                <label className='md:text-sm text-xs text-black'>
                    Destination
                </label>
                <input type="text"
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Destination'
                {...register('destination',{
                    required: 'Enter depart date!'
                })}/>
                {errors.destination && <span className="text-xs text-red-500">
                    {errors?.destination?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Check-in-date</label>
                <input type="date" 
                className='md:w-full min-w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'
                {...register('checkInDate',{
                    required: 'Enter depart date!'
                })}/>
                {errors.checkInDate && <span className="text-xs text-red-500">
                    {errors?.checkInDate?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Check-out-date</label>
                <input type="date" 
                className='md:w-full min-w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'
                {...register('checkOutDate',{
                    required: 'Enter depart date!'
                })}/>
                {errors.checkOutDate && <span className="text-xs text-red-500">
                    {errors?.checkOutDate?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Adults</label>
                <input type="number" min="1" defaultValue={1}
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'
                {...register('adults',{
                    required: 'Enter depart date!'
                })}/>
                {errors.adults && <span className="text-xs text-red-500">
                    {errors?.adults?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Children</label>
                <input type="number" min="0" defaultValue={0} 
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'
                {...register('children',{
                    required: 'Enter depart date!'
                })}/>
                {errors.children && <span className="text-xs text-red-500">
                    {errors?.children?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Rooms</label>
                <input type="number" min="1" defaultValue={1}
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'
                {...register('rooms',{
                    required: 'Enter depart date!'
                })}/>
                {errors.rooms && <span className="text-xs text-red-500">
                    {errors?.rooms?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Phone number</label>
                <input type="text" 
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Phone number'
                {...register('phoneNumber',{
                    required: 'Enter depart date!'
                })}/>
                {errors.phoneNumber && <span className="text-xs text-red-500">
                    {errors?.phoneNumber?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start 
            md:col-span-1 col-span-2'>
                <label className='md:text-sm text-xs text-black'>Email</label>
                <input type="email" 
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Email'
                {...register('email',{
                    required: 'Enter depart date!'
                })}/>
                {errors.email && <span className="text-xs text-red-500">
                    {errors?.email?.message}  
                </span>}
            </div>
            <div className='flex items-center justify-center md:col-span-1 col-span-2 m-auto'>
                <Button text={isLoading ? 'Loading...' : 'Submit'} 
                className={`min-w-[120px] disabled:bg-opacity-70 disabled:cursor-not-allowed`} 
                disabled={isLoading}
                type="submit"/>
            </div>
        </div>
    </form>
  )
}

export default HotelForm