import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

interface CareerRole {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
  skills: string[];
}

const careerHistory: CareerRole[] = [
  {
    company: 'dotWhite',
    role: 'Senior Web Developer',
    period: 'iulie 2025 - Prezent',
    duration: '6 luni',
    location: 'Cluj-Napoca, Cluj, Romania',
    highlights: [
      'Dezvoltarea și menținerea de API-uri RESTful scalabile folosind Laravel și PHP modern (7/8+)',
      'Proiectarea arhitecturilor de microservicii orientate pe modularitate, decuplare și mentenanță',
      'Integrarea securizată a microserviciilor prin HTTP APIs cu autentificare JWT și internal API keys',
      'Ingineria și optimizarea schemelor de baze de date MySQL pentru performanță ridicată și integritate',
      'Scrierea și mentenanța testelor unitare și de feature cu PHPUnit pentru acoperire maximă',
      'Automatizarea sarcinilor recurente folosind Laravel Artisan și crontab la nivel de sistem Linux',
      'Colaborare strânsă cu QA și frontend prin Postman, specificații OpenAPI și pipeline-uri GitLab CI/CD',
    ],
    skills: ['PHP', 'Laravel Lumen', 'MySQL', 'Laravel', 'Health Insurance', 'JWT', 'GitLab CI/CD'],
  },
  {
    company: 'P4B Group',
    role: 'Senior Web Developer',
    period: 'iulie 2017 - iunie 2025',
    duration: '8 ani',
    location: 'Oradea County, Romania',
    highlights: [
      'Dezvoltare și scalare API-uri RESTful enterprise utilizând Laravel (v8–10) și PHP modern (7/8+)',
      'Arhitectură modulară de microservicii și securizare prin JWT & chei interne de acces',
      'Optimizare profundă pentru baze de date relaționale MySQL la scară largă',
      'Suite complete de teste PHPUnit pentru stabilitate garantată la fiecare release',
      'Administrare servere Linux prin terminal: deployments, log analysis, depanare și mentenanță',
      'Urmărirea sarcinilor și a calității codului folosind Redmine, Jira și unelte interne (Elwis)',
    ],
    skills: ['Laravel (v8-10)', 'PHP 7/8+', 'MySQL', 'Linux Terminal', 'Jira / Redmine', 'PHPUnit'],
  },
  {
    company: 'Paymo',
    role: 'Web Developer',
    period: 'septembrie 2015 - iulie 2017',
    duration: '1 an 11 luni',
    location: 'Oradea, Romania',
    highlights: [
      'Mentenanță și dezvoltare continuă pentru platforma cloud internațională app.paymoapp.com',
      'Lucru cu tehnologii de mare anvergură: ExtJS, Zend Framework 1 și baze relaționale MySQL',
      'Optimizare de componente frontend/backend orientate pe productivitate și timetracking',
    ],
    skills: ['ExtJS', 'Zend 1', 'MySQL', 'SaaS Architecture'],
  },
  {
    company: 'e-spres-oh',
    role: 'Web Developer',
    period: 'februarie 2014 - septembrie 2015',
    duration: '1 an 8 luni',
    location: 'Oradea, Romania',
    highlights: [
      'Dezvoltare funcționalități full-stack pentru aplicații enterprise utilizând Node.js, AngularJS 1, CoffeeScript',
      'Inginerie backend pe volume mari de date: PHP 5.6, Zend Framework, Hadoop, HBase, Apache Solr, jQuery',
    ],
    skills: ['NodeJS', 'AngularJS', 'PHP', 'Hadoop', 'HBase', 'Solr Lucene'],
  },
  {
    company: 'Russmedia Tech',
    role: 'Web Developer (PHP / MySQL / Symfony 1)',
    period: 'mai 2007 - februarie 2014',
    duration: '6 ani 10 luni',
    location: 'Oradea, Romania',
    highlights: [
      'Dezvoltarea și managementul portalurilor internaționale de joburi cu trafic masiv (cvonline.hu, laendlejob.at)',
      'Implementare algoritmi de căutare complexă și indexare rapidă folosind Apache Solr și Symfony 1',
    ],
    skills: ['Symfony 1', 'MySQL', 'Solr Lucene', 'cvonline.hu', 'laendlejob.at'],
  },
  {
    company: 'jumpeye',
    role: 'Web Developer',
    period: 'iunie 2006 - mai 2007',
    duration: '1 an',
    location: 'Oradea, Romania',
    highlights: [
      'Începutul carierei profesionale: dezvoltare web, tehnologii emergente, module interactive și baze de date',
    ],
    skills: ['PHP', 'JavaScript', 'MySQL', 'Web Solutions'],
  },
];

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedRole, setSelectedRole] = useState<number>(0);

  return (
    <section id="experience" className="bg-black py-28 md:py-40 px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Main Section Heading: Innovation x Vision */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Innovation{' '}
          <span className="font-instrument italic font-normal text-white/40">
            x
          </span>{' '}
          Vision
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
          {/* Left Column: Aspect-[4/3] Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative w-full bg-neutral-950 border border-white/10 shadow-2xl"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            {/* Subtle glow / border overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Two Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Block 1 */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">
                Choose your space • Arhitectură & Scalabilitate
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Fiecare soluție tehnică semnificativă începe la intersecția dintre o strategie disciplinată și o execuție inginerească fără compromisuri. Cu 8 ani la P4B Group și experiență curentă la dotWhite, am proiectat ecosisteme de microservicii decuplate, API-uri RESTful robuste și baze de date capabile să susțină fluxuri de lucru critice.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-8 md:my-10" />

            {/* Block 2 */}
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4 font-medium">
                Shape the future • Automatizare & Calitate
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Cele mai fiabile sisteme emerg atunci când curiozitatea întâlnește rigoarea. De la testare automată completă cu PHPUnit până la administrarea de servere Linux, conducte automate de CI/CD în GitLab și diagnosticare precisă a comunicării frontend-backend, asigur stabilitatea completă a aplicațiilor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Career Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-white/40 text-xs tracking-widest uppercase font-medium">
                Traseu Profesional Cronologic
              </span>
              <h3 className="text-2xl md:text-4xl text-white font-instrument tracking-tight mt-1">
                Experiență în Companii de Top (2006 — Prezent)
              </h3>
            </div>
            <div className="text-white/60 text-xs md:text-sm font-mono">
              6 Roluri Enterprise • 18+ Ani de Expertiză Activă
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Roles Navigation List */}
            <div className="lg:col-span-4 space-y-2">
              {careerHistory.map((item, idx) => (
                <button
                  key={item.company + idx}
                  onClick={() => setSelectedRole(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex items-center justify-between border ${
                    selectedRole === idx
                      ? 'liquid-glass bg-white/10 border-white/30 text-white'
                      : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-sm tracking-tight text-white">
                      {item.company}
                    </div>
                    <div className="text-xs text-white/50">{item.role}</div>
                    <div className="text-[11px] text-white/40 font-mono mt-0.5">{item.period}</div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedRole === idx ? 'text-white translate-x-1' : 'text-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Selected Role Detail Panel */}
            <div className="lg:col-span-8 liquid-glass rounded-2xl p-6 md:p-8 border border-white/15 min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                    {careerHistory[selectedRole].company}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-white/50 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {careerHistory[selectedRole].period} ({careerHistory[selectedRole].duration})
                    </span>
                    <span className="flex items-center gap-1 hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5" />
                      {careerHistory[selectedRole].location}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl text-white font-medium mb-4">
                  {careerHistory[selectedRole].role}
                </h4>

                <div className="space-y-2.5 mb-6">
                  {careerHistory[selectedRole].highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-white/80 leading-relaxed font-light">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] text-white/40 uppercase tracking-widest block mb-2 font-medium">
                  Tehnologii & Unelte Utilizate:
                </span>
                <div className="flex flex-wrap gap-2">
                  {careerHistory[selectedRole].skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-white/90 border border-white/10 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
