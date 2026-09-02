'use client';

import Link from 'next/link';
import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const WA_AGENDA = `https://wa.me/553898077395?text=${encodeURIComponent(
  'Olá, gostaria de agendar uma avaliação!'
)}`;
const WA_CONTACT = `https://wa.me/553898077395`;
const IG_HREF = 'https://www.instagram.com/biomedicadayanna/';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const MotionLink = motion(Link);

export default function LinksPage() {
  const shouldReduceMotion = useReducedMotion();

  const customEase = [0.25, 0.1, 0.25, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: customEase },
    },
  };

  const avatarVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  const dividerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 0.4,
      scaleX: 1,
      transition: { duration: 0.6, ease: customEase },
    },
  };

  return (
    <main
      className="min-h-screen bg-dark flex flex-col items-center justify-start px-5 py-14 pb-10"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <motion.div
        className="w-full max-w-[400px] flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center mb-10 w-full">
      
          <motion.div
            variants={avatarVariants}
            className="relative mb-6 shrink-0 overflow-hidden"
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '4px',
              background: '#171512',
            }}
          >
            <picture>
              <source srcSet="/images/links/logo.webp" type="image/webp" />
              <img
                src="/images/links/logo.png"
                alt="Dra. Dayanna Ribeiro"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </picture>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-white text-center leading-tight mb-2"
            style={{ fontSize: 'clamp(1.5rem, 6vw, 1.85rem)' }}
          >
            Dra. Dayanna Ribeiro
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[9px] uppercase tracking-[0.28em] font-sans text-neutral-500 text-center mb-1"
          >
            Biomédica · CRBM 4316-SC
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[10px] uppercase tracking-[0.2em] font-sans text-center mb-5"
            style={{ color: 'rgba(197, 154, 61, 0.7)' }}
          >
            Harmonização Corporal e Facial
          </motion.p>

          <motion.div
            variants={dividerVariants}
            className="h-px w-16 bg-gold-gradient origin-center"
          />
        </div>

        <div className="w-full flex flex-col gap-3">
          <motion.a
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            href={WA_AGENDA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar avaliação pelo WhatsApp"
            className={[
              'group relative overflow-hidden w-full flex items-center justify-between gap-3',
              'px-6 py-4 bg-gold-gradient text-dark',
              'font-sans font-bold text-[11px] tracking-[0.18em] uppercase',
              'transition-all duration-300',
              'motion-safe:hover:opacity-90 motion-safe:hover:-translate-y-px',
              'shadow-lg shadow-black/30',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D] focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
            ].join(' ')}
          >
            <div className="absolute inset-y-0 -inset-x-8 translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[30deg] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="relative z-10 flex items-center justify-between w-full">
              <span>Agende sua avaliação</span>
              <span className="flex items-center gap-2 shrink-0">
                <MessageCircle size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-[2px]" />
              </span>
            </span>
          </motion.a>

          <MotionLink
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            href="/procedimentos"
            target="_blank"
            aria-label="Conheça os procedimentos da Dra. Dayanna"
            className={[
              'group w-full flex items-center justify-between gap-3',
              'px-6 py-4 text-white font-sans text-[11px] tracking-[0.15em] uppercase',
              'transition-all duration-300',
              'motion-safe:hover:bg-white/[0.04]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D] focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
            ].join(' ')}
            style={{ border: '1px solid rgba(197, 154, 61, 0.3)' }}
          >
            <span>Conheça meus procedimentos</span>
            <ArrowUpRight size={14} className="shrink-0 text-[#C59A3D] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" aria-hidden="true" />
          </MotionLink>

          <MotionLink
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            href="/mentorias"
            target="_blank"
            aria-label="Conheça as mentorias VIP da Dra. Dayanna"
            className={[
              'group w-full flex items-center justify-between gap-3',
              'px-6 py-4 text-white font-sans text-[11px] tracking-[0.15em] uppercase',
              'transition-all duration-300',
              'motion-safe:hover:bg-white/[0.04]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D] focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
            ].join(' ')}
            style={{ border: '1px solid rgba(197, 154, 61, 0.3)' }}
          >
            <span>Conheça minhas mentorias</span>
            <ArrowUpRight size={14} className="shrink-0 text-[#C59A3D] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" aria-hidden="true" />
          </MotionLink>

          <motion.div variants={itemVariants} className="py-1">
            <div className="h-px bg-gold-gradient opacity-[0.12]" />
          </motion.div>

          <motion.a
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            href={WA_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
            className={[
              'group w-full flex items-center gap-4',
              'px-6 py-3.5 text-neutral-400 font-sans text-[10px] tracking-[0.18em] uppercase',
              'transition-all duration-300 hover:text-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D] focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
            ].join(' ')}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <MessageCircle size={15} className="shrink-0 text-[#C59A3D] opacity-60 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-[1.05]" aria-hidden="true" />
            <span>Meu Contato</span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
            href={IG_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil no Instagram"
            className={[
              'group w-full flex items-center gap-4',
              'px-6 py-3.5 text-neutral-400 font-sans text-[10px] tracking-[0.18em] uppercase',
              'transition-all duration-300 hover:text-white',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3D] focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
            ].join(' ')}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="shrink-0 text-[#C59A3D] opacity-60 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-[1.05]">
              <InstagramIcon size={15} />
            </span>
            <span>Instagram</span>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className={[
              'w-full flex items-center gap-4',
              'px-6 py-3.5 text-neutral-400 font-sans text-[10px] tracking-[0.18em] uppercase',
              'select-none'
            ].join(' ')}
          >
            <MapPin size={15} className="shrink-0 text-[#C59A3D] opacity-60" aria-hidden="true" />
            <span>Localização · São José - SC</span>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="w-full mt-12">
          <div className="h-px bg-gold-gradient opacity-[0.15] mb-8" />

          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="font-serif text-sm text-neutral-600">
              © Dra. Dayanna Ribeiro
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] font-sans text-neutral-700">
              Todos os direitos reservados
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}