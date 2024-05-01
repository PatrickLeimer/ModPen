import React from 'react'
import Header from './Components/Header';
import ModelView from './Components/ModelView2';
import './index.css'
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className='bg-gradient-to-b from-[#A100FF] via-black bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* from-[#A100FF] */}
      <Header />
      <ModelView />
      <header className='py-2 pb-8'>
        <div className='container mx-auto bg-gray-300 bg-opacity-20 rounded'>
          <div className='flex justify-center items-center'>
            <iframe className='max-w-[400px] lg:max-w-[1000px] rounded bg-transparent' src="https://docs.google.com/forms/d/e/1FAIpQLSfGkLBzpBpEXhogLSZSVtwiYhSA58p6lqki8ut263iDQ2ShjQ/viewform?embedded=true" width="1000" height="350" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
          </div>
        </div>
      </header>
      <Footer/>
      </div>
  )
}


