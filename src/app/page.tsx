"use client";

import { useState } from "react";
import Link from "next/link";
import ImageUploader from "./components/ImageUploader";

export default function Home() {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [connected, setConnected] = useState<Boolean>(false);

  const handleDataUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      // Display image preview
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);

      // Store the image in localStorage
      const imageData = reader.result;
      localStorage.setItem('uploadedImage', imageData);
    }
  };

  return (
    <main className="grid h-full justify-center ">
      <hgroup className="h-[216.143px] lg:w-[1140px] w-10/12 rounded-2xl border border-solid border-white bg-white/[0.09] backdrop-blur text-center">
        <h1 className="font-cinzel font-bold text-[44px] leading-[64.47px] bg-title-gradient bg-clip-text pt-[44.8px]">MINT NEW NFT</h1>
        <p className="px-[310px] leading-[24.644px] opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem tortor quis amet scelerisque vivamus egestas. </p>
      </hgroup>
      <form className="grid bg-transparent place-items-center mt-[94.58px]" onSubmit={handleDataUpload}>
        <ImageUploader />
        <input className="w-[544.158px] h-[59.29px] mb-[15.26px] border border-solid rounded-[5px] border-[#9E9E9E] bg-[#383838] pl-[20.74px]" onChange={(e) => localStorage.setItem('title', e.target.value)} defaultValue={title} placeholder='NFT Title'></input>
        <textarea className="w-[544.158px] h-[157.939px] mb-[17.34px] border border-solid rounded-[5px] border-[#9E9E9E] bg-[#383838] pl-[20.74px]" onChange={(e) => localStorage.setItem('description', e.target.value)} defaultValue={title} placeholder='description'></textarea>
        <div>
          <button className='w-[262.08px] h-[63.078px]'>Mint without listing</button>
          <Link href="?modal=true">
            <button type="submit" className='w-[262.08px] h-[63.078px] rounded-[3px]'
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
