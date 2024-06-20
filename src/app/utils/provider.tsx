"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Goerli } from "@thirdweb-dev/chains"

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThirdwebProvider activeChain={Goerli} clientId="bf883a55580f9e31c1cbaa9a3e3996ef">
            {children}
        </ThirdwebProvider>
    )
}

export default Provider


