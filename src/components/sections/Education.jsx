import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import SectionHeading from '../ui/SectionHeading';

/** Education history */
export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="Strong foundation in Computer Science with specialization in AI & Machine Learning."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-hover glow-border rounded-2xl p-6 flex flex-col ${
                item.highlight ? 'md:col-span-1 ring-1 ring-accent-cyan/20' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <GraduationCap
                  className={`w-8 h-8 ${item.highlight ? 'text-accent-cyan' : 'text-gray-500'}`}
                />
                <span className="text-xs text-gray-500">{item.period}</span>
              </div>

              <h3
                className={`font-display font-semibold mb-2 ${
                  item.highlight ? 'text-white text-lg' : 'text-gray-200 text-base'
                }`}
              >
                {item.degree}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{item.institution}</p>
              <p
                className={`font-display font-bold ${
                  item.highlight ? 'text-2xl gradient-text' : 'text-lg text-accent-violet'
                }`}
              >
                {item.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
