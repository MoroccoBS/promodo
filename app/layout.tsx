import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "A Pomodoro Timer built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
