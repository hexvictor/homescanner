import React from 'react';
import '@/assets/styles/global.css';
import { AuthProvider } from '@/providers/AuthProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/Footer';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

export const metadata = {
  title: 'HomeScanner | Find your next home',
  description: 'Find your next home with HomeScanner. We have the best properties in the city.',
  keywords: 'home, house, property, rent, buy, city, home scanner',
};

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <AuthProvider>
      <html lang="en" className="min-h-screen">
        <body className="flex-col flex min-h-screen">
          <ReactQueryProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ReactQueryProvider>
        </body>
      </html>
    </AuthProvider>
  );
}

export default Layout;
