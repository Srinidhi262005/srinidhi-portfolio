import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent-cyan/90 to-accent-violet/90 text-white border border-white/10 shadow-[0_0_24px_rgba(56,189,248,0.18)] hover:shadow-[0_0_30px_rgba(124,58,237,0.24)] focus-visible:ring-2 focus-visible:ring-accent-cyan/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
  secondary:
    'glass text-white hover:bg-white/[0.10] border border-white/15 shadow-[0_0_18px_rgba(56,189,248,0.12)] focus-visible:ring-2 focus-visible:ring-accent-cyan/35 focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
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
