import React from 'react'

import Image from 'next/image'

import localFont from "next/font/local";

const MorabaLight = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})

export default function CustomCombination() {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-x-6">
                {/* Paso 1 */}
                <div className="flex flex-col md:flex-row items-center justify-start gap-x-4 text-center md:text-start">
                    <Image
                        className="w-[100px] h-[100px] bg-white rounded-full"
                        src="/img/sun.svg"
                        alt="paso 1"
                        width={1000}
                        height={1000}
                        unoptimized
                    />
                    <h5 className={`${MorabaLight.className} text-lg md:text-xl`}>
                        Elige el tipo y variedad de café
                    </h5>
                    <Image
                        className="hidden md:block w-[80px] h-[80px]"
                        src="/img/Arrow_03.svg"
                        alt="flecha"
                        width={1000}
                        height={1000}
                        unoptimized
                    />
                </div>

                {/* Paso 2 */}
                <div className="flex flex-col md:flex-row items-center justify-start gap-x-4 text-center md:text-start">
                    <Image
                        className="w-[100px] h-[100px] bg-white rounded-full"
                        src="/img/sabt.svg"
                        alt="paso 2"
                        width={1000}
                        height={1000}
                        unoptimized
                    />
                    <h5 className={`${MorabaLight.className} text-lg md:text-xl`}>
                        Elige el tipo y variedad de café
                    </h5>
                    <Image
                        className="hidden md:block w-[80px] h-[80px]"
                        src="/img/Arrow_03.svg"
                        alt="flecha"
                        width={1000}
                        height={1000}
                        unoptimized
                    />
                </div>

                {/* Paso 3 */}
                <div className="flex flex-col md:flex-row items-center justify-start gap-x-4 text-center md:text-start">
                    <Image
                        className="w-[100px] h-[100px] bg-white rounded-full"
                        src="/img/tanzim.svg"
                        alt="paso 3"
                        width={1000}
                        height={1000}
                        unoptimized
                    />
                    <h5 className={`${MorabaLight.className} text-lg md:text-xl`}>
                        Elige el tipo y variedad de café
                    </h5>
                </div>
            </div>
        </div>
    );
}
