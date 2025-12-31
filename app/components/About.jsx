<<<<<<< HEAD
=======
// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//     const infoList = [  
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML,CSS,JavaScript,C, C++,Java,Python.' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
//     ];
    
//     const toolsData = [
//         assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
//     ];

//     return (
//         <motion.div 
//             id='about' 
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
//                 Introduction
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 About Me
//             </motion.h2>

//             {/* Content Section */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex flex-col lg:flex-row items-center gap-20 my-20'
//             >
//                 {/* Profile Image with Hover Effect */}
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     className='w-64 sm:w-80 rounded-3xl shadow-lg transform transition-all duration-300'
//                 >
//                     <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//                 </motion.div>

//                 {/* Text & Information Section */}
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className='flex-1'
//                 >
//                     <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
//                         About Me
// I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions. I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python.

// I gained real-world exposure through my Software Development Internship at Bluestock Fintech, where I contributed to an end-to-end IPO web application by developing responsive frontends, designing RESTful APIs, and working with databases. I enjoy problem-solving and have a strong interest in data structures, algorithms, and AI/ML, including participation in the Smart India Hackathon, where I worked on an AI-based women’s safety project.

// Alongside technical work, I serve as a Campus Ambassador for IITs and NITs, which has strengthened my leadership, communication, and networking skills. I’m a curious learner who enjoys exploring new technologies and turning ideas into impactful, real-world applications.
//                     </p>

//                     {/* Info Cards */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
//                     >
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 whileHover={{ scale: 1.05 }}
//                                 className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
//                                 key={index}
//                             >
//                                 <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
//                                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                                 <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                     {/* Tools Section */}
//                     <motion.h4 
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.3, delay: 0.5 }}
//                         className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
//                     >
//                         Tools I Use
//                     </motion.h4>
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1.5, delay: 0.6 }}
//                         className='flex flex-wrap justify-center items-center gap-4 sm:gap-5'
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li 
//                                 whileHover={{ scale: 1.1, rotate: 5 }}
//                                 className='flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-gray-50 dark:bg-darkHover/50 dark:border-white/50'
//                                 key={index}
//                             >
//                                 <Image src={tool} alt='Tool' className='w-8 sm:w-10' />
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default About;






>>>>>>> 689ebc1 (Add Projects)


import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
    const infoList = [  
        { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML,CSS,JavaScript,C, C++,Java,Python.' },
        { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
        { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 9+ real-world projects' }
    ];
    
    const toolsData = [
        assets.vscode,
assets.git,
assets.gitHub,
assets.reactlogo,
assets.nodejs,
assets.mongodb,
<<<<<<< HEAD
assets.postgresql,
=======
assets.postgresql  ,
>>>>>>> 689ebc1 (Add Projects)
assets.nextjs1,
assets.figma,
assets.postman,
assets.vercel,
assets.render

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

About Me I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions.
I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python. I gained real-world exposure through my Software Development Internship at Bluestock Fintech,
where I contributed to an end-to-end IPO web application by developing responsive frontends, designing RESTful APIs, and working with databases. 
I enjoy problem-solving and have a strong interest in data structures, algorithms, and AI/ML, including participation in the 
Smart India Hackathon, where I worked on an AI-based women’s safety project. Alongside technical work,
I serve as a Campus Ambassador for IITs and NITs, which has strengthened my leadership, communication, and networking skills. I’m a curious learner who enjoys exploring new technologies and turning ideas into impactful, real-world applications.
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






<<<<<<< HEAD
=======











>>>>>>> 689ebc1 (Add Projects)
// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//     const infoList = [  
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML,CSS,JavaScript,C, C++,Java,Python.' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
<<<<<<< HEAD
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 9 projects' }
//     ];
    
//     const toolsData = [
//         assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
=======
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 9+ real-world projects' }
//     ];
    
//     const toolsData = [
//         assets.vscode,
//         assets.firebase,
//         assets.mongodb,
//         assets.figma,
//         assets.git,
//         assets.gitHub,
//         assets.nodejs,
//         assets.reactlogo,
//         assets.postgresql,
//         assets.vercel,
//         assets.nextjs,
//         assets.postman,
//         assets.render
>>>>>>> 689ebc1 (Add Projects)
//     ];

//     return (
//         <motion.div 
//             id='about' 
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
//                 Introduction
//             </motion.h4>
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 About Me
//             </motion.h2>

//             {/* Content Section */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex flex-col lg:flex-row items-center gap-20 my-20'
//             >
<<<<<<< HEAD
//                 {/* Profile Image with Hover Effect */}
=======
//                 {/* Profile Image */}
>>>>>>> 689ebc1 (Add Projects)
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     className='w-64 sm:w-80 rounded-3xl shadow-lg transform transition-all duration-300'
//                 >
//                     <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//                 </motion.div>

<<<<<<< HEAD
//                 {/* Text & Information Section */}
=======
//                 {/* Text & Info */}
>>>>>>> 689ebc1 (Add Projects)
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className='flex-1'
//                 >
//                     <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
<<<<<<< HEAD
//                         About Me

// About Me I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions.
// I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python. I gained real-world exposure through my Software Development Internship at Bluestock Fintech,
// where I contributed to an end-to-end IPO web application by developing responsive frontends, designing RESTful APIs, and working with databases. 
// I enjoy problem-solving and have a strong interest in data structures, algorithms, and AI/ML, including participation in the 
// Smart India Hackathon, where I worked on an AI-based women’s safety project. Alongside technical work,
// I serve as a Campus Ambassador for IITs and NITs, which has strengthened my leadership, communication, and networking skills. I’m a curious learner who enjoys exploring new technologies and turning ideas into impactful, real-world applications.
=======
//                         I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions.
//                         I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python.
//                         I gained real-world exposure through my Software Development Internship at Bluestock Fintech, where I contributed to an end-to-end IPO web application.
//                         Alongside technical work, I serve as a Campus Ambassador for IITs and NITs, strengthening my leadership and communication skills.
>>>>>>> 689ebc1 (Add Projects)
//                     </p>

//                     {/* Info Cards */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
//                     >
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 whileHover={{ scale: 1.05 }}
//                                 className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
//                                 key={index}
//                             >
//                                 <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
//                                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                                 <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                     {/* Tools Section */}
//                     <motion.h4 
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.3, delay: 0.5 }}
//                         className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
//                     >
//                         Tools I Use
//                     </motion.h4>
<<<<<<< HEAD
=======

//                     {/* ✅ MOBILE-FRIENDLY TOOLS GRID */}
>>>>>>> 689ebc1 (Add Projects)
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1.5, delay: 0.6 }}
<<<<<<< HEAD
//                         className='flex flex-wrap justify-center items-center gap-4 sm:gap-5'
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li 
//                                 whileHover={{ scale: 1.1, rotate: 5 }}
//                                 className='flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-gray-50 dark:bg-darkHover/50 dark:border-white/50'
//                                 key={index}
//                             >
//                                 <Image src={tool} alt='Tool' className='w-8 sm:w-10' />
=======
//                         className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-5 max-w-2xl'
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li 
//                                 whileHover={{ scale: 1.1 }}
//                                 className='flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border border-gray-400 rounded-xl cursor-pointer bg-gray-50 dark:bg-darkHover/50 dark:border-white/50 transition-all duration-300 active:scale-95'
//                                 key={index}
//                             >
//                                 <Image src={tool} alt='Tool' className='w-7 sm:w-9' />
>>>>>>> 689ebc1 (Add Projects)
//                             </motion.li>
//                         ))}
//                     </motion.ul>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default About;

<<<<<<< HEAD
=======





// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//     const infoList = [  
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML,CSS,JavaScript,C, C++,Java,Python.' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 9+ real-world projects' }
//     ];
    
//     const toolsData = [
//         assets.vscode,
//         assets.firebase,
//         assets.mongodb,
//         assets.figma,
//         assets.git,
//         assets.gitHub,
//         assets.nodejs,
//         assets.reactlogo,
//         assets.postgresql,
//         assets.vercel,
//         assets.nextjs,
//         assets.postman,
//         assets.render
//     ];

//     return (
//         <motion.div 
//             id='about' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Floating Background */}
//             <motion.div 
//                 className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//             />

//             {/* Title */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 Introduction
//             </motion.h4>

//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 About Me
//             </motion.h2>

//             {/* Main Content */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex flex-col lg:flex-row items-center gap-20 my-20'
//             >
//                 {/* Profile Image */}
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     className='w-64 sm:w-80 rounded-3xl shadow-lg'
//                 >
//                     <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//                 </motion.div>

//                 {/* Text */}
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className='flex-1'
//                 >
//                     <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
//                         I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions.
//                         I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python.
//                         I gained real-world exposure through my Software Development Internship at Bluestock Fintech, where I contributed to an end-to-end IPO web application.
//                         Alongside technical work, I serve as a Campus Ambassador for IITs and NITs, strengthening my leadership and communication skills.
//                     </p>

//                     {/* Info Cards */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
//                     >
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 key={index}
//                                 whileHover={{ scale: 1.05 }}
//                                 className='border border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50'
//                             >
//                                 <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
//                                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                                 <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                     {/* Tools */}
//                     <motion.h4 
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.3, delay: 0.5 }}
//                         className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
//                     >
//                         Tools I Use
//                     </motion.h4>

//                     {/* ✅ MOBILE GRID + DESKTOP CENTERED WRAP */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1.5, delay: 0.6 }}
//                         className="
//                             grid grid-cols-4 gap-4
//                             sm:grid-cols-6 sm:gap-5
//                             md:flex md:flex-wrap md:justify-center
//                             max-w-2xl mx-auto
//                         "
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li
//                                 key={index}
//                                 whileHover={{ scale: 1.1 }}
//                                 className='flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border border-gray-400 rounded-xl bg-gray-50 dark:bg-darkHover/50 dark:border-white/50 transition-all duration-300 active:scale-95'
//                             >
//                                 <Image src={tool} alt='Tool' className='w-7 sm:w-9' />
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default About;














// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"

// const About = ({ isDarkMode }) => {
//     const infoList = [  
//         { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, C, C++, Java, Python.' },
//         { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//         { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 9+ real-world projects' }
//     ];
    
//     const toolsData = [
//         assets.vscode,
//         assets.firebase,
//         assets.mongodb,
//         assets.figma,
//         assets.git,
//         assets.gitHub,
//         assets.nodejs,
//         assets.reactlogo,
//         assets.postgresql,
//         assets.vercel,
//         assets.nextjs,
//         assets.postman,
//         assets.render
//     ];

//     return (
//         <motion.div 
//             id='about' 
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover overflow-x-hidden'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//         >
//             {/* Floating Background */}
//             <motion.div 
//                 className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//             />

//             {/* Title */}
//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 Introduction
//             </motion.h4>

//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="text-center text-5xl font-Ovo"
//             >
//                 About Me
//             </motion.h2>

//             {/* Main Content */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className='flex flex-col lg:flex-row items-center gap-20 my-20'
//             >
//                 {/* Profile Image */}
//                 <motion.div 
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     whileHover={{ scale: 1.05, rotate: 2 }}
//                     className='w-64 sm:w-80 rounded-3xl shadow-lg'
//                 >
//                     <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
//                 </motion.div>

//                 {/* Text */}
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className='flex-1'
//                 >
//                     <p className='mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
//                         I’m a 3rd-year B.Tech student in Computer Science and Engineering at VIT Vellore, passionate about building practical and scalable tech solutions.
//                         I have hands-on experience in full-stack development and machine learning, working with technologies such as React, Node.js, MongoDB, PostgreSQL, and Python.
//                         I gained real-world exposure through my Software Development Internship at Bluestock Fintech, where I contributed to an end-to-end IPO web application.
//                         Alongside technical work, I serve as a Campus Ambassador for IITs and NITs, strengthening my leadership and communication skills.
//                     </p>

//                     {/* Info Cards */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
//                     >
//                         {infoList.map(({ icon, iconDark, title, description }, index) => (
//                             <motion.li
//                                 key={index}
//                                 whileHover={{ scale: 1.05 }}
//                                 className='border border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50'
//                             >
//                                 <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-10 h-10' />
//                                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                                 <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                     {/* Tools */}
//                     <motion.h4 
//                         initial={{ opacity: 0, y: -20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1.3, delay: 0.5 }}
//                         className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-xl'
//                     >
//                         Tools I Use
//                     </motion.h4>

//                     {/* ✅ FINAL FIXED TOOLS SECTION */}
//                     <motion.ul
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 1.5, delay: 0.6 }}
//                         className="
//                             w-full max-w-full overflow-hidden
//                             grid grid-cols-4 gap-4
//                             sm:grid-cols-5
//                             md:flex md:flex-wrap md:justify-center
//                             mx-auto
//                         "
//                     >
//                         {toolsData.map((tool, index) => (
//                             <motion.li
//                                 key={index}
//                                 whileHover={{ scale: 1.1 }}
//                                 className='flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 border border-gray-400 rounded-xl bg-gray-50 dark:bg-darkHover/50 dark:border-white/50 transition-all duration-300 active:scale-95'
//                             >
//                                 <Image src={tool} alt='Tool' className='w-7 sm:w-9' />
//                             </motion.li>
//                         ))}
//                     </motion.ul>

//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default About;
>>>>>>> 689ebc1 (Add Projects)
