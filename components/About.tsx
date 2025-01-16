'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/about1.jpg"
                alt="Devina Jain"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-800 mb-4">
                With over 15 years of experience in corporate law, Miss Jain has established herself as a trusted legal advisor for businesses of all sizes. Her expertise in contract negotiation, mergers and acquisitions, and intellectual property has helped countless clients achieve their goals and protect their interests.
              </p>
              <p className="text-gray-800">
                Devina's commitment to her clients goes beyond the courtroom. She believes in building long-lasting relationships and providing personalized solutions that address each client's unique needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

