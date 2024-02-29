import React, { ReactNode } from 'react'
import '@/assets/styles/global.css';
import { LayoutProps } from '@/types/global';
 

export const metadata = {
  title: 'HomeScanner | Find your next home',
  description: 'Find your next home with HomeScanner. We have the best properties in the city.',
  keywords: 'home, house, property, rent, buy, city, home scanner'
}

const Layout = ({children}:LayoutProps) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default Layout