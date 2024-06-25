import Image from "next/image"
import styles from './footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          src="/NFT_Sea.svg"
          alt="NFT Sea Logo"
          width={199}
          height={70}
          priority
        />
        <p className={styles.signature}>
          NFT Sea 2022 © All right reserved
        </p>
        <button className={styles.exploreButton}>
          Explore Marketplace
        </button>
      </div>
    </footer>
  );
}

export default Footer;
