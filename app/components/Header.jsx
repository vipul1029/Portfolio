
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      
      {/* Profile Image Animation */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
        <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36 shadow-lg' />
      </motion.div>

      {/* Greeting Animation */}
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>
        Hi! I'm Vipul Kumar
        <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
      </motion.h3>

      {/* Title Animation */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight'>
        Driven by Curiosity, Powered by Code.
      </motion.h1>

      {/* Bio Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto text-lg font-Ovo text-gray-700 dark:text-gray-300'>
         3rd year student at Vellore Institute of Technology ,vellore | pursuing Btech in CSE Core<span className="font-semibold"></span>,Campus ambassador @|IT Guwahati, lIT Kanpur, Nit Trichy, Nit Nagpur| Python | C |C++ |Java | HTML | CSS |JAVA Sctipt|React | Node | DSA | AI ML.
      </motion.p>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-8 py-3 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300 dark:bg-transparent'>
          Contact me  
          <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="Vipul_Vit_Resume.pdf" download
        className=
        // 'px-8 py-3 border border-gray-500 rounded-full bg-white text-black dark:text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300  dark:bg-darkHover'
        
        
       'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          My Resume  
          <Image src={assets.download_icon} alt="Download" className='w-4' />
        </motion.a>

      </div>
    </div>
  )
}

export default Header;

