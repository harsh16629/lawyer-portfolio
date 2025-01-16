'use client'

import { motion } from 'framer-motion'

const experiences = [
  { year: '2010 - Present', title: 'Senior Partner', company: 'Doe & Associates Law Firm' },
  { year: '2005 - 2010', title: 'Associate Attorney', company: 'Smith & Johnson Legal Group' },
  { year: '2003 - 2005', title: 'Legal Intern', company: 'City Attorney\'s Office' },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue mb-12 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 flex"
            >
              <div className="w-1/4 pr-4 text-right">
                <p className="text-blue-800 font-semibold">{exp.year}</p>
              </div>
              <div className="w-3/4 border-l-2 border-blue-800 pl-4">
                <h3 className="text-lg font-semibold text-blue">{exp.title}</h3>
                <p className="text-gray-900">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

