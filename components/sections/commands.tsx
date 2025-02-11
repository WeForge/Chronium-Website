"use client"

import { motion } from "framer-motion"
import { Clock, Bell, Calendar, Globe } from "lucide-react"

const commands = [
  { icon: Clock, name: "/time", description: "Display current time in a specific timezone" },
  { icon: Bell, name: "/remind", description: "Set a reminder for yourself or the server" },
  { icon: Calendar, name: "/schedule", description: "Create or view scheduled events" },
  { icon: Globe, name: "/timezone", description: "Set or view server default timezone" },
]

export default function Commands() {
  return (
    <section id="commands" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
          Popular Commands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commands.map((command, index) => (
            <motion.div
              key={index}
              className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <command.icon className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{command.name}</h3>
                <p className="text-gray-300">{command.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

