import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Shop from '@mui/icons-material/StorefrontOutlined';

export default function Product() {
  const products = [
    "/img/main/product-7-min.png",
    "/img/main/product-7-min.png",
    "/img/main/product-2-min.png",
    "/img/main/product-2-min.png"
  ];

  return (
    <div className="mt-8 mb-3 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((imgSrc, index) => (
          <div key={index} className="bg-gray-200 p-3 rounded-2xl">
            <div className="relative mt-2">
              <Image
                className="h-[185px] w-[220px] m-auto cursor-pointer"
                width={10000}
                height={2000}
                src={imgSrc}
                alt="Producto"
                unoptimized
              />
              <Link
                href="/shop"
                className="bg-white top-1 right-1 absolute  m-auto p-2 rounded-2xl"
              >
                <span className="font-dana mt-5 text-center text-base">28%</span>
              </Link>
            </div>
            <h4 className="mt-5 text-center text-base">Café de temporada</h4>
            <div className="flex justify-between items-center mt-7">
              <p className="font-dana mt-5 text-center text-base">$140,000 MXN</p>
              <Link
                href="/shop"
                className="bg-emerald-700 hover:bg-white hover: transition-all rounded-3xl flex items-center justify-center text-white w-[91px] h-[31px] text-xs"
              >
                <Shop className="text-sm" />
                <span className="mr-1">Comprar</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
