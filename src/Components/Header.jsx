import React from 'react'
import Logo from '../Assets/Logo.png';

export default function Header() {
    return (
      <header className='py-2 pb-0 '>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center text-primary'>
            <img src = {Logo} className='max-w-[100px]'/>
            <p className='font-bold text-primary text-xl text-center text-white'>ModPen</p>
          </div>
        </div>
      </header>
    )
}