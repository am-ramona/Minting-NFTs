"use server";

import { http, createConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'

export const config = createConfig({
  chains: [goerli],
  transports: {
    [goerli.id]: http()
  },
})