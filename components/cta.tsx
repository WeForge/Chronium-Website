"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Revolutionize Your Discord Server?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of servers already using Kiko San to enhance moderation, management, and community engagement -
          all for free!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-colors text-lg flex items-center justify-center mx-auto">
            <Bot className="mr-2 h-6 w-6" />
            Add Kiko San to Discord - It&apos;s Free!
          </button>
        </motion.div>
      </div>
    </section>
  )
}

