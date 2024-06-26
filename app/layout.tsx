import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/ui/navbar'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'
import Providers from '@/components/Providers'


const space_mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-space_mono',
})

export const metadata: Metadata = {
  title: 'Relay Editor',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  authModal,
}: Readonly<{
  children: React.ReactNode
  authModal: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${space_mono.className}`}>
          {/* <Navbar /> */}
          <Providers>
            {authModal}
            {children}
          </Providers>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  )
}
