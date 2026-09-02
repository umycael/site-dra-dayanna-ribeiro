import type { Metadata } from "next";
import MentorshipHero from "@/components/mentorias/MentorshipHero";
import Audience from "@/components/mentorias/Audience";
import MentorshipAreas from "@/components/mentorias/MentorshipAreas";
import PersonalizedExperience from "@/components/mentorias/PersonalizedExperience";
import MentorProfile from "@/components/mentorias/MentorProfile";
import MentorshipFinalCTA from "@/components/mentorias/MentorshipFinalCTA";
import CoursesFooter from "@/components/mentorias/CoursesFooter";

export const metadata: Metadata = {
  // Utiliza o template do layout.tsx resultando em: 
  // "Mentorias VIP e Aperfeiçoamento Profissional | Dra. Dayanna Ribeiro"
  title: "Mentorias VIP e Aperfeiçoamento Profissional",
  description:
    "Conheça as mentorias VIP oferecidas pela Dra. Dayanna Ribeiro, Biomédica Esteta. Uma experiência personalizada e direcionada para o aprimoramento profissional na área da estética.",
  alternates: {
    canonical: "https://www.biomedicadayanna.com.br/mentorias",
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
    title: "Mentorias VIP e Aperfeiçoamento Profissional",
    description:
      "Conheça as mentorias VIP oferecidas pela Dra. Dayanna Ribeiro, Biomédica Esteta. Uma experiência personalizada e direcionada para o aprimoramento profissional na área da estética.",
    url: "https://www.biomedicadayanna.com.br/mentorias",
    siteName: "Dra. Dayanna Ribeiro",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorias VIP | Dra. Dayanna Ribeiro",
    description:
      "Conheça as mentorias VIP e experiências personalizadas de aperfeiçoamento profissional em estética com a Dra. Dayanna Ribeiro.",
  },
};

export default function CursosPage() {
  return (
    <main className="min-h-screen">
      <MentorshipHero />
      <Audience />
      <MentorshipAreas />
      <PersonalizedExperience />
      <MentorProfile />
      <MentorshipFinalCTA />
      <CoursesFooter />
    </main>
  );
}