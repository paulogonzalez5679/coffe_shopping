"use client"
import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';

import CustomCombination from '@/components/CustomCombination';

import { PhotoOne, PhotoTwo, PhotoThree } from '@/components/OrderImg';
import Range from '@/components/range'

const Morabab = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
})

const Danab = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
})

const Morabbalight = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
})

import CoffeeIcon from '@mui/icons-material/Coffee';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


export default function Order() {


  return (
    <div className=' w-[85%] m-auto mt-20'>
      {/* section 1 */}
      <section className={'flex'}>
        {/* right div */}
        <div className={'w-[50%] '}>
          {/* log */}
          <div className={'flex items-center gap-x-2 text-zinc-900'}>
            <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
            <h4 className={`${Morabab.className} text-4xl`}>Mezcla personalizada</h4>
            <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
          </div>
          <p className={'mt-5 text-zinc-700 text-sm leading-7 text-justify'}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
          { /* buttons */}
          <div className={'flex mt-10 gap-x-5'}>
            <Link href={"/order"}
              className={'bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-[136px] h-[43px] text-sm'}>
              <CoffeeIcon className={''} />
              <span className={'mr-1 font-bold'}>¡Vamos!</span>
            </Link>
            <Link href={"/callUs"}
              className={'bg-white rounded-3xl flex items-center justify-center text-emerald-600 w-[136px] h-[43px] text-sm'}>
              <HelpOutlineOutlinedIcon className={''} />
              <span className={'mr-1'}>¿Tienes alguna pregunta?</span>
            </Link>
          </div>
        </div>
        {/* left div */}
        <div className={'w-[50%] mr-5'}>
          <Image className={'w-[634px] h-[400px] rounded-3xl'} width={1000} height={1000}
            src="/img/order/Frame-304-min.jpg"
            alt="c" />
        </div>
      </section>
      {/* SECTION TWO */}
      <section className='py-10 mt-20'>
        <CustomCombination />
      </section>
      {/* SECTION THREE */}
      <section className='py-10 mt-20 bg-white rounded-2xl'>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>نژاد عربیکـــــا :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>در اینجا میبایست نژاد قهوه عربیکا خود را در بین گزینه های مقابل انتخاب نمایید.</span>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Kenya</span>
              <span className={Morabbalight.className}>خواستگاه: کنیــا</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-1.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Colombia</span>
              <span className={Morabbalight.className}>خواستگاه: کلمبیـــــا</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-2.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Peru</span>
              <span className={Morabbalight.className}>خواستگاه: پـــرو</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>نژاد روبوســـتا :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>در اینجا میبایست نژاد قهوه عربیکا خود را در بین گزینه های مقابل انتخاب نمایید.</span>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-3.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Indonesia</span>
              <span className={Morabbalight.className}>خواستگاه: اندونــزی</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-4.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>Vietnam</span>
              <span className={Morabbalight.className}>خواستگاه: ویتنـــام</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
            <div>
              <Image src={'/img/order/Mask-group-5.png'} width={100} height={100} alt='' />
            </div>
            <div className='flex flex-col mr-4'>
              <span className={Danab.className}>India</span>
              <span className={Morabbalight.className}>خواستگاه: هنـــد</span>
              <span className={Morabbalight.className}>رست : مدیوم</span>
            </div>
          </div>
        </div>
        {/* SECTION THREE */}
        <div className={'flex items-center gap-x-2 text-zinc-900 justify-center py-10'}>
          <Image src={'/img/icon.svg'} alt={'dhd'} width={'38'} height={'38'}></Image>
          <h4 className={`${Morabab.className} text-4xl`}>تنظیم ترکیبات قهوه</h4>
          <Image className={'mt-5'} src={'/img/brag.svg'} alt={'ee'} width={'36'} height={'36'}></Image>
        </div>
        {/* SECTION FOURE */}
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>درصد ترکیب عربیکا:</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>میزان قهوه عربیکا در ترکیب سفارشی خود را به درصد انتخاب نمایید .</span>
          </div>
          <Range />
        </div>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>درصد ترکیب روبوستا:</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>میزان قهوه روبوستا در ترکیب سفارشی خود را به درصد انتخاب نمایید .</span>
          </div>
          <Range />
        </div>
        <div className='flex items-center justify-evenly p-10'>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-600 text-3xl ${Morabab.className}`}>وزن بسته قهوه شما :</span>
            <span className={`text-justify w-64 mt-4 text-sm ${Danab.className}`}>وزن بسته ترکیب سفارشی خود را از بین گزینه های مقابل انتخاب نمایید .</span>
          </div>
          <div className='flex items-center justify-center mr-20'>
            <div className='flex items-center bg-zinc-100 p-5 rounded-3xl'>
              <div>
                <Image src={'/img/order/Group-72.png'} width={100} height={100} alt='' />
              </div>
              <div className='flex flex-col mr-4'>
                <span className={Danab.className}>250 گرم</span>
                <span className={`${Morabbalight.className} mt-5`}>قهوه عربیکا و روبوستا</span>
              </div>
            </div>
          </div>
          <div className='flex items-center bg-zinc-100 p-5 rounded-3xl mr-20'>
              <div>
                <Image src={'/img/order/Group-72.png'} width={100} height={100} alt='' />
              </div>
              <div className='flex flex-col mr-4'>
                <span className={Danab.className}>150 گرم</span>
                <span className={`${Morabbalight.className} mt-5`} >قهوه عربیکا و روبوستا</span>
              </div>
            </div>
            <div className='flex items-center bg-zinc-100 p-5 rounded-3xl mr-20'>
              <div>
                <Image src={'/img/order/Group-72.png'} width={100} height={100} alt='' />
              </div>
              <div className='flex flex-col mr-4'>
                <span className={Danab.className}>100 گرم</span>
                <span className={`${Morabbalight.className} mt-5`}>قهوه عربیکا و روبوستا</span>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}