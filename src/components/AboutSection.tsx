import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Layers, Database, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-14 md:pb-20 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Label: Despre Mine */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-8 font-medium"
        >
          Despre Mine • Profil Profesional
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
        >
          Engineering then{' '}
          <span className="font-instrument italic font-normal text-white/60">
            solutions
          </span>{' '}
          for
          <br className="hidden md:inline" />{' '}
          <span className="font-instrument italic font-normal text-white/60">
            systems that create, scale, and endure.
          </span>
        </motion.h2>

        {/* Professional summary text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 max-w-3xl mx-auto text-left liquid-glass rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-white font-medium text-lg tracking-tight">
              Razvan Cosmin Brudasca
            </h3>
            <span className="text-white/40 text-xs font-mono">Senior PHP & Backend Architect</span>
          </div>

          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-6">
            Programator pasionat cu o traiectorie de peste 18 ani în dezvoltarea de software robust. Specializat în{' '}
            <strong className="text-white font-medium">PHP (7/8+), Laravel, Phalcon 3, Symfony 1, Slim, MySQL, Solr Lucene 5 și ElasticSearch</strong>.
            Fiecare proiect este abordat cu accent pe arhitecturi decuplate de microservicii, securitate prin JWT & chei interne de API, optimizare extremă a interogărilor de baze de date și acoperire riguroasă prin teste automate PHPUnit.
          </p>

          {/* Key highlights grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-instrument text-white font-normal">18+</span>
              <span className="text-white/40 text-xs uppercase tracking-wider mt-1">Ani Experiență</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-instrument text-white font-normal">100%</span>
              <span className="text-white/40 text-xs uppercase tracking-wider mt-1">Stabilitate & Teste</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-instrument text-white font-normal">Enterprise</span>
              <span className="text-white/40 text-xs uppercase tracking-wider mt-1">Microservicii & API</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-instrument text-white font-normal">Full-Cycle</span>
              <span className="text-white/40 text-xs uppercase tracking-wider mt-1">CI/CD & DevOps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
