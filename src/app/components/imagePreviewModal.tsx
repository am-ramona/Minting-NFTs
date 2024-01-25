"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// import { createHelia } from 'helia';
// import { json } from '@helia/json';
import {
  useStorageUpload,
  useMintNFT,
  useNFTCollection,
  useNFTs,
  ThirdwebNftMedia,
  useContract,
  useAddress,
  useMetamask
} from "@thirdweb-dev/react";
import { useSimulateContract, useWriteContract, type UseWriteContractParameters } from 'wagmi';
// import ipfs from 'ipfs';

function ImagePreviewModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const { data: hash, writeContract } = useWriteContract();

  console.log('address', address)
  console.log('connectWithMetamask', connectWithMetamask)
  const nftCollection = useNFTCollection(
    process.env.NEXT_PUBLIC_NFT_ADDRESS
  );
  // const nftCollection = useContract(
  //   process.env.NEXT_PUBLIC_NFT_ADDRESS, "nft-collection"
  // );
  // Load all the NFTs from the collection (with a loading flag)
  const { data: nfts, isLoading2 } = useNFTs(nftCollection);

  const { mutateAsync: upload } = useStorageUpload();
  const { mutate: mintNft, isLoading, error } = useMintNFT(nftCollection);

  if (typeof window !== 'undefined') {
    // Get the variable from local storage
    var image = localStorage.getItem('uploadedImage');
    var title = localStorage.getItem('title');
    // Get the variable from local storage
    var description = localStorage.getItem('description');
  }
  console.log("nft", process.env.NEXT_PUBLIC_NFT_ADDRESS)
  // localStorage.setItem('title', title)
  // localStorage.setItem('description', description)

  const generateOpenSeaMetadata = (imageUrl, imageTitle, imageDescription) => {
    const metadataObject = {
      name: imageTitle,
      description: imageDescription,
      image: imageUrl,
      // attributes: [
      //     {
      //         trait_type: 'File Name',
      //         value: fileName,
      //     },
      // ],
    };

    return metadataObject;
  };

  const { data } = useSimulateContract({
    address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
    contractInterface:'https://github.com/LinumLabs/web3-task-abi/blob/dev/Musharka721.json',
    functionName: 'mint' 
  })
  const { writeContract:mint, isSuccess } = useWriteContract() 

  // const mint = async (to: string, uri: string) => {
  //   uploadToIPFS();
  // }

  const uploadToIPFS = async () => {
    // Implement IPFS upload logic using the ipfs library
    // ...
    const metadataObject = generateOpenSeaMetadata(localStorage.getItem('uploadedImage'), localStorage.getItem('title'), localStorage.getItem('description'));
    // const buffer = await metadataObject.arrayBuffer();
    // const result = await ipfs.add(metadataObject);

    // const cid = result.path;
    // return cid;
    // For simplicity, let's just log the file name for now
    // console.log('Uploading to IPFS:', file.name);
    // var helia = await createHelia();
    // And upload the data with the upload function
    const uris = await upload({ data: [metadataObject] });
    console.log('uris', uris)
    // mint();
    // const j = json(helia)
    // const myImmutableAddress = await j.add(metadataObject)
    // console.log('ipfs', await j.get(myImmutableAddress))

  };



  // const mint = async (to: string, uri: string) => {
  //   writeContract({
  //     address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  //     abi,
  //     functionName: 'mint',
  //     args: [BigInt(tokenId)],
  //   })
  // }

  return (
    <>
      {modal && typeof window !== 'undefined' &&
        <dialog
          className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-black pt-[21.11px] px-[22.84px] pb-[32.89px] w-[457.297px] h-max text-white">
            <div className="grid items-center">
              {image && title && description &&
                <>
                  <Image
                    src={image && image}
                    alt='Preview NFT Image'
                    style={{ display: 'block' }}
                    // Revoke data uri after image is loaded
                    width='412'
                    height='346'
                    priority
                  />
                  <p className="font-cinzel text-[22px] font-bold leading-[32.235px]" >{title}</p>
                  <p className="font-opSans text-base/[24.644px] font-normal pb-[18.4px]" >{description}</p>
                </>
              }

              {/* {!isLoading2 ? (
        <div>
          {nfts?.map((nft) => (
            <div key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia metadata={nft.metadata} />
              <h3>{nft.metadata.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )} */}

              {hash && <div>Transaction Hash: {hash}</div>}
              <Link href={pathname} className="justify-self-center">
                <button type="button" onClick={mint} disabled={!address} className="w-[155.722px] h-[63.078px] text-white text-base/[24.644px] bg-[url('/subtract.png')] bg-no-repeat bg-left-top bg-[length:155.722px_63.078px] disabled:cursor-not-allowed">Continue</button>
              </Link>
            </div>
          </div>
        </dialog>
      }
    </>
  );
}

export default ImagePreviewModal;