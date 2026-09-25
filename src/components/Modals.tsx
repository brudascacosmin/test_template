import React, { useState } from 'react';
import { X, Check, Mail, Linkedin, MapPin, Download, Briefcase, GraduationCap, Copy, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumVitaeModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('brudascacosmin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-3xl p-6 sm:p-10 max-w-4xl w-full relative z-10 border border-white/15 shadow-2xl bg-black/95 max-h-[90vh] overflow-y-auto my-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 liquid-glass rounded-full p-2.5 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Închide modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-white/10 pb-6 mb-8">
              <span className="text-white/40 text-xs tracking-widest uppercase font-mono block mb-2">
                Curriculum Vitae • Profil Profesional
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-instrument tracking-tight">
                Razvan Cosmin Brudasca
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-1 font-light">
                Senior PHP Developer • Laravel • Phalcon/Slim • Symfony • Full time • Offering software solutions
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Sântandrei, Bihor, România
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>brudascacosmin@gmail.com</span>
                  {copied && <span className="text-emerald-400 font-mono">(copiat!)</span>}
                </button>
                <a
                  href="https://www.linkedin.com/in/razvan-cosmin-brudasca-95466a94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#0077b5] hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-mono mb-2">
                Rezumat Profesional
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light liquid-glass p-5 rounded-2xl border border-white/10">
                A passionate programmer with experience in PHP, Laravel, Phalcon 3, Symfony 1, MySQL, Solr lucene 5, ElasticSearch and other web related technologies. Peste 18 ani de experiență în construirea de servicii web robuste, integrări securizate prin JWT, optimizări de baze de date la scară mare și pipeline-uri automate de CI/CD.
              </p>
            </div>

            {/* Experience list */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experiență Profesională
              </h3>

              <div className="space-y-6">
                {/* 1. dotWhite */}
                <div className="liquid-glass rounded-2xl p-5 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-semibold text-white">dotWhite</h4>
                    <span className="text-xs font-mono text-white/50">iulie 2025 - Prezent (6 luni) • Cluj-Napoca</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium mb-3">Senior Web Developer</p>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-1.5 list-disc pl-4 font-light">
                    <li>Developing and maintaining scalable RESTful APIs using Laravel and modern PHP (7/8+)</li>
                    <li>Designing microservice architectures with a focus on modularity and maintainability</li>
                    <li>Integrating microservices through secure HTTP APIs utilizing JWT authentication and internal API keys</li>
                    <li>Engineering and optimization of MySQL database schemas for high performance, scalability, and data integrity across multiple applications</li>
                    <li>Wrote and maintained unit and feature tests using PHPUnit to ensure code reliability and coverage</li>
                    <li>Automated scheduled tasks using Laravel Artisan and system-level crontab jobs</li>
                    <li>Collaborated closely with QA and frontend teams to debug and validate APIs using Postman, OpenAPI specifications, and GitLab CI/CD pipelines</li>
                    <li>Diagnosed and resolved frontend-backend communication issues using Chrome DevTools (AJAX, HTTP requests, etc.) and Postman/CURL</li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {['PHP', 'Laravel Lumen', 'MySQL', 'Laravel', 'Health Insurance', 'JWT'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-white/80 border border-white/10 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. P4B Group */}
                <div className="liquid-glass rounded-2xl p-5 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-semibold text-white">P4B Group</h4>
                    <span className="text-xs font-mono text-white/50">iulie 2017 - iunie 2025 (8 ani) • Oradea</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium mb-3">Senior Web Developer</p>
                  <ul className="text-xs sm:text-sm text-white/70 space-y-1.5 list-disc pl-4 font-light">
                    <li>Developing and maintaining scalable RESTful APIs using Laravel (v8–10) and modern PHP (7/8+)</li>
                    <li>Designing microservice architectures with a focus on modularity and maintainability</li>
                    <li>Integrating microservices through secure HTTP APIs utilizing JWT authentication and internal API keys</li>
                    <li>Engineering and optimization of MySQL database schemas for high performance and scalability</li>
                    <li>Wrote and maintained unit and feature tests using PHPUnit to ensure code reliability</li>
                    <li>Automated scheduled tasks using Laravel Artisan and system-level crontab jobs</li>
                    <li>Utilized Linux terminal for server administration, deployments, log analysis, and troubleshooting</li>
                    <li>Tracked tasks, bugs, and project progress using Redmine, Jira, and internal tools like Elwis</li>
                  </ul>
                </div>

                {/* Other positions summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="liquid-glass rounded-xl p-4 border border-white/10">
                    <h5 className="font-medium text-white text-sm">Paymo</h5>
                    <p className="text-xs text-white/50">septembrie 2015 - iulie 2017 (1 an 11 luni)</p>
                    <p className="text-xs text-white/70 mt-2 font-light">
                      Maintenance for application: app.paymoapp.com using technologies ExtJS / Zend 1 / MySQL.
                    </p>
                  </div>

                  <div className="liquid-glass rounded-xl p-4 border border-white/10">
                    <h5 className="font-medium text-white text-sm">e-spres-oh</h5>
                    <p className="text-xs text-white/50">februarie 2014 - septembrie 2015 (1 an 8 luni)</p>
                    <p className="text-xs text-white/70 mt-2 font-light">
                      Enterprise frontend/backend: NodeJS, AngularJS 1, CoffeeScript, PHP 5.6, Zend 1, Hadoop, HBase, Solr, jQuery.
                    </p>
                  </div>

                  <div className="liquid-glass rounded-xl p-4 border border-white/10">
                    <h5 className="font-medium text-white text-sm">Russmedia Tech</h5>
                    <p className="text-xs text-white/50">mai 2007 - februarie 2014 (6 ani 10 luni)</p>
                    <p className="text-xs text-white/70 mt-2 font-light">
                      Development and management of job portals (cvonline.hu, laendlejob.at) with PHP/Symfony 1 and Solr.
                    </p>
                  </div>

                  <div className="liquid-glass rounded-xl p-4 border border-white/10">
                    <h5 className="font-medium text-white text-sm">jumpeye</h5>
                    <p className="text-xs text-white/50">iunie 2006 - mai 2007 (1 an)</p>
                    <p className="text-xs text-white/70 mt-2 font-light">
                      Web developer: PHP, JavaScript, database design, interactive web modules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Studii & Educație
              </h3>
              <div className="space-y-3">
                <div className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium text-white">Universitatea din Oradea</h5>
                    <p className="text-xs text-white/60">Master's degree, Computer Systems Networking and Telecommunications</p>
                  </div>
                  <span className="text-xs font-mono text-white/40 mt-1 sm:mt-0">2007 - 2009</span>
                </div>

                <div className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium text-white">Universitatea din Oradea</h5>
                    <p className="text-xs text-white/60">Licentiate degree, Mathematics and Computer Science</p>
                  </div>
                  <span className="text-xs font-mono text-white/40 mt-1 sm:mt-0">2003 - 2007</span>
                </div>

                <div className="liquid-glass p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h5 className="text-sm font-medium text-white">CNSV Samuil Vulcan</h5>
                    <p className="text-xs text-white/60">High School, Information Technology</p>
                  </div>
                  <span className="text-xs font-mono text-white/40 mt-1 sm:mt-0">1999 - 2003</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="liquid-glass rounded-full px-5 py-2.5 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Imprimă / Salvează PDF</span>
                </button>
                <a
                  href="https://www.linkedin.com/in/razvan-cosmin-brudasca-95466a94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full px-5 py-2.5 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Deschide LinkedIn</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="liquid-glass rounded-full px-7 py-2.5 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                Închide
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:brudascacosmin@gmail.com?subject=Mesaj%20de%20la%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AContact:%20${encodeURIComponent(email)}`;
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-3xl p-8 max-w-md w-full relative z-10 border border-white/15 shadow-2xl bg-black/95"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 liquid-glass rounded-full p-2.5 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Închide modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-white/40 text-xs tracking-widest uppercase font-mono block mb-2">
              Contact Direct
            </span>
            <h3 className="text-2xl text-white font-instrument mb-1">
              Hai să discutăm
            </h3>
            <p className="text-white/50 text-xs mb-6">
              Trimite un mesaj direct către Razvan Cosmin Brudasca.
            </p>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-white font-medium text-sm">
                  Se redirecționează către clientul de email...
                </p>
                <p className="text-white/50 text-xs mt-1">Destinatar: brudascacosmin@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/50 text-xs mb-1.5 uppercase tracking-wider">
                    Numele tău sau compania
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Alexandru Popa"
                    required
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none border border-white/10 focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-1.5 uppercase tracking-wider">
                    Adresa ta de email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nume@companie.ro"
                    required
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none border border-white/10 focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-1.5 uppercase tracking-wider">
                    Mesaj sau detalii proiect
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descrie oportunitatea sau proiectul..."
                    required
                    className="w-full liquid-glass rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none border border-white/10 focus:border-white/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black rounded-xl py-3 text-sm font-semibold hover:bg-white/90 transition-all cursor-pointer mt-2"
                >
                  Trimite Mesaj
                </button>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> Sântandrei, Bihor
                  </span>
                  <a
                    href="mailto:brudascacosmin@gmail.com"
                    className="hover:text-white underline text-[11px]"
                  >
                    brudascacosmin@gmail.com
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
