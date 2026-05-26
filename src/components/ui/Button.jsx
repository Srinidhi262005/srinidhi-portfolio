import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent-cyan/90 to-accent-violet/90 text-white hover:shadow-glow border border-white/10',
  secondary:
    'glass text-white hover:bg-white/[0.08] border border-white/10',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
};

/** Reusable button with motion hover */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  download,
  type = 'button',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${variants[variant]} ${className}`;

  const MotionComponent = motion.a;

  if (href) {
    return (
      <MotionComponent
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
        {...props}
      >
        {Icon && <Icon size={18} />}
        {children}
      </MotionComponent>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
}
