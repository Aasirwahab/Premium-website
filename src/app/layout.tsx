import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polaris",
  description:
    "A calm AI browser concept for finding signal, tracing ideas, and moving through knowledge with spatial clarity.",
  icons: {
    icon: "/icon.svg",
  },
};

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${archivo.variable} ${cormorant.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
