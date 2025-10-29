export const metadata = {
  title: 'Ventura Wynwood — Latin & Urban Eatery',
  description: 'Creative Latin kitchen in the heart of Wynwood. Soft opening soon.'
};
import './globals.css';
export default function RootLayout({ children }){
  return (
    <html lang="es">
      <head><link rel="icon" href="/favicon.png"/></head>
      <body>{children}</body>
    </html>
  );
}
