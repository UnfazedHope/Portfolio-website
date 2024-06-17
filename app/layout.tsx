import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vishalpange.github.io"),
  alternates: {
    canonical: "https://vishalpange.github.io",
  },
  title: "Vishal Pange",
  description:
    "Vishal Pange is a Software Engineer.",
  keywords:
    "Vishal Pange, Software Engineer, Project Leader, Web Development, Web3, Decentralized Applications, Quality Assurance, Software Engineering, Cloud, Mobile Development",
  openGraph: {
    locale: "en_US",
    siteName: "Vishal Pange",
    type: "website",
    title: "Vishal Pange",
    description:
      "Vishal Pange is a Software Engineer.",
    url: "https://vishalpange.github.io",
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Pange",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
