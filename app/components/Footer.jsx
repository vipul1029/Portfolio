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


















import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vipul1029'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vipul-kumar-7697a428a'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919523354658'
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className='relative w-full px-[10%] py-16 bg-gradient-to-t from-gray-100 to-white dark:from-darkTheme dark:to-darkHover overflow-hidden'
    >

      {/* Background Blur Effects */}
      <motion.div
        className="absolute top-10 left-20 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.div
        className="absolute bottom-10 right-20 w-24 h-24 bg-purple-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Main Footer Content */}
      <div className='text-center relative z-10'>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
        >

          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt='Logo'
            loading="eager"
            className='w-36 mx-auto mb-5'
          />

        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className='max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-8 mb-8'
        >
          Passionate about building scalable software systems, AI-powered
          applications, and impactful digital experiences through modern
          full-stack development and machine learning.
        </motion.p>

        {/* Contact Info */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700 dark:text-white'>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className='flex items-center gap-2 text-base font-medium'
          >

            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt='Email'
              className='w-5'
            />

            <span>
              vipul.kumar2023@vitstudent.ac.in
            </span>

          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className='flex items-center gap-2 text-base font-medium'
          >

            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt='Phone'
              className='w-5'
            />

            <span>
              +91 9523354658
            </span>

          </motion.div>

        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='flex flex-wrap justify-center gap-4 mt-10'
        >

          {socialLinks.map((item, index) => (

            <motion.a
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              target='_blank'
              href={item.url}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
                ${
                  isDarkMode
                    ? 'border-white/20 text-white hover:bg-darkHover'
                    : 'border-gray-300 text-black hover:bg-gray-100'
                }`}
            >

              {item.name}

            </motion.a>

          ))}

        </motion.div>

      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className='relative z-10 mt-14 border-t border-gray-300 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400'
      >

        <p>
          © 2026 Vipul Kumar. All rights reserved.
        </p>

        <p>
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>

      </motion.div>

    </motion.footer>
  );
};

export default Footer;