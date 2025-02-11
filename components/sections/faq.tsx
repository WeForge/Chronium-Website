"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is Chronium?",
    answer:
      "Chronium is an all-in-one Discord bot that offers a wide range of features including moderation, server management, economy system, and AI-powered chat capabilities. It's designed to enhance your Discord server experience and streamline community management.",
  },
  {
    question: "Is Chronium free to use?",
    answer:
      "Yes, Chronium offers a generous free tier that includes most of its core features. We also offer premium plans for servers that need advanced features and higher usage limits.",
  },
  {
    question: "How do I add Chronium to my Discord server?",
    answer:
      "You can add Chronium to your server by clicking the 'Add to Discord' button on our website. You'll need to have the 'Manage Server' permission in the Discord server you want to add it to.",
  },
  {
    question: "Can I customize Chronium's commands?",
    answer:
      "Chronium offers a high degree of customization. You can enable/disable specific commands, create custom commands, and even set up auto-responses tailored to your server's needs.",
  },
  {
    question: "How secure is Chronium?",
    answer:
      "Security is our top priority. Chronium uses industry-standard encryption for all data transmissions and adheres to Discord's security guidelines. We regularly update our bot to address any potential vulnerabilities.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div className="mb-4 border-b border-purple-800 pb-4" initial={false} animate={isOpen ? "open" : "closed"}>
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-xl font-semibold text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-purple-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-400" />
        )}
      </button>
      <motion.div
        variants={{
          open: { opacity: 1, height: "auto", marginTop: "1rem" },
          closed: { opacity: 0, height: 0, marginTop: "0" },
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300">{answer}</p>
      </motion.div>
    </motion.div>
  )
}

