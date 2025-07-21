'use client';
import React, {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import Product from '@/components/product';


const MorabaLight = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})
const Morabab = localFont({
    src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})
const Danam = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
})
const Danareg = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
})
const Danab = localFont({
    src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

import Star from '@mui/icons-material/StarBorderPurple500Outlined';
import Heart from '@mui/icons-material/FavoriteBorderOutlined';
import Random from '@mui/icons-material/ShuffleOutlined';
import Truck from '@mui/icons-material/LocalShippingOutlined';
import Check from '@mui/icons-material/CheckBoxOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

export default function Data() {
    return (
        <div className={`w-[85%] m-auto mt-12 ${Danareg.className}`}>
            {/* section nav */}
            <section className={'w-full rounded-xl px-2 py-3 bg-emerald-700 text-white '}>
                <p className={`${Danab.className} text-sm font-bold`}>Inicio / Café / Granos de café mezcla 250g HOUSE Blend 100% Arábica</p>
            </section>
            {/* section 2 */}
            <section className={'flex justify-between gap-x-4 mt-7'}>
                <div className={'w-[500px] h-[300px] bg-white rounded-2xl shadow-sm flex items-center justify-center'}>
                    <Image className={'w-[500px] h-[300px]'} width={1000} height={1000} src="/img/order/1.png" alt="café" unoptimized/>
                </div>
                <div className={'flex w-full rounded-2xl bg-white h-[407px] shadow-sm px-8 py-9'}>
                    <div className={'w-[60%] '}>
                        <h3 className={`text-emerald-600 text-xl ${Danab.className}`}>Granos de café mezcla 250g HOUSE Blend 100% Arábica</h3>
                        <p className={'text-xs text-gray-600 mt-3'}>Granos de café mezclados 250 gramos HOUSE Blend 100% Arábica</p>
                        <div className={'mt-3 flex  items-center gap-x-2'}>
                            <div>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                                <Star className={'text-gray-600 text-base'}/>
                            </div>
                            <p className={'text-xs text-gray-600'}>(Sin reseñas)</p>
                            <Heart className={'text-base'}/>
                            <Random className={'text-base'}/>
                        </div>
                        <div className={'mt-4'}>
                            <h4 className={'text-emerald-600 mb-3'}>Descripción del producto</h4>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>Peso del equipo: 5 kilogramos</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>Fabricado en: Suecia</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>Dimensiones de la cafetera: Profundidad 60 x Ancho 33 x Altura 74</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>Uso del equipo: Ideal para cafeterías y coffee shops</p>
                            </div>
                            <div className={'flex items-center gap-x-2 mb-4'}>
                                <span className={'w-1 inline-block h-1 bg-black rounded-full'}></span>
                                <p className={'text-sm'}>Tipo de filtro: Permanente</p>
                            </div>
                        </div>
                    </div>
                    <div className={'w-[40%] bg-gray-100 rounded-2xl px-6 py-3'}>
                        <div className={'flex items-center gap-x-1'}>
                            <Check className={'text-base text-emerald-600'}/>
                            <p className={`text-emerald-600 text-sm ${Danab.className}`}>Diseñador web</p>
                        </div>
                        <div className={'w-full h-[1px] mt-4 bg-white'}></div>
                        <div className={'flex items-center gap-x-3 mb-4 mt-3'}>
                            <Truck className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>Envío por la tienda</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <Check className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>Garantía de autenticidad y estado físico</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <Products className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>Garantía de cambio de producto</p>
                        </div>
                        <div className={'flex items-center gap-x-3 mb-4 '}>
                            <ProductionQuantityLimitsOutlinedIcon className={'text-base text-gray-500'}/>
                            <p className={'text-xs text-gray-500'}>El costo de envío corre por cuenta del comprador</p>
                        </div>
                        <div className={'flex  items-center  justify-between mt-7'}>
                            <div>
                                <h3 className={'text-sm'}>236,000</h3>
                                <span className={'text-emerald-600 text-[18px]'}>222,000</span>
                                <span className={'text-xs mr-1'}>Toman</span>
                            </div>
                            <Link className={'bg-emerald-700 text-white  rounded-md p-1 text-sm'} href='/'>
                                15%
                            </Link>
                        </div>
                        <Link href={'/'}
                              className={'w-full py-2 text-white items-center bg-emerald-700 inline-flex mt-5 justify-center rounded-xl hover:bg-emerald-600 transition-all'}>Agregar al carrito</Link>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className={'w-full bg-white mt-20 rounded-md px-8 py-5 '}>
                <div className={'flex items-center gap-x-3 border-b mb-10 border-gray-300'}>
                    <h4 className={'border-b border-emerald-700'}>Descripción</h4>
                    <h4>Comentarios</h4>
                </div>
                <p className={'text-gray-500 text-sm leading-8'}>Lorem ipsum es un texto de marcador de posición utilizado en la industria gráfica y de impresión. Los impresores y diseñadores gráficos lo utilizan como texto de relleno para simular el contenido real. Su uso permite a los diseñadores presentar el diseño visual antes de que el contenido final esté disponible.</p>
                <p className={'text-gray-500 text-sm leading-8'}>Lorem ipsum es un texto de marcador de posición utilizado en la industria gráfica y de impresión. Los impresores y diseñadores gráficos lo utilizan como texto de relleno para simular el contenido real. Su uso permite a los diseñadores presentar el diseño visual antes de que el contenido final esté disponible.</p>
            </section>
            <section className={'mt-16 mb-16'}>
                <div className={'flex items-center justify-center gap-x-2 text-zinc-900'}>
                    <Image src={'/img/icon.svg'} alt={'icono'} width={'38'} height={'38'} unoptimized></Image>
                    <h4 className={`${Morabab.className} text-4xl`}>Sobre nuestra tienda</h4>
                    <Image className={'mt-5'} src={'/img/brag.svg'} alt={'decoración'} width={'36'} height={'36'} unoptimized></Image>
                </div>
                {/*  Slider main container */}
                <Product />
            </section>
        </div>

    )
}
