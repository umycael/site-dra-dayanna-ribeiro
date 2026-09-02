'use client';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const profiles = [
  { label: "Dentistas", detail: "Que atuam ou desejam atuar com procedimentos estéticos" },
  { label: "Enfermeiros", detail: "Em busca de capacitação e aperfeiçoamento em estética" },
  { label: "Biomédicos", detail: "Que atuam ou desejam atuar com procedimentos estéticos" },
  { label: "Médicos", detail: "Em busca de aperfeiçoamento técnico em estética" },
  { label: "Farmacêuticos", detail: "Com habilitação ou interesse em procedimentos estéticos" },
  { label: "Esteticistas", detail: "Que desejam ampliar seus conhecimentos e técnicas" },
  { label: "Fisioterapeutas", detail: "Que desejam ampliar sua atuação na área da estética" },
];

export default function Audience() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador principal da seção (cascata fluida)
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Textos padrão
  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Linha dourada do topo
  const topRuleVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.2,
      scaleX: 1,
      transition: { duration: 1, ease: customEase },
    },
  };

  // Linhas douradas de separação
  const lineVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1, 
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Linhas douradas de separação com opacidade explícita (esquerda)
  const lineOpacity20Variants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.2,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  const lineOpacity70Variants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.7,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Orquestrador da linha da tabela
  const rowVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  // Números dourados entram em animação
  const numberVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  // O pequeno traço dourado ao lado do número
  const dashVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.5,
      scaleX: 1,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  return (
    <motion.section
      className="py-24 md:py-36 bg-dark text-white relative overflow-hidden lg:overflow-visible"
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
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">

          <div className="w-full lg:w-5/12 shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-36">

            <motion.div variants={textVariants} className="mb-8 md:mb-10 flex flex-col items-center lg:items-start">
              <motion.div variants={lineOpacity70Variants} className="h-px w-10 bg-gold-gradient mb-4 origin-center lg:origin-left" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-500">
                Para Quem É
              </span>
            </motion.div>

            <motion.h2
              variants={textVariants}
              className="font-serif leading-[0.92] text-white mb-10"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 5rem)' }}
            >
              Conhecimento para quem já<br className="hidden lg:block"/>
              <span className="italic bg-gold-gradient bg-clip-text text-transparent">
                {' '}atua na área <br className="hidden lg:block"/>
                ou irá iniciar.
              </span>
            </motion.h2>

            <motion.div variants={lineOpacity20Variants} className="h-px w-full max-w-xs lg:w-full bg-gold-gradient mb-10 origin-center lg:origin-left" />

            <motion.p variants={textVariants} className="font-sans text-[0.93rem] text-neutral-400 leading-relaxed max-w-sm">
              Mentorias personalizadas para profissionais e estudantes da área da saúde e estética que buscam aperfeiçoar seus conhecimentos, aprender novas técnicas e desenvolver mais segurança na execução de procedimentos.
            </motion.p>
          </div>

          <div className="w-full lg:flex-1">
            <div>
              {profiles.map((profile, i) => (
                <motion.div key={i} variants={rowVariants}>

                  <motion.div
                    variants={lineVariants}
                    className="h-px origin-left"
                    style={{ backgroundColor: 'rgba(197, 154, 61, 0.12)' }}
                  />
                  <div className="group flex items-start gap-6 md:gap-8 py-7 md:py-8 cursor-default relative overflow-hidden">

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                    />

                    <motion.span
                      variants={numberVariants}
                      className="relative z-10 shrink-0 font-sans text-[11px] tracking-[0.2em] bg-gold-gradient bg-clip-text text-transparent font-medium w-6 pt-1"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>

                    <motion.div
                      variants={dashVariants}
                      className="h-px w-5 bg-gold-gradient shrink-0 mt-[0.85rem] origin-left relative z-10"
                    />

                    <motion.div variants={textVariants} className="relative z-10 flex-1 min-w-0">
                      <p
                        className="font-serif text-white group-hover:text-[#E4C363] transition-colors duration-300 leading-tight mb-1"
                        style={{ fontSize: 'clamp(1.45rem, 2.8vw, 2.2rem)' }}
                      >
                        {profile.label}
                      </p>
                      <p className="font-sans text-[0.8rem] text-neutral-500 leading-snug">
                        {profile.detail}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={lineVariants}
                className="h-px origin-left"
                style={{ backgroundColor: 'rgba(197, 154, 61, 0.12)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}