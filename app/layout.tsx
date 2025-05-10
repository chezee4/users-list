import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import { StoreProvider, ThemeProvider } from '@/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'by chezee_0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
