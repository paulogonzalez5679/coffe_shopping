'use client';
import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Shop from "@mui/icons-material/StorefrontOutlined";
import ProductShop from '@/components/ProductShop';
import Pagination from '@/components/Pagination';

// 🔁 Función para barajar productos aleatoriamente
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

// Fuentes personalizadas
const MorabaLight = localFont({
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
  { id: 1, name: "Caja de 60 chocolates amargos de café Violeta Farmand 55g", src: '/img/main/product-7-min.png', price: '140,000 Tomanes' },
  { id: 2, name: "Granos de café mezcla FALL Blend Colombia original 250g", src: '/img/main/product-3.png', price: '140,000 Tomanes' },
  { id: 3, name: "Taza con tapa de silicona y cuerpo de cerámica diseño Starbucks", src: '/img/main/product-2-min.png', price: '140,000 Tomanes' },
  { id: 4, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-1.png', price: '140,000 Tomanes' },
  { id: 5, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-4-min.png', price: '140,000 Tomanes' },
  { id: 6, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-5-min.png', price: '140,000 Tomanes' },
  { id: 7, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-6-min.png', price: '140,000 Tomanes' },
  { id: 8, name: "Cafetera eléctrica Sinbo modelo SCM 2928 con cuerpo cerámico", src: '/img/main/product-8-min.png', price: '140,000 Tomanes' },
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
      <div className="flex gap-x-8">
        {/* Sidebar filtros */}
        <section className="w-[25%] h-[424px] sticky top-2">
          <input type="search" placeholder="جستجو..."
            className="h-11 w-full mb-4 pr-2 rounded-xl text-black" />
          <Link href="/" className="w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2">
            <span>جستجو کنید</span>
          </Link>

          <div className="flex flex-col justify-around w-full mb-4 h-[108px] bg-white px-4 rounded-xl">
            <span>فیلتر قیمت</span>
            <input
              type="range"
              style={{ accentColor: '#059669' }}
              name="min"
              min={1000}
              max={2750000}
              value={minPrice}
              onChange={handleRangeChange}
            />
            <span className="text-center">{formatNumber(minPrice)} تومان — 2,750,000 تومان</span>
          </div>

          {/* Filtro por categoría */}
          <div className="relative">
            <input
              type="search"
              placeholder={searchText}
              className="h-11 w-full mb-4 pr-2 rounded-xl text-black cursor-pointer"
              onFocus={() => setShowDropdown(true)}
              readOnly
            />
            {showDropdown && (
              <div className="absolute w-full bg-white border rounded-xl -mt-4 z-10">
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
              className="h-11 w-full mb-4 pr-2 rounded-xl text-black cursor-pointer"
              onFocus={() => setShowDropdownBrand(true)}
              readOnly
            />
            {showDropdownBrand && (
              <div className="absolute w-full bg-white border rounded-xl -mt-4 z-10">
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

          <Link href="/" className="w-full bg-emerald-700 mb-4 rounded-xl text-white block text-center py-2">
            <span>اعمال فیلتر</span>
          </Link>
        </section>

        {/* Productos */}
        <div className="flex flex-col w-[73%]">
          <section className="w-full rounded-xl px-4 flex justify-between items-center bg-white h-[62px]">
            <h3 className={`text-gray-700 text-xl ${Morabab.className}`}>فروشگاه</h3>
          </section>

          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
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
      </div>
    </div>
  );
}
