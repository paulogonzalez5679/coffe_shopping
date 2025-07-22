import React from 'react';
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";

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

import Shop from '@mui/icons-material/StorefrontOutlined';
import Quiz from '@mui/icons-material/QuizOutlined';
import Star from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function AboutPage() {
    return (
        <div className={`${Danareg.className} mt-20`}>
            {/* sección principal */}
            <div className={' w-[85%] m-auto'}>
                {/* sección 1 */}
                <section className={'flex'}>
                    {/* div derecho */}
                    <div className={'w-[50%] '}>
                        {/* logotipo */}
                        <div className={'flex items-center gap-x-2 text-zinc-900'}>
                        <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'} unoptimized></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>Sobre nuestra tienda</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'} unoptimized></Image>
                        </div>
                        <p className={'mt-5 text-zinc-700 text-sm leading-7'}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No solo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                        { /* botones */}
                        <div className={'flex mt-10 gap-x-5'}>
                            <Link href={"/"}
                                  className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>Nuestra tienda</span>
                            </Link>
                            <Link href={"/"}
                                  className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
                                <Shop className={''}/>
                                <span className={'mr-1'}>¿Tienes una pregunta?</span>
                            </Link>
                        </div>
                    </div>
                    {/* div izquierdo */}
                    <div className={'w-[50%]'}>
                        <Image className={'w-[634px] h-[400px] rounded-3xl'} width={1000} height={1000} src="/img/About-us/Group-75-min.png" alt="c" unoptimized/>
                    </div>
                </section>
                {/* sección 2 */}
                <section className={'flex'}>
                    {/* imagen */}
                    <div>
                        <Image className={'w-[600px] h-[500px] rounded-3xl mr-[-115px]'} width={1000} height={1000} src="/img/About-us/ax3.png" alt="c" unoptimized/>
                    </div>
                    {/* servicios y logo */}
                    <div className={'mt-24'}>
                        {/* logo */}
                        <div className={'flex items-center gap-x-2 text-zinc-900'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'} unoptimized></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>Sobre nuestra tienda</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'} unoptimized></Image>
                        </div>
                        {/* servicios */}
                        <div className={'flex gap-x-8 mt-14'}>
                            <div className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>Las mejores variedades de café</h3>
                                    <p className={'text-sm mt-2'}>Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión.</p>
                                </div>
                            </div>
                            <div
                                className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6 mt-10'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame2.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>Combinación exclusiva</h3>
                                    <p className={'text-sm mt-2'}>Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión.</p>
                                </div>
                            </div>
                            <div className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Frame3.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>Combinación exclusiva</h3>
                                    <p className={'text-sm mt-2'}>Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión.</p>
                                </div>
                            </div>
                            <div
                                className={'bg-zinc-200 rounded-2xl flex flex-col items-center w-52 h-60 px-4 py-6 mt-10'}>
                                <Image className={'w-[72px] h-[72px] rounded-3xl'} width={1000} height={1000}
                                       src="/img/About-us/Group.png"
                                       alt="c"/>
                                <div className={'mt-6 text-center'}>
                                    <h3 className={`${Danab.className} text-lg`}>Combinación exclusiva</h3>
                                    <p className={'text-sm mt-2'}>Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
            </div>
            {/* sección opiniones */}
            <section className={'w-full h-[600px] bg-zinc-900  mt-[-175px] '}>
                {/* sección principal */}
                <div className={' w-[85%] m-auto'}>
                    {/* sección 4 */}
                    <section>
                        <div className={'flex items-center gap-x-2 text-white justify-center pt-[250px]'}>
                            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
                            <h4 className={`${Morabab.className} text-4xl`}>Opiniones de nuestros clientes</h4>
                            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'}
                                   height={'36'}></Image>
                        </div>
                    </section>
                    {/* sección 5 */}
                    <section className={'flex justify-between mt-20'}>
                        {/* opinión */}
                        <div className={'bg-white w-[412px] h-[166px] rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar2-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>Hamid Reza Hamidi</h4>
                                        <span className={'text-sm'}>Cliente habitual</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y el diseño gráfico. </p>
                        </div>
                        <div className={'bg-white w-[412px] h-[166px rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar3-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>Hamid Reza Hamidi</h4>
                                        <span className={'text-sm'}>Cliente habitual</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y el diseño gráfico. </p>
                        </div>
                        <div className={'bg-white w-[412px] h-[166px rounded-2xl px-3'}>
                            <div className={'flex justify-between items-center pt-4'}>
                                <div className={'flex items-center'}>
                                    <Image className={'w-[72px] h-[72px] rounded-full'} width={1000} height={1000}
                                           src="/img/About-us/user-avatar5-min-300x300.jpg"
                                           alt="c"/>
                                    <div className={`mx-3`}>
                                        <h4 className={`${Morabab.className} text-base`}>Hamid Reza Hamidi</h4>
                                        <span className={'text-sm'}>Cliente habitual</span>
                                    </div>
                                </div>
                                <div className={'text-gray-400'}>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-yellow-300 text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                    <Star className={'text-base'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-justify mt-4 pb-3'}>
                                Lorem Ipsum es simplemente el texto de relleno de la industria de la impresión y el diseño gráfico. </p>
                        </div>
                    </section>
                </div>
                {/* sección opiniones */}

                        {/* sección 7 */}
            </section>
        </div>
    )
}
