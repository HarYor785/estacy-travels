import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

const Container = ({children}) => {
  return (
    <div className='w-full flex flex-col'>
        <Topbar/>
        <main className='w-full'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Container