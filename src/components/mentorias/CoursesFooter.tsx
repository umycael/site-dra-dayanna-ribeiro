'use client';
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from 'framer-motion';

export default function CoursesFooter() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Orquestrador do Footer
  const footerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Animação da linha superior
  const topBorderVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.25,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Animação discreta dos blocos
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  return (
    <motion.footer
      className="bg-dark text-neutral-500 pt-16 pb-10 px-6 md:px-16 lg:px-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={footerVariants}
    >
      <motion.div
        variants={topBorderVariants}
        className="absolute top-0 left-0 right-0 h-px bg-gold-gradient origin-center"
      />

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 mb-14">

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-2xl bg-gold-gradient bg-clip-text text-transparent mb-2">
              Dra. Dayanna Ribeiro
            </h3>
            <p className="text-[9px] uppercase tracking-[0.25em] font-sans text-neutral-600">
              Mentora VIP de Cursos de Estética
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-3 font-sans text-sm">
            <a
              href="https://api.whatsapp.com/send/?phone=553898077395&text=Ol%C3%A1%2C+vim+pelo+seu+site+de+mentorias%21&type=phone_number&app_absent=0&utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Meu Contato
            </a>
            <a
              href="https://www.instagram.com/biomedicadayanna/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Meu Instagram
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Links Úteis
            </a>
            <Link
              href="/procedimentos"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Site de Procedimentos
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] font-sans hover:text-white hover:-translate-y-[2px] transition-all duration-300"
            >
              Voltar ao topo
              <span
                className="w-8 h-8 flex items-center justify-center border transition-colors duration-300 group-hover:border-[#C59A3D]/60"
                style={{ borderColor: 'rgba(197, 154, 61, 0.25)' }}
              >
                <ArrowUp size={12} className="group-hover:text-[#C59A3D] transition-colors duration-300" />
              </span>
            </motion.button>
          </motion.div>

        </div>

        <motion.div
          variants={itemVariants}
          className="h-px mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        />

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 text-xs font-sans text-neutral-600"
        >
          <p>© 2026 Dra. Dayanna Ribeiro. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/nymbus.company/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#C59A3D] transition-colors duration-300"
            >
              Nymbus Company
            </a>
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}