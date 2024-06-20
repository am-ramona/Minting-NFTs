"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Goerli } from "@thirdweb-dev/chains"

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThirdwebProvider activeChain={Goerli} clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
            {children}
        </ThirdwebProvider>
    )
}

export default Provider


