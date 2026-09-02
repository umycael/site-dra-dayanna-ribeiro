'use client';
import { motion, useReducedMotion, Variants } from "framer-motion";

const WA_MESSAGE = encodeURIComponent(
  "Olá, Dra. Dayanna! Gostaria de saber mais sobre as mentorias e consultar a disponibilidade."
);
const WA_HREF = `https://wa.me/553898077395?text=${WA_MESSAGE}`;

export default function MentorshipHero() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador para elementos de texto
  const textContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  // Entrada da imagem
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: customEase },
    },
  };

  // Entrada geral de texto com deslizamento vertical
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Entrada do título
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: customEase },
    },
  };

  // Entrada do CTA com deslizamento vertical
  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Divisor dourado horizontal para desktop
  const dividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.4,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <section className="relative w-full bg-dark text-white overflow-hidden">

      {/* Mobile e Tablet Layout (>= 1023px) */}
      <div className="lg:hidden relative min-h-[100svh] flex flex-col">

        {/* Retrato (Imagem) */}
        <div className="relative h-[60vh] md:h-[65vh] w-full shrink-0 overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="absolute inset-0 origin-center"
          >
            <picture>
              <source srcSet="/images/mentorias/hero/hero.webp" type="image/webp" />
              <img
                src="/images/mentorias/hero/hero.png"
                alt="Dra. Dayanna Ribeiro"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </picture>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent pointer-events-none" />
        </div>

        <motion.div
          className="relative z-10 -mt-24 md:-mt-32 px-7 md:px-14 pb-16 flex flex-col"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >

          <motion.div variants={itemVariants} className="mb-5 md:mb-6">
            <div className="h-px w-8 md:w-10 bg-gold-gradient mb-3" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400">
              Mentorias VIP em Estética
            </span>
          </motion.div>

          <motion.h1 variants={headingVariants} className="font-serif leading-[0.92] mb-7 md:mb-10" style={{ fontSize: 'clamp(2.3rem, 8.5vw, 4.5rem)' }}>
            <span className="text-white block">
              Aperfeiçoe sua prática<br />
              aprendendo com quem<br />
            </span>
            <span className="italic block bg-gold-gradient bg-clip-text text-transparent">
              vive da estética
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-serif text-[1.05rem] md:text-2xl text-white mb-1 md:mb-2 self-start text-left">
            Dra. Dayanna Ribeiro
          </motion.p>
          <motion.p variants={itemVariants} className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-sans text-neutral-400 mb-8 md:mb-10 self-start text-left">
            Biomédica Esteta · Mentora VIP
          </motion.p>

          <motion.a
            variants={ctaVariants}
            whileTap={{ scale: 0.98 }}
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden self-start inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 bg-gold-gradient text-dark font-sans font-bold text-[10px] md:text-[11px] tracking-[0.15em] uppercase shadow-lg shadow-black/30"
          >
        
            <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="relative z-10 flex items-center gap-3">
              Agendar Mentoria VIP
            </span>
          </motion.a>

          <motion.p variants={itemVariants} className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-sans mt-8 md:mt-12 self-start text-left">
            São José — Santa Catarina
          </motion.p>
        </motion.div>
      </div>

      {/* Desktop Layout (<= 1024px) */}
      <div className="hidden lg:flex min-h-[100svh] items-stretch">

        <motion.div
          className="w-[50%] xl:w-[45%] flex flex-col px-12 lg:px-16 xl:px-24 py-16 xl:py-20 relative z-10"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
       
          <div className="flex flex-col justify-center flex-1">
           
            <motion.div variants={itemVariants} className="mb-10">
              <div className="h-px w-10 bg-gold-gradient mb-4" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400">
                Mentorias VIP em Estética
              </span>
            </motion.div>

            <motion.h1
              variants={headingVariants}
              className="font-serif leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(3rem, 4.5vw, 5.5rem)' }}
            >
              <span className="text-white block">
                Aperfeiçoe sua prática<br />
                aprendendo com quem<br />
              </span>
              <span className="italic block bg-gold-gradient bg-clip-text text-transparent">
                vive da estética.
              </span>
            </motion.h1>

            <motion.div
              variants={dividerVariants}
              className="h-px w-24 bg-gold-gradient mb-10 origin-left"
            />

            <motion.div variants={itemVariants} className="mb-10">
              <p className="font-serif text-xl text-white">Dra. Dayanna Ribeiro</p>
              <p className="text-[10px] uppercase tracking-[0.25em] font-sans text-neutral-400 mt-2">
                Biomédica Esteta · Mentora VIP
              </p>
            </motion.div>

            <motion.a
              variants={ctaVariants}
              whileTap={{ scale: 0.98 }}
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden self-start inline-flex items-center justify-center px-9 py-4 bg-gold-gradient text-dark font-sans font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-black/40"
            >
        
              <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10 flex items-center gap-4">
                Agendar Mentoria VIP
                <span className="hidden lg:inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          </div>

          <motion.div variants={itemVariants} className="mt-8 shrink-0">
            <p className="text-[9px] uppercase tracking-[0.3em] font-sans text-neutral-600">
              São José — Santa Catarina
            </p>
          </motion.div>
        </motion.div>

        <div className="flex-1 relative overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="absolute inset-0 origin-center"
          >
            <picture>
              <source srcSet="/images/mentorias/hero/hero.webp" type="image/webp" />
              <img
                src="/images/mentorias/hero/hero.png"
                alt="Dra. Dayanna Ribeiro"
                className="absolute inset-0 w-full h-full object-contain object-bottom"
              />
            </picture>
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark/40 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}