'use client';
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const procedures = [
  {
    id: "01",
    title: "Harmonização Corporal e Facial",
    subtitle: "Glúteos · Seios",
  },
  {
    id: "02",
    title: "Botox",
    subtitle: "Prevenção e suavização",
  },
  {
    id: "03",
    title: "Bioestimuladores",
    subtitle: "Colágeno e firmeza",
  },
  {
    id: "04",
    title: "Limpeza de Pele",
    subtitle: "Renovação profunda",
  },
  {
    id: "05",
    title: "Microvasos",
    subtitle: "Tratamento",
  },
  {
    id: "06",
    title: "Tecnologias Estéticas",
    subtitle: "Laser · Radiofrequência · Ultrassom",
  },
  {
    id: "07",
    title: "Emagrecimento",
    subtitle: "Redução de medidas e Perda de peso rápido",
  },
  {
    id: "08",
    title: "Tratamentos Corporais",
    subtitle: "Contorno · Firmeza · Remodelação",
  },
];


export default function Procedures() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador principal
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Animação de entrada dos textos
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Orquestrador das linhas da tabela
  const rowContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  // Animação das divisórias douradas
  const dividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.12,
      scaleX: 1,
      transition: { duration: 0.7, ease: customEase },
    },
  };

  // Animação horizontal para os números
  const numberVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  // Fade suave para os textos de cada procedimento
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  return (
    <motion.section
      className="py-24 md:py-32 bg-white text-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <div className="px-6 md:px-16 lg:px-24 mb-14 md:mb-20">
        <div className="flex flex-col items-center text-center w-full">
          <motion.div variants={headerVariants} className="h-px w-10 bg-gold-gradient mb-5 opacity-70" />
          <motion.span variants={headerVariants} className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400 block mb-6">
            Conheça os Tratamentos
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-serif leading-[0.92] text-dark"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
          >
            Nossos<br />Procedimentos
          </motion.h2>
        </div>
      </div>

      <div>
        {procedures.map((proc) => (
          <motion.div key={proc.id} variants={rowContainerVariants}>
            <motion.div
              variants={dividerVariants}
              className="h-px bg-gold-gradient mx-6 md:mx-16 lg:mx-24 origin-left"
            />

            <div className="group relative flex items-center gap-6 md:gap-10 px-6 md:px-16 lg:px-24 py-7 md:py-9 cursor-default overflow-hidden">
              
              <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

              <motion.span
                variants={numberVariants}
                className="relative z-10 shrink-0 font-sans text-[11px] tracking-[0.2em] bg-gold-gradient bg-clip-text text-transparent font-medium w-8"
              >
                {proc.id}
              </motion.span>

              <motion.h3
                variants={textVariants}
                className="relative z-10 font-serif text-dark group-hover:text-white transition-colors duration-300 flex-1 leading-tight"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 3.2rem)' }}
              >
                {proc.title}
              </motion.h3>

              <motion.span
                variants={textVariants}
                className="relative z-10 hidden sm:block font-serif italic text-neutral-400 group-hover:text-neutral-500 text-sm md:text-base transition-colors duration-300 shrink-0"
              >
                {proc.subtitle}
              </motion.span>

              <div className="relative z-10 shrink-0 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300 ml-1">
                <ArrowUpRight size={18} className="text-[#C59A3D]" />
              </div>
            </div>
          </motion.div>
        ))}
        
        <motion.div
          variants={dividerVariants}
          className="h-px bg-gold-gradient mx-6 md:mx-16 lg:mx-24 origin-left"
        />
      </div>
    </motion.section>
  );
}