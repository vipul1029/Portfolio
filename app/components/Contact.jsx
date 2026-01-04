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
















import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const whatsappLink = "https://wa.me/919523354658";
  const linkedinLink = "https://linkedin.com/in/vipul-kumar-7697a428a";
  const githubLink = "https://github.com/vipul1029";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d6a4b18-b011-4e15-a864-a605cd574cf4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full px-[12%] py-20 scroll-mt-20 
                 bg-gradient-to-b from-gray-100 to-white 
                 dark:from-darkTheme dark:to-darkHover"
    >
      {/* Floating background */}
      <motion.div
        className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Headings */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
        I'm currently available to take on new projects. Feel free to send me a
        message about anything you want me to work on. You can contact me
        anytime.
      </p>

      {/* Contact Form */}
      <motion.form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="p-3 border rounded-md bg-white dark:bg-darkHover/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="p-3 border rounded-md bg-white dark:bg-darkHover/30"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          required
          placeholder="Enter your message"
          className="w-full p-4 border rounded-md bg-white dark:bg-darkHover/30 mb-6"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center gap-2 bg-black/80 
                     text-white rounded-full mx-auto hover:bg-black 
                     hover:shadow-lg transition-all duration-300 
                     dark:bg-transparent dark:border-[0.5px] 
                     dark:hover:bg-darkHover"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
          {result}
        </p>
      </motion.form>

      {/* 🔥 Direct Contact Buttons (Services-style) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-6 mt-14"
      >
        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                     bg-gradient-to-r from-green-500 to-emerald-500 
                     text-white shadow-md hover:shadow-xl 
                     transition-all duration-300 flex items-center gap-2"
        >
          WhatsApp
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-3" />
          </span>
        </motion.a>

        {/* GitHub (CENTER) */}
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                     border border-gray-700 dark:border-white 
                     text-gray-900 dark:text-white 
                     bg-white/90 dark:bg-transparent 
                     hover:bg-gray-100 dark:hover:bg-darkHover/80 
                     shadow-sm hover:shadow-md 
                     transition-all duration-300 flex items-center gap-2"
        >
          GitHub
          <span className="w-7 h-7 rounded-full border border-gray-500 dark:border-white flex items-center justify-center">
            <Image src={assets.right_arrow_bold} alt="Arrow" className="w-3" />
          </span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                     bg-[#0A66C2] text-white shadow-md hover:shadow-xl 
                     transition-all duration-300 flex items-center gap-2"
        >
          LinkedIn
          <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-3" />
          </span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
