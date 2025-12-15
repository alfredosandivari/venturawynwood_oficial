import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Ventura Wynwood",
  description: "Latin Urban Eatery — Próxima apertura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
          <WhatsAppButton /> {/* 👈 botón flotante */}
        </LanguageProvider>
      </body>
    </html>
  );
}
