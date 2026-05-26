import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

/** Contact form and social links */
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default mail client with form data — replace with Formspree/EmailJS for production
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: profile.email, href: profile.social.email },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'kaiytha-srinidhi-reddy', href: profile.social.linkedin },
    { icon: Github, label: 'GitHub', value: '@Srinidhi262005', href: profile.social.github },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Open to internships, team collaborations, tech events, and exciting opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 glass-hover rounded-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </motion.a>
            ))}

            <div className="flex items-center gap-3 p-4 text-gray-400">
              <MapPin className="w-5 h-5 text-accent-violet" />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/30 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <Button type="submit" icon={Send} className="w-full">
              {submitted ? 'Opening email client...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
