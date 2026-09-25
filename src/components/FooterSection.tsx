import React from 'react';
import { Linkedin, Mail, MapPin, ArrowUp, Code2 } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg tracking-tight text-white">Razvan Cosmin Brudasca</span>
              <span className="text-white/30 text-xs font-mono">© {new Date().getFullYear()}</span>
            </div>
            <p className="text-white/40 text-xs">
              Senior PHP Developer • Software Solutions • Sântandrei, Bihor, România
            </p>
          </div>
        </div>

        {/* Central links */}
        <div className="flex items-center gap-4 text-xs text-white/60">
          <a
            href="https://www.linkedin.com/in/razvan-cosmin-brudasca-95466a94"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href="mailto:brudascacosmin@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-white/70" />
            <span>brudascacosmin@gmail.com</span>
          </a>
        </div>

        {/* Action: Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white/80 hover:text-white text-xs font-medium transition-all cursor-pointer active:scale-95"
            aria-label="Înapoi sus"
          >
            <span>Înapoi sus</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
