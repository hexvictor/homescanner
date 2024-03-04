import React from 'react';
import '@/assets/styles/global.css';
import { LayoutProps } from '@/types/global';
import Navbar from '@/components/Navbar/Navbar';
import { Providers } from '@/lib/Providers';

export const metadata = {
  title: 'HomeScanner | Find your next home',
  description: 'Find your next home with HomeScanner. We have the best properties in the city.',
  keywords: 'home, house, property, rent, buy, city, home scanner',
};

function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}

export default Layout;
