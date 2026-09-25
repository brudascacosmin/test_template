import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}

const educationList: EducationItem[] = [
  {
    institution: 'Universitatea din Oradea',
    degree: "Master's Degree",
    field: 'Computer Systems Networking and Telecommunications',
    period: '2007 - 2009',
    description: 'Studiu aprofundat al rețelelor de calculatoare, protocoalelor de telecomunicații, securității fluxurilor de date și arhitecturilor distribuite.',
  },
  {
    institution: 'Universitatea din Oradea',
    degree: 'Licentiate Degree',
    field: 'Mathematics and Computer Science',
    period: '2003 - 2007',
    description: 'Fundament solid în algoritmi, structuri de date, matematică aplicată, logică computațională și programare software avansată.',
  },
  {
    institution: 'Colegiul Național „Samuil Vulcan” (CNSV)',
    degree: 'Diplomă Bacalaureat',
    field: 'Information Technology (Informatică)',
    period: '1999 - 2003',
    description: 'Baza timpurie a pasiunii pentru programare, algoritmică și dezvoltarea sistemelor informatice.',
  },
];

export const EducationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="education" className="bg-black py-24 md:py-32 px-6 overflow-hidden relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
            Fundament Academic
          </span>
          <h2 className="text-3xl md:text-5xl text-white font-instrument tracking-tight mt-2">
            Studii & Formare
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mt-3 font-light">
            Educație superioară în matematică, informatică și rețele de calculatoare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : idx === 1 ? (
                    <BookOpen className="w-6 h-6 text-white" />
                  ) : (
                    <Award className="w-6 h-6 text-white" />
                  )}
                </div>

                <span className="text-xs text-white/40 font-mono block mb-1">
                  {item.period}
                </span>

                <h3 className="text-xl text-white font-medium mb-1">
                  {item.institution}
                </h3>

                <p className="text-sm text-white/90 font-medium mb-1">
                  {item.degree}
                </p>

                <p className="text-xs text-white/60 mb-4 font-mono">
                  {item.field}
                </p>
              </div>

              <p className="text-xs text-white/50 leading-relaxed font-light pt-4 border-t border-white/10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
