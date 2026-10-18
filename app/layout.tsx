import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clinic } from "@/data/clinic";

const description = "Clear medical guidance, personalised consultations and a welcoming approach to everyday healthcare. Fictional concept website.";
export const metadata: Metadata = {
  title: { default: `${clinic.name} — General & Preventive Healthcare`, template: `%s | ${clinic.name}` },
  description,
  openGraph: { title: clinic.name, description, type: "website", siteName: clinic.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
