import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Header } from "@/widgets/Header/header";
import { Footer } from "@/widgets/Footer/footer";
import { ReduxProvider } from '@/store';
import Image from "next/image";

export const ceraPro = localFont({
    src: [
        {
            path: '../../public/fonts/cera-pro/CeraPro-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-BlackItalic.woff2',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/cera-pro/CeraPro-ThinItalic.woff2',
            weight: '100',
            style: 'italic',
        },
    ],
})


export const metadata: Metadata = {
    title: "WolfMedia",
    description: "My work",
    openGraph: {
        title: "WolfMedia",
        description: "My work",
        url: "https://example.com!!!",
        siteName: "WolfMedia",
        images: [
            {
                url: "https://example.com!!!/svg/wolfMediaWolf.svg",
                width: 1200,
                height: 630,
                alt: "WolfMedia Logo",
            },
        ],
        locale: "ru_RU",
        type: "website",
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={ceraPro.className}>
            <body>
                <div className='wrapper'>
                    <ReduxProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ReduxProvider>
                </div>
            </body>
        </html>
    );
}
