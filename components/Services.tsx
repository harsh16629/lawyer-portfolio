'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Corporate Law', description: 'Expert guidance on business formation, governance, and compliance.' },
  { title: 'Contract Negotiation', description: 'Skilled negotiation and drafting of various business contracts.' },
  { title: 'Mergers & Acquisitions', description: 'Strategic advice and representation in M&A transactions.' },
  { title: 'Intellectual Property', description: 'Protection and management of your valuable intellectual assets.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

