"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Active Servers", value: "10,000+" },
  { label: "Users Reached", value: "1M+" },
  { label: "Commands Used", value: "5M+" },
  { label: "Timezones Supported", value: "All" },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
          Kiko San by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl font-bold text-purple-400 mb-2"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

