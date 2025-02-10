import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import NavbarMobileButton from './NavbarMobileMenu';

function MobileNavbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-purple-500/10"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-purple-500" />
          <span className="text-white font-medium text-xl">Kiko San</span>
        </Link>
      </motion.div>
      <NavbarMobileButton />
    </motion.nav>
  );
}

export default MobileNavbar;
