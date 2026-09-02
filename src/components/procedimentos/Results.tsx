'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const resultCount = 64;

const results = Array.from({ length: resultCount }, (_, index) => ({
  id: index + 1,
  image: `/images/atendimentos/results/results-${index + 1}`,
}));

export default function Results() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Orquestrador principal
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Orquestrador específico para os slides
  const carouselContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Textos do header
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Botões de navegação
  const controlsVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  // Entrada de cada imagem do carrossel
  const slideVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // Linha dourada superior e ponte do rodapé
  const lineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  return (
    <motion.section
      className="pt-24 md:pt-32 pb-0 bg-dark text-white overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >

      <motion.div variants={lineVariants} className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-25 pointer-events-none" />

      <div className="px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div variants={headerVariants} className="h-px w-10 bg-gold-gradient mb-4 opacity-70" />
            <motion.span variants={headerVariants} className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-500 block mb-6">
              Resultados Reais
            </motion.span>
            <motion.h2
              variants={headerVariants}
              className="font-serif leading-[0.92] bg-gold-gradient bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
            >
              Resultados<br />Reais
            </motion.h2>
            <motion.p variants={headerVariants} className="mt-5 text-neutral-500 font-sans text-sm max-w-sm leading-relaxed">
              Transformações alcançadas com precisão e cuidado individualizado.
            </motion.p>
          </div>

          <motion.div variants={controlsVariants} className="flex gap-3 shrink-0">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-[#C59A3D] transition-all duration-300"
              style={{ border: '1px solid rgba(197, 154, 61, 0.25)' }}
              aria-label="Anterior"
            >
              <ArrowLeft size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-[#C59A3D] transition-all duration-300"
              style={{ border: '1px solid rgba(197, 154, 61, 0.25)' }}
              aria-label="Próximo"
            >
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div
        className="pl-6 md:pl-16 lg:pl-24 cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <motion.div
          className="flex gap-4 md:gap-5"
          variants={carouselContainerVariants}
        >
          {results.map((item) => (
            <motion.div
              key={item.id}
              variants={slideVariants}
              className="flex-[0_0_78%] sm:flex-[0_0_50%] md:flex-[0_0_36%] lg:flex-[0_0_26%] min-w-0"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-900 group">
                
                <picture>
                  {/* Linha comentada para ser adicionado brevemente as fotos em webp e ter suporte */} {/* <source srcSet={`${item.image}.webp`} type="image/webp" /> */} 
                  <img
                    src={`${item.image}.jpg`}
                    alt={`Resultado ${item.id}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </picture>

                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-500"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(197, 154, 61, 0)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 md:mt-20 px-6 md:px-16 lg:px-24 pb-12">
        <motion.div
          variants={headerVariants}
          className="flex items-center gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <div className="h-px w-10 bg-gold-gradient opacity-30 shrink-0" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-neutral-600">
            Deslize para explorar
          </span>
          <div className="h-px flex-1 bg-gold-gradient opacity-10" />
        </motion.div>
      </div>

    </motion.section>
  );
}