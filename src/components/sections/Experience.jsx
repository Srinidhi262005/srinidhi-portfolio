import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';

/** Professional experience timeline */
export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="Experience"
          title="Industry Exposure"
          subtitle="Hands-on internships across AI, data analytics, and machine learning."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass-hover glow-border rounded-2xl p-6 md:p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-cyan/10 transition-colors" />

                <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-accent-cyan text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-gray-500 font-medium px-3 py-1 rounded-full glass w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((point) => (
                        <li key={point} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-accent-cyan mt-1.5 w-1 h-1 rounded-full bg-accent-cyan shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
