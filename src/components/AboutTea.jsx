import React from 'react'

import Tea from '@mui/icons-material/CoffeeOutlined';
import Coffe from '@mui/icons-material/CoffeeMakerOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import Cup from '@mui/icons-material/EmojiFoodBeverageOutlined';
import Test from '@mui/icons-material/RestartAltOutlined';

export default function AboutTea() {
    const items = [
        { icon: <Tea className="h-[50px] w-[50px]" />, title: "Té iraní" },
        { icon: <Coffe className="h-[50px] w-[50px]" />, title: "Accesorios" },
        { icon: <LocalCafeOutlinedIcon className="h-[50px] w-[50px]" />, title: "Derivados del café" },
        { icon: <Cup className="h-[50px] w-[50px]" />, title: "Café al por mayor" },
        { icon: <Test className="h-[50px] w-[50px]" />, title: "Café auténtico" },
    ];

    return (
            <div className="w-full flex flex-wrap justify-space-around gap-24 p-4 rounded-2xl bg-zinc-900 text-white mt-20 mb-20">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[270px]"
                    >
                        {item.icon}
                        <h4 className="text-xl md:text-2xl mt-5 text-left">{item.title}</h4>
                        <p
                            className="text-xs mt-2 text-center leading-relaxed"
                            dir="ltr"
                        >
                            Ofrecemos tueste semanal de café y envío directo desde la fábrica mayorista.
                        </p>
                    </div>
                ))}
            </div>
        );
}