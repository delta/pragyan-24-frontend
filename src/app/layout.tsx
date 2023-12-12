import Footer from '@/components/Footer/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { content } from '@/components/AboutCard/AboutContent.json';
import Toast from '@/components/Toast/Toast';

export const metadata: Metadata = {
    title: "Pragyan '24 | Let's Celebrate Technology",
    description: content,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={'bg-[#070B12]'}>
                <div className="w-full min-h-screen bg-[#070B12]">{children}</div>
                <Footer />
                <Toast />
            </body>
        </html>
    );
}
