import Footer from '@/components/Footer/Footer';
import './globals.css';
import type { Metadata } from 'next';
import content from '@/components/AboutCard/AboutContent.json';
import Toast from '@/components/Toast/Toast';
import Script from 'next/script';
// import { Suspense } from 'react';
// import Loading from './loading';

export const metadata: Metadata = {
    title: "Pragyan '24 | Let's Celebrate Technology",
    description: content.content,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
                    strategy="beforeInteractive"
                ></Script>
                {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
                    strategy="beforeInteractive"
                ></Script>
                {/* <Suspense fallback={<Loading />}> */}
                <div className="w-full min-h-screen bg-[#070B12] page-layout">{children}</div>
                {/* </Suspense> */}

                <Footer />
                <Toast />
            </body>
        </html>
    );
}
