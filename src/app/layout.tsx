import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - Citas - Cajamarca',
    default: 'Inicio - Citas'
  },
  description: "Citas en Cajamarca",
  openGraph: {
    title: {
      template: '%s - Citas',
      default: 'Inicio - Citas'
    },
    description: "Una página de citas para manicure y pedicura permite a los usuarios agendar fácilmente servicios de cuidado de uñas en línea. Ofrece una interfaz intuitiva para seleccionar tratamientos, elegir horarios disponibles, y reservar con profesionales especializados. Además, incluye opciones de pago seguro, recordatorios de citas, y una galería de estilos y diseños de uñas para inspirar a los clientes. Ideal para quienes buscan comodidad y calidad en el cuidado personal",
    images: '/imgs/inmobiliaria.jpg',
    authors: 'CinCout Technology',
    emails: 'cincout.technology@gmail.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <meta name="google-site-verification" content="WyhCghnN9dtVjHOCD1Bqg3vYPMlw80UsLzn306zZSqA" />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
