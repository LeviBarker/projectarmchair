import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <main className="relative h-screen overflow-auto">
          <Navigation />
          <section>{children}</section>
          <footer>
            Footer
          </footer>
        </main>
      </body>
    </html>
  );
}
