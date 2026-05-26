import { motion } from 'framer-motion';

/** Reusable section title with accent line */
export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
    </motion.div>
  );
}
