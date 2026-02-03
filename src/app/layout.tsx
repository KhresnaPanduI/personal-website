import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khresna Pandu | AI Engineer & Freelance Developer",
  description: "Building intelligent solutions with AI. Specializing in LLM integration, AI chatbots, computer vision, and MLOps. 4+ years of experience delivering results.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "Chatbot Development", "Computer Vision", "MLOps", "Freelance Developer"],
  authors: [{ name: "Khresna Pandu" }],
  openGraph: {
    title: "Khresna Pandu | AI Engineer & Freelance Developer",
    description: "Building intelligent solutions with AI. Specializing in LLM integration, AI chatbots, computer vision, and MLOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
