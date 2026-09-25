import React, { useRef } from 'react';
import { ArrowUpRight, Cpu, Database, Server, ShieldCheck, Terminal, Workflow } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  videoUrl: string;
  points: string[];
}

const services: ServiceItem[] = [
  {
    id: 'backend-architecture',
    tag: 'Arhitectură & Backend',
    title: 'Scalable RESTful APIs & Microservices',
    description: 'Proiectare și dezvoltare de sisteme backend de mare capacitate cu Laravel și PHP modern (7/8+), decuplate prin arhitecturi modulare de microservicii.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    points: [
      'Dezvoltare RESTful API în Laravel Lumen și Symfony',
      'Securizare cu token-uri JWT & chei interne API',
      'Automatizări scheduled tasks cu Laravel Artisan și crontab',
      'Testare automată completă unit & feature cu PHPUnit',
    ],
  },
  {
    id: 'database-devops',
    tag: 'Data & Stabilitate',
    title: 'Database Engineering & System Reliability',
    description: 'Inginerie avansată de baze de date relaționale MySQL, optimizare interogări lente, indexare ultra-rapidă și integrare în conducte automate CI/CD.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    points: [
      'Optimizare scheme MySQL pentru volum mare și integritate',
      'Căutare & indexare distribuită cu Solr Lucene 5 și ElasticSearch',
      'Administrare servere Linux via terminal & depanare logs',
      'Colaborare QA/Dev prin Postman, OpenAPI și GitLab CI/CD',
    ],
  },
];

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">
              Ce ofer & domenii de expertiză
            </h2>
            <p className="text-white/40 text-sm mt-2">
              Soluții software enterprise de la concept arhitectural până la lansare în producție.
            </p>
          </div>
          <span className="text-white/40 text-sm hidden md:block tracking-wider uppercase font-medium">
            Servicii Software & Competențe
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectService?.(service)}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-2xl border border-white/10"
            >
              {/* Card video area */}
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <video
                  src={service.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-widest text-white/40 text-xs font-medium">
                      {service.tag}
                    </span>
                    <div className="liquid-glass rounded-full p-2 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {service.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Matrix Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="liquid-glass rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-6">
            <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
              Ecosistem Tehnologic Stăpânit
            </span>
            <h4 className="text-2xl text-white font-instrument mt-1">
              Stack & Unelte Specializate
            </h4>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'PHP 7/8+',
              'Laravel',
              'Laravel Lumen',
              'Symfony 1',
              'Phalcon 3',
              'Slim Framework',
              'Zend Framework',
              'MySQL',
              'PHPUnit',
              'Solr Lucene 5',
              'ElasticSearch',
              'RESTful APIs',
              'Microservices',
              'JWT Authentication',
              'Internal API Keys',
              'GitLab CI/CD',
              'Linux Server Admin',
              'Crontab & Artisan',
              'Postman & OpenAPI',
              'Health Insurance Systems',
              'Jira / Redmine / Elwis',
            ].map((skill, index) => (
              <span
                key={index}
                className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80 hover:text-white hover:border-white/30 border border-white/10 transition-all font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
