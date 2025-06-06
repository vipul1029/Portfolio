// import { assets } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// const Footer=({isDarkMode})=> {
//   return (
//     <div className='mt-20'>
//       <div className='text-center'>
//         <Image src={isDarkMode? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
//         <div className='w-max flex items-center gap-2 mx-auto'>
//             <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
//             tovipul.kr@gmail.com
//         </div>
//       </div>
//       <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'> 
//         <p> © 2025 williom mark all right reserved</p>
//       <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//         <li><a target='_blank' href="https://instagram.comgreatdda"> Github</a></li>
//         <li><a target='_blank' href="https://instagram.comgreatdda">linked</a></li>
//         <li><a target='_blank' href="https://instagram.comgreatdda">twitter</a></li>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Footer


















// import { assets } from '@/assets/assets';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Footer = ({ isDarkMode }) => {
//   return (
//     <motion.footer 
//       initial={{ opacity: 0 }} 
//       whileInView={{ opacity: 1 }} 
//       transition={{ duration: 1 }}
//       className='relative w-full px-[10%] py-16 bg-gradient-to-t from-gray-100 to-white dark:from-darkTheme dark:to-darkHover overflow-hidden'
//     >
//       {/* Floating Background Elements */}
//       <motion.div 
//         className="absolute top-10 left-20 w-32 h-32 bg-blue-400 opacity-30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ repeat: Infinity, duration: 7 }}
//       ></motion.div>
//       <motion.div 
//         className="absolute bottom-10 right-20 w-24 h-24 bg-purple-400 opacity-30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       ></motion.div>

//       {/* Logo & Email */}
//       <div className='text-center'>
//         <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-3' />
//         </motion.div>
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white text-lg font-medium'
//         >
//           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6' />
//           <span>tovipul.kr@gmail.com</span>
//         </motion.div>
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className='w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-white text-lg font-medium'
//         >
//           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6' />
//           <span>9523354658</span>
//         </motion.div>
//       </div>

//       {/* Copyright & Social Links */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='mt-12 border-t border-gray-400 pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-gray-600 dark:text-gray-300'
//       > 
//         <p>© Vipul Kumar - All rights reserved</p>
//         <ul className='flex items-center gap-6 mt-4 sm:mt-0'>
//           {[
//             { name: 'Github', url: 'https://github.com/vipul1029' },
//             { name: 'LinkedIn', url: 'https://linkedin.com/in/vipul-kumar-7697a428a' },
//             { name: 'Twitter', url: '#' }
//           ].map(({ name, url }, index) => (
//             <li key={index}>
//               <motion.a 
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//                 target='_blank' 
//                 href={url}
//                 className={`transition-all duration-300 font-medium ${
//                   isDarkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'
//                 }`}
//               >
//                 {name}
//               </motion.a>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;












// import { assets } from '@/assets/assets';
// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Footer = ({ isDarkMode }) => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       className={`max-w-6xl mx-auto mt-24 px-6 py-12 
//         ${isDarkMode ? 'bg-gradient-to-tr from-purple-900 to-purple-800' : 'bg-gradient-to-tr from-purple-200 to-purple-100'} 
//         text-center text-purple-900 dark:text-white shadow-xl`}
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//     >
//       {/* Floating Background Bubbles */}
//       <motion.div
//         className="absolute top-0 left-20 w-28 h-28 bg-purple-400 opacity-20 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
//         transition={{ repeat: Infinity, duration: 7 }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-20 w-20 h-20 bg-pink-300 opacity-20 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       />

//       {/* Logo */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-32 mx-auto mb-4" />
//       </motion.div>

//       {/* Contact Info */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="flex flex-col items-center gap-2 mb-6 font-Ovo text-lg"
//       >
//         <div className="flex items-center gap-2">
//           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Email" className="w-6" />
//           <span>tovipul.kr@gmail.com</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Phone" className="w-6" />
//           <span>+91 9523354658</span>
//         </div>
//       </motion.div>

//       {/* Divider Line */}
//       <hr className="border-t border-purple-300 dark:border-purple-600 mb-6 w-4/5 mx-auto" />

//       {/* Social Links and Copyright */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-purple-700 dark:text-purple-300 font-medium"
//       >
//         <p>© Vipul Kumar — All rights reserved</p>
//         <ul className="flex gap-6">
//           {[
//             { name: 'GitHub', url: 'https://github.com/vipul1029' },
//             { name: 'LinkedIn', url: 'https://linkedin.com/in/vipul-kumar-7697a428a' },
//             { name: 'Twitter', url: '#' }
//           ].map(({ name, url }, index) => (
//             <motion.li key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
//               <a
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`transition duration-300 hover:underline ${
//                   isDarkMode ? 'text-white hover:text-blue-300' : 'text-purple-900 hover:text-blue-700'
//                 }`}
//               >
//                 {name}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;





// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { assets } from '@/assets/assets';

// const Footer = ({ isDarkMode }) => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       className={`w-[95%] mx-auto mt-24 px-4 py-12 
//         ${isDarkMode ? 'bg-gradient-to-tr from-purple-900 to-purple-800' : 'bg-gradient-to-tr from-purple-200 to-purple-100'} 
//         text-center text-purple-900 dark:text-white shadow-xl relative`}
//       style={{
//         borderTopLeftRadius: '3.5rem',
//         borderBottomRightRadius: '3.5rem',
//         borderTopRightRadius: '0',
//         borderBottomLeftRadius: '0',
//       }}
//     >
//       {/* Name */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-Ovo mb-8 tracking-wide text-pink-300"
//       >
//         VIPUL
//       </motion.h2>

//       {/* Email & Phone */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="space-y-4 mb-8"
//       >
//         <div className="flex justify-center items-center gap-2 text-lg font-medium">
//           <Image
//             src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
//             alt="email"
//             className="w-6 h-6"
//           />
//           <span>tovipul.kr@gmail.com</span>
//         </div>
//         <div className="flex justify-center items-center gap-2 text-lg font-medium">
//           <Image
//             src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
//             alt="phone"
//             className="w-6 h-6"
//           />
//           <span>+91 9523354658</span>
//         </div>
//       </motion.div>

//       {/* Divider */}
//       <div className="border-t border-purple-300 w-[80%] mx-auto my-6"></div>

//       {/* Footer Bottom */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="flex flex-col sm:flex-row justify-between items-center text-sm text-purple-200"
//       >
//         <p>© Vipul Kumar — All rights reserved</p>
//         <ul className="flex gap-6 mt-4 sm:mt-0">
//           {[
//             { name: 'GitHub', url: 'https://github.com/vipul1029' },
//             { name: 'LinkedIn', url: 'https://linkedin.com/in/vipul-kumar-7697a428a' },
//             { name: 'Twitter', url: '#' },
//           ].map(({ name, url }, idx) => (
//             <li key={idx}>
//               <motion.a
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 className="hover:text-pink-300 transition-all duration-300 font-semibold"
//               >
//                 {name}
//               </motion.a>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;







import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`w-[95%] mx-auto mt-24 px-4 py-12 
        ${isDarkMode ? 'bg-gradient-to-tr from-purple-900 to-purple-800' : 'bg-gradient-to-tr from-purple-200 to-purple-100'} 
        text-center text-purple-900 dark:text-purple-300 shadow-xl relative`}
      style={{
        borderTopLeftRadius: '3.5rem',
        borderBottomRightRadius: '3.5rem',
        borderTopRightRadius: '0',
        borderBottomLeftRadius: '0',
      }}
    >
      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-Ovo mb-8 tracking-wide text-pink-300"
      >
        VIPUL
      </motion.h2>

      {/* Email & Phone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4 mb-8"
      >
        <div className="flex justify-center items-center gap-2 text-lg font-medium">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-6 h-6"
          />
          <span className="text-purple-900 dark:text-purple-300">tovipul.kr@gmail.com</span>
        </div>
        <div className="flex justify-center items-center gap-2 text-lg font-medium">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="phone"
            className="w-6 h-6"
          />
          <span className="text-purple-900 dark:text-purple-300">+91 9523354658</span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-purple-300 w-[80%] mx-auto my-6"></div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center text-sm"
      >
        <p className="text-purple-900 dark:text-purple-300">© Vipul Kumar — All rights reserved</p>
        <ul className="flex gap-6 mt-4 sm:mt-0">
          {[
            { name: 'GitHub', url: 'https://github.com/vipul1029' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/vipul-kumar-7697a428a' },
            { name: 'Twitter', url: '#' },
          ].map(({ name, url }, idx) => (
            <li key={idx}>
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-pink-300 transition-all duration-300 font-semibold text-purple-900 dark:text-purple-300"
              >
                {name}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
