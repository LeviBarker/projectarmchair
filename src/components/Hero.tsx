import React from "react";

export default function Hero({
                                 children,
                             }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[#EE453A] to-[#E7242E] flex md:items-center items-start justify-center px-8 pb-8 text-white">
            {children}
        </div>)
}