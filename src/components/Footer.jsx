import React from 'react'
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";


const MorabaLight = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})
const Morabab = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})
const Danam = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})
const Danareg = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
})
const Danab = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import Tel from '@mui/icons-material/LocalPhoneOutlined';
import Phone from '@mui/icons-material/PhoneAndroidOutlined';
import Mail from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/FmdGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function test() {
    return (
        <footer className={`${Danareg.className} footer-back text-white pt-10 pb-6`}>
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 md:gap-6 justify-between">

                    {/* sección 1 */}
                    <div className="w-full md:max-w-[300px]">
                        <Image src="/img/dibujo.svg" className="h-[63px] mb-4" alt="" width={1000} height={1000} unoptimized />
                        <p className="text-sm leading-7">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Ha sido el texto de relleno estándar desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló para hacer un libro de textos especimen.
                        </p>
                    </div>

                    {/* sección 4 - contacto */}
                    <div className="w-full md:max-w-[280px]">
                        <div className="flex items-center gap-x-2">
                            <span className="w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2"></span>
                            <Link href="/" className="text-xl">
                                Medios de contacto
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-6 mt-6 text-sm">
                            <div className="flex items-center gap-x-3">
                                <Phone/>
                                <span className="font-dana mt-5 text-center text-base">09123456789</span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <Mail/>
                                <span className="font-dana mt-5 text-center text-base">Info@yoursite.com</span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <Tel/>
                                <span className="font-dana mt-5 text-center text-base">12345687 - 035</span>
                            </div>
                            <div className="flex items-start gap-x-3">
                                <Lock/>
                                <span className="w-full">Yazd, Calle Diseñadores Web, Pasaje Khoban, N°22</span>
                            </div>
                        </div>
                    </div>

                    {/* sección 3 - enlaces útiles */}
                    <div className="w-full md:max-w-[200px]">
                        <div className="flex items-center gap-x-2">
                            <span className="w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2"></span>
                            <Link href="/" className="text-xl">
                                Enlaces útiles
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-6 text-sm">
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Página principal</span></Link>
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Pedir café</span></Link>
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Sobre nosotros</span></Link>
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Nuestra tienda</span></Link>
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Últimos artículos</span></Link>
                            <Link href="/"><span className="font-dana mt-5 text-center text-base">Contáctanos</span></Link>
                        </div>
                    </div>

                    {/* sección 5 - sello de confianza */}
                    <div className="w-full md:max-w-[280px]">
                        <div className="flex items-center gap-x-2">
                            <span className="w-3 h-3 bg-emerald-600 inline-block rounded-full pt-2"></span>
                            <Link href="/" className="text-xl">
                                Sello de confianza
                            </Link>
                        </div>
                        <div className="mt-5">
                            <p className="font-dana mt-5 text-center text-base">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Ha sido el texto de relleno estándar desde el año 1500.
                            </p>
                        </div>
                        <div className="flex justify-start gap-x-5 mt-5">
                            <InstagramIcon className="text-[22px]" />
                            <TelegramIcon className="text-[22px]" />
                            <YouTubeIcon className="text-[22px]" />
                            <WhatsAppIcon className="text-[22px]" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
