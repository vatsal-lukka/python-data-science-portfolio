import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Vatsal Lukka | Python Developer & Aspiring Data Scientist",
    template: "%s | Vatsal Lukka"
  },
  description:
    "Premium portfolio for a Python Developer and aspiring Data Scientist focused on analytics, machine learning, dashboards, and data-driven applications.",
  keywords: [
    "Python Developer",
    "Data Scientist",
    "Machine Learning",
    "Data Analyst",
    "Portfolio",
    "Internship"
  ],
  authors: [{ name: "Vatsal Lukka" }],
  openGraph: {
    title: "Vatsal Lukka | Python Developer & Aspiring Data Scientist",
    description:
      "Transforming Data into Insights and Ideas into Intelligent Solutions.",
    url: "http://localhost:3000",
    siteName: "Vatsal Lukka Portfolio",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Lukka | Python Developer & Aspiring Data Scientist",
    description:
      "Portfolio for Data Science, Machine Learning, Analytics, and Python development roles.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1117" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
