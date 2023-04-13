'use client'
import { Roboto } from 'next/font/google'
import { AppTheme } from '@/config/AppTheme'
import { NavBar } from '@/components/NavBar'
import { Toolbar } from '@mui/material'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <AppTheme>
          <NavBar />
          <Toolbar />
          {children}
        </AppTheme>
      </body>
    </html>
  )
}