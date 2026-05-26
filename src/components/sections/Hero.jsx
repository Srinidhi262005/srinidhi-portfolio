import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';

const socialIcons = [
  { icon: Github, href: profile.social.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: profile.social.email, label: 'Email' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 2.2, // Wait for loading screen fade-out (1.8s delay + 0.5s duration)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier easeOut
    },
  },
};

/** Refined Hero section with modern AI Developer style */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl" />
      <ParticleBackground />

      <div className="section-container relative z-10 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 border border-white/10 bg-white/[0.02]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">
              Open to collaborations & opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-accent-cyan font-mono text-sm sm:text-base tracking-widest uppercase mb-3 font-semibold"
          >
            {profile.hero.greeting}
          </motion.p>

          {/* Bold visually prominent Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-none"
          >
            {profile.fullName}
          </motion.h1>

          {/* Glowing Gradient Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-accent-cyan via-white to-accent-violet bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] animate-pulse-slow"
          >
            {profile.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            {profile.hero.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              icon={Briefcase}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              icon={Download}
              href={profile.resumeUrl}
              download="Kaiytha_Srinidhi_Reddy_Resume.pdf"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-xl text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 border border-white/[0.05]"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 hover:text-accent-cyan transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
