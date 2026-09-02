import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dra. Dayanna Ribeiro | Biomedicina Estética em São José - SC",
    template: "%s | Dra. Dayanna Ribeiro",
  },
  description: "Dra. Dayanna Ribeiro atua com biomedicina estética e harmonização corporal em São José, Santa Catarina. Conheça os procedimentos e agende sua avaliação.",
  openGraph: {
    title: {
      default: "Dra. Dayanna Ribeiro | Biomedicina Estética em São José - SC",
      template: "%s | Dra. Dayanna Ribeiro",
    },
    description: "Dra. Dayanna Ribeiro atua com biomedicina estética e harmonização corporal em São José, Santa Catarina. Conheça os procedimentos e agende sua avaliação.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Dayanna Ribeiro | Biomédica Esteta',
      },

    ],
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#171512" },
    { media: "(prefers-color-scheme: dark)", color: "#171512" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable} bg-dark`}>
      <body className="bg-dark text-dark">
        <div className="bg-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}