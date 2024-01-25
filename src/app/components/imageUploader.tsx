"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export default function ImageUploader(props: ) {
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

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <Image
          src={file.preview}
          alt='Preview NFT Image'
          style={img}
          // Revoke data uri after image is loaded
          width='100'
          height='100'
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    if (files && files.length > 0) {
      console.log('files[0].preview', files[0].preview)
      localStorage.setItem('uploadedImage', files[0].preview);
      props.getImageSrc(files[0].preview)
    }
  }, [files]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);


  const ImageDetails = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

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
      {/* <aside>
        <h4>Files</h4>
        <ul>{ImageDetails}</ul>
      </aside> */}
      <aside>
        {thumbs}
      </aside>
    </section>
  );
}