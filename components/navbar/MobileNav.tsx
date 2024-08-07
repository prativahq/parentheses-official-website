'use client'
import React, { useState } from 'react'
import DropDownArrow from '@/public/svgs/dropdownArrow.svg'
import Link from 'next/link'
import { motion } from 'framer-motion';
import hamElementMembers from '@/public/navlinks/data'




const HamMenuVarients = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, when: "beforeChildren" } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.2, when: "afterChildren" } },
};


const MobileNav = ({ isOpened = false }: { isOpened: boolean }) => {
  const [whichHam, setWhichHam] = useState(1000);

  const handleClick = (idx: number) => {
    if (idx !== whichHam) {
      setWhichHam(idx);
      return
    }
    setWhichHam(1000);
  }
  return (
    <motion.section
      variants={HamMenuVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className='absolute top-0 left-0 w-full min-h-screen px-[9%]  flex-col gap-4 lg:hidden bg-primary_blue z-10 text-white flex pt-40 text-2xl overflow-auto'>
      {
        hamElementMembers.map((elem, idx) => (
          <div key={idx} className=''>
            <div
              onClick={() => handleClick(idx)}
              className='flex justify-between items-center'>
              {
                !elem.haveChildren ? <Link href={elem.href || ""}>{elem.title}</Link>
                  :
                  <h1>
                    {elem.title}
                  </h1>
              }
              {elem.haveChildren && <DropDownArrow className='stroke-2 stroke-white' />}
            </div>
            {
              <div className={`duration-300 origin-top text-base `}>
                <div className={`flex flex-col gap-2 px-5 py-4 drop-shadow-lg rounded-md w-full ${whichHam === idx ? "scale-y-100 h-full" : "scale-y-0 h-0"} duration-100 origin-top`}>

                  {elem.children?.map((child, childIdx) => (
                    <Link key={childIdx} href={child.href} className='flex items-center text-nowrap gap-4 text-white duration-300 group'>
                      <div className='bg-gray-300 duration-300 p-[0.35rem] rounded-sm w-fit h-fit'></div>
                      {child.subtitle}
                    </Link>
                  ))}
                </div>
              </div>
            }
          </div>
        ))
      }

    </motion.section>
  )
}

export default MobileNav