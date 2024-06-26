import type { Metadata } from "next"
import { Suspense } from "react"
import { WebVitals } from './utils/web-vitals'
import Provider from './utils/provider'
import Header from './shared/header'
import Footer from './shared/footer'
import  { ImagePreviewModal } from './components'
import { openSans, cinzel } from "./fonts"
import "./globals.css"

/*-- to be used with multiple components  --*/
// import dynamic from 'next/dynamic'

// const NoSSR = dynamic(() => import('./components/imagePreviewModal'), { ssr: false });

export const metadata: Metadata = {
  title: "ERC721 - Minting operation",
  description: "Add an image, a title and a description, Upload to IPFS and Perform a minting operation",
  generator: 'Next.js',
  applicationName: 'I mint NFTs',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'Typescript'],
  authors: [{ name: 'Ramona', url: 'https://ramonaabimoussa.com' }],
  creator: 'Ramona Abi-Moussa',
  publisher: 'Ramona Abi-Moussa',
  metadataBase: new URL('https://imintnfts.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/NFT_Sea.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${cinzel.variable}`}>
        <Suspense fallback={<>Loading...</>}>
          <Provider>
            <WebVitals />
            <Header />
            {children}
            <ImagePreviewModal />
            <Footer />
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
