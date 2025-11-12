import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventura Wynwood",
  description: "Latin Urban Eatery — Próxima apertura",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
