"use client"

import { motion } from "framer-motion"
import { Bot, Shield, DollarSign, MessageCircle, Server } from "lucide-react"
import { FloatingBots } from "@/components/floating-bots"
import type React from "react"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingBots count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            All-in-One Discord Bot:
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {" "}
              Kiko San
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            Kiko San is your free, all-in-one Discord bot for moderation, server management, economy, and more. Keep
            your server organized, engage your community, and never miss a beat with our integrated chatbot!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <FeatureButton icon={Shield} label="Moderation" delay={1.1} />
            <FeatureButton icon={Server} label="Server Management" delay={1.3} />
            <FeatureButton icon={DollarSign} label="Economy System" delay={1.5} />
            <FeatureButton icon={MessageCircle} label="AI Chatbot" delay={1.7} />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
          >
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="mr-2 h-5 w-5" />
              Add to Discord
            </motion.button>
            <motion.button
              className="border border-purple-500 text-white px-8 py-3 rounded-md hover:bg-purple-500/20 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Server className="mr-2 h-5 w-5" />
              View All Features
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function FeatureButton({ icon: Icon, label, delay }: { icon: React.ElementType; label: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center bg-purple-800/30 backdrop-blur-sm rounded-full px-4 py-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Icon className="w-5 h-5 mr-2 text-purple-400" />
      <span className="text-white text-sm">{label}</span>
    </motion.div>
  )
}

