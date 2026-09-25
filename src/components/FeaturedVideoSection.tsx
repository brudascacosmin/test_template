import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FeaturedVideoSectionProps {
  onExploreMore?: () => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({ onExploreMore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleExplore = () => {
    if (onExploreMore) {
      onExploreMore();
    } else {
      const expEl = document.getElementById('experience');
      if (expEl) {
        expEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="featured-video" className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl overflow-hidden aspect-video container relative mx-auto w-full shadow-2xl border border-white/10"
        >
          {/* Featured Background Loop Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left: Approach Card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-lg shadow-lg">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-3 font-medium">
                Abordarea Tehnică & Filosofia Arhitecturală
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed font-light">
                Fiecare sistem de anvergură necesită rigoare arhitecturală: microservicii decuplate, autentificare JWT strictă, testare exhaustivă cu PHPUnit și scheme relaționale MySQL optimizate pentru volume masive de tranzacții.
              </p>
            </div>

            {/* Right: Explore more button */}
            <motion.button
              type="button"
              onClick={handleExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer self-start md:self-end shrink-0 border border-white/15"
            >
              Vezi Experiența Profesională
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
