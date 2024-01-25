"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useDropzone } from 'react-dropzone';

export default function ImageUploader(props ) {
  const [files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    if (files && files.length > 0) {
      localStorage.setItem('uploadedImage', files[0].preview);
    }
  }, [files]);

  return (
    <section className="w-[544.158px] h-[94px] mb-[19.34px] text-center border border-dashed border-[#9E9E9E] rounded-[5px] bg-[#383838]">
      <div {...getRootProps({ className: 'dropzone' })} className="h-full">
        <input {...getInputProps()} />
        <div className="h-full grid">
          <div className="flex justify-center items-center">
            <Image src='/upload_image.svg' alt='Upload Image icon'
              className="mr-[5px]"
              width='16'
              height='16'
              priority />
            <p className="text-lg/[26.374px] font-opSans">Upload Image</p>
          </div>
          <p className="text-sm/[20.513px] font-opSans">format supported</p>
        </div>
      </div>
    </section>
  );
}