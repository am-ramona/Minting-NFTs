import { Cinzel, Open_Sans } from "next/font/google"

export const cinzel = Cinzel({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-cinzel',
});

export const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-openSans'
});