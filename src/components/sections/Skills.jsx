import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';

/** Categorized animated skill cards */
export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Expertise"
          title="Technical Arsenal"
          subtitle="A curated stack built for building intelligent, scalable applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-hover glow-border rounded-2xl p-6 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-[1px] mb-5`}
                >
                  <div className="w-full h-full rounded-xl bg-dark-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
