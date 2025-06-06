// //first
// // import { assets } from '@/assets/assets'
// // import React from 'react'
// // import Image from 'next/image'
// // import { motion } from "motion/react"

// // const Header=()=> {
// //   return (
// //     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
// //       <motion.div 
// //       initial={{scale:0}}
// //       whileInView={{scale:1}}
// //       transition={{duration:0.8,type:'spring',stiffness:100}}>
// //         <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
       
// //       </motion.div>
// //       <motion.h3 
// //        initial={{y:-20,opacity:0}}
// //        whileInView={{y:0,opacity:1}}
// //        transition={{duration:0.6,delay:0.3}}
// //       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> Hi! I'm William Mark <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
// //       <motion.h1
// //      initial={{y:-30,opacity:0}}
// //      whileInView={{y:0,opacity:1}}
// //      transition={{duration:0.8,delay:0.5}}
// //       className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo' > frontend web developer based in London.</motion.h1>
// //    <motion.p
// //    initial={{opacity:0}}
// //    whileInView={{opacity:1}}
// //    transition={{duration:0.6,delay:0.7}}
// //      className='max-w-2xl mx-auto font-Ovo'>
// //     I am a frontend developer from california,Usa with 10 year of experience in multiple companies like microsoft ,tesla
// //    </motion.p>
// //    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
// //     <motion.a
// //     initial={{y:30,opacity:0}}
// //     whileInView={{y:0,opacity:1}}
// //     transition={{duration:0.6,delay:1}}
// //     href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact me  <Image src={assets.right_arrow_white} alt='' className=' w-4'/></motion.a>

// //     <motion.a
// //      initial={{y:30,opacity:0}}
// //      whileInView={{y:0,opacity:1}}
// //      transition={{duration:0.6,delay:1.2}}
// //      href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume  <Image src={assets.download_icon} alt='' className=' w-4'/></motion.a>
// //    </div>
// //     </div>
// //   )
// // }

// // export default Header






















// // 2nd
// // import { assets } from '@/assets/assets'
// // import React from 'react'
// // import Image from 'next/image'
// // import { motion } from "framer-motion"

// // const Header = () => {
// //   return (
// //     <motion.div 
// //       className='relative w-full px-[12%] h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
// //       initial={{ opacity: 0 }}
// //       whileInView={{ opacity: 1 }}
// //       transition={{ duration: 1 }}
// //     >
// //       {/* Subtle Floating Background Element */}
// //       <motion.div 
// //         className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
// //         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
// //         transition={{ repeat: Infinity, duration: 6 }}
// //       ></motion.div>

// //       {/* Profile Image Animation */}
// //       <motion.div 
// //         initial={{ scale: 0 }}
// //         whileInView={{ scale: 1 }}
// //         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
// //         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36 shadow-lg' />
// //       </motion.div>

// //       {/* Greeting Animation */}
// //       <motion.h3 
// //         initial={{ y: -20, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.3 }}
// //         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo text-gray-700 dark:text-gray-300'
// //       >
// //         Hi! I'm William Mark
// //         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
// //       </motion.h3>

// //       {/* Title Animation */}
// //       <motion.h1
// //         initial={{ y: -30, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.8, delay: 0.5 }}
// //         className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight text-gray-900 dark:text-white'
// //       >
// //         Frontend Web Developer based in London.
// //       </motion.h1>

// //       {/* Bio Animation */}
// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.7 }}
// //         className='max-w-2xl mx-auto text-lg font-Ovo text-gray-700 dark:text-gray-300'
// //       >
// //         I am a frontend developer from <span className="font-semibold">California, USA</span> with <span className="font-semibold">10 years</span> of experience in top companies like Microsoft and Tesla.
// //       </motion.p>

// //       {/* Buttons */}
// //       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

// //         {/* Contact Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1 }}
// //           href="#contact"
// //           className='px-8 py-3 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300 dark:bg-transparent dark:hover:bg-darkHover'
// //         >
// //           Contact me  
// //           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
// //         </motion.a>

// //         {/* Resume Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1.2 }}
// //           href="/sample-resume.pdf" download
// //           className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
// //         >
// //           My Resume  
// //           <Image src={assets.download_icon} alt="Download" className='w-4' />
// //         </motion.a>

// //       </div>
// //     </motion.div>
// //   )
// // }

// // export default Header;













// // // laga hua jo tha
// // import { assets } from '@/assets/assets'
// // import React from 'react'
// // import Image from 'next/image'
// // import { motion } from "framer-motion"

// // const Header = () => {
// //   return (
// //     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      
// //       {/* Profile Image Animation */}
// //       <motion.div 
// //         initial={{ scale: 0 }}
// //         whileInView={{ scale: 1 }}
// //         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
// //         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36 shadow-lg' />
// //       </motion.div>

// //       {/* Greeting Animation */}
// //       <motion.h3 
// //         initial={{ y: -20, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.3 }}
// //         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>
// //         Hi! I'm Vipul Kumar
// //         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
// //       </motion.h3>

// //       {/* Title Animation */}
// //       <motion.h1
// //         initial={{ y: -30, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.8, delay: 0.5 }}
// //         className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight'>
// //         Driven by Curiosity, Powered by Code.
// //       </motion.h1>

// //       {/* Bio Animation */}
// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.7 }}
// //         className='max-w-2xl mx-auto text-lg font-Ovo text-gray-700 dark:text-gray-300'>
// //          3rd year student at Vellore Institute of Technology ,vellore | pursuing Btech in CSE Core<span className="font-semibold"></span>,Campus ambassador @|IT Guwahati, lIT Kanpur, Nit Trichy, Nit Nagpur| Python | C |C++ |Java | HTML | CSS |JAVA Sctipt|React | Node | DSA | AI ML.
// //       </motion.p>

// //       {/* Buttons */}
// //       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

// //         {/* Contact Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1 }}
// //           href="#contact"
// //           className='px-8 py-3 border border-black dark:border-white rounded-full bg-black text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300 dark:bg-transparent'>
// //           Contact me  
// //           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
// //         </motion.a>

// //         {/* Resume Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1.2 }}
// //           href="sample-resume.pdf" download
// //         className=
// //         // 'px-8 py-3 border border-gray-500 rounded-full bg-white text-black dark:text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300  dark:bg-darkHover'
        
        
// //        'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
// //           My Resume  
// //           <Image src={assets.download_icon} alt="Download" className='w-4' />
// //         </motion.a>

// //       </div>
// //     </div>
// //   )
// // }

// // export default Header;



























// // // // Final
// // import { assets } from '@/assets/assets'
// // import React from 'react'
// // import Image from 'next/image'
// // import { motion } from "framer-motion"

// // const Header = () => {
// //   return (
// //     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg'>
      
// //       {/* Profile Image Animation */}
// //       <motion.div 
// //         initial={{ scale: 0 }}
// //         whileInView={{ scale: 1 }}
// //         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
// //         className='bg-white p-2 rounded-full shadow-2xl'>
// //         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-36' />
// //       </motion.div>

// //       {/* Greeting Animation */}
// //       <motion.h3 
// //         initial={{ y: -20, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.3 }}
// //         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo'>
// //         Hi! I'm <span className='text-yellow-300'>Vipul Kumar</span>.
// //         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
// //       </motion.h3>

// //       {/* Title Animation */}
// //       <motion.h1
// //         initial={{ y: -30, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.8, delay: 0.5 }}
// //         className='text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-white drop-shadow-lg'>
// //         Full Stack Web Developer
// //       </motion.h1>

// //       {/* Bio Animation */}
// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.7 }}
// //         className='max-w-2xl mx-auto text-lg font-light text-white/90'>
// //         I am a frontend developer from <span className="font-semibold text-yellow-300">California, USA</span> with <span className="font-semibold text-yellow-300">10 years</span> of experience in top companies like Microsoft and Tesla.
// //       </motion.p>

// //       {/* Buttons */}
// //       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>
// //         {/* Contact Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           whileHover={{ scale: 1.05, opacity: 0.9 }}
// //           transition={{ duration: 0.3 }}
// //           href="#contact"
// //           className='px-8 py-3 rounded-full bg-yellow-400 text-black flex items-center gap-2 font-semibold shadow-md hover:bg-yellow-500 transition duration-300'>
// //           Contact Me  
// //           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
// //         </motion.a>

// //         {/* Resume Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           whileHover={{ scale: 1.05, opacity: 0.9 }}
// //           transition={{ duration: 0.3 }}
// //           href="/sample-resume.pdf" download
// //           className='px-10 py-3 rounded-full border-2 border-white flex items-center gap-2 bg-transparent text-white shadow-md hover:bg-white hover:text-black transition duration-300'>
// //           My Resume  
// //           <Image src={assets.download_icon} alt="Download" className='w-4' />
// //         </motion.a>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Header;






// // import { assets } from '@/assets/assets'
// // import React from 'react'
// // import Image from 'next/image'
// // import { motion } from "framer-motion"

// // const Header = () => {
// //   return (
// //     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>

// //       {/* Profile Image */}
// //       <motion.div
// //         initial={{ scale: 0 }}
// //         whileInView={{ scale: 1 }}
// //         transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
// //         <Image src={assets.profile_img} alt="Profile" className='rounded-full w-40 shadow-pink-400 shadow-lg border-4 border-pink-300' />
// //       </motion.div>

// //       {/* Greeting */}
// //       <motion.h3
// //         initial={{ y: -20, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.3 }}
// //         className='flex items-end gap-2 text-xl md:text-2xl font-Ovo text-pink-700 dark:text-pink-400'>
// //         Hi! I'm Vipul Kumar
// //         <Image src={assets.hand_icon} alt="Hand Icon" className='w-6' />
// //       </motion.h3>

// //       {/* Title */}
// //       <motion.h1
// //         initial={{ y: -30, opacity: 0 }}
// //         whileInView={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.8, delay: 0.5 }}
// //         className='text-3xl sm:text-5xl lg:text-[64px] font-Ovo leading-tight text-pink-600 dark:text-pink-300'>
// //         Coding with Curiosity & Style.
// //       </motion.h1>

// //       {/* Bio */}
// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         whileInView={{ opacity: 1 }}
// //         transition={{ duration: 0.6, delay: 0.7 }}
// //         className='max-w-2xl mx-auto text-lg font-Ovo text-gray-800 dark:text-gray-300'>
// //         3rd year student at Vellore Institute of Technology, Vellore | BTech CSE Core |
// //         Campus ambassador @IIT Guwahati, IIT Kanpur, NIT Trichy, NIT Nagpur |
// //         Skilled in Python, C, C++, Java, HTML, CSS, JavaScript, React, Node, DSA, AI & ML.
// //       </motion.p>

// //       {/* Buttons */}
// //       <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>

// //         {/* Contact Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1 }}
// //           href="#contact"
// //           className='px-8 py-3 border border-pink-500 rounded-full bg-pink-500 text-white flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300'>
// //           Contact me
// //           <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
// //         </motion.a>

// //         {/* Resume Button */}
// //         <motion.a
// //           initial={{ y: 30, opacity: 0 }}
// //           whileInView={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 1.2 }}
// //           href="sample-resume.pdf" download
// //           className='px-10 py-3 border border-pink-300 rounded-full bg-white text-pink-600 dark:text-pink-300 flex items-center gap-2 font-semibold shadow-md hover:scale-105 transition-all duration-300'>
// //           My Resume
// //           <Image src={assets.download_icon} alt="Download" className='w-4' />
// //         </motion.a>

// //       </div>
// //     </div>
// //   )
// // }

// // export default Header;







// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { assets } from '@/assets/assets'

// const Header = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">

//       {/* Left Side - Lavender Background */}
//       <div className="bg-purple-200 w-full md:w-1/2 flex flex-col items-center justify-center p-10 gap-6 text-center">

//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
//         >
//           <Image
//             src={assets.profile_img}
//             alt="Profile"
//             className="rounded-full w-36 shadow-xl"
//           />
//         </motion.div>

//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-2xl font-bold flex items-center justify-center gap-2"
//         >
//           Hello! I'm Vipul Kumar
//           <Image src={assets.hand_icon} alt="Wave" className="w-6" />
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="max-w-sm text-gray-800 font-medium text-base"
//         >
//           3rd year CSE student at VIT Vellore | Campus Ambassador at IIT Guwahati, IIT Kanpur, NIT Trichy & Nagpur | Skilled in Python, C++, Java, HTML, CSS, JS, React, Node, AI & ML.
//         </motion.p>
//       </div>

//       {/* Right Side - White Background */}
//       <div className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col items-center justify-center p-10 gap-8 text-center">

//         <motion.h1
//           initial={{ y: -40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
//         >
//           🚀 Driven by Curiosity, <br />💻 Powered by Code
//         </motion.h1>

//         <div className="flex flex-col sm:flex-row gap-4">
//           {/* Contact Button */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1 }}
//             href="#contact"
//             className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
//           >
//             Contact Me
//             <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
//           </motion.a>

//           {/* Resume Button */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1.2 }}
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 rounded-full border border-gray-500 bg-white dark:bg-black text-black dark:text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
//           >
//             My Resume
//             <Image src={assets.download_icon} alt="Download" className="w-4" />
//           </motion.a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header




// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { assets } from '@/assets/assets'

// const Header = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row font-sans">

//       {/* Left Panel - Gradient Feminine Theme */}
//       <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-6">

//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
//         >
//           <Image
//             src={assets.profile_img}
//             alt="Profile"
//             className="rounded-full w-40 border-4 border-pink-300 shadow-pink-200 shadow-xl"
//           />
//         </motion.div>

//         {/* Name and Wave */}
//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl md:text-3xl font-cursive font-bold text-pink-600 flex items-center justify-center gap-2"
//         >
//           Hey there! I'm Vipul 💁‍♀️
//           <Image src={assets.hand_icon} alt="Wave" className="w-6" />
//         </motion.h3>

//         {/* Bio */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-sm text-gray-700 font-medium text-base leading-relaxed"
//         >
//           🎓 CSE @ VIT Vellore <br />
//           💖 Passionate about Tech, AI & Design <br />
//           🌸 Ambassador @ IITs & NITs <br />
//           👩‍💻 Python | React | ML | Web Dev
//         </motion.p>
//       </div>

//       {/* Right Panel - White or Dark Mode Friendly */}
//       <div className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-8">

//         {/* Tagline */}
//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-cursive text-pink-600"
//         >
//           🌟 Dream Big, Code Cute! 🌟
//         </motion.h1>

//         {/* Soft Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="max-w-md text-lg font-light text-gray-600 dark:text-gray-300"
//         >
//           Turning coffee ☕ and code 💻 into magical experiences. Empowering women in tech with creativity and compassion. 💐
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">

//           {/* Contact */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             href="#contact"
//             className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300"
//           >
//             💌 Contact Me
//           </motion.a>

//           {/* Resume */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1 }}
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 rounded-full border-2 border-pink-400 text-pink-600 bg-white hover:bg-pink-100 hover:scale-105 transition-all duration-300 font-semibold"
//           >
//             📄 My Resume
//           </motion.a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header




// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { assets } from '@/assets/assets'

// const Header = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row font-sans">

//       {/* Left Panel - Purple Gradient */}
//       <div className="bg-gradient-to-br from-purple-100 to-purple-300 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-6">

//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
//         >
//           <Image
//             src={assets.profile_img}
//             alt="Profile"
//             className="rounded-full w-40 border-4 border-purple-300 shadow-purple-300 shadow-xl"
//           />
//         </motion.div>

//         {/* Name and Wave */}
//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl md:text-3xl font-cursive font-bold text-purple-800 flex items-center justify-center gap-2"
//         >
//           Hello! I'm Vipul 💜
//           <Image src={assets.hand_icon} alt="Wave" className="w-6" />
//         </motion.h3>

//         {/* Bio */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-sm text-purple-700 font-medium text-base leading-relaxed"
//         >
//           💻 CSE @ VIT Vellore <br />
//           🌟 Tech Enthusiast | Web Dev | AI/ML <br />
//           🏅 Ambassador @ IIT Guwahati, IIT Kanpur, NIT Trichy & Nagpur <br />
//           💡 React | Python | C++ | Node | UI Magic
//         </motion.p>
//       </div>

//       {/* Right Panel */}
//       <div className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-8">

//         {/* Tagline */}
//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-cursive text-purple-700"
//         >
//           💫 Code with Grace, Build with Passion 💫
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="max-w-md text-lg font-light text-gray-600 dark:text-gray-300"
//         >
//           Soft as lavender, sharp as logic ✨ Building digital beauty with code. Empowering, expressive, elegant. 👩‍💻💜
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">

//           {/* Contact */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             href="#contact"
//             className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
//           >
//             ✨ Contact Me
//           </motion.a>

//           {/* Resume */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1 }}
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-100 hover:scale-105 transition-all duration-300 font-semibold"
//           >
//             📄 My Resume
//           </motion.a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header








// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { assets } from '@/assets/assets'

// const Header = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row font-sans">

//       {/* Left Panel - Purple Gradient with curved bottom-right corner */}
//       <div 
//         className="
//           bg-gradient-to-br from-purple-100 to-purple-300 
//           w-full md:w-1/2 
//           flex flex-col items-center justify-center text-center 
//           p-10 gap-6
//           rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem]
//           md:rounded-tl-none
//           shadow-lg
//         "
//         style={{ borderBottomRightRadius: '8rem' }}
//       >
//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
//         >
//           <Image
//             src={assets.profile_img}
//             alt="Profile"
//             className="rounded-full w-40 border-4 border-purple-300 shadow-purple-300 shadow-xl"
//           />
//         </motion.div>

//         {/* Name and Wave */}
//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl md:text-3xl font-cursive font-bold text-purple-800 flex items-center justify-center gap-2"
//         >
//           Hello! I'm Vipul 💜
//           <Image src={assets.hand_icon} alt="Wave" className="w-6" />
//         </motion.h3>

//         {/* Bio */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-sm text-purple-700 font-medium text-base leading-relaxed"
//         >
//           💻 CSE @ VIT Vellore <br />
//           🌟 Tech Enthusiast | Web Dev | AI/ML <br />
//           🏅 Ambassador @ IIT Guwahati, IIT Kanpur, NIT Trichy & Nagpur <br />
//           💡 React | Python | C++ | Node | UI Magic
//         </motion.p>
//       </div>

//       {/* Right Panel - White background with curved top-left corner */}
//       <div 
//         className="
//           bg-white dark:bg-black text-black dark:text-white 
//           w-full md:w-1/2 
//           flex flex-col items-center justify-center text-center 
//           p-10 gap-8
//           rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem]
//           md:rounded-br-none
//           shadow-lg
//         "
//         style={{ borderTopLeftRadius: '8rem' }}
//       >

//         {/* Tagline */}
//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-cursive text-purple-700"
//         >
//           💫 Code with Grace, Build with Passion 💫
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="max-w-md text-lg font-light text-gray-600 dark:text-gray-300"
//         >
//           Soft as lavender, sharp as logic ✨ Building digital beauty with code. Empowering, expressive, elegant. 👩‍💻💜
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">

//           {/* Contact */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             href="#contact"
//             className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
//           >
//             ✨ Contact Me
//           </motion.a>

//           {/* Resume */}
//           <motion.a
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1 }}
//             href="/sample-resume.pdf"
//             download
//             className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-100 hover:scale-105 transition-all duration-300 font-semibold"
//           >
//             📄 My Resume
//           </motion.a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header






'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-Ovo">

      {/* Left Panel - Purple Gradient with curved bottom-right corner */}
      <div 
        className="
          bg-gradient-to-br from-purple-100 to-purple-300 
          w-full md:w-1/2 
          flex flex-col items-center justify-center text-center 
          p-10 gap-6
          rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem]
          md:rounded-tl-none
          shadow-lg
        "
        style={{ borderBottomRightRadius: '8rem' }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
        >
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="rounded-full w-40 border-4 border-purple-300 shadow-purple-300 shadow-xl"
          />
        </motion.div>

        {/* Name and Wave */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-purple-800 flex items-center justify-center gap-2 font-Ovo"
        >
          Hello! I'm Vipul 💜
          <Image src={assets.hand_icon} alt="Wave" className="w-6" />
        </motion.h3>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm text-purple-700 text-base leading-relaxed font-Ovo"
        >
          💻 CSE @ VIT Vellore <br />
          🌟 Tech Enthusiast | Web Dev | AI/ML <br />
          🏅 Ambassador @ IIT Guwahati, IIT Kanpur, NIT Trichy & Nagpur <br />
          💡 React | Python | C++ | Node | UI Magic
        </motion.p>
      </div>

      {/* Right Panel - White background with curved top-left corner */}
      <div 
        className="
          bg-white dark:bg-black text-black dark:text-white 
          w-full md:w-1/2 
          flex flex-col items-center justify-center text-center 
          p-10 gap-8
          rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem]
          md:rounded-br-none
          shadow-lg
        "
        style={{ borderTopLeftRadius: '8rem' }}
      >
        {/* Tagline */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-purple-700 font-Ovo"
        >
          💫 Code with Grace, Build with Passion 💫
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-md text-lg font-light text-gray-600 dark:text-gray-300 font-Ovo"
        >
          Soft as lavender, sharp as logic ✨ Building digital beauty with code. Empowering, expressive, elegant. 👩‍💻💜
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Contact */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#contact"
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 font-Ovo"
          >
            ✨ Contact Me
          </motion.a>

          {/* Resume */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="/sample-resume.pdf"
            download
            className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-100 hover:scale-105 transition-all duration-300 font-semibold font-Ovo"
          >
            📄 My Resume
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header
