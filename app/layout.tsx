import React from "react";
import "@/assets/styles/global.css";
import { type LayoutProps } from "@/types/global";
import { Providers } from "@/lib/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "HomeScanner | Find your next home",
  description:
    "Find your next home with HomeScanner. We have the best properties in the city.",
  keywords: "home, house, property, rent, buy, city, home scanner",
};

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <Providers>
      <html lang="en" className="min-h-screen">
        <body className="flex-col flex min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

export default Layout;
