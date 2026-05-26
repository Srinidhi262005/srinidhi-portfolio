import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

/** Initial page load animation */
export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/10 flex items-center justify-center">
          <span className="font-display text-2xl font-bold gradient-text">
            {profile.name.charAt(0)}
          </span>
        </div>
        <motion.div
          className="absolute -inset-2 rounded-3xl border border-accent-cyan/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 text-sm tracking-wider"
      >
        Initializing...
      </motion.p>

      <motion.div
        className="mt-4 w-32 h-0.5 bg-dark-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
