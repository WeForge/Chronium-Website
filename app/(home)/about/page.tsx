"use client"

import { motion } from "framer-motion"
import { Bot, Github, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"
import { SparklesCore } from "@/components/sparkles"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    bio: "Passionate about creating tools that make Discord communities thrive.",
    avatar: "/team/alex.jpg",
    github: "https://github.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    bio: "Crafting intuitive and beautiful interfaces for seamless user experiences.",
    avatar: "/team/sarah.jpg",
    github: "https://github.com/sarahlee",
    twitter: "https://twitter.com/sarahlee",
    linkedin: "https://linkedin.com/in/sarahlee",
  },
  {
    name: "Mike Brown",
    role: "Backend Developer",
    bio: "Ensuring Chronium runs smoothly and efficiently behind the scenes.",
    avatar: "/team/mike.jpg",
    github: "https://github.com/mikebrown",
    twitter: "https://twitter.com/mikebrown",
    linkedin: "https://linkedin.com/in/mikebrown",
  },
]

export default function AboutPage() {
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

      <div className="relative z-10">
        
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Chronium
          </motion.h1>

          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Chronium was born out of a passion for creating tools that empower Discord communities. 
              Our team of dedicated developers and designers came together with a shared vision: 
              to build an all-in-one Discord bot that would revolutionize server management and enhance user engagement. 
              From humble beginnings, we've grown into a bot that serves thousands of communities, 
              always striving to innovate and improve based on user feedback and emerging technologies.
            </p>
          </motion.section>

          <motion.section 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <img 
                    src={member.avatar || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
                  <p className="text-purple-300 text-center mb-2">{member.role}</p>
                  <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Credits</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Icons by <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Lucide</a></li>
              <li>Animations powered by <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Framer Motion</a></li>
              <li>Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Tailwind CSS</a></li>
            </ul>
          </motion.section>
        </div>

      </div>
    </main>
  )
}
