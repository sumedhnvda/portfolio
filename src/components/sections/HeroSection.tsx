import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Container } from '../ui/Container';
import image from "../../public/photo.jpeg";

const socialLinks = [
  { icon: Github, href: 'https://github.com/sumedhnvda', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sumedhnavuda', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/sumedhnavuda', label: 'X' },
  { icon: Download, href: 'https://drive.google.com/file/d/1p6rfVlEOkFjqtYqvWFdi5jYt8DhXG9iz/view', label: 'Resume' },
  { icon: Mail, href: 'mailto:sumedhnavuda@outlook.com', label: 'Email' }
];

const SocialLink = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    className="text-zinc-400 hover:text-white transition-colors"
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export const HeroSection = () => (
  <Container>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center"
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={image}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 border-4 border-zinc-700"
        whileHover={{ scale: 1.1 }}
      />
      <motion.h1 
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Sumedh Navuda
      </motion.h1>
      <motion.p 
        className="text-zinc-400 text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Building Neural Networks, One Epoch at a Time
      </motion.p>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <SocialLink {...link} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Container>
);