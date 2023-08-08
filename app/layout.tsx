import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })


const calendas = localFont({
  src: [
    {
      path: '../public/fonts/Calendas-Plus-Italic.otf',
      weight: '400'
    },
  ],
  variable: '--font-calendas'
})

const montreal = localFont({
  src: [
		{
      path: '../public/fonts/PPNeueMontreal-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/PPNeueMontreal-Medium.ttf',
      weight: '700'
    },
  ],
  variable: '--font-montreal'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${calendas.variable} ${montreal.variable}`}>{children}</body>
    </html>
  )
}