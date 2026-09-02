'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const testimonialCount = 10;

const testimonials = Array.from({ length: testimonialCount }, (_, index) => ({
  id: index + 1,
  image: `/images/atendimentos/feedbacks/feedbacks-${index + 1}`,
}));

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  const controlsVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  const carouselContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const slideVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  return (
    <motion.section
      className="pt-20 md:pt-28 pb-24 md:pb-32 bg-white text-dark overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <div className="px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
        <motion.div variants={itemVariants} className="h-px w-10 bg-gold-gradient mb-6 opacity-70" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400 block mb-6">
              Depoimentos
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-serif leading-[0.92] text-dark"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
            >
              O Que Dizem<br />as Pacientes
            </motion.h2>
          </div>

          <motion.div variants={controlsVariants} className="flex gap-3 shrink-0">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 text-neutral-400 hover:border-[#C59A3D]/50 hover:text-[#C59A3D] transition-all duration-300"
              aria-label="Anterior"
            >
              <ArrowLeft size={18} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center border border-neutral-200 text-neutral-400 hover:border-[#C59A3D]/50 hover:text-[#C59A3D] transition-all duration-300"
              aria-label="Próximo"
            >
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>

        <motion.p variants={itemVariants} className="mt-5 text-neutral-400 font-sans text-sm max-w-sm leading-relaxed">
          Experiências de pacientes que confiaram no trabalho da Dra. Dayanna.
        </motion.p>
      </div>

      <div
        className="pl-6 md:pl-16 lg:pl-24 cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <motion.div
          className="flex gap-4 md:gap-5"
          variants={carouselContainerVariants}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={slideVariants}
              className="flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_25%] min-w-0"
            >
              <div className="bg-neutral-100 aspect-[3/4] relative overflow-hidden group">
                
                <picture>
                  <source srcSet={`${item.image}.webp`} type="image/webp" />
                  <img
                    src={`${item.image}.jpg`}
                    alt={`Screenshot do depoimento ${item.id}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </picture>

                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-500"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(197, 154, 61, 0.15)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-10 px-6 md:px-16 lg:px-24 flex items-center gap-4">
        <div className="h-px w-10 bg-neutral-200" />
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-neutral-400">
          Deslize para explorar
        </span>
      </motion.div>

    </motion.section>
  );
}