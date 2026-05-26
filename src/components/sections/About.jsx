import { motion } from 'framer-motion';
import { CheckCircle2, Users, Trophy, Calendar } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

/** About section with professional summary and stats */
export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="About Me"
          title="Engineering the Future with AI"
          subtitle="Where curiosity meets code — building solutions that matter."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {profile.about.summary}
            </p>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {profile.about.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={item}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {profile.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-hover glow-border rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Collaboration & events highlight */}
        {profile.about.leadership && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 glass-hover glow-border rounded-2xl p-6 md:p-10"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-violet" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {profile.about.leadership.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-cyan/10 text-accent-cyan text-xs font-medium border border-accent-cyan/20">
                    <Calendar size={14} />
                    Event Organizer
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-violet/10 text-accent-violet text-xs font-medium border border-accent-violet/20">
                    <Trophy size={14} />
                    Competition Winner
                  </span>
                </div>
              </div>

              <div className="lg:w-2/3">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {profile.about.leadership.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {profile.about.leadership.traits.map((trait) => (
                    <li
                      key={trait}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
