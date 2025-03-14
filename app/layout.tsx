import React from 'react';
import '@/assets/styles/global.css';
import { AuthProvider } from '@/providers/AuthProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { ReactScan } from '@/components/ReactScan';

export const metadata = {
  title: 'HomeScanner | Find your next home',
  description: 'Find your next home with HomeScanner. We have the best properties in the city.',
  keywords: 'home, house, property, rent, buy, city, home scanner',
};

type Props = {
  children: React.ReactElement;
};

async function Layout({ children }: Props): Promise<React.ReactElement> {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="min-h-screen">
      <body className="flex-col flex min-h-screen">
        <AuthProvider>
          <ReactScan />
          <ReactQueryProvider>
            <Navbar session={session} />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default Layout;
