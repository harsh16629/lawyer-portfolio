'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import StarryBackground from './StarryBackground'

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white py-32 overflow-hidden">
      <StarryBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/hero1.jpg"
              alt="Devina Jain"
              width={750}
              height={750}
              className="rounded-full shadow-lg mx-auto border-2 border-white"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left md:pl-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Devina Jain, Esq.</h2>
            <p className="text-xl mb-6 text-gray-300">Experienced Legal Counsel</p>
            <p className="text-lg mb-8 max-w-2xl">Protecting Your Rights and Securing Your Future with Expert Legal Guidance</p>
            <a 
              href="#contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

