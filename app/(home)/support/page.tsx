"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Book} from "lucide-react"
import { SparklesCore } from "@/components/utility/sparkles"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Discord Community",
    description: "Join our vibrant Discord community for instant support and to connect with other Chronium users.",
    action: "Join Discord",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "For more complex issues or private inquiries, reach out to our dedicated support team via email.",
    action: "Send Email",
    link: "mailto:support@chronium.com",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Explore our comprehensive documentation for in-depth guides, tutorials, and FAQs.",
    action: "Read Docs",
    link: "/docs",
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen w-full bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          particleHeight={800}
        />
      </div>

      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Need Help? We&apos;re Here for You
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you&apos;re just getting started or need assistance with advanced features, our support team and
            resources are here to help you make the most of Chronium.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 hover:bg-purple-800/30 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <option.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <a
                  href={option.link}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  {option.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

