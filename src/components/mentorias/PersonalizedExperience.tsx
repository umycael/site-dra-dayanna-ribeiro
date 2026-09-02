'use client';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const WA_MESSAGE = encodeURIComponent(
  "Olá, Dra. Dayanna! Gostaria de conhecer a disponibilidade para uma mentoria personalizada."
);
const WA_HREF = `https://wa.me/553898077395?text=${WA_MESSAGE}`;

const pillars = [
  {
    number: "I",
    title: "Procedimento",
    detail: "A mentoria é direcionada ao procedimento que você deseja aperfeiçoar.",
  },
  {
    number: "II",
    title: "Experiência",
    detail: "O conteúdo é adaptado ao seu nível, do básico ao avançado.",
  },
  {
    number: "III",
    title: "Objetivos",
    detail: "Cada mentoria parte dos seus metas e necessidades específicas.",
  },
];

export default function PersonalizedExperience() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador principal da seção
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Textos padrão deslizando para cima
  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Regra de topo absoluta (origin-center)
  const topRuleVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.2, // Mantém a opacity-20 original
      scaleX: 1,
      transition: { duration: 1, ease: customEase },
    },
  };

  // Regra de base absoluta (origin-center)
  const bottomRuleVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.1, // Mantém a opacity-10 original
      scaleX: 1,
      transition: { duration: 1, ease: customEase },
    },
  };

  // Traço do label (origin-center)
  const lineOpacity70Variants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.7,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Divisores horizontais
  const dividerOpacity15Variants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.15,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Orquestrador para os pilares
  const pillarsContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animação individual de cada pilar
  const pillarVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Os números entram com fade e aproximação
  const romanNumeralVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: customEase },
    },
  };

  // Traço abaixo do título do pilar
  const dashOpacity40Variants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.4,
      scaleX: 1,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Botão final
  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  return (
    <motion.section
      className="py-24 md:py-36 bg-dark text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <motion.div
        variants={topRuleVariants}
        className="absolute top-0 left-0 right-0 h-px bg-gold-gradient pointer-events-none origin-center"
      />

      <div className="px-6 md:px-16 lg:px-24">

        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div variants={textVariants} className="flex flex-col items-center">
            <motion.div variants={lineOpacity70Variants} className="h-px w-10 bg-gold-gradient mb-5 origin-center" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-500 block mb-8">
              Uma Experiência Personalizada
            </span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="font-serif leading-[0.92] text-white mb-8"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 5.2rem)' }}
          >
            Cada profissional possui
            <br className="hidden md:block" />
            <span className="italic bg-gold-gradient bg-clip-text text-transparent">
              {' '}necessidades e objetivos{' '}
            </span>
            <br className="hidden md:block" />
            diferentes.
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="font-sans text-[0.93rem] text-neutral-400 leading-relaxed max-w-lg"
          >
            Por isso, as mentorias são estruturadas de acordo com o procedimento, nível de experiência e objetivos de cada aluno.
          </motion.p>
        </div>

        <motion.div variants={dividerOpacity15Variants} className="h-px bg-gold-gradient mb-16 md:mb-20 origin-center" />

        <motion.div
          variants={pillarsContainerVariants}
          className="flex flex-col md:flex-row gap-0 md:divide-x md:divide-[rgba(197,154,61,0.12)]"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.number} variants={pillarVariants} className="flex-1 md:px-10 lg:px-14 first:pl-0 last:pr-0 py-6 md:py-0">

              <motion.span
                variants={romanNumeralVariants}
                className="font-serif italic text-[3rem] leading-none bg-gold-gradient bg-clip-text text-transparent block mb-6 select-none"
              >
                {pillar.number}
              </motion.span>

              <motion.p
                variants={pillarVariants}
                className="font-serif text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
              >
                {pillar.title}
              </motion.p>

              <motion.div variants={dashOpacity40Variants} className="h-px w-8 bg-gold-gradient mb-4 origin-left" />

              <motion.p variants={pillarVariants} className="font-sans text-[0.85rem] text-neutral-500 leading-relaxed">
                {pillar.detail}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={dividerOpacity15Variants} className="h-px bg-gold-gradient mt-16 md:mt-20 mb-14 md:mb-16 origin-center" />

        <div className="flex flex-col items-center text-center gap-8 pt-4">
          <motion.p
            variants={textVariants}
            className="font-sans text-[0.93rem] text-neutral-500 max-w-sm leading-relaxed"
          >
            A mentoria ideal para você começa com uma conversa.
          </motion.p>

          <motion.a
            variants={ctaVariants}
            whileTap={{ scale: 0.98 }}
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-9 py-4 bg-gold-gradient text-dark font-sans font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-black/40 shrink-0"
          >

            <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="relative z-10 flex items-center gap-4">
              Conhecer disponibilidade
              <span className="hidden lg:inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-[2px]">→</span>
            </span>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={bottomRuleVariants}
        className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient pointer-events-none origin-center"
      />
    </motion.section>
  );
}