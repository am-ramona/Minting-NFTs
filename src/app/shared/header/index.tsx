"use client";

import Image from "next/image";
import { ConnectWallet } from '@thirdweb-dev/react';
import styles from './header.module.css'

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/NFT_Sea.svg"
          alt="NFT Sea Logo"
          width={199}
          height={70}
          priority
        />
        <p className={styles.exploreButton}>Explore Marketplace</p>

        <ConnectWallet
          theme='dark'
          modalSize="compact"
          btnTitle={" "}
          className={styles.connectWallet}
        />
      </div>
    </header>
  );
}