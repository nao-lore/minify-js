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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "JavaScript Minifier - Minify JS Online | minify-js",
  description:
    "Free online JavaScript minifier. Paste your JS code and get a minified version instantly. Remove comments, whitespace, and reduce file size with one click.",
  keywords: [
    "javascript minifier",
    "minify js",
    "js compressor",
    "javascript compressor",
    "uglify js online",
    "js minify tool",
  ],
  authors: [{ name: "minify-js" }],
  openGraph: {
    title: "JavaScript Minifier - Minify JS Online",
    description:
      "Free online tool to minify JavaScript code. Remove comments, whitespace, and compress your JS files instantly.",
    url: "https://minify-js.vercel.app",
    siteName: "minify-js",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Minifier - Minify JS Online",
    description:
      "Free online tool to minify JavaScript code. Remove comments, whitespace, and compress your JS files instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://minify-js.vercel.app",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JavaScript Minifier",
              description:
                "Free online JavaScript minifier. Remove comments, whitespace, and compress your JS code instantly.",
              url: "https://minify-js.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Remove single-line and multi-line comments",
                "Strip unnecessary whitespace and newlines",
                "Preserve string and regex literals",
                "File size comparison with savings percentage",
                "One-click copy to clipboard",
                "Basic code beautifier",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
