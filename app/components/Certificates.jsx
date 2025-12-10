"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const certificates = [
   {
    title: "Software Development Engineer (SDE) Internship",
    issuer: "Bluestock Fintech | June 2025 – July 2025",
    image: "/c3.png",
    link: "#",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image: "/c1.png",
    link: "https://www.coursera.org/account/accomplishments/verify/QU91P5UUW762",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image: "/c2.jpg",
    link: "https://www.coursera.org/account/accomplishments/verify/IIGQ2UQ25Q0B",
  },
 
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image: "/c4.png",
    link: "https://www.coursera.org/account/accomplishments/verify/R8VPCDT4G90V",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    image: "/c5.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/AALN2B1O9W24",
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE & HP Foundation",
    image: "/c6.png",
    link: "#",
  },
  {
    title: "National Case Competition - Schbang X Marksoc SBSC (Elixir'25)",
    issuer: "Shaheed Bhagat Singh College (University of Delhi) | Unstop",
    image: "/c7.png",
    link: "https://unstop.com/certificate-preview/87329017-5963-4a5a-a8d4-8dc847d417d5?utm_campaign=site-emails",
  },
  {
    title: "National Space Hackathon 2025",
    issuer: "IIT Delhi (via Unstop)",
    image: "/c8.png",
    link: "https://unstop.com/certificate-preview/264136b6-878d-4317-87bf-a9b0960a0ade?utm_campaign=site-emails",
  },
  {
    title: "Code for Bharat - Season 2 Hackathon (Certificate of Appreciation)",
    issuer: "Tech Masters India",
    image: "/c9.png",
    link: "https://certificate.givemycertificate.com/c/e659bf97-d195-4a31-8ef4-224b00f552d5",
  },
  {
    title: "Hack-4-Mini 2.0 National Hackathon",
    issuer: "CodeOholics Community (supported by Unstop & GeeksforGeeks)",
    image: "/c10.png",
    link: "https://unstop.com/certificate-preview/87e373f1-5b81-47d9-a055-5944a16c2cb8?utm_campaign=site-emails",
  },
    {
    title: "InnovWar Hackathon",
    issuer: "GN Group of Institutes (via Unstop)",
    image: "/c11.png",
    link: "https://unstop.com/certificate-preview/14093353-f9a6-48ac-ba19-a5c844f03b34?utm_campaign=site-emails",
  },
    {
    title: "Code for Bharat - Season 2 Hackathon",
    issuer: "Tech Masters India (via Unstop)",
    image: "/c12.png",
    link: "https://unstop.com/certificate-preview/2f0839a8-b95f-4065-b72c-ee92e545a9ea?utm_campaign=site-emails",
  },
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full px-[12%] py-20 scroll-mt-20
                 bg-gradient-to-b from-gray-100 to-white 
                 dark:from-darkTheme dark:to-darkHover"
    >
      {/* Floating background element */}
      <motion.div
        className="absolute -top-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Achievements
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Certificates
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-8 font-Ovo 
                   text-gray-700 dark:text-gray-300"
      >
        A collection of my certificates from courses, workshops, hackathons,
        and technical events that reflect my learning journey and skills.
      </motion.p>

      {/* Summary pill */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-max mx-auto mb-10 px-4 py-2 rounded-full 
                   bg-white/80 dark:bg-darkHover/70 border border-gray-300 dark:border-white/40 
                   text-xs sm:text-sm text-gray-700 dark:text-gray-200"
      >
        {certificates.length}+ verified certificates across development, AI/ML, Hackathons, and problem solving.
      </motion.div> */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
 className="mx-auto mb-10 px-3 py-2 rounded-full
           bg-white/80 dark:bg-darkHover/70
           border border-gray-300 dark:border-white/40
           text-xs sm:text-sm text-gray-700 dark:text-gray-200
           max-w-[92vw] sm:max-w-xl lg:max-w-fit
           text-center break-words lg:whitespace-nowrap"

>
  <span className="font-semibold">
    {certificates.length}+{" "}
  </span>
  verified certificates across development, AI/ML, hackathons, and problem solving.
</motion.div>
      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="group border-[0.5px] border-gray-300 dark:border-white/40 
                       rounded-2xl bg-white/80 dark:bg-darkHover/40 
                       shadow-sm hover:shadow-xl duration-300 overflow-hidden flex flex-col"
          >
            {/* Image wrapper */}
            <div className="w-full relative" style={{ paddingTop: "65%" }}>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
              >
                <span className="m-3 text-xs px-3 py-1 rounded-full bg-white/90 text-gray-900 flex items-center gap-1">
                  View certificate
                  <Image
                    src={assets.send_icon}
                    alt="Open"
                    className="w-3 h-3"
                  />
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-800 dark:text-white line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {cert.issuer}
              </p>

              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black">
                  Certificate #{index + 1}
                </span>

                <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                  Open
                  <Image
                    src={assets.send_icon}
                    alt="Open"
                    className="w-3 h-3"
                  />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certificates;
