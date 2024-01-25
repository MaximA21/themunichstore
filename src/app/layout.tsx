import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {cn} from "@/lib/utils";
import {Navbar} from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TheMunichStore',
  description: 'Generated by create next app',

}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="h-full">
      <body className={cn("h-full relative antialiased font-sans ", inter.className)}>
      <Navbar></Navbar>
      <main className={"relative flex flex-col min-h-screen "}>
        <div className={"flex-grow flex-1 "}>

          {children}
        </div>
      </main>
      </body>
      </html>
  )
}
