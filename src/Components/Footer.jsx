import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-6 text-black'>
        <div className='container mx-auto flex flex-col items-start justify-evenly gap-8 px-4 md:flex-row'>
            <div className='flex flex-col'>
                <p className='text-sm uppercase mb-2'>
                    Explore
                </p>
                {
                    ['Home', 'Prologue', 'About', 'Contact'].map((list)=>(
                        <a key={list} href="" className='text-[24px] font-semibold'>{list}</a>
                    ))
                }
            </div>
            <div className='flex flex-col'>
                <p className='text-sm uppercase mb-2'>
                    Products
                </p>
                {
                    ['Radiant', 'Nexus', 'Zigma', 'Azul'].map((list)=>(
                        <a key={list} href="" className='text-[24px] font-semibold '>{list}</a>
                    ))
                }
            </div>
            <div className='flex flex-col'>
                <p className='text-sm uppercase mb-2'>
                    Follow us
                </p>
                {
                    ['Discord', 'X', 'Youtube', 'Medium'].map((list)=>(
                        <a key={list} href="" className='text-[24px] font-semibold '>{list}</a>
                    ))
                }
            </div>
            <div className='flex flex-col'>
                <p className='text-sm uppercase mb-2'>
                    Resources
                </p>
                {
                    ['Media Kit'].map((list)=>(
                        <a key={list} href="" className='text-[24px] font-semibold '>{list}</a>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-row md:flex-col justify-between mt-3 mx-10'>
            <div className='flex'>
            <p className='uppercase font-semibold text-[20px]'>&copy;Zentry 2025. All Rights reserved </p>
            </div>
            <div className='flex'>
            <p className='uppercase font-thin text-[20px] text-black'>privacy policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
