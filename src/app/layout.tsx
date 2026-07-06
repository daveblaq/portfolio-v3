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
  title: {
    default: "David Oladele — Software Engineer & AI Automation Expert",
    template: "%s | David Oladele",
  },
  description:
    "David Oladele is a Software Engineer and AI Automation Expert with 8+ years of experience building scalable web applications, intelligent agents, and automation pipelines using Next.js, TypeScript, LangChain, and modern AI tools.",
  keywords: [
    "David Oladele",
    "Software Engineer",
    "AI Automation Expert",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "LangChain",
    "AI Agents",
    "Workflow Automation",
    "Nigeria",
    "Portfolio",
  ],
  authors: [{ name: "David Oladele" }],
  creator: "David Oladele",
  metadataBase: new URL("https://https://www.oladeledavid.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://https://www.oladeledavid.xyz",
    siteName: "David Oladele",
    title: "David Oladele — Software Engineer & AI Automation Expert",
    description:
      "Software Engineer and AI Automation Expert with 8+ years of experience. Specializing in Next.js, TypeScript, LangChain, and building intelligent automation pipelines.",
    images: [
      {
        url: "https://ik.imagekit.io/shiga/portfolio-v3/1782234595366%20(2).png",
        width: 1200,
        height: 630,
        alt: "David Oladele — Software Engineer & AI Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Oladele — Software Engineer & AI Automation Expert",
    description:
      "Software Engineer and AI Automation Expert with 8+ years of experience building scalable applications and intelligent automation.",
    images: ["https://ik.imagekit.io/shiga/portfolio-v3/1782234595366%20(2).png"],
    creator: "@davidoladele",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 relative">
        {/* Global Vintage Warmth Overlay */}
        <div className="fixed inset-0 z-[99] pointer-events-none bg-[#f3e9d2] mix-blend-multiply opacity-45" />

        {/* Global Crispy Noise Overlay */}
        <div
          className="fixed inset-0 z-[99] pointer-events-none opacity-[0.3] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        {children}
      </body>
    </html>
  );
}
