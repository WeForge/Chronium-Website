'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SparklesCore } from '@/components/sparkles';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  github?: string;
  instagram?: string;
  discord?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Zack',
    role: 'Lead Developer',
    bio: 'I’m a developer who loves making websites and Discord bots. I mess around with JavaScript, ForgeScript, and Next.js, always trying new things to make stuff better and more fun to use.',
    github: 'https://github.com/zack-911',
    instagram: 'https://instagram.com/o_o.muhammad',
    discord: 'https://discord.com/users/1273256222715285527',
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Sparkle Effect */}
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
        <div className="container mx-auto px-4 py-24">
          {/* Fix Clipping Issue */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12 pt-20"
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
            <p className="text-gray-300 leading-relaxed">Skibidi Rizz Ohio Yesh Yesh YEsh</p>
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
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-500 to-black text-white font-semibold text-2xl">
                      {getInitials(member.name)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
                  <p className="text-purple-300 text-center mb-2">{member.role}</p>
                  <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    )}
                    {member.discord && (
                      <a
                        href={member.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">Credits</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Icons by{' '}
                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                  Font Awesome
                </a>
              </li>
              <li>
                Animations powered by{' '}
                <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                  Framer Motion
                </a>
              </li>
              <li>
                Built with{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                  Next.js
                </a>{' '}
                and{' '}
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
