import type { Metadata } from "next";
import { Suspense } from "react";
import Provider from './utils/provider';
import Header from './shared/header';
import Footer from './shared/footer';
import ImagePreviewModal from './components/imagePreviewModal';
import { openSans, cinzel } from "./fonts";
import "./globals.css";
import dynamic from 'next/dynamic';
 
const NoSSR = dynamic(() => import('./components/imagePreviewModal'), { ssr: false });

export const metadata: Metadata = {
  title: "ERC721 - Minting operation",
  description: "Add an image, a title and a description, Upload to IPFS and Perform a minting operation",
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
