import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        <main id="app-shell" className="relative h-screen overflow-auto bg-white">
          <Navigation />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
