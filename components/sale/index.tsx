import React from 'react'

interface props {
    bg: string,
    className?: string,
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Sale = ({ ...props }: props) => {
    const date = new Date()
    return (
        <div className={`${" "+props.className+" "} ${props.bg === 'white' ? " bg-white" : " bg-gradient-to-r from-primary_blue/90 to-primary_blue text-white"} w-full font-sfpd-regular flex gap-4 items-center justify-center py-1 absolute z-[200] text-black top-0 tracking-widest`}>
            <h1>
                Accepting projects for : <span className='font-sfpd-semibold tracking-wider'>{month[date.getMonth()+2]}</span>
            </h1>
        </div>
    )
}

export default Sale