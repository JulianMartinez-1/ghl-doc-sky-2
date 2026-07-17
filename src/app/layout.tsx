import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOC SKY",
  description: "",
  openGraph: {
    title: "DOC SKY",
    description: "",
    images: [],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=inherit:wght@300;400;500;600;700&family=-apple-system:wght@300;400;500;600;700&family=BlinkMacSystemFont:wght@300;400;500;600;700&family=Segoe:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
