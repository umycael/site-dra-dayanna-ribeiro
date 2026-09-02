'use client';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { useState, useEffect } from "react";

// Array com os caminhos base das fotos da clínica
const clinicImages = [
  "/images/atendimentos/location/location-1",
  "/images/atendimentos/location/location-2",
  "/images/atendimentos/location/location-3",
  "/images/atendimentos/location/location-4"
];

export default function Location() {
  const shouldReduceMotion = useReducedMotion();
  const customEase = [0.25, 0.1, 0.25, 1] as const;

  // Estado que controla qual foto está visível agora
  const [currentImage, setCurrentImage] = useState(0);

  // Efeito que troca a foto a cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % clinicImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Orquestrador principal
  const sectionVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Entrada limpa para os textos
  const textVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  // O bloco da foto entra com um movimento sutil + fade
  const mapContainerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Linhas e decorações
  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: customEase },
    },
  };

  // Decorações douradas no canto das fotos
  const decorVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: customEase, delay: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-white text-dark relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sectionVariants}
    >
      <div className="h-px bg-gold-gradient opacity-20" />

      <div className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-14 lg:gap-20 items-start">

          <div className="w-full md:w-5/12 shrink-0 flex flex-col">

            <motion.div variants={textVariants} className="mb-8">
              <motion.div variants={lineVariants} className="h-px w-10 bg-gold-gradient mb-4 opacity-70 origin-left" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-neutral-400">
                Localização
              </span>
            </motion.div>

            <motion.h2
              variants={textVariants}
              className="font-serif leading-[0.95] text-dark mb-10"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)' }}
            >
              Onde realizamos<br />
              <span className="italic">transformações.</span>
            </motion.h2>

            <motion.div variants={textVariants} className="space-y-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-sans mb-3">
                  Endereço
                </p>
                <p className="font-serif text-xl leading-relaxed text-dark">
                  Itaguaçu Trade Center<br />
                  Rua Sebastião Furtado Pereira, 60<br />
                  Sala 303, Torre 2<br />
                  Bairro Barreiros
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-px w-6 bg-gold-gradient opacity-60 shrink-0" />
                  <p className="font-sans text-sm text-dark font-medium">São José, Santa Catarina</p>
                </div>
                <p className="font-sans text-sm text-neutral-400 mt-1.5 ml-9">
                  CEP: 88117-400
                </p>
              </div>

              <div className="h-px bg-neutral-100" />

              <p className="font-sans text-sm text-neutral-500 italic leading-relaxed">
                Horário de Atendimento:<br />
                ⁠Segunda a Sábado: 09:00h às 18:00
              </p>
            </motion.div>
          </div>

          <div className="hidden md:block w-px self-stretch bg-gold-gradient opacity-10 shrink-0" />

          <motion.div variants={mapContainerVariants} className="w-full md:w-1/2 lg:w-5/12 shrink-0">
            <div className="relative w-full aspect-[3/4] bg-neutral-100 overflow-hidden group">
              
              {clinicImages.map((basePath, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <picture>
                    <source srcSet={`${basePath}.webp`} type="image/webp" />
                    <img
                      src={`${basePath}.jpg`}
                      alt={`Ambiente da Clínica Dra. Dayanna Ribeiro - Ângulo ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </picture>
                </div>
              ))}

              <motion.div
                variants={decorVariants}
                className="absolute top-5 left-5 w-10 h-10 border-t border-l pointer-events-none z-10"
                style={{ borderColor: 'rgba(197, 154, 61, 0.5)' }}
              />
              <motion.div
                variants={decorVariants}
                className="absolute bottom-5 right-5 w-10 h-10 border-b border-r pointer-events-none z-10"
                style={{ borderColor: 'rgba(197, 154, 61, 0.5)' }}
              />

              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500 z-10"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(197, 154, 61, 0)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}