import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

/** Animated project cards with tech badges and links */
export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="Real-world applications spanning AI, automation, and full stack development."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-hover glow-border rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Screenshot or gradient placeholder */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500 relative z-10">
                      {project.icon}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/20 to-transparent opacity-80 pointer-events-none" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-lg glass text-sm text-gray-300 hover:text-white transition-colors ${
                      project.demo ? 'flex-1' : 'w-full'
                    }`}
                  >
                    <Github size={16} />
                    View on GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan text-sm border border-accent-cyan/20 hover:bg-accent-cyan/20 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
