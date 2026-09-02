import type { Metadata } from "next";
import Hero from "@/components/procedimentos/Hero";
import Procedures from "@/components/procedimentos/Procedures";
import AboutDayanna from "@/components/procedimentos/AboutDayanna";
import Results from "@/components/procedimentos/Results";
import Testimonials from "@/components/procedimentos/Testimonials";
import CTA from "@/components/procedimentos/CTA";
import Location from "@/components/procedimentos/Location";
import Footer from "@/components/procedimentos/Footer";

export const metadata: Metadata = {
  // Utilizando o layout.tsx, o resultado renderizado será: 
  // "Procedimentos e Tratamentos Estéticos | Dra. Dayanna Ribeiro"
  title: "Procedimentos e Tratamentos Estéticos", 
  description:
    "Conheça os procedimentos de estética facial e corporal realizados pela Dra. Dayanna Ribeiro, Biomédica Esteta. Veja resultados, depoimentos de pacientes e agende sua avaliação.",
  alternates: {
    canonical: "https://www.biomedicadayanna.com.br/procedimentos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Procedimentos e Tratamentos Estéticos",
    description:
      "Conheça os procedimentos de estética facial e corporal realizados pela Dra. Dayanna Ribeiro, Biomédica Esteta. Veja resultados, depoimentos de pacientes e agende sua avaliação.",
    url: "https://www.biomedicadayanna.com.br/procedimentos",
    siteName: "Dra. Dayanna Ribeiro",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procedimentos Estéticos",
    description:
      "Conheça os procedimentos de estética facial e corporal realizados pela Dra. Dayanna Ribeiro, Biomédica Esteta. Agende sua avaliação.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Procedures />
      <AboutDayanna />
      <Results />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
    </main>
  );
}