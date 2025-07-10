"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Card,
  Button,
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Label,
  TextInput,
  Textarea,
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  HiOutlineClipboardList,
  HiOutlineShoppingCart,
  HiCheck,
  HiOutlineChartBar,
  HiMail,
  HiOutlineCreditCard,
  HiOutlineFastForward,
} from "react-icons/hi";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Link from "next/link";
import styles from "../components/Slider.module.css";
import RevealOnScroll from "../components/RevealOnScroll";
import Image from "next/image";

interface TestimonialData {
  name: string;
  title: string;
  testimonial: string;
  tag?: string;
  avatarSrc: string; // Pastikan path ini benar atau ganti dengan URL valid
}

const testimonialsData: TestimonialData[] = [
  {
    name: "Aad Aries",
    title: "Manajer IT",
    testimonial: "Tukang ahli dan profesional!",
    tag: "Beneran Kilat!",
    avatarSrc: "/Aad.jpg", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Hosea",
    title: "Manajer Operasional",
    testimonial: "Penyelamat diwaktu sibuk!",
    tag: "Solusi Anak Kos",
    avatarSrc: "/hosea.jpg", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Ahmad",
    title: "Manajer Area",
    testimonial: "Layanan tiada dua!",
    tag: "Partner Bisnis Andal",
    avatarSrc: "/ahmad.png", // Ganti dengan path gambar yang sesuai di folder public
  },
  // Untuk membuat efek loop tak terbatas dengan kartu, Anda perlu menduplikasi data di sini
  // Misalnya, duplikasikan semua 3 item di atas lagi untuk total 6 item yang akan digulir
  {
    name: "Aad Aries",
    title: "Manajer IT",
    testimonial: "Tukang ahli dan profesional!",
    tag: "Beneran Kilat!",
    avatarSrc: "/Aad.jpg", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Hosea",
    title: "Manajer Operasional",
    testimonial: "Penyelamat diwaktu sibuk!",
    tag: "Solusi Anak Kos",
    avatarSrc: "/hosea.jpg", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Ahmad",
    title: "Manajer Area",
    testimonial: "Layanan tiada dua!",
    tag: "Partner Bisnis Andal",
    avatarSrc: "/ahmad.png", // Ganti dengan path gambar yang sesuai di folder public
  },
  // Untuk membuat efek loop tak terbatas dengan kartu, Anda perlu menduplikasi data di sini
  // Misalnya, duplikasikan semua 3 item di atas lagi untuk total 6 item yang akan digulir
  {
    name: "Aad Aries",
    title: "Manajer IT",
    testimonial: "Tukang ahli dan profesional!",
    tag: "Beneran Kilat!",
    avatarSrc: "/Aad.jpg", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Pram",
    title: "Manajer Regional",
    testimonial: "Penyelamat diwaktu sibuk!",
    tag: "Solusi Anak Kos",
    avatarSrc: "/pram.png", // Ganti dengan path gambar yang sesuai di folder public
  },
  {
    name: "Ahmad",
    title: "Manajer Area",
    testimonial: "Layanan tiada dua!",
    tag: "Partner Bisnis Andal",
    avatarSrc: "/ahmad.png", // Ganti dengan path gambar yang sesuai di folder public
  },
  // Anda bisa menduplikasi lagi sesuai kebutuhan agar animasinya mulus
];

export default function Page() {
  // 1. Inisialisasi state untuk melacak item navigasi yang aktif
  // Set default ke 'Beranda'
  const [activeItem, setActiveItem] = useState("Beranda");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  // Menggabungkan state untuk teks intro dan tombol karena mereka muncul bersamaan
  const [isIntroTextAndButtonsVisible, setIsIntroTextAndButtonsVisible] =
    useState(false);
  const [isBulletPointsVisible, setIsBulletPointsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // State baru untuk gambar

  // Fungsi untuk menangani klik pada NavbarLink
  const handleNavLinkClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    const animationDuration: number = 700;
    const smallDelay: number = 200;

    // 1. Navbar muncul duluan
    setIsNavbarVisible(true);

    // 2. Teks intro (#1 Toekang, Pilih Sendiri, Paragraf, dan Tombol)
    const introTextAndButtonsRevealDelay: number =
      animationDuration + smallDelay;
    const introTextAndButtonsTimer = setTimeout(() => {
      setIsIntroTextAndButtonsVisible(true);
    }, introTextAndButtonsRevealDelay);

    // 3. Gambar banner muncul
    const imageRevealDelay: number = animationDuration + smallDelay / 2;
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, imageRevealDelay);

    // 4. Bullet points
    const bulletPointsRevealDelay: number =
      introTextAndButtonsRevealDelay + animationDuration + smallDelay;
    const bulletPointsTimer = setTimeout(() => {
      setIsBulletPointsVisible(true);
    }, bulletPointsRevealDelay);

    // Cleanup timers
    return () => {
      clearTimeout(introTextAndButtonsTimer);
      clearTimeout(bulletPointsTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <>
      {" "}
      {/* Navbar area */}
      <Navbar
        fluid
        rounded
        className={`fixed top-0 z-50 w-full transform !bg-white py-4 shadow-lg transition-transform duration-1000 ease-out ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-10">
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <img
              src="/engineer.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
              OmToekang
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            {/* Beranda Link */}
            <NavbarLink
              href="#"
              // active={activeItem === "Beranda"} // Properti 'active' bawaan Flowbite React
              className={`!font-normal ${activeItem === "Beranda"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white" // Gaya untuk aktif
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black" // Gaya untuk tidak aktif
                } `}
              onClick={() => handleNavLinkClick("Beranda")} // Tangani klik
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor" // 'currentColor' akan mengambil warna teks dari parent
                  className="size-5" // Menggunakan size-5 atau size-6 sesuai keinginan Anda
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Beranda
              </span>
            </NavbarLink>

            {/* Layanan Link */}
            <NavbarLink
              as={Link}
              href="#"
              // active={activeItem === "Layanan"}
              className={`!font-normal ${activeItem === "Layanan"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white" // Gaya untuk aktif
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black" // Gaya untuk tidak aktif
                } `}
              onClick={() => handleNavLinkClick("Layanan")} // Tangani klik
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Layanan
              </span>
            </NavbarLink>

            {/* Harga Link */}
            <NavbarLink
              href="#"
              // active={activeItem === "Harga"}
              className={`!font-normal ${activeItem === "Harga"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
                } `}
              onClick={() => handleNavLinkClick("Harga")}
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                Harga
              </span>
            </NavbarLink>

            {/* Order Link */}
            <NavbarLink
              href="#"
              // active={activeItem === "Order"}
              className={`!font-normal ${activeItem === "Order"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
                } `}
              onClick={() => handleNavLinkClick("Order")}
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Order
              </span>
            </NavbarLink>

            {/* Lacak Link */}
            <NavbarLink
              href="#"
              // active={activeItem === "Lacak"}
              className={`!font-normal ${activeItem === "Lacak"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
                } `}
              onClick={() => handleNavLinkClick("Lacak")}
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                  />
                </svg>
                Lacak
              </span>
            </NavbarLink>

            {/* Kontak Link */}
            <NavbarLink
              href="#"
              // active={activeItem === "Kontak"}
              className={`!font-normal ${activeItem === "Kontak"
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
                } `}
              onClick={() => handleNavLinkClick("Kontak")}
            >
              {/* Bungkus ikon dan teks dalam div/span dengan flex untuk penataan */}
              <span className="flex items-center gap-x-2">
                {" "}
                {/* flex, items-center untuk vertikal align, gap-x-2 untuk spasi horizontal */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
                Kontak
              </span>
            </NavbarLink>
          </NavbarCollapse>
        </div>
      </Navbar>
      {/* The Card component added here */}
      <div className="container mx-auto p-4">
        {" "}
        {/* Container utama untuk membatasi lebar dan menambahkan padding */}
        <div className="mx-auto grid grid-cols-1 gap-8 pl-10 md:grid-cols-2">
          {" "}
          <div>
            <div
              className={`mt-32 box-border h-10 w-73 transform rounded-lg bg-gray-800 px-2 py-1 transition-all duration-1000 ease-out ${isIntroTextAndButtonsVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}
            >
              <h5 className="text-left text-lg font-bold tracking-tight text-white">
                #1 Toekang Terpercaya di Kotamu
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Konten Utama (Main Content Area) */}
      <div className="container mx-auto p-4">
        {" "}
        {/* Container utama untuk membatasi lebar dan menambahkan padding */}
        <div className="mx-auto grid grid-cols-1 gap-8 pl-10 md:grid-cols-2">
          {" "}
          {/* Ini adalah Grid Container */}
          {/* Konten Kiri (Left Content Area) */}
          <div>
            <div
              className={`transform transition-all duration-1000 ease-out ${isIntroTextAndButtonsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              <h3 className="mb-4 text-5xl font-extrabold text-gray-900">
                Pilih Sendiri,
              </h3>
              <h3 className="mb-6 text-5xl font-extrabold text-gray-900">
                Kami Beri Solusi!
              </h3>
            </div>
            <div
              className={`transform text-lg text-gray-700 transition-all duration-1000 ease-out ${isIntroTextAndButtonsVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} `}
            >
              <p className="mb-6 text-lg text-gray-700">
                Tim tukang profesional kami siap bantu semua kebutuhan perbaikan
                dan renovasi rumah Anda.
              </p>
            </div>
            <div
              className={`mb-2 flex transform items-center gap-2 transition-all duration-1000 ease-out ${isBulletPointsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Estimasi Biaya Transparan, Tanpa Biaya Tersembunyi!
              </p>
            </div>
            <div
              className={`mb-2 flex transform items-center gap-2 transition-all duration-1000 ease-out ${isBulletPointsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              {" "}
              {/* Kontainer flex untuk ikon dan teks */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Tukang Ahli & Terpercaya, Bergaransi Resmi
              </p>
            </div>
            <div
              className={`mb-2 flex transform items-center gap-2 transition-all duration-1000 ease-out ${isBulletPointsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              {" "}
              {/* Kontainer flex untuk ikon dan teks */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Pilih Tukang Idaman Anda Berdasarkan Rating & Ulasan Terbaik
              </p>
            </div>
            <div
              className={`mb-2 flex transform items-center gap-2 transition-all duration-1000 ease-out ${isBulletPointsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              {" "}
              {/* Kontainer flex untuk ikon dan teks */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Progress Pekerjaan Terpantau Langsung dari Genggaman Anda
              </p>
            </div>
            <div
              className={`mb-2 flex transform items-center gap-2 transition-all duration-1000 ease-out ${isBulletPointsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              {" "}
              {/* Kontainer flex untuk ikon dan teks */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Layanan Tukang Siaga 24 Jam untuk Kebutuhan Mendesak Anda
              </p>
            </div>
            <div
              className={`mt-10 ml-12.5 grid transform grid-cols-1 gap-8 transition-all duration-1000 ease-out md:grid-cols-2 ${isIntroTextAndButtonsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
            >
              {/* Konten Kiri (Left Content Area) */}
              <div>
                <Button
                  as={Link}
                  href="#"
                  size="xl"
                  // w-56 mx-auto will center the button on mobile within its grid column
                  className="!hover:bg-gray-700 mx-auto w-56 !bg-gray-800 text-white"
                >
                  {/* Icon width set to w-10 as per your image example */}
                  <HiOutlineShoppingCart className="mr-2 h-5 w-10" />
                  Order Sekarang
                </Button>
              </div>
              {/* Konten Kanan (Right Content Area) */}
              <div>
                <Button
                  as={Link}
                  href="#"
                  size="xl"
                  className="!hover:bg-gray-700 mx-auto w-56 !bg-gray-800 text-white"
                >
                  {/* Icon width set to w-10 as per your image example */}
                  <HiOutlineClipboardList className="mr-2 h-5 w-10" />
                  Lacak Pengerjaan
                </Button>
              </div>
            </div>
          </div>
          {/* Konten Kanan (Right Content Area) */}
          <div
            className={`transform transition-all duration-1000 ease-out ${isImageVisible ? "animate-float translate-x-0 opacity-100" : "translate-x-full opacity-0"} `}
          >
            <img
              src="/engineer_banner.jpg"
              alt="Banner Engineer"
              width={444}
              height={444}
            />
          </div>
        </div>
      </div>
      {/* Konten Utama (Main Conten Area) 2 */}
      <div className="mx-auto mt-70 flex w-full flex-col items-center justify-center px-4">
        <div className="mb-8">
          {" "}
          <RevealOnScroll>
            <div className="flex h-12 w-fit items-center justify-center rounded-lg bg-gray-800 px-6 py-2">
              <span className="flex items-center gap-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                Berdiri sejak 2025
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <RevealOnScroll direction="up">
            {" "}
            {/* Gunakan direction="up" di sini */}
            <h3 className="mb-4 text-5xl leading-tight font-extrabold text-gray-900">
              Kenapa Pilih Jasa Tukang OmToekang?
            </h3>
          </RevealOnScroll>
          <RevealOnScroll direction="up">
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Bukan sekadar benerin atau masang doang, bro/sis. Ini lebih ke
              soal bikin hati tenang, hasilnya mantap jiwa, plus kamu bisa pilih
              sendiri tukang yang pas banget sama maumu. Intinya, kami ada buat
              bikin urusan rumahmu beres total tanpa pusing!
            </p>
          </RevealOnScroll>
        </div>
      </div>
      {/* Konten Utama (Main Conten Area) 3 */}
      <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Konten 1 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={0}
        >
          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
            <img src="/deadline.png" alt="Icon 1" className="mb-4 h-16 w-16" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Cepat & Andal
            </h3>
            <p className="text-gray-700">
              Butuh cepet? Tukang kami gercep di lokasi. Beres tuntas, gak pake
              lama!
            </p>
          </div>
        </RevealOnScroll>

        {/* Konten 2 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={200}
        >
          {" "}
          {/* Durasi 1s, delay 200ms */}
          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
            <img src="/surveyor.png" alt="Icon 2" className="mb-4 h-16 w-16" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Gratis Survei & Estimasi
            </h3>
            <p className="text-gray-700">
              Galau soal biaya? Tenang! Kami survei gratis ke tempatmu. Harga
              transparan, anti biaya siluman.
            </p>
          </div>
        </RevealOnScroll>

        {/* Konten 3 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={400}
        >
          {" "}
          {/* Durasi 1s, delay 400ms */}
          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
            <img src="/money-bag.png" alt="Icon 3" className="mb-4 h-16 w-16" />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Harga Bersahabat
            </h3>
            <p className="text-gray-700">
              Dompet aman! Mulai dari Rp. 50.000 buat ... Kualitas oke, harga
              asyik.
            </p>
          </div>
        </RevealOnScroll>

        {/* Konten 4 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={600}
        >
          {" "}
          {/* Durasi 1s, delay 600ms */}
          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
            <img
              src="/employee-insurance.png"
              alt="Icon 4"
              className="mb-4 h-16 w-16"
            />
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Garansi Pekerjaan
            </h3>
            <p className="text-gray-700">
              Kerjaan dijamin beres! Kalau ada apa-apa, kami siap benerin lagi
              gratis. Kamu puas, kami senang.
            </p>
          </div>
        </RevealOnScroll>
      </div>
      {/* Konten Utama (Main Conten Area) 4 */}
      <div className="mx-auto mt-70 flex w-full flex-col items-center justify-center px-4">
        <div className="mb-8">
          {" "}
          <RevealOnScroll>
            <div className="flex h-12 w-fit items-center justify-center rounded-lg bg-gray-800 px-6 py-2">
              <span className="flex items-center gap-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Layanan Unggulan Kami
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <RevealOnScroll direction="up">
            <h3 className="mb-4 text-5xl leading-tight font-extrabold text-gray-900">
              Layanan Tukang Andal OmToekang
            </h3>
          </RevealOnScroll>
          <RevealOnScroll direction="up">
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Gak ada lagi pusing-pusing cari tukang sana-sini.
            </p>
          </RevealOnScroll>
        </div>
      </div>
      {/* Konten Utama (Main Conten Area) 5 */}
      <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Konten 1 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={0}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Perbaikan Ringan & Instan
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Mulai 1 Jam
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Tukang kami gercep datang, beres tuntas di tempat. Beres cepat,
                garansi terjamin!
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Keran bocor
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Saklar nge-blank
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Pintu seret
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">Rp 50.000</span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 2 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={200}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Instalasi Baru
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Tergantung Proyek
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Baru beli AC, TV, dll? Jangan pusing masangnya! Tim ahli kami
                siap pasang.
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Rapi
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Aman
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Sesuai standar
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                Rp 75.000 / item
              </span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 3 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={400}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Pengecatan & Dekorasi
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Sesuai Estimasi
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Mau ganti lantai, cat ulang, atau rombak sedikit ruangan? Kami
                siap garap!
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Survei & estimasi gratis
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Tukang profesional & berpengalaman
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Progress terpantau via website
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                Rp 200.000 / m2
              </span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 4 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={600}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Jasa Pemeliharaan Rutin
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Fleksibel
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Punya properti yang butuh perawatan rutin? Serahkan pada kami!
                kami ahlinya dalam merawat properti Anda.
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Jadwal fleksibel sesuai kebutuhan
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Pengecekan menyeluruh & pembersihan
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Tim tepercaya dan ramah
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                Rp 150.000 / visit
              </span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 5 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={800}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Layanan Darurat 24/7
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Respons Cepat
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Listrik padam tengah malam? Pipa bocor mendadak? Jangan panik,
                kami ada untuk anda dijam berapapun!
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Tukang siaga 24 jam
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Penanganan cepat & efektif
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Solusi instan untuk kondisi darurat
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                Harga Khusus
              </span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 6 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={1000}
        >
          <Card className="flex min-h-[200px] flex-col justify-between rounded-lg !bg-white p-2 shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-gray-800 p-3">
                  {/* Ganti ikon di sini sesuai layanan (contoh: HiOutlineChartBar untuk Kiloan) */}
                  <HiOutlineChartBar className="h-8 w-8 text-white" />
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Renovasi & Proyek Sedang
                  </h5>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    Sesuai Estimasi
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 font-normal text-gray-700">
                Butuh rombak dapur, renovasi kamar mandi, atau pasang keramik
                baru? Kami tangani dari nol sampai beres.
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Survei & estimasi gratis
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Tukang profesional & berpengalaman
                </li>
                <li className="flex items-center text-gray-700">
                  <HiCheck className="mr-2 h-5 w-5 text-green-500" />
                  Progress terpantau via website
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">
                Rp 200.000 / m2
              </span>
              <Button
                size="sm"
                className="!hover:bg-gray-700 !bg-gray-800 text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>
      </div>
      {/* Konten Utama (Main Conten Area) 6 */}
      <div className="mx-auto mt-40 flex w-full flex-col items-center justify-center px-4">
        <div className="mb-8">
          {" "}
          <RevealOnScroll>
            <div className="flex h-12 w-fit items-center justify-center rounded-lg bg-gray-800 px-6 py-2">
              <span className="flex items-center gap-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Apa Kata Pelanggan
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <RevealOnScroll direction="up">
            <h3 className="mb-4 text-5xl leading-tight font-extrabold text-gray-900">
              Pelanggan Kami Puas & Kembali Lagi
            </h3>
          </RevealOnScroll>
          <RevealOnScroll direction="up">
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Kenapa? Karena bagi kami, beres-beres rumah bukan cuma soal kerja
              fisik, tapi tentang memberi solusi tuntas, hasil yang bisa
              diandalkan, dan pelayanan sepenuh hati yang bikin kamu nyaman.
            </p>
          </RevealOnScroll>
        </div>
      </div>
      {/* Konten Utama (Main Conten Area) 7 */}
      <RevealOnScroll direction="up">
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 py-12">
          {" "}
          {/* Tambah py-12 untuk padding atas bawah */}
          <h2 className="mb-10 text-center text-4xl font-extrabold text-gray-900">
            Mereka Bilang...
          </h2>{" "}
          {/* Judul */}
          <div className={styles.slider}>
            <div className={styles["slide-track"]}>
              {testimonialsData.map((data, index) => (
                <div className={styles.slide} key={index}>
                  {/* Konten kartu testimoni Anda */}
                  <div className="mb-4 flex items-center">
                    <Image
                      src={data.avatarSrc}
                      alt={data.name}
                      width={48}
                      height={48}
                      className="mr-4 rounded-full object-cover"
                      onError={(e) => {
                        console.error(
                          "Failed to load image:",
                          data.avatarSrc,
                          e,
                        );
                        // Opsi: e.currentTarget.src = '/images/placeholder.png';
                      }}
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {data.name}
                      </p>
                      <p className="text-sm text-gray-600">{data.title}</p>
                    </div>
                  </div>
                  {data.tag && (
                    <span className="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800">
                      {data.tag}
                    </span>
                  )}
                  <p className="mb-4 flex-grow text-gray-700">
                    {data.testimonial}
                  </p>
                  <div className="text-gray-500 italic">
                    <p>
                      {data.testimonial.split(". ")[0]}
                      {data.testimonial.includes(".") ? "\u002E" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Konten lain */}
        </div>
      </RevealOnScroll>
      {/* Konten Utama (Main Conten Area) 8 */}
      <div className="mx-auto mt-20 flex w-full flex-col items-center justify-center px-4">
        <div className="mb-8">
          {" "}
          <RevealOnScroll>
            <div className="flex h-12 w-fit items-center justify-center rounded-lg bg-gray-800 px-6 py-2">
              <span className="flex items-center gap-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
                FAQ OmToekang
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <RevealOnScroll direction="up">
            <h3 className="mb-4 text-5xl leading-tight font-extrabold text-gray-900">
              Punya kendala atau ingin tahu lebih banyak?
            </h3>
          </RevealOnScroll>
          <RevealOnScroll direction="up">
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Kami sudah rangkum jawaban atas pertanyaan yang paling sering
              muncul.
            </p>
          </RevealOnScroll>
        </div>
      </div>
      <RevealOnScroll direction="up">
        <div className="mx-auto mt-10 w-full max-w-screen-lg px-4">
          {" "}
          <Accordion className="shadow-lg">
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Apa aja layanan tukang yang tersedia?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Kami menyediakan berbagai jenis layanan tukang yang bisa
                  disesuaikan sama kebutuhanmu. Dari perbaikan rumah tangga
                  ringan kayak keran bocor atau saklar rusak, instalasi baru
                  kayak pasang AC atau furniture, sampai proyek renovasi
                  (pengecatan, pasang keramik, rombak kamar mandi), dan juga
                  layanan darurat 24/7. Semua dikerjakan sama tukang-tukang
                  pilihan yang profesional, biar hasilnya maksimal dan rumahmu
                  nyaman lagi.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Berapa lama biasanya pekerjaan selesai?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Waktu penyelesaian tergantung jenis dan skala pekerjaan yang
                  kamu pilih. Untuk perbaikan ringan, bisa kelar dalam hitungan
                  jam. Kalau proyek yang lebih besar kayak renovasi, kami akan
                  kasih estimasi waktu yang jelas setelah survei. Kami selalu
                  berusaha kerja cepat tapi tetap teliti, biar hasilnya maksimal
                  dan gak mengecewakan. Tim kami bakal infokan terus progresnya
                  biar kamu gak penasaran.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Bisa minta survei dan estimasi biaya ke rumah?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Tentu bisa! Kami punya layanan survei dan estimasi biaya
                  GRATIS tanpa biaya tersembunyi. Jadi kamu nggak perlu ragu
                  atau takut kemahalan di awal. Tinggal booking via WhatsApp
                  atau telepon, nanti tim kami datang buat ngecek lokasi dan
                  kasih perkiraan harga yang transparan. Cocok banget buat kamu
                  yang mau perencanaan matang, atau lagi butuh masukan dari
                  ahlinya. Praktis, jelas, dan tanpa biaya tambahan.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Pembayarannya bisa pakai apa aja?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Kami mendukung berbagai metode pembayaran biar kamu nggak
                  ribet. Bisa bayar pakai cash langsung di tempat setelah
                  pekerjaan selesai, transfer bank buat yang suka cashless, atau
                  QRIS biar cepat dan simpel. Apapun metode yang kamu pilih, tim
                  kami bakal kasih konfirmasi jelas dan transparan biar nggak
                  ada salah paham. Kami pastikan pembayaran aman dan nyaman buat
                  semua.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Gimana kalau pekerjaan enggak sesuai atau ada
                kerusakan/kehilangan?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Kami paham banget kalau kepercayaan itu penting. Makanya,
                  semua proses kerja tukang kami ikuti SOP yang ketat dan rapi.
                  Kalau sampai terjadi masalah kayak hasil kurang sesuai, atau
                  ada kerusakan/kehilangan yang disebabkan oleh tim kami, kami
                  siap bertanggung jawab sesuai dengan ketentuan yang berlaku.
                  Kami akan berusaha menyelesaikan masalah secepat mungkin, baik
                  dengan perbaikan ulang maupun kompensasi yang adil. Nggak
                  perlu khawatir karena kami pegang komitmen buat selalu amanah
                  dan profesional.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="text-xl font-extrabold text-gray-900">
                Ada promo atau diskon khusus?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yup, kami rutin kasih promo menarik setiap bulan atau saat
                  momen tertentu kayak Hari Kemerdekaan, Lebaran, atau akhir
                  tahun. Diskonnya bisa macem-macem, mulai dari potongan harga
                  layanan, bonus survei gratis untuk proyek besar, sampai paket
                  hemat untuk pemeliharaan rutin. Buat dapet info ter-update,
                  kamu bisa cek Instagram kami atau langsung tanya admin via
                  WhatsApp. Siapa tau pas kamu order, lagi ada promo yang bikin
                  hemat dompet dan makin senyum.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </RevealOnScroll>
      {/* Konten Utama (Main Conten Area) 9 */}
      <div className="mx-auto mt-30 flex w-full flex-col items-center justify-center px-4">
        <div className="mb-8">
          {" "}
          <RevealOnScroll>
            <div className="flex h-12 w-fit items-center justify-center rounded-lg bg-gray-800 px-6 py-2">
              <span className="flex items-center gap-x-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
                Kontak Kami
              </span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <RevealOnScroll direction="up">
            <h3 className="mb-4 text-5xl leading-tight font-extrabold text-gray-900">
              Butuh Bantuan? Langsung Kontak Kami!
            </h3>
          </RevealOnScroll>
          <RevealOnScroll direction="up">
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
              Kami hadir untuk bikin urusan rumahmu beres total — tukang
              profesional, hasil terjamin, dan anti ribet!
            </p>
          </RevealOnScroll>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Konten 1 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={0}
        >
          <div className="flex flex-col items-center rounded-lg bg-white p-18 text-center shadow-lg">
            <img src="/in-love.png" alt="Icon 1" className="mb-4 h-16 w-16" />
            <p className="text-gray-700">Pelanggan Puas</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">200+</h3>
          </div>
        </RevealOnScroll>

        {/* Konten 2 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={200}
        >
          <div className="flex flex-col items-center rounded-lg bg-white p-18 text-center shadow-lg">
            <img src="/warehouse.png" alt="Icon 2" className="mb-4 h-16 w-16" />
            <p className="text-gray-700">Cabang</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">1 Lokasi</h3>
          </div>
        </RevealOnScroll>

        {/* Konten 3 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={400}
        >
          <div className="flex flex-col items-center rounded-lg bg-white p-18 text-center shadow-lg">
            <img src="/check.png" alt="Icon 3" className="mb-4 h-16 w-16" />
            <p className="text-gray-700">Order Selesai</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">200+</h3>
          </div>
        </RevealOnScroll>

        {/* Konten 4 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={600}
        >
          <div className="flex flex-col items-center rounded-lg bg-white p-18 text-center shadow-lg">
            <img src="/clock.png" alt="Icon 4" className="mb-4 h-16 w-16" />
            <p className="text-gray-700">Repeat Order</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">200+</h3>
          </div>
        </RevealOnScroll>
      </div>
      {/* Konten Utama (Main Conten Area) 10 */}
      <div className="container mx-auto mt-10 p-4">
        {" "}
        {/* Container utama untuk membatasi lebar dan menambahkan padding */}
        <div className="mx-auto grid grid-cols-1 gap-8 pl-10 md:grid-cols-2">
          {" "}
          {/* Ini adalah Grid Container */}
          {/* Konten Kiri (Left Content Area) */}
          <div>
            <RevealOnScroll
              direction="up"
              threshold={0.3}
              duration={1000}
              delay={0}
            >
              <Card className="shadow-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Alamat Kami
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Jl. Kalilom Lor Indah No.33
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Kota Surabaya, Jawa Timur 75611
                </p>
                <Button color="dark" outline>
                  Hubungi
                </Button>
              </Card>
            </RevealOnScroll>
            <RevealOnScroll
              direction="up"
              threshold={0.3}
              duration={1000}
              delay={200}
            >
              <Card className="mt-4 shadow-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Telepon & WhatsApp
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  +62 812-3456-7890
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Customer service 24/7
                </p>
                <Button color="dark" outline>
                  Hubungi
                </Button>
              </Card>
            </RevealOnScroll>
          </div>
          {/* Konten Kanan (Right Content Area) */}
          <div>
            <RevealOnScroll direction="up">
              <Card className="shadow-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Send Message
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Isi formulir di bawah ini untuk menghubungi kami. Kami akan
                  merespons dalam waktu 24 jam.
                </p>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email4">Nama</Label>
                  </div>
                  <TextInput
                    id="nama"
                    type="nama"
                    icon={HiOutlineCreditCard}
                    placeholder="John Doe"
                    required
                  />
                  <div className="mt-4 mb-2 block">
                    <Label htmlFor="email4">Email</Label>
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    icon={HiMail}
                    placeholder="name@flowbite.com"
                    required
                  />
                  <div className="mt-4 mb-2 block">
                    <Label htmlFor="comment">Pesan</Label>
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Pesan kamu..."
                    required
                    rows={4}
                  />
                  <Button
                    as={Link}
                    href="#"
                    size="xl"
                    // w-56 mx-auto will center the button on mobile within its grid column
                    className="!hover:bg-gray-700 mx-auto mt-4 w-50 !bg-gray-700 text-white"
                  >
                    {/* Icon width set to w-10 as per your image example */}
                    <HiOutlineFastForward className="mr-2 h-5 w-10" />
                    Kirim Pesan
                  </Button>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer bgDark className="mt-10">
        <div className="w-full">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <FooterTitle title="Company" />
              <FooterLinkGroup col>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Brand Center</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="help center" />
              <FooterLinkGroup col>
                <FooterLink href="#">Discord Server</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="download" />
              <FooterLinkGroup col>
                <FooterLink href="#">iOS</FooterLink>
                <FooterLink href="#">Android</FooterLink>
                <FooterLink href="#">Windows</FooterLink>
                <FooterLink href="#">MacOS</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
