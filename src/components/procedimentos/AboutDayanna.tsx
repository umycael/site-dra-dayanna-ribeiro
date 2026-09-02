'use client';
import { motion, useReducedMotion, Variants } from "framer-motion";

export default function AboutDayanna() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Retrato entrando da esquerda com movimento diagonal
  const leftVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -16, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Molduras douradas do retrato
  const cornerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: customEase, delay: 0.4 },
    },
  };

  // Orquestrador do conteúdo da direita
  const rightContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Textos entrando da direita com movimento diagonal
  const rightItemVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 12, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Orquestrador alinhado específico para a lista de credenciais
  const credentialsContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  // Linhas douradas
  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <motion.section
      className="py-24 md:py-32 bg-dark text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-14 lg:gap-24 items-start">

          <motion.div variants={leftVariants} className="w-full md:w-5/12 relative shrink-0">
            <div className="aspect-[3/4] relative w-full overflow-hidden">
              <picture>
                <source srcSet="/images/atendimentos/about/about.webp" type="image/webp" />
                <img
                  src="/images/atendimentos/about/about.jpg"
                  alt="Dra. Dayanna Ribeiro"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </picture>
            </div>
            <motion.div
              variants={cornerVariants}
              className="hidden md:block absolute -top-4 -left-4 w-16 h-16 border-t border-l pointer-events-none"
              style={{ borderColor: 'rgba(197, 154, 61, 0.35)' }}
            />
            <motion.div
              variants={cornerVariants}
              className="hidden md:block absolute -bottom-4 -right-4 w-16 h-16 border-b border-r pointer-events-none"
              style={{ borderColor: 'rgba(197, 154, 61, 0.35)' }}
            />
          </motion.div>

          <motion.div variants={rightContainerVariants} className="w-full md:flex-1 flex flex-col">

            <motion.div variants={rightItemVariants} className="mb-8 md:mb-10">
              <motion.div variants={lineVariants} className="h-px w-10 bg-gold-gradient mb-4 opacity-70 origin-left" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-500">
                Sobre a Profissional
              </span>
            </motion.div>

            <motion.h2
              variants={rightItemVariants}
              className="font-serif leading-[0.92] text-white mb-10"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
            >
              Conheça a
              <br />
              <span className="italic">
                Dra. Dayanna<br />Ribeiro
              </span>
            </motion.h2>

            <motion.div variants={lineVariants} className="h-px bg-gold-gradient opacity-20 mb-10 origin-left" />

            <motion.div variants={rightItemVariants} className="space-y-5 text-neutral-300 font-sans text-[0.95rem] leading-relaxed mb-12">
              <p>
                Biomédica especializada em Harmonização Corporal e Facial, com foco em resultados naturais
                e precisos. Minha missão é elevar a sua beleza autêntica através de tratamentos
                estéticos modernos e de alta performance.
              </p>
              <p>
                Acredito em um cuidado individualizado, onde cada detalhe é planejado com rigor
                profissional para garantir segurança, excelência e um padrão estético inconfundível.
              </p>
            </motion.div>

            <motion.div variants={credentialsContainer} className="space-y-5">

              <motion.div variants={rightItemVariants} className="flex items-start gap-5">
                <motion.div variants={lineVariants} className="h-px w-6 bg-gold-gradient mt-[0.6rem] shrink-0 opacity-90 origin-left" />
                <span className="font-sans font-semibold text-sm text-white tracking-wide">
                  CRBM 4316-SC
                </span>
              </motion.div>

              <motion.div variants={rightItemVariants} className="flex items-start gap-5">
                <motion.div variants={lineVariants} className="h-px w-6 bg-gold-gradient mt-[0.6rem] shrink-0 opacity-45 origin-left" />
                <span className="font-sans text-sm text-neutral-400">
                  Especialista em Harmonização Corporal Avançada
                </span>
              </motion.div>

              <motion.div variants={rightItemVariants} className="flex items-start gap-5">
                <motion.div variants={lineVariants} className="h-px w-6 bg-gold-gradient mt-[0.6rem] shrink-0 opacity-45 origin-left" />
                <span className="font-sans text-sm text-neutral-400">
                  Estética de Alta Performance
                </span>
              </motion.div>

              <motion.div variants={rightItemVariants} className="flex items-start gap-5">
                <motion.div variants={lineVariants} className="h-px w-6 bg-gold-gradient mt-[0.6rem] shrink-0 opacity-45 origin-left" />
                <span className="font-sans text-sm text-neutral-400">
                  Precisão Técnica em Procedimentos
                </span>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}