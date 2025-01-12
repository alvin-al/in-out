import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/elements/LayoutWrapper";

// Import Jakarta Plus
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  weight: ["200", "400", "300", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "In Out App",
  description: "App for recording in out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='manifest' href='/manifest.json' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
      <body
        className={`${jakartaSans.variable} antialiased h-svh w-screen p-0 `}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
