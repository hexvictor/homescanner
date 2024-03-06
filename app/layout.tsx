import React from "react";
import "@/assets/styles/global.css";
import { type LayoutProps } from "@/types/global";
import { Providers } from "@/lib/Providers";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "HomeScanner | Find your next home",
  description:
    "Find your next home with HomeScanner. We have the best properties in the city.",
  keywords: "home, house, property, rent, buy, city, home scanner",
};

function Layout({ children }: LayoutProps): React.ReactElement {
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
