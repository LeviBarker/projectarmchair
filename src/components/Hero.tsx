import React from "react";

export default function Hero({
                                 children,
                             }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="min-h-screen bg-gray-50 flex md:items-center items-start justify-center px-8 pb-8 text-stone-800">
            {children}
        </div>)
}