import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
