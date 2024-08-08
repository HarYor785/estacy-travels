import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import { client } from 'app/utils/configSanity'

export const revalidate = 0
export default async function Container({children}){
  const res = await client.fetch(`*[_type == 'contact']`)
  return (
    <div className='w-full flex flex-col'>
        <Topbar res={res}/>
        <main className='w-full'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

