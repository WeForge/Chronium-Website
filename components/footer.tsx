import { Bot } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="text-white font-medium text-xl">Chronium</span>
            </Link>
            <p className="text-gray-400 mt-2">Your All-In-One Discord Server Solution</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#commands" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-900/50 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Chronium. All rights reserved.<br />
          Website Developed By <strong><a href="https://github.com/Zack-911" target="_blank" rel="noopener noreferrer" className="underline">Zack-911</a></strong>
        </p>
        </div>
      </div>
    </footer>
  )
}

