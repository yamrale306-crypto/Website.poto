import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deva Amrale | AI Builder & Full-Stack Developer",
  description: "I build AI-powered software, intelligent automation, and scalable web applications. AI Builder, Full-Stack Developer, and future AI Startup Founder.",
  keywords: ["Deva Amrale", "AI Builder", "Full-Stack Developer", "Next.js", "React", "AI Startup", "Portfolio"],
  authors: [{ name: "Deva Amrale" }],
  creator: "Deva Amrale",
  metadataBase: new URL("https://devaamrale.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devaamrale.dev",
    siteName: "Deva Amrale Portfolio",
    title: "Deva Amrale | AI Builder & Full-Stack Developer",
    description: "I build AI-powered software, intelligent automation, and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deva Amrale - AI Builder & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deva Amrale | AI Builder & Full-Stack Developer",
    description: "I build AI-powered software, intelligent automation, and scalable web applications.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
