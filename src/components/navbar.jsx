"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import clsx from "clsx";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CoffeeIcon from "@mui/icons-material/Coffee";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Danamedium = localFont({
  src: "./fonts/Dana/woff2/DanaFaNum-Medium.woff2",
});

const links = [
  { url: "/", title: "Inicio", icon: <HomeOutlinedIcon /> },
  { url: "/shop", title: "Tienda", icon: <StorefrontOutlinedIcon /> },
  { url: "/order", title: "Pedidos", icon: <CoffeeIcon /> },
  // { url: "/weblog", title: "Blog", icon: <FeedOutlinedIcon /> },
  { url: "/aboutUS", title: "Sobre nosotros", icon: <InfoOutlinedIcon /> },
  { url: "/callUs", title: "Contáctanos", icon: <ContactPhoneOutlinedIcon /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Header */}
      <div className="text-zinc-700 rounded-[50px] bg-zinc-200 flex justify-between items-center h-20 m-auto mt-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/img/Logo.svg" alt="Logo" width={50} height={50} unoptimized />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="flex items-center gap-2 transition-all hover:text-emerald-600"
            >

              <span className={Danamedium.className} style={{ marginTop: "0.5rem" }}>{link.title}</span>
              <span className="text-emerald-600">{link.icon}</span>
            </Link>
          ))}
        </div>

        {/* Search input - Desktop */}
        <div className="hidden md:flex items-center gap-2 relative">
          <SearchOutlinedIcon className="absolute left-2 top-1/2 transform -translate-y-1/2" />
          <input
            type="search"
            placeholder="Buscar..."
            dir="ltr"
            className="h-11 w-60 pl-10 pr-4 rounded-[20px] text-sm"
          />
        </div>

        {/* Menu Button - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Slide-down mobile menu */}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 md:hidden bg-zinc-100 w-full",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center py-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="flex items-center gap-2 text-zinc-700 hover:text-emerald-600"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-emerald-600">{link.icon}</span>
              <span className={Danamedium.className}>{link.title}</span>
            </Link>
          ))}


          {/* Search input - Mobile */}
          <div className="w-[90%] relative mt-2">
            <SearchOutlinedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-600" />
            <input
              type="search"
              placeholder="Buscar..."
              dir="ltr"
              className="w-full h-10 pl-10 pr-4 rounded-[20px] text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
