'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button} from '../componets/ui/Button';
import { fetchAirports } from 'app/utils';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AirportForm = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [onOriginFocus, setOnOriginFocus] = useState(false)
    const [onDestiFocus, setOnDestiFocus] = useState(false)
    const [originSuggestions, setOriginSuggestions] = useState([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);
    const [isOriginSelected, setIsOriginSelected] = useState(false);
    const [isDestSelected, setIsDestSelected] = useState(false);
    const [originError, setOriginError] = useState('')
    const [destinationError, setDestinationError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {
      register,
      handleSubmit,
      formState:{errors},
      reset
    } = useForm({
      mode: 'onChange'
    })

    const onchangeOrigin = (value)=>{
      setOrigin(value)
      setOriginError('')
      setIsOriginSelected(false)
    }
    const onchangeDestination = (value)=>{
      setDestination(value)
      setDestinationError('')
      setIsDestSelected(false)
    }

    useEffect(() => {
      const fetchSuggestions = async () => {
          if (!isOriginSelected && origin.length > 2) {
              try {
                  const response = await fetchAirports(origin);
                  console.log(response);
                  setOriginSuggestions(response.data);
              } catch (error) {
                  console.error(error);
              }
          } else if (origin.length === 0) {
              setOriginSuggestions([]);
              setIsOriginSelected(false);
          }
      };
  
      fetchSuggestions();
  }, [origin, isOriginSelected]);

    useEffect(() => {
      const fetchSuggestions = async () => {
        if (!isDestSelected && destination.length > 2) {
          try {
            const response = await fetchAirports(destination);
            console.log(response)
            setDestinationSuggestions(response.data);
          } catch (error) {
            console.error(error);
          }
        } else if (destination.length === 0) {
          setDestinationSuggestions([]);
          setIsDestSelected(false)
        }
      };
  
      fetchSuggestions();
    }, [destination, isDestSelected]);
  
    
    const handleChangeDestination = (val) =>{
      setDestination(val);
      setDestinationSuggestions([]);
      setIsDestSelected(true)
    }

    const handleChangeOrigin = (val) =>{
      setOrigin(val);
      setOriginSuggestions([]);
      setIsOriginSelected(true)
    }
  
    const onsubmit = async (data)=>{
      if(!origin === ''){
        setOriginError('Select origin')
        return
      }
      if(!destination === ''){
        setDestinationError('Select destination')
        return
      }
      setIsLoading(true)
      const {date, time, email, phoneNumber} = data

      const message = `
        Airport Transfer Request:
        - Origin: ${origin}
        - Destination: ${destination}
        - Date: ${date}
        - Time: ${time}
        - Email: ${email}
        - Phone Number: ${phoneNumber}
      `;

      const newData = {
        title: 'Airport Transfer Request',
        message
      }

      try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_FORMSPREE_AIRPORT_MAIL_URL}`, newData)
        if(res?.data?.ok){
          toast.success('Request sent successfully!');
          reset()
          setOrigin('')
          setDestination('')
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
        <div className='w-full grid grid-cols-2 md:gap-5 gap-1 md:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-5'>
            {/* ORIGIN */}
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start 
            md:col-span-1 col-span-2'>
                <label className='md:text-sm text-xs text-black'>Origin</label>
                <input type="text" value={origin} onChange={(e)=>onchangeOrigin(e.target.value)} 
                onFocus={()=>setOnOriginFocus(true)}
                // onBlur={()=>setOnOriginFocus(false)}
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Origin'/>
                {onOriginFocus && originSuggestions?.length > 0 && (
                  <ul className='absolute left-0 top-16 bg-white p-2 shadow-md rounded-sm 
                  flex flex-col items-start z-[999] w-fit'
                  onFocus={(e)=>e.stopPropagation()}>
                      {originSuggestions?.map((suggestion, i) => (
                      <li className='text-xs w-full flex flex-col items-start p-2 cursor-pointer 
                      hover:bg-gray-200 transition-all duration-300 ease-in-out'
                      key={i} onClick={() => handleChangeOrigin(suggestion?.name + ' ' + suggestion?.address?.cityName + ' ' + suggestion.address.countryName)}>
                        <div className='w-full flex items-center justify-between'>
                          <span className='text-xs font-semibold'>
                            {suggestion?.address?.cityCode}
                          </span>
                          <span className='text-xs font-semibold'>
                            {suggestion?.address?.cityName}
                          </span>
                        </div>
                        <span className='text-xs w-full flex items-center'>
                          {suggestion.name + ',' + ' ' + suggestion.address.countryName}
                        </span>
                      </li>
                      ))}
                  </ul>
                )}
                {originError && <span className="text-xs text-red-500">
                  {originError}  
                </span>}
            </div>
            {/* DESTINATION */}
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start 
            md:col-span-1 col-span-2'>
                <label className='md:text-sm text-xs text-black'>Destination</label>
                <input type="text" value={destination} 
                onChange={(e)=>onchangeDestination(e.target.value)} 
                onFocus={()=>setOnDestiFocus(true)}
                // onBlur={()=>setOnDestiFocus(false)}
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm' placeholder='Destination'/>
                {onDestiFocus && destinationSuggestions?.length > 0 && (
                  <ul className='absolute left-0 top-16 bg-white p-2 shadow-md rounded-sm 
                  flex flex-col items-start z-[999] w-fit'
                  onFocus={(e)=>e.stopPropagation()}>
                      {destinationSuggestions?.map((suggestion, i) => (
                      <li className='text-xs w-full flex flex-col items-start p-2 cursor-pointer 
                      hover:bg-gray-200 transition-all duration-300 ease-in-out'
                      key={i} onClick={() => handleChangeDestination(suggestion?.name + ' ' + suggestion?.address?.cityName + ' ' + suggestion?.address?.countryName)}>
                        <div className='w-full flex items-center justify-between'>
                          <span className='text-xs font-semibold'>
                            {suggestion?.address?.cityCode}
                          </span>
                          <span className='text-xs font-semibold'>
                            {suggestion?.address?.cityName}
                          </span>
                        </div>
                        <span className='text-xs w-full flex items-center'>
                          {suggestion?.name + ',' + ' ' + suggestion?.address?.countryName}
                        </span>
                      </li>
                      ))}
                    </ul>
                )}
                {destinationError && <span className="text-xs text-red-500">
                  {destinationError}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Date</label>
                <input type="date" name="date"
                {...register('date',{required: 'Choose a date'})}
                className='md:w-full min-w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'/>
                {errors.date && <span className="text-xs text-red-500">
                  {errors?.date?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Time</label>
                <input type="time" name="time"
                {...register('time',{required: 'Choose a time'})}
                className='md:w-full min-w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'/>
                  {errors.time && <span className="text-xs text-red-500">
                  {errors?.time?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Email</label>
                <input type="email" name="email"
                {...register('email',{required: 'Enter your email'})}
                placeholder="Enter your email"
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'/>
                {errors.email && <span className="text-xs text-red-500">
                  {errors?.email?.message}  
                </span>}
            </div>
            <div className='w-full flex flex-col relative md:gap-1 gap-0 items-start'>
                <label className='md:text-sm text-xs text-black'>Phone number</label>
                <input type="text" name="phoneNumber"
                {...register('phoneNumber',{required: 'Enter your phone number'})}
                placeholder="Enter your phone number"
                className='w-full p-2 text-sm outline-none border-[1px] border-gray-300 
                rounded-sm'/>
                {errors.phoneNumber && <span className="text-xs text-red-500">
                  {errors?.phoneNumber?.message}  
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

export default AirportForm