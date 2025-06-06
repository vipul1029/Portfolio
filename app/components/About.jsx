// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "motion/react"

// const About=({isDarkMode})=> {
//      const infoList = [
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//     ];
//     const toolsData = [
//         assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
//     ];
//   return (
//     <motion.div 
//     id='about' className='w-full px-[12%] py-10 scroll-mt-20' 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     >
//         <motion.h4
//            initial={{opacity:0,y:-20}}
//            whileInView={{opacity:1,y:0}}
//            transition={{duration:0.5,delay:0.3}}
//          className='text-center mb-2 text-lg font-Ovo'>
//             Introduction</motion.h4>
//         <motion.h2 
//              initial={{opacity:0,y:-20}}
//              whileInView={{opacity:1,y:0}}
//              transition={{duration:0.5,delay:0.5}}
//         className="text-center text-5xl font-Ovo">About me</motion.h2>
//       <motion.div 
//            initial={{opacity:0}}
//            whileInView={{opacity:1}}
//            transition={{duration:0.8}}
//       className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//         <motion.div 
//              initial={{opacity:0,sacle:0.9}}
//              whileInView={{opacity:1,scale:1}}
//              transition={{duration:0.6}}
//              className='w-64 sm:w-80 rounded-3xl max-w-none'>
//             <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//         </motion.div>
//         <motion.div 
//              initial={{opacity:0}}
//              whileInView={{opacity:1}}
//              transition={{duration:0.8,delay:1}}
//         className='flex-1'>
// <p className='mb-10 max-w-2xl font-Ovo'> afefjfj wfw fwfw wf  fw f wfw f fwf wfwg wrg gww g gw gwg w g  wgw </p>
// <motion.ul
//      initial={{opacity:0}}
//      whileInView={{opacity:1,y:0}}
//      transition={{duration:0.5,delay:0.3}}
// className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//     {infoList.map(({icon,iconDark,title,description},index)=>(
//         <motion.li
//         whileInView={{scale:1.05}}
//         className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
//             <Image src={isDarkMode? iconDark : icon} alt={title}/>
//             <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//             <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>

//         </motion.li>
//     ))}
// </motion.ul>
// <motion.h4 
//      initial={{y:20,opacity:0,y:-20}}
//      whileInView={{y:0,opacity:1,y:0}}
//      transition={{duration:1.3,delay:0.5}}
// className='my-6 text-gray-700 font-Ovo  dark:text-white/80'>
//     Tools I use
// </motion.h4>
// <motion.ul
//      initial={{opacity:0}}
//      whileInView={{opacity:1}}
//      transition={{duration:1.5,delay:0.6}}
// className='flex items-center gap-3 sm:gap-5'>
//     {toolsData.map((tool,index)=>(
//         <motion.li 
//         whileHover={{scale:1.05}}
//         className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg courser-pointer  hover:-translate-y-1 duration-500 'key={index}>
//         <Image src={tool} alt='Tool' className='w-5 sm:w-7'/></motion.li>
//     ))}
// </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default About












import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
    const infoList = [  
        { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML,CSS,JavaScript,C, C++,Java,Python.' },
        { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
        { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
    ];
    
    const toolsData = [
        assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
    ];

    return (
        <motion.div 
            id='about' 
            className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Subtle Floating Background Element */}
            <motion.div 
                className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 6 }}
            ></motion.div>

            {/* Title Section */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                Introduction
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                About Me
            </motion.h2>

            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col lg:flex-row items-center gap-20 my-20'
            >
                {/* Profile Image with Hover Effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className='w-64 sm:w-80 rounded-3xl shadow-lg transform transition-all duration-300'
                >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                {/* Text & Information Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className='flex-1'
                >
                    <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
                        About Me

I am a dedicated 3rd-year B.Tech student in Computer Science and Engineering at Vellore Institute of Technology, Vellore. My technical foundation spans a diverse set of programming languages, including Python, C, C++, Java, HTML, CSS, JavaScript, React, and Node.js. My academic journey has been complemented by hands-on experience in data structures, algorithms, artificial intelligence, and machine learning, equipping me with the skills required to tackle complex real-world problems.

As a Campus Ambassador at IIT Guwahati, IIT Kanpur, NIT Trichy, and NIT Nagpur, I have developed strong leadership, networking, and communication skills, connecting with peers and professionals in the tech community. My passion for coding and technology drives me to constantly explore new tools, frameworks, and methodologies, while my problem-solving mindset fuels my commitment to building impactful solutions.
                    </p>

                    {/* Info Cards */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}
                            >
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Tools Section */}
                    <motion.h4 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
                    >
                        Tools I Use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className='flex flex-wrap justify-center items-center gap-4 sm:gap-5'
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className='flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-gray-50 dark:bg-darkHover/50 dark:border-white/50'
                                key={index}
                            >
                                <Image src={tool} alt='Tool' className='w-8 sm:w-10' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;




















// 'use client'

// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//     const infoList = [  
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, C, C++, Java, Python.' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//     ]
    
//     const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git]

//     return (
//         <motion.div 
//             id='about' 
//             className='relative w-full px-[10%] py-20 scroll-mt-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900 dark:to-black'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Floating Bubble */}
//             <motion.div 
//                 className="absolute -top-10 right-10 w-32 h-32 bg-purple-300 opacity-30 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 8 }}
//             ></motion.div>

//             {/* Title Section */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-cursive text-purple-600 dark:text-purple-200'
//             >
//                 💫 Let Me Introduce Myself
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-bold font-cursive text-purple-800 dark:text-white"
//             >
//                 About Me
//             </motion.h2>

//             {/* Main Content */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex flex-col lg:flex-row items-center gap-16 mt-16'
//             >
//                 {/* Profile Image */}
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     className='w-64 sm:w-80 rounded-3xl shadow-lg border-4 border-purple-300'
//                 >
//                     <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//                 </motion.div>

//                 {/* Description + Info Cards */}
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className='flex-1 text-center lg:text-left'
//                 >
//                     <p className='mb-10 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed font-medium text-purple-700 dark:text-purple-100'>
//                         I'm a 3rd-year Computer Science student at VIT Vellore, passionate about building magical digital experiences ✨. I explore everything from elegant UI to AI & ML. My journey has taken me through prestigious ambassador roles at IIT Guwahati, IIT Kanpur, NIT Trichy, and NIT Nagpur. I love turning code into creativity 💻🌸
//                     </p>

//                     {/* Info Cards */}
//                     <motion.ul
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0'
//                     >
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 whileHover={{ scale: 1.05 }}
//                                 key={index}
//                                 className='bg-purple-100 dark:bg-purple-800 border border-purple-300 dark:border-purple-600 rounded-xl p-6 cursor-pointer hover:shadow-lg duration-500 text-purple-900 dark:text-purple-100'
//                             >
//                                 <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10 mb-3 mx-auto' />
//                                 <h3 className='text-lg font-semibold mb-1'>{title}</h3>
//                                 <p className='text-sm'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                     {/* Tools */}
//                     <motion.h4 
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.3 }}
//                         className='mt-12 mb-6 text-xl font-semibold text-purple-700 dark:text-purple-100'
//                     >
//                         💻 Tools I Love
//                     </motion.h4>
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1.2 }}
//                         className='flex flex-wrap justify-center items-center gap-4'
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li 
//                                 key={index}
//                                 whileHover={{ scale: 1.1, rotate: 5 }}
//                                 className='w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center border-2 border-purple-300 bg-white rounded-lg dark:bg-purple-900 dark:border-purple-500 shadow-sm hover:-translate-y-1 transition-all'
//                             >
//                                 <Image src={tool} alt='Tool' className='w-8 sm:w-10' />
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     )
// }

// export default About










// 'use client'

// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//   const infoList = [  
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, C, C++, Java, Python' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//   ]

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git]

//   return (
//     <motion.section
//       id='about'
//       className="relative px-12 py-24 bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-900 dark:via-purple-950 dark:to-black rounded-3xl max-w-7xl mx-auto"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Decorative floating shapes */}
//       <motion.div 
//         className="absolute top-6 right-12 w-28 h-28 bg-purple-300 rounded-full opacity-20 blur-2xl animate-pulse"
//       />
//       <motion.div 
//         className="absolute bottom-12 left-12 w-20 h-20 bg-purple-400 rounded-full opacity-30 blur-xl animate-pulse delay-2000"
//       />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="mb-14 text-center"
//       >
//         <h4 className="text-purple-700 dark:text-purple-300 font-semibold text-lg tracking-widest uppercase mb-2 font-cursive">About Me</h4>
//         <h2 className="text-5xl md:text-6xl font-extrabold text-purple-900 dark:text-white font-cursive leading-tight">
//           Hello, I’m Vipul 👋
//         </h2>
//       </motion.div>

//       {/* Main content */}
//       <div className="flex flex-col-reverse lg:flex-row gap-14 items-center">

//         {/* Text content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="lg:w-2/3 text-center lg:text-left"
//         >
//           <p className="text-lg text-purple-800 dark:text-purple-200 mb-12 max-w-xl mx-auto lg:mx-0 font-serif leading-relaxed">
//             I’m a passionate 3rd-year B.Tech Computer Science student at VIT Vellore, with a love for coding and technology. I’ve worked with many languages like Python, C++, JavaScript and frameworks such as React and Node.js. My experience as a campus ambassador at IIT Guwahati, IIT Kanpur, NIT Trichy, and NIT Nagpur has helped me grow my leadership and networking skills.<br /><br />
//             I enjoy turning complex problems into elegant solutions and constantly seek to learn new tech trends to make a real impact.
//           </p>

//           {/* Info cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(128, 0, 128, 0.25)' }}
//                 className="bg-white dark:bg-purple-800 rounded-xl shadow-md border border-purple-200 dark:border-purple-700 p-6 flex flex-col items-center cursor-pointer transition-shadow"
//               >
//                 <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-12 h-12 mb-4" />
//                 <h3 className="text-purple-900 dark:text-purple-100 font-semibold text-lg mb-1">{title}</h3>
//                 <p className="text-purple-700 dark:text-purple-300 text-sm text-center">{description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tools Section */}
//           <motion.h4
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="mt-16 mb-8 text-purple-700 dark:text-purple-300 font-semibold text-xl text-center lg:text-left"
//           >
//             Tools I Love 💻
//           </motion.h4>
//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.2, delay: 0.7 }}
//             className="flex justify-center lg:justify-start flex-wrap gap-6 max-w-xl mx-auto lg:mx-0"
//           >
//             {toolsData.map((tool, idx) => (
//               <motion.li
//                 key={idx}
//                 whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 8px 20px rgba(128, 0, 128, 0.3)' }}
//                 className="w-16 h-16 bg-white dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-xl flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt='Tool icon' className="w-10 h-10" />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>

//         {/* Profile Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="w-72 sm:w-80 rounded-3xl shadow-xl border-8 border-purple-300 dark:border-purple-600 overflow-hidden"
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="w-full h-full object-cover rounded-3xl"
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }

// export default About






// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, C, C++, Java, Python' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="max-w-6xl mx-auto my-24 px-8 py-12 rounded-2xl bg-gradient-to-tr from-purple-200 to-purple-100 dark:from-purple-900 dark:to-purple-800 shadow-xl relative"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         {/* Left - Profile Image */}
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           {/* Glowing animated ring */}
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         {/* Right - Text & Info */}
//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 dark:text-purple-300 tracking-tight">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 dark:text-purple-200 leading-relaxed max-w-xl">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           {/* Info Cards Vertical */}
//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-white dark:bg-purple-900 shadow-md border border-purple-300 dark:border-purple-700 cursor-pointer"
//               >
//                 <Image
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h3 className="text-purple-900 dark:text-purple-100 font-semibold text-xl">{title}</h3>
//                   <p className="text-purple-700 dark:text-purple-300">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tools Section */}
//           <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mt-8 mb-4">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 20px rgba(128,0,128,0.3)' }}
//                 className="w-14 h-14 bg-white dark:bg-purple-800 border border-purple-400 dark:border-purple-700 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

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
//   )
// }

// export default About






// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     {
//       icon: assets.code_icon,
//       iconDark: assets.code_icon_dark,
//       title: 'Languages',
//       description: 'HTML, CSS, JavaScript, C, C++, Java, Python'
//     },
//     {
//       icon: assets.edu_icon,
//       iconDark: assets.edu_icon_dark,
//       title: 'Education',
//       description: 'B.Tech in Computer Science'
//     },
//     {
//       icon: assets.project_icon,
//       iconDark: assets.project_icon_dark,
//       title: 'Projects',
//       description: 'Built more than 5 projects'
//     }
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="max-w-6xl mx-auto my-24 px-8 py-12 rounded-2xl shadow-xl relative bg-gradient-to-tr from-purple-100 to-purple-300"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         {/* Left - Profile Image */}
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           {/* Glowing animated ring */}
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         {/* Right - Text & Info */}
//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 tracking-tight">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 leading-relaxed max-w-xl">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           {/* Info Cards Vertical */}
//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-white shadow-md border border-purple-300 cursor-pointer"
//               >
//                <Image
//   src={isDarkMode && iconDark ? iconDark : icon}
//   alt={title}
//   className="w-12 h-12"
// />

//                 <div>
//                   <h3 className="text-purple-900 font-semibold text-xl">{title}</h3>
//                   <p className="text-purple-800">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tools Section */}
//           <h3 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 20px rgba(128,0,128,0.3)' }}
//                 className="w-14 h-14 bg-white border border-purple-400 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

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
// };

// export default About;










// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     {
//       icon: assets.code_icon,
//       iconDark: assets.code_icon_dark,
//       title: 'Languages',
//       description: 'HTML, CSS, JavaScript, C, C++, Java, Python'
//     },
//     {
//       icon: assets.edu_icon,
//       iconDark: assets.edu_icon_dark,
//       title: 'Education',
//       description: 'B.Tech in Computer Science'
//     },
//     {
//       icon: assets.project_icon,
//       iconDark: assets.project_icon_dark,
//       title: 'Projects',
//       description: 'Built more than 5 projects'
//     }
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="w-full max-w-[95%] mx-auto my-24 px-2 py-12 rounded-2xl shadow-xl relative bg-gradient-to-tr from-purple-100 to-purple-300"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         {/* Left - Profile Image */}
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           {/* Glowing animated ring */}
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         {/* Right - Text & Info */}
//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 tracking-tight">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 leading-relaxed max-w-xl">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           {/* Info Cards Vertical */}
//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-white shadow-md border border-purple-300 cursor-pointer"
//               >
//                 <Image
//                   src={isDarkMode && iconDark ? iconDark : icon}
//                   alt={title}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h3 className="text-purple-900 font-semibold text-xl">{title}</h3>
//                   <p className="text-purple-800">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tools Section */}
//           <h3 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 8px 20px rgba(128,0,128,0.3)' }}
//                 className="w-14 h-14 bg-white border border-purple-400 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

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
// };

// export default About;













// "use client";

// import { assets } from '@/assets/assets';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     {
//       icon: assets.code_icon,
//       iconDark: assets.code_icon_dark,
//       title: 'Languages',
//       description: 'HTML, CSS, JavaScript, C, C++, Java, Python',
//     },
//     {
//       icon: assets.edu_icon,
//       iconDark: assets.edu_icon_dark,
//       title: 'Education',
//       description: 'B.Tech in Computer Science',
//     },
//     {
//       icon: assets.project_icon,
//       iconDark: assets.project_icon_dark,
//       title: 'Projects',
//       description: 'Built more than 5 projects',
//     },
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="w-full max-w-[95%] mx-auto my-24 px-2 py-12 shadow-xl relative rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none transition-colors duration-300 bg-gradient-to-tr dark:from-[#1e102e] dark:to-[#2a1342] from-purple-100 to-purple-300"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 dark:text-purple-100 tracking-tight">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 dark:text-purple-200 leading-relaxed max-w-xl">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-white dark:bg-[#251040] shadow-md border border-purple-300 cursor-pointer transition-colors duration-300"
//               >
//                 <Image
//                   src={isDarkMode && iconDark ? iconDark : icon}
//                   alt={title}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h3 className="text-purple-900 dark:text-purple-100 font-semibold text-xl">{title}</h3>
//                   <p className="text-purple-800 dark:text-purple-200">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-100 mt-8 mb-4">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   boxShadow: '0 8px 20px rgba(128,0,128,0.3)',
//                 }}
//                 className="w-14 h-14 bg-white dark:bg-[#1c0d30] border border-purple-400 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <motion.div
//         className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-300 dark:bg-purple-700 opacity-30 blur-3xl"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-purple-400 dark:bg-purple-800 opacity-25 blur-2xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//     </motion.section>
//   );
// };

// export default About;













// "use client";

// import { assets } from '@/assets/assets';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     {
//       icon: assets.code_icon,
//       iconDark: assets.code_icon_dark,
//       title: 'Languages',
//       description: 'HTML, CSS, JavaScript, C, C++, Java, Python',
//     },
//     {
//       icon: assets.edu_icon,
//       iconDark: assets.edu_icon_dark,
//       title: 'Education',
//       description: 'B.Tech in Computer Science',
//     },
//     {
//       icon: assets.project_icon,
//       iconDark: assets.project_icon_dark,
//       title: 'Projects',
//       description: 'Built more than 5 projects',
//     },
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="w-full max-w-[95%] mx-auto my-24 px-2 py-12 shadow-xl relative rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none transition-colors duration-300 bg-gradient-to-tr from-purple-100 to-purple-300 dark:from-purple-100 dark:to-purple-300"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 tracking-tight">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 leading-relaxed max-w-xl">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-purple-200 dark:bg-purple-200 shadow-md border border-purple-300 cursor-pointer transition-colors duration-300"
//               >
//                 <Image
//                   src={isDarkMode && iconDark ? iconDark : icon}
//                   alt={title}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h3 className="text-purple-900 font-semibold text-xl">{title}</h3>
//                   <p className="text-purple-800">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <h3 className="text-xl font-semibold text-purple-800 mt-8 mb-4">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   boxShadow: '0 8px 20px rgba(128,0,128,0.3)',
//                 }}
//                 className="w-14 h-14 bg-white dark:bg-purple-100 border border-purple-400 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Decorative animated blobs */}
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
// };

// export default About;




// "use client";

// import { assets } from '@/assets/assets';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const About = ({ isDarkMode }) => {
//   const infoList = [
//     {
//       icon: assets.code_icon,
//       iconDark: assets.code_icon_dark,
//       title: 'Languages',
//       description: 'HTML, CSS, JavaScript, C, C++, Java, Python',
//     },
//     {
//       icon: assets.edu_icon,
//       iconDark: assets.edu_icon_dark,
//       title: 'Education',
//       description: 'B.Tech in Computer Science',
//     },
//     {
//       icon: assets.project_icon,
//       iconDark: assets.project_icon_dark,
//       title: 'Projects',
//       description: 'Built more than 5 projects',
//     },
//   ];

//   const toolsData = [assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git];

//   return (
//     <motion.section
//       id="about"
//       className="w-full max-w-[95%] mx-auto my-24 px-2 py-12 shadow-xl relative rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none transition-colors duration-300 bg-gradient-to-tr from-purple-100 to-purple-300"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row gap-16 items-center">
//         <motion.div
//           className="relative w-72 h-72 rounded-xl overflow-hidden border-8 border-purple-500 shadow-[0_0_30px_rgba(128,0,128,0.6)]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <Image
//             src={assets.user_image}
//             alt="Profile Image"
//             className="object-cover w-full h-full"
//             priority
//           />
//           <motion.div
//             className="absolute inset-0 rounded-xl border-4 border-purple-400 opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//           />
//         </motion.div>

//         <div className="flex-1 flex flex-col gap-12">
//           <h2 className="text-4xl font-extrabold text-purple-900 tracking-tight font-Ovo">
//             About Vipul
//           </h2>

//           <p className="text-lg text-purple-800 leading-relaxed max-w-xl font-Ovo">
//             I am a passionate 3rd-year B.Tech Computer Science student from VIT Vellore. Skilled in Python, C++, JavaScript, React, and more. Experienced as campus ambassador across IITs and NITs, developing leadership and networking skills. I love solving problems and building impactful tech solutions.
//           </p>

//           <div className="flex flex-col gap-6">
//             {infoList.map(({ icon, iconDark, title, description }, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(128,0,128,0.3)' }}
//                 className="flex items-center gap-6 p-5 rounded-lg bg-[#f3e8ff] shadow-md border border-[#e9d8fd] cursor-pointer transition-colors duration-300"
//               >
//                 <Image
//                   src={isDarkMode && iconDark ? iconDark : icon}
//                   alt={title}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h3 className="text-purple-900 font-semibold text-xl font-Ovo">{title}</h3>
//                   <p className="text-purple-800 font-Ovo">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <h3 className="text-xl font-semibold text-purple-800 mt-8 mb-4 font-Ovo">
//             Tools I Use
//           </h3>
//           <div className="flex gap-6 flex-wrap max-w-xl">
//             {toolsData.map((tool, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   boxShadow: '0 8px 20px rgba(128,0,128,0.3)',
//                 }}
//                 className="w-14 h-14 bg-[#f3e8ff] border border-[#e9d8fd] rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
//               >
//                 <Image src={tool} alt="Tool Icon" className="w-10 h-10" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

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
// };

// export default About;
