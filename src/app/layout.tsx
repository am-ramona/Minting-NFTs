import type { Metadata } from "next";
// import Provider from './components/provider';
import { WagmiProvider } from 'wagmi';
import { config } from './components/wagmiConfig'
import Header from './shared/header';
import Footer from './shared/footer';
import ImagePreviewModal from './components/imagePreviewModal';
import { openSans, cinzel } from "./fonts";
import "./globals.css";

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
        {/* <Provider> */}
          <WagmiProvider config={config}>
            <Header />
            {children}
            <ImagePreviewModal />
            <Footer />
          </WagmiProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
