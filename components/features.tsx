"use client"

import { motion } from "framer-motion"
import { Shield, Server, DollarSign, MessageCircle, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description: "Keep your server safe with powerful moderation tools and auto-moderation features.",
  },
  {
    icon: Server,
    title: "Server Management",
    description: "Streamline your server operations with customizable welcome messages, role management, and more.",
  },
  {
    icon: DollarSign,
    title: "Economy System",
    description: "Engage your community with a fun and interactive economy system, including games and rewards.",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot",
    description: "Interact with an intelligent chatbot that can answer questions and provide entertainment.",
  },
  {
    icon: Clock,
    title: "Scheduling & Reminders",
    description: "Set up events, reminders, and schedules to keep your server organized and on track.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Foster a vibrant community with polls, giveaways, and customizable user profiles.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12" data-aos="fade-up">
          Powerful Features, All for Free
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 hover:bg-purple-800/30 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

