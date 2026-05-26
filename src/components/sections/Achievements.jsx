import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';
import SectionHeading from '../ui/SectionHeading';

/** Achievements timeline-style cards */
export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Industry-recognized training across ML, data analytics, and AI technologies."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent-cyan border-4 border-dark -translate-x-1/2 mt-6 z-10 shadow-glow" />

                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-hover glow-border rounded-2xl p-6"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <span className="text-xs text-accent-cyan font-medium uppercase tracking-wider">
                            {achievement.tag}
                          </span>
                          <span className={`block text-xs text-gray-500 ${isEven ? 'md:text-right' : ''}`}>
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
