'use client';
import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Shop from "@mui/icons-material/StorefrontOutlined";
import ProductShop from '@/components/ProductShop';
import Pagination from '@/components/Pagination';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CustomCombination from '@/components/CustomCombination';
import Range from '@/components/range'

// 🔁 Función para barajar productos aleatoriamente
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

// Fuentes personalizadas
const Morabbalight = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Light.woff2"
});
const Morabab = localFont({
  src: "../../components/fonts/Morabba/woff2/Morabba-Bold.woff2"
});
const Danam = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-Medium.woff2"
});
const Danareg = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-Regular.woff2"
});
const Danab = localFont({
  src: "../../components/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2"
});

// Productos
const products = [
  { id: 1, name: "Caja de 60 chocolates amargos de café Violeta Farmand 55g", src: '/img/main/product-7-min.png', price: '$14.00' },
  { id: 2, name: "Granos de café mezcla FALL Blend Colombia original 250g", src: '/img/main/product-3.png', price: '$14.00' },
  { id: 3, name: "Taza con tapa de silicona y cuerpo de cerámica diseño Starbucks", src: '/img/main/product-2-min.png', price: '$14.00' },
  { id: 4, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-1.png', price: '$14.00' },
  { id: 5, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-4-min.png', price: '$14.00' },
  { id: 6, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-5-min.png', price: '$14.00' },
  { id: 7, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-6-min.png', price: '$14.00' },
  { id: 8, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-8-min.png', price: '$14.00' },
];

// Filtros
const categories = ['Categoría de productos...', 'Sin categoría', 'Tetera', 'Chocolate', 'Café', 'Cafetera', 'Taza'];
const brand = ['Marca de productos', 'Robusta', 'Arábica'];

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxprice, setMaxPrice] = useState(2_750_000);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownBrand, setShowDropdownBrand] = useState(false);
  const [selectCategories, setSelectCategories] = useState('Todos los productos');
  const [searchText, setSearchText] = useState('Categoría de productos...');
  const [selectBrand, setSelectBrand] = useState('Marca de productos');
  const [searchBrand, setSearchBrand] = useState('Marca de productos');
  const itemsPerPage = 6;

  useEffect(() => {
    setShuffledProducts(shuffleArray([...products]));
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < Math.ceil(shuffledProducts.length / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;
    if (e.target.name === 'min') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleCategoriesChange = (category) => {
    setSelectCategories(category);
    setShowDropdown(false);
    setSearchText(category);
  };

  const handleBrandChange = (brands) => {
    setSearchBrand(brands);
    setShowDropdownBrand(false);
  };

  const currentItems = shuffledProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const formatNumber = (number) => {
    return new Intl.NumberFormat('fa-IR').format(number);
  };

  return (
    <div className={`${Danareg.className} m-auto mt-12`}>
      <div className="w-[90%] max-w-[1200px] m-auto mt-20 px-4">
        {/* Sección 1 */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-y-10">
          {/* Columna izquierda (Texto + botones) */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-x-2 text-zinc-900">
              <Image src="/img/icon.svg" alt="logo" width={38} height={38} />
              <h4 className={`${Morabab.className} text-3xl md:text-4xl`}>Mezcla personalizada</h4>
              <Image className="mt-5" src="/img/brag.svg" alt="dec" width={36} height={36} />
            </div>
            <p className="mt-5 text-zinc-700 text-sm leading-7 text-justify">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...
            </p>
            <div className="flex flex-col sm:flex-row mt-10 gap-4">
              <Link href="/callUs" className="bg-emerald-700 rounded-3xl flex items-center justify-center text-white w-full sm:w-[136px] h-[43px] text-sm">
                <CoffeeIcon />
                <span className="ml-2 font-bold">¡Contáctanos!</span>
              </Link>
            </div>
          </div>

          {/* Columna derecha (Imagen) */}
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full max-w-[634px] h-auto rounded-3xl mx-auto"
              width={1000}
              height={1000}
              src="/img/order/Frame-304-min.jpg"
              alt="ilustración"
            />
          </div>
        </section>

        {/* Sección 2: CustomCombination */}
        <section className="py-10 mt-20">
          <CustomCombination />
        </section>
      </div>

      {/* Sección filtros + productos */}
      <div className={`${Danareg.className} m-auto mt-12 px-4`}>
        <div className="flex flex-col lg:flex-row gap-x-12">

          {/* Productos */}
          <div className="w-full lg:w-[75%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4" dir="ltr">
              {currentItems.map((product) => (
                <ProductShop key={product.id} product={product} />
              ))}
            </div>

            {/* Paginación */}
            <section className="mb-20 mt-5">
              <div className="w-full h-[47px] bg-white rounded-2xl flex items-center justify-center gap-x-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(shuffledProducts.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
              </div>
            </section>
          </div>

          {/* Filtros */}
          <section className="w-full lg:w-[25%] h-auto lg:sticky top-2 lg:mr-10" dir="ltr">
            {/* Input de búsqueda */}
            <input
              type="search"
              placeholder="Buscar..."
              className="h-11 w-full mb-4 pl-4 pr-2 rounded-xl text-black text-left"
            />

            {/* Botón de búsqueda */}
            <Link
              href="/"
              className="w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2"
            >
              <span>Buscar</span>
            </Link>

            {/* Filtro por categoría */}
            <div className="relative">
              <input
                type="search"
                placeholder={searchText}
                className="h-11 w-full mb-4 pl-4 pr-2 rounded-xl text-black cursor-pointer text-left"
                onFocus={() => setShowDropdown(true)}
                readOnly
              />
              {showDropdown && (
                <div className="absolute w-full bg-white border rounded-xl -mt-4 z-10 text-left">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleCategoriesChange(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filtro por marca */}
            <div className="relative">
              <input
                type="search"
                placeholder={searchBrand}
                className="h-11 w-full mb-4 pl-4 pr-2 rounded-xl text-black cursor-pointer text-left"
                onFocus={() => setShowDropdownBrand(true)}
                readOnly
              />
              {showDropdownBrand && (
                <div className="absolute w-full bg-white border rounded-xl -mt-4 z-10 text-left">
                  {brand.map((brands, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleBrandChange(brands)}
                    >
                      {brands}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Botón de aplicar filtros */}
            <Link
              href="/"
              className="w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2"
            >
              <span>Aplicar Filtros</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );


}
