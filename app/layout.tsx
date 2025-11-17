import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ventura Wynwood",
  description: "Latin Urban Eatery — Próxima apertura",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton /> {/* 👈 botón flotante */}
      </body>
    </html>
  );
}
