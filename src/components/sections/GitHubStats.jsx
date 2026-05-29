import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitCommit } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

/**
 * GitHub stats section — displays profile link and stat placeholders.
 * Replace with GitHub API or github-readme-stats images when username is set.
 */
export default function GitHubStats() {
  const username = profile.githubUsername;
  const [showImages, setShowImages] = useState(true);
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0a0f&title_color=22d3ee&icon_color=8b5cf6&text_color=c9d1d9`;
  const streakUrl = `https://github-readme-streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true&background=0a0a0f&ring=22d3ee&fire=8b5cf6&currStreakLabel=8b5cf6`;

  const placeholderStats = [
    { icon: GitCommit, label: 'Contributions', value: '500+' },
    { icon: Star, label: 'Stars Earned', value: '50+' },
    { icon: GitBranch, label: 'Repositories', value: '20+' },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="Open Source"
          title="GitHub Activity"
          subtitle="Consistent contributions and collaborative development on GitHub."
        />

        {/* Placeholder stats when username not configured */}
        {username === 'yourusername' || !showImages ? (
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {placeholderStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-hover rounded-2xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-accent-cyan mx-auto mb-3" />
                  <p className="font-display text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-10"
          >
            <img
              src={statsUrl}
              alt="GitHub stats"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setShowImages(false)}
              className="rounded-2xl max-w-full"
            />
            <img
              src={streakUrl}
              alt="GitHub streak"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setShowImages(false)}
              className="rounded-2xl max-w-full"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-gray-300 hover:text-accent-cyan transition-colors"
          >
            View GitHub Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
