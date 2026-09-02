import type { Metadata } from "next";
import LinksPage from "@/components/page";

export const metadata: Metadata = {
  title: "Dra. Dayanna Ribeiro | Central de Links Oficiais",
  description:
    "Central oficial de links da Dra. Dayanna Ribeiro, Biomédica Esteta. Acesse rapidamente agendamentos, portfólio de procedimentos (estética facial e corporal) e mentorias.",
  alternates: {
    canonical: "https://www.biomedicadayanna.com.br/",
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
    title: "Dra. Dayanna Ribeiro | Central de Links Oficiais",
    description:
      "Central oficial de links da Dra. Dayanna Ribeiro, Biomédica Esteta. Acesse rapidamente agendamentos, portfólio de procedimentos (estética facial e corporal) e mentorias.",
    url: "https://www.biomedicadayanna.com.br/",
    siteName: "Dra. Dayanna Ribeiro",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Dayanna Ribeiro | Central de Links",
    description:
      "Central oficial de links da Dra. Dayanna Ribeiro. Agende sua avaliação, conheça os procedimentos estéticos e descubra as mentorias VIP.",
  },
};

export default function Page() {
  return <LinksPage />;
}