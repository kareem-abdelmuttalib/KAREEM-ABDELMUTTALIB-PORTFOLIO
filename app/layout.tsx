import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head"; // <-- لإضافة الوسوم اليدوية داخل <head>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// بيانات الميتا للصفحة
export const metadata: Metadata = {
  title: "ᶜᵒᵈᵉ|•ˣ | Cybersecurity Specialist",
  description: "Penetration Tester & Security Researcher | eJPT | CEH | eCPPT",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "ethical hacking",
    "security researcher",
    "vulnerability assessment",
    "Kareem Abdelmuttalib"
  ],
  openGraph: {
    title: "Kareem Abdelmuttalib | Cybersecurity Specialist",
    description: "Penetration Tester & Security Researcher with certifications in eJPT, CEH, and eCPPT",
    url: "https://kareem-abdelmuttalib.vercel.app",
    siteName: "ᶜᵒᵈᵉ|•ˣ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Abdelmotaleb | Cybersecurity Specialist",
    description: "Penetration Tester & Security Researcher | eJPT | CEH | eCPPT",
    creator: "@kareem-abdelmuttalib",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* أيقونة الهاكر - استخدم واحدة من دول أو غير الرابط حسب ما تريده */}
        <link rel="icon" href="https://raw.githubusercontent.com/ta7a-dev/assets/main/icons/hacker-favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
