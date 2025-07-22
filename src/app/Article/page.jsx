import React from 'react'
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

import Tel from '@mui/icons-material/LocalPhoneOutlined';
import Phone from '@mui/icons-material/PhoneAndroidOutlined';
import Mail from '@mui/icons-material/EmailOutlined';
import Lock from '@mui/icons-material/FmdGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Shop from "@mui/icons-material/StorefrontOutlined";

export default function Article() {
    return (
        <div className={`${Danareg.className} mt-12 w-[85%] m-auto`}>
            {/* section nav */}
            <section className={'w-full rounded-xl px-2 py-3 bg-emerald-700 text-white '}>
                <p className={`${Danab.className} text-sm font-bold`}>Inicio / Videojuegos / Evento de presentación de servicios el 20 de octubre</p>
            </section>
            {/* img */}
            <Image className="h-[400px] w-full rounded-2xl mt-8" width={'500'} height={'300'} src="/img/Blog/post-1.jpg" alt="c" unoptimized/>
            {/* section blog */}
            <section className={'mt-6 flex items-start gap-x-9'}>
                <div className={'bg-white w-[75%] p-4 rounded-xl'}>
                    <div className={'flex items-center justify-between border-b border-b-gray-200 pb-3'}>
                        <div className={'text-xs'}>
                            <span className={'mx-2'}><PersonOutlinedIcon className={'text-sm '}/>Diseñador del sitio</span>
                            <span className={'mx-1'}><CalendarMonthOutlinedIcon className={'text-sm '}/>16 de octubre, 2022</span>
                            <span className={'mx-1'}><ChatBubbleOutlineOutlinedIcon className={'text-sm'}/>Sin comentarios</span>
                        </div>
                        <div>
                            <InstagramIcon className={'text-base mx-1'}/>
                            <TelegramIcon className={'text-base mx-1'}/>
                            <WhatsAppIcon className={'text-base mx-1'}/>
                            <YouTubeIcon className={'text-base mx-1'}/>
                        </div>
                    </div>
                    <div className={'mt-5'}>
                        <p className={'text-sm leading-8 tracking-normal text-justify mb-3 '}>Apple presentó el iPhone 5 hace 10 años, que a diferencia de las generaciones anteriores, no tenía conector de 30 pines y salió al mercado con el puerto Lightning. Gracias a este puerto, los usuarios podían conectar el cable sin importar la dirección correcta. Antes del Lightning, otros puertos solo tenían una dirección correcta.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <h2 className={`${Danab.className} mt-3 text-emerald-600 text-xl`}>USB-C; 8 años</h2>
                        <Image className="h-[400px] w-full rounded-2xl mt-8 mb-4" width={'500'} height={'300'} src="/img/Blog/blog-new-7.jpg" alt="c" unoptimized/>
                        <p className={'text-sm leading-8 tracking-normal text-justify'}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify mb-3 '}>Apple presentó el iPhone 5 hace 10 años, que a diferencia de las generaciones anteriores, no tenía conector de 30 pines y salió al mercado con el puerto Lightning. Gracias a este puerto, los usuarios podían conectar el cable sin importar la dirección correcta. Antes del Lightning, otros puertos solo tenían una dirección correcta.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>اما این پورت که روزی روزگاری یک نوآوری جذاب محسوب می‌شد، حالا صدای بسیاری از کاربران را
                            درآورده و این افراد خواستار مهاجرت آیفون به سمت USB-C هستند. اما در کل اپل از جمله شرکت‌هایی
                            است که برای استفاده از تکنولوژی‌های جدید هیچ عجله‌ای ندارد. در ادامه به ۶ مورد از
                            تکنولوژی‌هایی می‌پردازیم که اپل دیرتر از رقبا به بهره‌گیری از آن‌ها روی آورده است.
                        </p>
                        <h2 className={`${Danab.className} mt-3 text-emerald-600 text-xl`}>USB-C; 8 años</h2>
                        <Image className="h-[400px] w-full rounded-2xl mt-8 mb-4" width={'500'} height={'300'}
                               src="/img/Blog/post-3-768x307.jpg"
                               alt="c"/>
                        <p className={'text-sm leading-8 tracking-normal text-justify mb-3 '}>اپل ۱۰ سال قبل از آیفون ۵ رونمایی
                            کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳۰ پین
                            بود و با پورت لایتنینگ راهی بازار شد. به لطف استفاده از این پورت، کاربران بدون توجه به جهت
                            درست
                            کابل، می‌توانستند آن را درون پورت گوشی قرار دهند. این در حالی است که پیش از   یتیخ ییخن ینمین لایتنینگ، برای
                            سایر
                            پورت‌ها فقط یک جهت درست وجود داشت.
                        </p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <h2 className={`${Danab.className} mt-3 text-emerald-600 text-xl`}>USB-C; 8 años</h2>
                        <Image className="h-[400px] w-full rounded-2xl mt-8 mb-4" width={'500'} height={'300'}
                               src="/img/Blog/Android-update-installing-840w-472h-768x488.jpg"
                               alt="c"/>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify mb-3 '}>Apple presentó el iPhone 5 hace 10 años, que a diferencia de las generaciones anteriores, no tenía conector de 30 pines y salió al mercado con el puerto Lightning. Gracias a este puerto, los usuarios podían conectar el cable sin importar la dirección correcta. Antes del Lightning, otros puertos solo tenían una dirección correcta.</p>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>اما این پورت که روزی روزگاری یک نوآوری جذاب محسوب می‌شد، حالا صدای بسیاری از کاربران را
                            درآورده و این افراد خواستار مهاجرت آیفون به سمت USB-C هستند. اما در کل اپل از جمله شرکت‌هایی
                            است که برای استفاده از تکنولوژی‌های جدید هیچ عجله‌ای ندارد. در ادامه به ۶ مورد از
                            تکنولوژی‌هایی می‌پردازیم که اپل دیرتر از رقبا به بهره‌گیری از آن‌ها روی آورده است.
                        </p>
                        <h2 className={`${Danab.className} mt-3 text-emerald-600 text-xl`}>USB-C; 8 años</h2>
                        <Image className="h-[400px] w-full rounded-2xl mt-8 mb-4" width={'500'} height={'300'}
                               src="/img/Blog/blog-new-6.jpg"
                               alt="c"/>
                        <p className={'text-sm leading-8 tracking-normal text-justify '}>Sin embargo, este puerto que alguna vez fue una innovación atractiva, ahora ha generado muchas críticas y los usuarios quieren que el iPhone migre a USB-C. En general, Apple es una empresa que no se apresura a adoptar nuevas tecnologías. A continuación, repasamos 6 tecnologías que Apple adoptó más tarde que sus competidores.</p>
                    </div>

                </div>
                <div className={' w-[25%] sticky top-2'}>
                    <div className={'w-full bg-white rounded-xl px-10 py-3'}>
                        <h2 className={`text-base mb-2 ${Morabab.className}`}>Lo que aprenderás en este artículo</h2>
                        <Link href={'/'} className={'text-sm text-emerald-600'}>USB-C; 8 años</Link>
                        <Link href={'/'} className={'text-xs  block my-2 tracking-tighter hover:text-emerald-600 transition-all'}>Tecnología de combinación de píxeles del sensor; 4 años</Link>
                        <Link href={'/'} className={'text-xs  block my-2 tracking-tighter hover:text-emerald-600 transition-all'}>Internet 5G; 1.5 años</Link>
                        <Link href={'/'} className={'text-xs  block my-2 tracking-tighter hover:text-emerald-600 transition-all'}>Pantalla siempre encendida; 6 años (mínimo)</Link>
                        <Link href={'/'} className={'text-xs  block my-2 tracking-tighter hover:text-emerald-600 transition-all'}>Carga inalámbrica; 8 años</Link>
                    </div>
                    <div className={'bg-gray-200 w-full mt-5 p-3 rounded-2xl'}>
                        <div className={'relative mt-2'}>
                            <Image className="h-[185px]  m-auto w-[220px] cursor-pointer " width={'10000'}
                                   height={'2000'}
                                   src="/img/main/product-7-min.png"
                                   alt="c" />
                            <Link href={'/'}
                                  className={'bg-white top-1 right-1 absolute text-emerald-600 m-auto p-2 rounded-2xl'}>
                                <span className="font-dana mt-5 text-center text-base">28%</span>
                            </Link>
                        </div>
                        <h4 className={'mt-5 text-center'}>cafetera de temporada</h4>
                        <div className={'flex justify-between items-center mt-7'}>
                            <h4 className="font-dana mt-5 text-center text-base">$140,000 MXN</h4>
                            <Link href={"/"}
                                  className={'bg-emerald-700 hover:bg-white hover:text-emerald-600 transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs'}>
                                <Shop className={'text-sm'} />
                                <span className={'mr-1'}>Comprar</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* baner */}
            <Image className=" w-full rounded-2xl mt-12" width={'10000'} height={'10000'}
                   src="/img/Blog/single-post-banner-1.png"
                   alt="c"/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
