"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/elements/TopBar";
import BottomBar from "@/components/elements/BottomBar";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname == "/login") {
    return <>{children}</>;
  }
  return (
    <html lang='en'>
      <link rel='manifest' href='/manifest.json' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen bg-slate-100`}
      >
        <TopBar />
        <div className='px-8 pt-4'>{children}</div>
        <BottomBar />
      </body>
    </html>
  );
}
