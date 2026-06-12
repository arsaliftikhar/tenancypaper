import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk" 
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

export const metadata = {
  title: "Tenancy Contract Dubai | RERA-Compliant PDF Generator",
  description: "Generate a Dubai tenancy contract online using the official DLD Unified Tenancy Contract (v1.4). RERA-approved, Ejari-ready, and compliant with Dubai rental laws. Create your lease agreement in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans bg-radial-gradient min-h-screen relative`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
