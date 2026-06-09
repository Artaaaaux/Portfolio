import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Artaaaux | Frontend Developer & Product Builder",
  description: "Welcome to my digital space. Premium developer portfolio showcasing high-performance frontend interfaces and responsive web applications.",
  metadataBase: new URL("https://artaaaux.com"),
  openGraph: {
    title: "Artaaaux | Frontend Developer & Product Builder",
    description: "Welcome to my digital space. Premium developer portfolio showcasing high-performance frontend interfaces.",
    url: "https://artaaaux.com",
    siteName: "Artaaaux Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artaaaux | Frontend Developer & Product Builder",
    description: "Welcome to my digital space. Premium developer portfolio showcasing high-performance frontend interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-bg-dark text-slate-100 font-sans antialiased flex flex-col">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
