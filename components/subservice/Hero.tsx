import React from 'react'
import Image from 'next/image'
import BgGridDark from '@/public/background/bgGridGrey.svg'

interface heroProps{
    heading:string,
    subheading:string,
    bigImage:string,
    smallImage:string
}

const Hero = ({heading,subheading,bigImage,smallImage}:heroProps) => {
    return (
        <div id='hero' className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex lg:flex-row flex-col items-center  justify-center lg:justify-between text-black min-w-full px-[10%] pt-36 lg:pt-[4.5rem] pb-20 gap-16'>
            <div className='flex flex-col lg:w-[55%] items-start justify-center font-sfpd-bold gap-6'>
                <h1 className='text-primary_blue font-sfpd-regular text-lg'>Services</h1>
                <div className='flex text-[4vmax] flex-col  justify-center leading-[4.8vmax] md:leading-[5.4vmax]'>
                    <h1>{heading}</h1>
                </div>
                <h2 className='lg:w-fit w-[60%] text-sm md:text-xl tracking-wider font-sfpd-light text-black/60'>{subheading}</h2>
            </div>
            <div className='lg:w-[60%] w-full flex justify-center items-center'>
                <div className='bg-gray-100 p-24 sm:p-32  md:p-40 lg:p-48 w-fit rounded-full relative flex items-center'>
                    <Image src={"/subservices/bigframe.png"} width={1000} height={1000} alt='subimage' aria-label='it is a picture depicting the service we are providing' className='absolute left-[50%] w-full rounded-lg drop-shadow-2xl'></Image>
                    <Image src={"/subservices/squareframe.png"} width={200} height={200} alt='subimage' aria-label='it is a picture depicting the service we are providing' className='absolute left-10 z-10 rounded-lg w-[50%] drop-shadow-lg'></Image>
                </div>
            </div>
            <BgGridDark className='rotate-180 absolute -z-[1] top-0 scale-[5] sm:scale-[4]  xl:scale-[2] translate-y-12 md:translate-y-7 lg:-translate-y-10' />
            <BgGridDark className=' absolute -z-[1] bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default Hero