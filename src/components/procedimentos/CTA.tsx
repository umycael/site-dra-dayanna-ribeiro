'use client';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador da seção principal
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Linhas douradas de topo e base
  const borderVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.25,
      transition: { duration: 1, ease: customEase },
    },
  };

  // Itens padrão
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Efeito Letterbox: o contêiner esconde, o texto sobe
  const letterboxItemVariants: Variants = {
    hidden: { 
      opacity: shouldReduceMotion ? 0 : 1, 
      y: shouldReduceMotion ? 0 : "100%" 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Divisor dourado expansivo a partir do centro
  const dividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.3,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Botão com entrada
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: customEase },
    },
  };

  return (
    <motion.section
      className="py-36 md:py-48 px-6 md:px-16 lg:px-24 bg-dark text-white relative overflow-hidden flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <motion.div variants={borderVariants} className="absolute top-0 left-0 right-0 h-px bg-gold-gradient pointer-events-none" />
      <motion.div variants={borderVariants} className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        <motion.div variants={itemVariants} className="mb-10 md:mb-14 flex flex-col items-center">
          <div className="h-px w-10 bg-gold-gradient mb-4 opacity-60" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-500">
            Próximo Passo
          </span>
        </motion.div>

        <h2
          className="font-serif leading-[0.92] mb-0"
          style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}
        >
          <span className="block overflow-hidden p-2 -m-2">
            <motion.span variants={letterboxItemVariants} className="text-white block">
              Pronta para dar
            </motion.span>
          </span>
          <span className="block overflow-hidden p-2 -m-2">
            <motion.span variants={letterboxItemVariants} className="italic block bg-gold-gradient bg-clip-text text-transparent">
              o próximo passo?
            </motion.span>
          </span>
        </h2>

        <motion.div
          variants={dividerVariants}
          className="h-px w-32 bg-gold-gradient mt-10 mb-10 origin-center"
        />

        <motion.p
          variants={itemVariants}
          className="font-sans text-neutral-400 text-lg lg:text-base max-w-md mb-14 leading-relaxed"
        >
          Agende sua avaliação e descubra<br />o tratamento ideal para você!
        </motion.p>

        <motion.a
          variants={buttonVariants}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/553898077395?text=Ol%C3%A1%2C+vim+pelo+seu+site+de+atendimentos+e+desejo+agendar+uma+avalia%C3%A7%C3%A3o%21&utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-gold-gradient text-dark font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-xl shadow-black/40"
        >
          <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

          <span className="relative z-10 flex items-center gap-4">
            Agendar pelo WhatsApp
            <span className="hidden lg:inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </motion.a>

      </div>
    </motion.section>
  );
}