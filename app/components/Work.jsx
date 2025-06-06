// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'
// import { motion } from "motion/react"

// function Work(isDarkMode) {
//     const workData = [
//         {
//             title: 'Frontend project',
//             description: 'Web Design',
//             bgImage: '/work-1.png',
//         },
//         {
//             title: 'Geo based app',
//             description: 'Mobile App',
//             bgImage: '/work-2.png',
//         },
//         {
//             title: 'Photography site',
//             description: 'Web Design',
//             bgImage: '/work-3.png',
//         },
//         {
//             title: 'UI/UX designing',
//             description: 'UI/UX Design',
//             bgImage: '/work-4.png',
//         },
//     ]
//   return (
//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     id='work' className='w-full px-[12%] py-10 scroll-mt-20' >
//       <motion.h4
//         initial={{opacity:0,y:-20}}
//         whileInView={{opacity:1,y:0}}
//         transition={{duration:0.5,delay:0.3}}
//       className='text-center mb-2 text-lg font-Ovo'>
//         My portfolio</motion.h4>
//       <motion.h2
//         initial={{opacity:0,y:-20}}
//         whileInView={{opacity:1,y:0}}
//         transition={{duration:0.5,delay:0.5}}
//       className='text-center text-5xl font-Ovo'>
//         My latest work
//       </motion.h2>
//  <motion.p
//    initial={{opacity:0,y:-20}}
//    whileInView={{opacity:1,y:0}}
//    transition={{duration:0.5,delay:0.7}}
//  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>

//     welcome to my web development portfolio explore a collectio of project showing my experience in front-end development.
// </motion.p>
// {/* <div className='grid grid-cols-auto my-10 gap-5'> */}
// <motion.div 
//   initial={{opacity:0}}
//   whileInView={{opacity:1}}
//   transition={{duration:0.6,delay:0.9}}
// className='grid grid-cols-1 md:grid-cols-4 gap-5 my-10 dark:text-black'>

//     {workData.map((project,index)=>(
//   <motion.div 
//   whileHover={{scale:1.05}}
//   transition={{dustion:0.3}}
//   key={index} 
//   className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//   style={{backgroundImage:`url(${project.bgImage})`}}>
//     <div className ='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//     duration-500 group-hover:bottom-7'>
//     <div>
//         <h2 className='font-semibold'>{project.title}</h2>
//         <p className='text-sm text-gray-700'>{project.description}</p>
//     </div>
//     <div className='boder rounded-full boder-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//      group-hover:bg-lime-300 transsition'>
//         {/* <Image src={assets.send_icon} alt='send icon' className='w-5'/> */}
//         <Image src={assets.send_icon} alt='send icon' width={20} height={20} />

//     </div>
//     </div>
    
//      </motion.div>

//     ))}
// </motion.div>
// <motion.a 
//   initial={{opacity:0}}
//   whileInView={{opacity:1}}
//   transition={{duration:0.5,delay:1.1}}
// href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
// rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' >
//     Show more <Image src={isDarkMode? assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' 
//     className='w-4'/>
// </motion.a>
//     </motion.div>
//   )
// }

// export default Work















// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' }
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Subtle Floating Background Element */}
//             <motion.div 
//                 className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//             ></motion.div>

//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Portfolio
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in Full Stack development.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 md:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index} 
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//                         style={{ backgroundImage: `url(${project.bgImage})` }}
//                     >
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;













// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' },
//         { title: 'E-commerce site', description: 'Web Development', bgImage: '/work-5.png' },
//         { title: 'Portfolio site', description: 'Personal Branding', bgImage: '/work-6.png' },
//         { title: 'Dashboard UI', description: 'Web App', bgImage: '/work-7.png' },
//         { title: 'Travel Blog', description: 'Content Website', bgImage: '/work-8.png' }
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Portfolio
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my web development portfolio. Explore a collection of projects showcasing my expertise in Full Stack development.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index} 
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//                         style={{ backgroundImage: `url(${project.bgImage})` }}
//                     >
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;

















// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Food ordering platform', description: '', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: '', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: '', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: '', bgImage: '/work-4.png' },
//         { title: 'E-commerce site', description: '', bgImage: '/work-5.png' },
//         //{ title: 'Portfolio site', description: '', bgImage: '/work-2.png' },
//        // { title: 'Dashboard UI', description: '', bgImage: '/work-3.png' },
//         // { title: 'Travel Blog', description: '', bgImage: '/work-4.png' }
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Projects
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my project portfolio  a curated showcase of my skills, creativity, and technical expertise. Explore a diverse collection of projects that reflect my passion for innovation and problem-solving.

//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index} 
//                         className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//                         style={{ backgroundImage: `url(${project.bgImage})` }}
//                     >
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;







// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Food ordering platform', description: '', bgImage: '/work-1.png' },
//         { title: 'Geo based app', description: '', bgImage: '/work-2.png' },
//         { title: 'Photography site', description: '', bgImage: '/work-3.png' },
//         { title: 'UI/UX designing', description: '', bgImage: '/work-4.png' },
//         { title: 'E-commerce site', description: '', bgImage: '/work-5.png' },
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Projects
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my project portfolio — a curated showcase of my skills, creativity, and technical expertise. Explore a diverse collection of projects that reflect my passion for innovation and problem-solving.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.div 
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index}
//                         className='relative rounded-lg overflow-hidden cursor-pointer group'
//                     >
//                         <div
//                             className='w-full'
//                             style={{
//                                 paddingTop: '56.25%', // 16:9 Aspect Ratio
//                                 backgroundImage: `url(${project.bgImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         ></div>
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                                 <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
//                             </div>
//                             <div className='border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;




import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "framer-motion";

function Work({ isDarkMode }) {
    const workData = [
        { title: 'Food ordering platform', description: '', bgImage: '/work-1.png' },
        { title: 'NVZ - Tesla Design', description: '', bgImage: '/work-2.png' },
        { title: 'Lazarev - Design Agency', description: '', bgImage: '/work-3.png' },
        { title: 'Sidcup - Family Golf', description: '', bgImage: '/work-4.png' },
        { title: 'Gaming -Tutorial Site', description: '', bgImage: '/work-5.png' },
    ];

    return (
        <motion.div 
            id='work' 
            className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Title Section */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Projects
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My Latest Work
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
            >
                Welcome to my project portfolio — a curated showcase of my skills, creativity, and technical expertise. Explore a diverse collection of projects that reflect my passion for innovation and problem-solving.
            </motion.p>

            {/* Work Grid */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10 dark:text-black'
            >
                {workData.map((project, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='relative rounded-lg overflow-hidden cursor-pointer group'
                    >
                        <div
                            className='w-full'
                            style={{
                                paddingTop: '65%', // Slightly taller rectangle
                                backgroundImage: `url(${project.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                            duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
                        >
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#000]
                                group-hover:bg-lime-300 transition dark:border-white'
                            >
                                <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Show More Button */}
            <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="#" 
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
                    rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
            >
                Show more 
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </motion.a>
        </motion.div>
    );
}

export default Work;




// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//     const workData = [
//         { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//         { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//         { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//         { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//         { title: 'Gaming -Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//     ];

//     return (
//         <motion.div 
//             id='work' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 My Projects
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 My Latest Work
//             </motion.h2>
//             <motion.p
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                 Welcome to my project portfolio — a curated showcase of my skills, creativity, and technical expertise. Explore a diverse collection of projects that reflect my passion for innovation and problem-solving.
//             </motion.p>

//             {/* Work Grid */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10 dark:text-black'
//             >
//                 {workData.map((project, index) => (
//                     <motion.a 
//                         href={project.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         key={index}
//                         className='relative rounded-lg overflow-hidden cursor-pointer group block'
//                     >
//                         <div
//                             className='w-full'
//                             style={{
//                                 paddingTop: '65%',
//                                 backgroundImage: `url(${project.bgImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         ></div>
//                         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
//                             duration-500 group-hover:bottom-7 dark:bg-darkHover/50 dark:text-white'
//                         >
//                             <div>
//                                 <h2 className='font-semibold'>{project.title}</h2>
//                             </div>
//                             <div className='border rounded-full border-black w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#000]
//                                 group-hover:bg-lime-300 transition dark:border-white'
//                             >
//                                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//                             </div>
//                         </div>
//                     </motion.a>
//                 ))}
//             </motion.div>

//             {/* Show More Button */}
//             <motion.a 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 }}
//                 href="#" 
//                 className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 
//                     rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
//             >
//                 Show more 
//                 <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//             </motion.a>
//         </motion.div>
//     );
// }

// export default Work;









// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.div 
//       id='work' 
//       className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title Section */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-700 dark:text-purple-300'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-Ovo font-semibold text-purple-900 dark:text-purple-200"
//       >
//         My Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//       >
//         Welcome to my project portfolio — a curated showcase of my skills, creativity, and technical expertise. Explore a diverse collection of projects that reflect my passion for innovation and problem-solving.
//       </motion.p>

//       {/* Work Grid */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10'
//       >
//         {workData.map((project, index) => (
//           <motion.a 
//             href={project.link} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className='relative rounded-lg overflow-hidden cursor-pointer group shadow-lg dark:shadow-purple-800'
//             style={{
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               paddingTop: '65%',
//               display: 'block'
//             }}
//           >
//             {/* Overlay for darkening background */}
//             <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

//             {/* Title bar */}
//             <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 bg-white bg-opacity-90 dark:bg-darkHover/90 rounded-md py-3 px-5 flex items-center justify-between
//               transition-all duration-300 group-hover:bottom-7 dark:text-white'
//             >
//               <h2 className='font-semibold text-purple-900 dark:text-purple-300'>{project.title}</h2>
//               <div className='border border-purple-900 dark:border-purple-300 rounded-full w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_#6b21a8]
//                 group-hover:bg-purple-400 transition-colors duration-300 dark:shadow-[2px_2px_0_#d8b4fe]'
//               >
//                 <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>

//       {/* Show More Button */}
//       <motion.a 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1.1 }}
//         href="#" 
//         className='w-max flex items-center justify-center gap-2 text-purple-700 border border-purple-700 
//           rounded-full py-3 px-10 mx-auto my-20 hover:bg-purple-700 hover:text-white duration-500 dark:text-purple-300 dark:border-purple-300 dark:hover:bg-purple-600 dark:hover:text-white'
//       >
//         Show more 
//         <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
//       </motion.a>
//     </motion.div>
//   );
// }

// export default Work;





// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className='relative w-full px-10 py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-700 dark:text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 dark:text-purple-200 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-900 cursor-pointer group'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-colors duration-300"></div>

//             {/* Title bar */}
//             <div className="absolute bottom-0 left-0 w-full py-4 px-5 bg-purple-900 bg-opacity-80 backdrop-blur-sm text-white flex justify-between items-center">
//               <h3 className='text-lg font-semibold truncate'>{project.title}</h3>
//               <div className='w-9 h-9 flex items-center justify-center bg-purple-700 rounded-full shadow-lg group-hover:bg-purple-500 transition-colors duration-300'>
//                 <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;





// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className='relative w-full px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900
//         dark:from-purple-900 dark:via-purple-950 dark:to-purple-900'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-100 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-200 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-900 cursor-pointer group'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-colors duration-300"></div>

//             {/* Title bar */}
//             <div className="absolute bottom-0 left-0 w-full py-4 px-5 bg-purple-900 bg-opacity-80 backdrop-blur-sm text-white flex justify-between items-center">
//               <h3 className='text-lg font-semibold truncate'>{project.title}</h3>
//               <div className='w-9 h-9 flex items-center justify-center bg-purple-700 rounded-full shadow-lg group-hover:bg-purple-500 transition-colors duration-300'>
//                 <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;






// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className='relative w-full px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900
//         dark:from-purple-900 dark:via-purple-950 dark:to-purple-900'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-100 mb-16"
//       >
//         Latest Work
//       </motion.h2>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.06 }}
//             transition={{ type: 'spring', stiffness: 140 }}
//             className='relative rounded-2xl overflow-hidden cursor-pointer shadow-lg
//               bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-900
//               dark:shadow-purple-900'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Dark overlay with smooth fade on hover */}
//             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>

//             {/* Title bar */}
//             <div className="absolute bottom-0 left-0 w-full py-4 px-6 bg-purple-900 bg-opacity-90 backdrop-blur-md text-white flex justify-between items-center rounded-b-2xl">
//               <h3 className='text-lg font-semibold truncate'>{project.title}</h3>
//               <div className='w-10 h-10 flex items-center justify-center bg-purple-700 rounded-full shadow-md group-hover:bg-purple-500 transition-colors duration-300'>
//                 <Image src={assets.send_icon} alt="send icon" width={22} height={22} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;






// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className='relative w-full px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900
//         dark:from-purple-900 dark:via-purple-950 dark:to-purple-900'
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-100 mb-16"
//       >
//         Latest Work
//       </motion.h2>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.06 }}
//             transition={{ type: 'spring', stiffness: 140 }}
//             className='relative rounded-3xl overflow-hidden cursor-pointer shadow-lg
//               bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-900
//               dark:shadow-purple-900'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Dark overlay with smooth fade on hover */}
//             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 rounded-3xl"></div>

//             {/* Title bar */}
//             <div className="absolute bottom-0 left-0 w-full py-4 px-6 bg-purple-900 bg-opacity-90 backdrop-blur-md text-white flex justify-between items-center rounded-b-3xl">
//               <h3 className='text-lg font-semibold truncate'>{project.title}</h3>
//               <div className='w-10 h-10 flex items-center justify-center bg-purple-700 rounded-full shadow-md group-hover:bg-purple-500 transition-colors duration-300'>
//                 <Image src={assets.send_icon} alt="send icon" width={22} height={22} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;











// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className={`
//         relative w-full max-w-7xl mx-auto my-12 px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900
//         dark:from-purple-900 dark:via-purple-950 dark:to-purple-900
//         rounded-3xl overflow-hidden shadow-2xl
//       `}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-100 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-200 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-900 cursor-pointer group'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-colors duration-300"></div>

//             {/* Title bar */}
//             <div className="absolute bottom-0 left-0 w-full py-4 px-5 bg-purple-900 bg-opacity-80 backdrop-blur-sm text-white flex justify-between items-center">
//               <h3 className='text-lg font-semibold truncate'>{project.title}</h3>
//               <div className='w-9 h-9 flex items-center justify-center bg-purple-700 rounded-full shadow-lg group-hover:bg-purple-500 transition-colors duration-300'>
//                 <Image src={assets.send_icon} alt="send icon" width={20} height={20} />
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;





// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className={`
//         relative w-full max-w-7xl mx-auto my-12 px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900
//         dark:from-purple-900 dark:via-purple-950 dark:to-purple-900
//         rounded-3xl overflow-hidden shadow-2xl
//       `}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-300 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-100 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-200 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-400 cursor-pointer group'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* Removed overlay and title bar */}
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;







// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from "framer-motion";

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id='work'
//       className={`
//         relative w-full max-w-7xl mx-auto my-12 px-10 py-20 scroll-mt-20
//         bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100
//         dark:from-purple-400 dark:via-purple-300 dark:to-purple-200
//         rounded-3xl overflow-hidden shadow-2xl
//       `}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-600 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-700 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-600 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg dark:shadow-purple-300 cursor-pointer group'
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           >
//             {/* No overlay or text */}
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;





// import React from 'react';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className={`max-w-6xl mx-auto my-24 px-8 py-12 rounded-2xl
//         bg-gradient-to-tr from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800
//         shadow-xl relative`}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="mb-12 text-center"
//       >
//         <h4 className="text-lg font-Ovo text-purple-600 tracking-wide uppercase mb-2">My Projects</h4>
//         <h2 className="text-5xl font-bold font-Ovo text-purple-900 dark:text-purple-300">Latest Work</h2>
//         <p className="max-w-3xl mx-auto mt-4 font-Ovo text-purple-700 dark:text-purple-200 leading-relaxed">
//           Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//         </p>
//       </motion.div>

//       {/* Projects Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         {workData.map((project, idx) => (
//           <motion.a
//             key={idx}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(128,0,128,0.4)' }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className="relative rounded-xl overflow-hidden shadow-md cursor-pointer border border-purple-300 dark:border-purple-700 bg-white dark:bg-purple-900"
//             style={{ paddingTop: '65%', backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           />
//         ))}
//       </motion.div>

//       {/* Abstract purple shapes */}
//       <motion.div 
//         className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-300 opacity-30 blur-3xl"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div 
//         className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-400 opacity-25 blur-2xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//     </motion.section>
//   );
// }

// export default Work;




// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="max-w-6xl mx-auto my-24 px-8 py-12
//         bg-gradient-to-tr from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800
//         shadow-xl relative"
//       style={{
//         borderTopLeftRadius: '3.5rem',   // big top-left curve
//         borderBottomRightRadius: '3.5rem', // big bottom-right curve
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-700 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg cursor-pointer'
//             style={{
//               paddingTop: '65%',
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             {/* No overlay, no text or purple div */}
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;







// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="max-w-6xl mx-auto my-24 px-4 py-12
//         bg-gradient-to-tr from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800
//         shadow-xl relative"
//       style={{
//         borderTopLeftRadius: '3.5rem',   // big top-left curve
//         borderBottomRightRadius: '3.5rem', // big bottom-right curve
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-700 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg cursor-pointer'
//             style={{
//               paddingTop: '65%',
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             {/* No overlay, no text or purple div */}
//           </motion.a>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;










// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="max-w-6xl mx-auto my-24 px-6 py-12
//         bg-gradient-to-tr from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800
//         shadow-xl relative"
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo text-purple-700 tracking-wide uppercase'
//       >
//         My Projects
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed'
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className='relative rounded-xl overflow-hidden shadow-lg cursor-pointer'
//             style={{
//               paddingTop: '65%',
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;







// import React from 'react';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="
//         max-w-6xl mx-auto my-24 px-6 py-12 
//         bg-gradient-to-br from-purple-100 to-purple-300
//         dark:bg-[#E5D4F7]
//         shadow-xl relative
//       "
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo text-purple-800 tracking-wide uppercase"
//       >
//         My Projects
//       </motion.h4>

//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed"
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.07 }}
//             transition={{ type: 'spring', stiffness: 150 }}
//             className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
//             style={{
//               paddingTop: '65%',
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;








// import React from 'react';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="
//         w-full max-w-[95%] mx-auto my-24 px-2 py-12 
//         bg-gradient-to-br from-purple-100 to-purple-300
//         dark:bg-[#E5D4F7]
//         shadow-xl relative
//       "
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo text-purple-800 tracking-wide uppercase"
//       >
//         My Projects
//       </motion.h4>

//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed"
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.035 }}
//             transition={{ duration: 0.35, ease: 'easeInOut' }}
//             className="relative rounded-md overflow-hidden shadow-md cursor-pointer transition-transform duration-300"
//             style={{
//               paddingTop: '55%',
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;




// import React from 'react';
// import { motion } from 'framer-motion';

// function Work({ isDarkMode }) {
//   const workData = [
//     { title: 'Food ordering platform', link: 'https://food-delivery-site-vipul1007s-projects.vercel.app/', bgImage: '/work-1.png' },
//     { title: 'NVZ - Tesla Design', link: 'https://nvz-vipul1007s-projects.vercel.app/', bgImage: '/work-2.png' },
//     { title: 'Lazarev - Design Agency', link: 'https://vipul1029.github.io/Lazarev/', bgImage: '/work-3.png' },
//     { title: 'Sidcup - Family Golf', link: 'https://vipul1029.github.io/sidcup-gaming-site/', bgImage: '/work-4.png' },
//     { title: 'Gaming - Tutorial Site', link: 'https://vipul1029.github.io/Miniproject/', bgImage: '/work-5.png' },
//   ];

//   return (
//     <motion.section
//       id="work"
//       className="
//         w-full max-w-[95%] mx-auto my-24 px-6 md:px-10 py-12 
//         bg-gradient-to-br from-purple-100 to-purple-300
//         dark:bg-[#E5D4F7]
//         shadow-xl relative
//       "
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo text-purple-800 tracking-wide uppercase"
//       >
//         My Projects
//       </motion.h4>

//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-bold font-Ovo text-purple-900 mb-6"
//       >
//         Latest Work
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="text-center max-w-3xl mx-auto mb-16 font-Ovo text-purple-800 leading-relaxed"
//       >
//         Explore a curated selection of my projects showcasing creativity, technical skills, and a passion for innovative solutions.
//       </motion.p>

//       {/* Projects Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
//       >
//         {workData.map((project, index) => (
//           <motion.a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.035 }}
//             transition={{ duration: 0.35, ease: 'easeInOut' }}
//             className="relative rounded-sm overflow-hidden shadow-md cursor-pointer transition-transform duration-300"
//             style={{
//               paddingTop: '45%', // smaller height
//               backgroundImage: `url(${project.bgImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Work;
