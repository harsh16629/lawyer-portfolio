'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const testimonials = [
  { name: 'John Smith', title: 'CEO, Tech Innovators Inc.', quote: 'Jain\'s expertise in corporate law was instrumental in our successful merger. Her attention to detail and strategic advice were invaluable.' },
  { name: 'Sarah Johnson', title: 'Founder, Green Energy Solutions', quote: 'Working with Devina on our intellectual property matters has been a game-changer. She truly understands the complexities of our industry.' },
  { name: 'Michael Chen', title: 'CFO, Global Investments Ltd.', quote: 'Miss Jain\'s guidance during our international expansion was crucial. Her knowledge of international business law is unparalleled.' },
  { name: 'Emily Rodriguez', title: 'Co-founder, StartUp Accelerator', quote: 'As a startup, we needed legal counsel who understood our unique challenges. Miss Devina has been an incredible asset to our growth.' },
  { name: 'David Thompson', title: 'General Counsel, Retail Giants Corp.', quote: 'I\'ve worked with many lawyers, but Devina\'s combination of legal acumen and business insight sets her apart. She\'s been instrumental in navigating complex regulatory issues.' }
]

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scroll = () => {
      controls.start({
        x: [0, -container.scrollWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      })
    }

    scroll()

    return () => controls.stop()
  }, [controls])

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue mb-12 text-center">Client Testimonials</h2>
        <div className="relative">
          <motion.div 
            ref={containerRef}
            className="flex"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-gray-900 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <p className="text-gray-300 mb-4 italic flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-blue-300 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

