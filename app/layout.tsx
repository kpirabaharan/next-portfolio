import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { StandingNavbar } from '@/components/navbar/StandingNavbar';
import { FloatingNavButton } from '@/components/navbar/FloatingNavButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='fixed z-20 top-6 right-6'>
          <FloatingNavButton />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
