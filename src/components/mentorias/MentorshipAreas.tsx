'use client';
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const WA_MESSAGE = encodeURIComponent(
  "Olá, Dra. Dayanna! Gostaria de saber mais sobre as mentorias e consultar a disponibilidade."
);
const WA_HREF = `https://wa.me/553898077395?text=${WA_MESSAGE}`;

const areas = [
  {
    id: "01",
    title: "Harmonização Corporal",
    subtitle: "Domínio e aperfeiçoamento",
  },
  {
    id: "02",
    title: "Harmonização Facial",
    subtitle: "Estratégias e precisão",
  },
  {
    id: "03",
    title: "Botox",
    subtitle: "Técnicas e aperfeiçoamento",
  },
  {
    id: "04",
    title: "Bioestimuladores",
    subtitle: "Conhecimento e prática",
  },
  {
    id: "05",
    title: "Limpeza de Pele",
    subtitle: "Aperfeiçoamento profissional",
  },
];

export default function MentorshipAreas() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador principal da seção
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Entrada dos textos de cabeçalho
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

  // Animação do divisor inferior
  const bottomDividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Entrada lateral dos números
  const numberVariants: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  // Fade para textos da lista
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  // Botão CTA inferior com entrada destacada
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
      className="py-24 md:py-32 bg-white text-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >

      <div className="px-6 md:px-16 lg:px-24 mb-14 md:mb-20">
        <div className="flex flex-col items-center text-center w-full">
          <motion.div variants={headerVariants} className="h-px w-10 bg-gold-gradient mb-5 opacity-70 origin-center" />

          <motion.span variants={headerVariants} className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400 block mb-6">
            Áreas de Mentoria
          </motion.span>

          <motion.h2
            variants={headerVariants}
            className="font-serif leading-[0.92] text-dark mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
          >
            Aperfeiçoe seus{" "}
            <br className="hidden md:block" />
            <span className="italic">conhecimentos.</span>
          </motion.h2>

          <motion.span variants={headerVariants} className="font-sans text-[0.93rem] text-neutral-500 leading-relaxed max-w-sm">
            Procedimentos que fazem parte da prática da Dra. Dayanna.
          </motion.span>
        </div>
      </div>

      <div>
        {areas.map((area) => (
          <motion.div key={area.id} variants={rowContainerVariants}>
      
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
                {area.id}
              </motion.span>

              <motion.h3
                variants={textVariants}
                className="relative z-10 font-serif text-dark group-hover:text-white transition-colors duration-300 flex-1 leading-tight"
                style={{ fontSize: 'clamp(1.7rem, 3.5vw, 3.2rem)' }}
              >
                {area.title}
              </motion.h3>

              <motion.span
                variants={textVariants}
                className="relative z-10 hidden sm:block font-serif italic text-neutral-400 group-hover:text-neutral-500 text-sm md:text-base transition-colors duration-300 shrink-0"
              >
                {area.subtitle}
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

      <div className="px-6 md:px-16 lg:px-24 mt-20 md:mt-24">
        <motion.div variants={bottomDividerVariants} className="h-px w-full bg-neutral-100 origin-center" />

        <div className="flex flex-col items-center text-center pt-12 max-w-2xl mx-auto">
          <motion.p
            variants={headerVariants}
            className="font-serif text-dark leading-[0.95] mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
          >
            Não encontrou o que procura?
          </motion.p>

          <motion.p
            variants={headerVariants}
            className="font-sans text-[0.9rem] text-neutral-500 leading-relaxed mb-8"
          >
            As mentorias podem ser direcionadas de acordo com o procedimento que você deseja aperfeiçoar. Entre em contato e consulte a disponibilidade.
          </motion.p>

          <motion.a
            variants={ctaVariants}
            whileTap={{ scale: 0.98 }}
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-9 py-4 bg-gold-gradient text-dark font-sans font-bold text-[11px] tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-md shadow-black/10 shrink-0"
          >
            <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="relative z-10 flex items-center gap-4">
              Falar sobre uma mentoria
              <span className="hidden lg:inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-[2px]">→</span>
            </span>
          </motion.a>
        </div>
      </div>

    </motion.section>
  );
}