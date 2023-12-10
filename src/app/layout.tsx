import Footer from '@/components/Footer/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { content } from '@/components/AboutCard/AboutContent.json';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Pragyan '24 | Let's Celebrate Technology",
    description: content,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className + ' ' + 'bg-[#070B12]'}>
                <div className="w-full min-h-screen bg-[#070B12]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
