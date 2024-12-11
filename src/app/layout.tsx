import type { Metadata } from "next";
import { Inter, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";

const notoSans = Noto_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-noto'
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter'
})


export const metadata: Metadata = {
  title: "LT's Portfolio",
  description: "Welcome to LT's portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${inter.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
