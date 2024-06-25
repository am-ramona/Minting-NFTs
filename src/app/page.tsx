"use client";

import { useState } from "react"
import Link from "next/link"
import ImageUploader from "./components/Atoms/imageUploader"

export default function Home() {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <main className="grid h-full justify-center place-items-center">
      <hgroup className="h-[216.143px] w-[90%] xl:w-[1140px] w-10/12 max-w-[90%] rounded-2xl border border-solid border-white bg-white/[0.09] backdrop-blur text-center">
        <h1 className="font-cinzel font-bold text-[44px] leading-[64.47px] bg-title-gradient bg-clip-text pt-[44.8px]">MINT NEW NFT</h1>
        <p className="lg:px-[310px] px-[2%] leading-[24.644px] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. </p>
      </hgroup>
      <form className="grid bg-transparent place-items-center mt-[94.58px] mb-[94.58px]">
        <ImageUploader />
        <input className="w-[90%] md:w-[544.158px] h-[59.29px] mb-[15.26px] border border-solid rounded-[5px] border-[#9E9E9E] bg-[#383838] pl-[20.74px]"
          onChange={(e) => localStorage.setItem('title', e.target.value)}
          defaultValue={title}
          placeholder='NFT Title'>
        </input>
        <textarea className="w-[90%] md:w-[544.158px] h-[157.939px] mb-[17.34px] border border-solid rounded-[5px] border-[#9E9E9E] bg-[#383838] pl-[20.74px]"
          onChange={(e) => localStorage.setItem('description', e.target.value)}
          defaultValue={description}
          placeholder='description'>
        </textarea>
        <div>
          <button className='w-[50%] md:w-[262.08px] h-[63.078px]'>Mint without listing</button>
          <Link href="?modal=true">
            <button type="submit" className='w-[50%] md:w-[262.08px] h-[63.078px] rounded-[3px]'
              style={{
                background: 'linear-gradient(90deg, #B23DEB 0%, #DE8FFF 100%)'
              }}>
              Mint and list immediately
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
