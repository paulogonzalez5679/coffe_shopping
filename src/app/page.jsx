'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Check from '@mui/icons-material/CheckBoxOutlined';
import Articles from '@/components/articles';
import Product from '@/components/product';
import AboutTea from '@/components/AboutTea';
import CustomCombination from '@/components/CustomCombination';
import localFont from "next/font/local";
import Shop from "@mui/icons-material/StorefrontOutlined";

// Fuentes personalizadas
const MorabaLight = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Light.woff2"
});

const Morabab = localFont({
    src: "../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
});

const Danam = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
});

const Danareg = localFont({
    src: "../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
});

// Lista de imágenes
const images = [
    "/img/main/hero-3-1.png",
    "/img/main/hero-2-1.png",
    "/img/main/hero-1-min.png",
    // "/img/main/test.svg",
];

export default function Page() {
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambio automático de imagen cada 2 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
            setMainImage(images[nextIndex]);
        }, 5000);

        return () => clearInterval(interval); // Limpia el intervalo
    }, [currentIndex]);

    // Cambio manual
    const handleTouchClick = (src, index) => {
        setMainImage(src);
        setCurrentIndex(index);
    };

    return (
        <div>

            <div className={`${Danareg.className} max-w-10xl mx-auto mt-12 px-3`}>
                {/* section 1 */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20" style={{ marginRight: "8rem" }}>
                    {/* derecha: banner */}
                    <div className=" lg:[width:45%]">
                        <Image
                            className=" h-auto object-cover"
                            width={600}
                            height={600}
                            src={mainImage}
                            alt="main-banner"
                            unoptimized
                        />
                    </div>

                    {/* izquierda: texto y botones */}
                    <div className="w-full lg:[width:90%]">
                        <div className="w-full lg:[width:90%] text-left">
                            <h3 className={`text-3xl sm:text-5xl my-4 sm:my-6 ${Morabab.className}`}>
                                Variedades de café y accesorios para cafetería
                            </h3>

                            <p className="text-base leading-7 mb-6">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500...
                            </p>

                            {/* botón */}
                            <div className="mt-4 flex justify-end">
                                <Link
                                    href="/shop"
                                    className="bg-emerald-700 rounded-3xl flex items-center gap-2 text-white w-fit px-6 h-[45px] text-sm hover:bg-emerald-800 transition-colors"
                                >
                                    <Shop />
                                    <span>ver productos</span>
                                </Link>
                            </div>

                            {/* miniaturas */}
                            <div className="flex flex-wrap mt-8 gap-4 justify-end">
                                {images.map((src, i) => (
                                    <Image
                                        key={i}
                                        className={`h-28 w-24 object-cover rounded-lg cursor-pointer ${mainImage === src ? 'ring-2 ring-emerald-500' : ''}`}
                                        width={100}
                                        height={100}
                                        src={src}
                                        alt={`preview-${i}`}
                                        onClick={() => handleTouchClick(src, i)}
                                        unoptimized
                                    />
                                ))}
                            </div>
                        </div>
                    </div>



                </section>

                {/* section 2 */}
                <section style={{ marginBottom: "8rem" }}>
                    <AboutTea />
                </section>



            </div>



        </div>




    );
}
