
// import Image from 'next/image'
// import react,{useState} from 'react'
// import React,{ assets } from '@/assets/assets'
// import { motion } from "motion/react"

// const Contact = ({isDarkMode}) => {
//     const [result, setResult] = useState("");

//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };
//   return (

//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1}}
//     id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' >
//       <motion.h4
//        initial={{opacity:0,y:-20}}
//        whileInView={{opacity:1,y:0}}
//        transition={{duration:0.5,delay:0.3}}
//       className='text-center mb-2 text-lg font-Ovo'>
//         Connect with me</motion.h4>
//       <motion.h2 
//        initial={{opacity:0,y:-20}}
//        whileInView={{opacity:1,y:0}}
//        transition={{duration:0.5,delay:0.5}}
//       className='text-center text-5xl font-Ovo'>
//         Get in touch
//       </motion.h2>
//  <motion.p 
//   initial={{opacity:0}}
//   whileInView={{opacity:1}}
//   transition={{duration:0.5,delay:0.7}}
//  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>

//     welcome to my web development portfolio explore a collectio of project showing my experience in front-end development.
// </motion.p>
// <motion.form 
//  initial={{opacity:0}}
//  whileInView={{opacity:1}}
//  transition={{duration:0.5,delay:0.9}}
// onSubmit={onSubmit}className='max-w-2xl mx-auto'>
//     {/* <div className='grid grid-cols-auto gap-6 mt-10 mb-8'> */}
//     <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>

//         <motion.input 
//          initial={{opacity:0,x:-50}}
//          whileInView={{opacity:1,x:0}}
//          transition={{duration:0.6,delay:1.1}}
//         type='text' placeholder='Enter you name' 
//         required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>
//        <motion.input
//        initial={{opacity:0,x:50}}
//        whileInView={{opacity:1,x:0}}
//        transition={{duration:0.6,delay:1.2}}
//        type='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>

//     </div>
//     <motion.textarea
//     initial={{opacity:0,y:100}}
//     whileInView={{opacity:1,y:0}}
//     transition={{duration:0.6,delay:1.3}}
//     rows='6' placeholder='Enter your message' required
// className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>
//     <motion.button 
//     whileHover={{scale:1.05}}
//     transition={{duration:0.3}}
//     type='submit' 
//     className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
//     text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now
//     <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
//     <p className='mt-4'>{result}</p>
// </motion.form>
// </motion.div>

//   )
// }

// export default Contact











// import Image from 'next/image'
// import React, { useState } from 'react'
// import { assets } from '@/assets/assets'
// import { motion } from "framer-motion"

// const Contact = ({ isDarkMode }) => {
//     const [result, setResult] = useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             setResult("Form Submitted Successfully");
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };

//     return (
//         <motion.div
//             id='contact'
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className='relative w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-gray-100 to-white dark:from-darkTheme dark:to-darkHover'
//         >
//             {/* Subtle Floating Background Element */}
//             <motion.div
//                 className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
//                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//                 transition={{ repeat: Infinity, duration: 6 }}
//             ></motion.div>

//             <motion.h4
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className='text-center mb-2 text-lg font-Ovo'
//             >
//                 Connect with me
//             </motion.h4>
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className='text-center text-5xl font-Ovo'
//             >
//                 Get in Touch
//             </motion.h2>

//             <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.7 }}
//                 className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300'
//             >
//                I'm currently available to take on new projects.so feel free to send me a message about anything that you want me to work on.You can contact anytime.
//             </motion.p>

//             <motion.form
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.9 }}
//                 onSubmit={onSubmit}
//                 className='max-w-2xl mx-auto'
//             >
//                 <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
//                     <motion.input
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 1.1 }}
//                         type='text'
//                         placeholder='Enter your name'
//                         required
//                         className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
//                         name='name'
//                     />
//                     <motion.input
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 1.2 }}
//                         type='email'
//                         placeholder='Enter your email'
//                         required
//                         className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
//                         name='email'
//                     />
//                 </div>

//                 <motion.textarea
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1.3 }}
//                     rows='6'
//                     placeholder='Enter your message'
//                     required
//                     className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
//                     name='message'
//                 ></motion.textarea>
// {/* 
//                 <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     type='submit'
//                     className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
//                     text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
//                 >
//                     Submit Now
//                     <Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
//                 </motion.button> */}
// <motion.button
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.3 }}
//     type='submit'
//     className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 
//     text-white rounded-full mx-auto hover:bg-black hover:shadow-lg transition-all duration-300 
//     dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
// >
//     Submit Now
//     <Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
// </motion.button>


//                 <p className='mt-4 text-gray-700 dark:text-gray-300'>{result}</p>
//             </motion.form>
//         </motion.div>
//     );
// };

// export default Contact;









// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'
// import { motion } from "framer-motion"
// import { assets } from '@/assets/assets'

// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();
//     if (data.success) {
//       setResult("Form Submitted Successfully!");
//       event.target.reset();
//     } else {
//       setResult("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row font-sans overflow-hidden" id="contact">

//       {/* Left Panel - Contact Info */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gradient-to-br from-purple-100 to-purple-300 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-6 rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem] md:rounded-tl-none shadow-lg relative z-10"
//         style={{ borderBottomRightRadius: '8rem' }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-purple-800 font-cursive"
//         >
//           Let's Connect 💌
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-sm text-purple-700 font-medium text-base leading-relaxed"
//         >
//           I'm open to new opportunities and projects. Feel free to reach out by sending a message. I’ll respond as soon as I can!
//         </motion.p>

//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="hover:scale-110 transition-transform duration-500"
//         >
//           {/* <Image
//             //src={assets.contact_illustration}
//             alt="Contact Illustration"
//             className="w-48 rounded-xl shadow-xl border-4 border-purple-300"
//           /> */}
//         </motion.div>
//       </motion.div>

//       {/* Right Panel - Form */}
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col justify-center p-10 gap-6 rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem] md:rounded-br-none shadow-lg relative z-10"
//         style={{ borderTopLeftRadius: '8rem' }}
//       >
//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="max-w-xl mx-auto w-full backdrop-blur-xl bg-white/50 dark:bg-black/40 p-8 rounded-3xl shadow-2xl border border-purple-200 dark:border-white/30"
//         >
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//           >
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
//             />
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
//             />
//           </motion.div>

//           <motion.textarea
//             whileFocus={{ scale: 1.02 }}
//             rows="6"
//             name="message"
//             placeholder="Your Message"
//             required
//             className="w-full mt-6 p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400"
//           />

//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
//             transition={{ duration: 0.3 }}
//             type="submit"
//             className="mt-6 w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 shadow-xl"
//           >
//             📩 Send Message
//           </motion.button>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 }}
//             className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300"
//           >
//             {result}
//           </motion.p>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;




'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { assets } from '@/assets/assets'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-Ovo overflow-hidden" id="contact">

      {/* Left Panel - Contact Info */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-purple-100 to-purple-300 w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 gap-6 rounded-b-[5rem] md:rounded-br-[8rem] md:rounded-bl-none rounded-tr-none rounded-tl-[2rem] md:rounded-tl-none shadow-lg relative z-10"
        style={{ borderBottomRightRadius: '8rem' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-800 font-Ovo"
        >
          Let's Connect 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-sm text-purple-700 text-base leading-relaxed font-Ovo"
        >
          I'm open to new opportunities and projects. Feel free to reach out by sending a message. I’ll respond as soon as I can!
        </motion.p>

        {/* Optional Illustration Placeholder */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hover:scale-110 transition-transform duration-500"
        >
          {/* Uncomment to use illustration */}
          {/* <Image
            src={assets.contact_illustration}
            alt="Contact Illustration"
            className="w-48 rounded-xl shadow-xl border-4 border-purple-300"
          /> */}
        </motion.div>
      </motion.div>

      {/* Right Panel - Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-black text-black dark:text-white w-full md:w-1/2 flex flex-col justify-center p-10 gap-6 rounded-t-[5rem] md:rounded-tl-[8rem] md:rounded-tr-none rounded-br-none rounded-bl-[2rem] md:rounded-br-none shadow-lg relative z-10"
        style={{ borderTopLeftRadius: '8rem' }}
      >
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto w-full backdrop-blur-xl bg-white/50 dark:bg-black/40 p-8 rounded-3xl shadow-2xl border border-purple-200 dark:border-white/30 font-Ovo"
        >
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400 font-Ovo"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400 font-Ovo"
            />
          </motion.div>

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full mt-6 p-3 rounded-md border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 focus:ring-2 focus:ring-purple-400 font-Ovo"
          />

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#7e22ce' }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="mt-6 w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 shadow-xl font-Ovo"
          >
            📩 Send Message
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300 font-Ovo"
          >
            {result}
          </motion.p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
