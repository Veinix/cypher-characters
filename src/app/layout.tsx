import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/Components/Templates/Layout/Footer'
import Header from "@/Components/Templates/Layout/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cypher Character Generator',
    description: 'A character generator built by David A',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='h-full'>
            <body className={`${inter.className} h-full flex flex-col`}>
                <div className="w-full min-h-screen flex-col ">
                    <Header />
                    {/* <Aside /> */}
                    <main className="w-full h-full p-4">
                        {children}
                    </main>
                </div>
                <Footer />
            </body>
        </html>
    )
}
