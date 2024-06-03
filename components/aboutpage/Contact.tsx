import React from 'react'
import SecondaryButton from '../buttons/SecondaryButton'

const Contact = () => {
    return (
        <section className='min-w-full min-h-screen flex-col flex items-center gap-16 justify-center py-20'>
            <h1 className='text-primary_blue'>CONTACT US</h1>
            <div className='flex items-center flex-col gap-3 md:gap-8'>
                <h1 className='text-[3vmax] font-sfpd-bold'>Let us know how can we help</h1>
                <h2>Got something in mind? We&apos;d love to help.</h2>
            </div>
            <form className='w-[80%] space-y-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl md:text-2xl'>What are you looking for?</h1>
                    <h2 className=' text-sm md:text-base text-black/60'>Post your query now and we&apos;ll get in touch with you soon!</h2>
                </div>
                <textarea placeholder='Type about your project and your query...' rows={4} className='placeholder:italic p-6 bg-gray-100 border-gray-300 border rounded-lg w-full ' />

            </form>
            <form className='w-[80%] space-y-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-xl md:text-2xl'>Your Details</h1>
                    <h2 className='text-sm md:text-base text-black/60'>These are required fields</h2>
                </div>
                <div className='flex gap-6 md:flex-row flex-col'>
                    <input placeholder='Your Name*' type='text' className='placeholder:italic p-6 bg-gray-100 border-gray-300 border rounded-lg w-full' />
                    <input placeholder='Your Email*' type='text' className='placeholder:italic p-4 bg-gray-100 border-gray-300 border rounded-lg w-full' />
                </div>

            </form>
            <SecondaryButton title='SEND ENQUERY'/>

        </section>
    )
}

export default Contact