import React from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'

interface props
{
    title:string,
    handleClick ?: ()=>void,
    className?:string
}

const SecondaryButton = ({...props}:props) => 
{
  return (
    <button type='submit' className={`${props.className} pl-8 pr-10 h-fit py-3 rounded-full border border-primary_blue hover:border-white  text-primary_blue hover relative group overflow-hidden flex items-center gap-2 hover:text-white duration-500 text-xs md:text-sm xl:text-[16px] z-30 bg-white active:scale-[.8]`}>
        {props.title}
        <div className='bg-primary_blue rounded-full p-[0.18rem] absolute -z-10 right-5 group-hover:scale-[60] duration-[400ms]'></div>
        <DropDownArrow className='group-hover:stroke-white absolute -z-10 right-3 -rotate-90 stroke-2'/>
    </button>
  )
}

export default SecondaryButton