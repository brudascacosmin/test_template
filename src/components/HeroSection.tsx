import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Linkedin, Mail, MapPin, Check, FileText, Terminal, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenCV: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV, onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const isFadingOutRef = useRef<boolean>(false);

  const [messageEmail, setMessageEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const animateOpacity = (from: number, to: number, duration: number, onComplete?: () => void) => {
    if (!videoRef.current) return;
    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
    }
    const startTime = performance.now();
    const el = videoRef.current;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = from + (to - from) * progress;
      el.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        fadeAnimationRef.current = requestAnimationFrame(step);
      } else {
        fadeAnimationRef.current = null;
        if (onComplete) onComplete();
      }
    };

    fadeAnimationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isFadingOutRef.current) return;
      const remainingTime = video.duration - video.currentTime;
      if (remainingTime <= 0.55) {
        isFadingOutRef.current = true;
        const currentOp = parseFloat(video.style.opacity || '1');
        animateOpacity(currentOp, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        isFadingOutRef.current = false;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (fadeAnimationRef.current) {
        cancelAnimationFrame(fadeAnimationRef.current);
      }
    };
  }, []);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageEmail) return;
    setSentNotice(true);
    setTimeout(() => {
      window.location.href = `mailto:brudascacosmin@gmail.com?subject=Colaborare%20Software%20-%20Razvan%20Brudasca&body=Buna%20Razvan,%0A%0AAm%20vazut%20portofoliul%20tau.%20Emailul%20meu%20este:%20${encodeURIComponent(messageEmail)}`;
      setSentNotice(false);
      setMessageEmail('');
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('brudascacosmin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col justify-between bg-black">
      {/* Background Video with subtle fade loops */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        muted
        autoPlay
        playsInline
        preload="auto"
      />

      {/* Subtle vignette layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-20 px-6 py-6 w-full">
        <nav
          className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Left: Brand Identity */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 text-white group cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white transition-all">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-sm md:text-base tracking-tight leading-tight">
                  Razvan Brudasca
                </span>
                <span className="text-[10px] text-white/50 tracking-wider uppercase font-mono hidden sm:inline">
                  Senior PHP & Architecture
                </span>
              </div>
            </button>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-7 ml-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Despre
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Experiență
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Expertiză
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Studii
              </button>
            </div>
          </div>

          {/* Right zone: CV & Contact */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenCV}
              className="text-white text-xs md:text-sm font-medium hover:text-white/80 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-white/70" />
              <span>Curriculum Vitae</span>
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="liquid-glass rounded-full px-5 py-2 text-white text-xs md:text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
            >
              Contactează-mă
            </button>
          </div>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-4 md:-translate-y-[12%]">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6 flex items-center gap-2 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] md:text-xs text-white/80 font-medium tracking-wide uppercase">
            Senior PHP Developer • 18+ Ani Experiență • Disponibil Full-Time
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-normal md:whitespace-nowrap font-instrument"
        >
          Architect it then <em className="italic font-normal">scale</em>.
        </motion.h1>

        {/* Email quick-action pill */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl w-full mt-7 md:mt-9"
        >
          <form
            onSubmit={handleQuickContact}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full shadow-2xl"
          >
            <input
              type="email"
              value={messageEmail}
              onChange={(e) => setMessageEmail(e.target.value)}
              placeholder="Trimite un email rapid (adresa ta)..."
              required
              className="w-full bg-transparent text-white placeholder:text-white/40 text-sm md:text-base outline-none border-none focus:ring-0"
              aria-label="Adresa ta de email"
            />
            <button
              type="submit"
              className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-transform active:scale-95 shrink-0 flex items-center justify-center cursor-pointer"
              aria-label="Inițiază dialog"
            >
              {sentNotice ? (
                <Check className="w-5 h-5 text-emerald-600" />
              ) : (
                <ArrowRight className="w-5 h-5 text-black" />
              )}
            </button>
          </form>
          {sentNotice && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-emerald-400 mt-2 text-center"
            >
              Se deschide clientul de email pentru brudascacosmin@gmail.com...
            </motion.p>
          )}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/90 text-sm md:text-base leading-relaxed px-4 max-w-2xl mt-5 font-light"
        >
          Dezvoltare și optimizare de <span className="text-white font-medium">API-uri RESTful scalabile</span>, arhitecturi de microservicii, inginerie de baze de date MySQL și automatizări robuste cu <span className="text-white font-medium">Laravel, Symfony și PHP modern</span>.
        </motion.p>

        {/* Action buttons: CV & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={onOpenCV}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-white/70" />
            <span>Descarcă / Vizualizează CV</span>
          </button>
          <button
            type="button"
            onClick={copyEmail}
            className="liquid-glass rounded-full px-6 py-3 text-white/80 hover:text-white text-sm font-medium hover:bg-white/10 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-white/70" />
            <span>{copied ? 'Email copiat!' : 'brudascacosmin@gmail.com'}</span>
          </button>
        </motion.div>
      </div>

      {/* Social / Contact icons footer */}
      <footer className="relative z-10 flex flex-wrap items-center justify-center gap-4 pb-10 px-4">
        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/razvan-cosmin-brudasca-95466a94"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Razvan Cosmin Brudasca"
          className="liquid-glass rounded-full px-4 py-3 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer text-xs"
        >
          <Linkedin className="w-4 h-4 text-[#0077b5]" />
          <span>LinkedIn / in/razvan-cosmin-brudasca</span>
        </a>

        {/* Email Link */}
        <a
          href="mailto:brudascacosmin@gmail.com"
          aria-label="Email direct Razvan Brudasca"
          className="liquid-glass rounded-full px-4 py-3 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer text-xs"
        >
          <Mail className="w-4 h-4 text-white/70" />
          <span>brudascacosmin@gmail.com</span>
        </a>

        {/* Location pill */}
        <div className="liquid-glass rounded-full px-4 py-3 flex items-center gap-2 text-white/70 text-xs">
          <MapPin className="w-4 h-4 text-red-400" />
          <span>Sântandrei, Bihor, România</span>
        </div>
      </footer>
    </section>
  );
};
