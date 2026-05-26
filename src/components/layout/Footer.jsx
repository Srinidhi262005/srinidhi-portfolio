import { Heart } from 'lucide-react';
import { profile } from '../../data/profile';

/** Site footer with copyright */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          © {year} {profile.fullName}. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Built with <Heart className="w-4 h-4 text-accent-cyan fill-accent-cyan/50" /> using React & AI
        </p>
      </div>
    </footer>
  );
}
