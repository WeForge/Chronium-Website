import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider 
          theme={{
            enabled: true,
            defaultTheme:'system',
            enableSystem: true,
            enableColorScheme: true
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
