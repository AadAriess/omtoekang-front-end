"use client";

import {
  useState,
  useEffect,
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
  HiOutlineClipboardList,
  HiOutlineShoppingCart,
  HiCheck,
  HiOutlineChartBar,
  HiMail,
  HiOutlineCreditCard,
  HiOutlineFastForward,
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  Carousel,
} from "../../components/Assets";

import Link from "next/link";
import styles from "../../components/Slider.module.css";
import RevealOnScroll from "../../components/RevealOnScroll";
import Image from "next/image";

export default function Service() {
  return (
    <>
      {/* Search Content */}
      <div className="flex w-full justify-center">
        {/* Kontainer grid utama. max-w-screen-lg dan mx-auto akan menengahkan seluruh bagian ini. */}
        <div className="mx-auto grid max-w-screen-lg grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8">
          {/* Ini adalah div baru yang akan menjadi 'pusat' dari input dan tombol pencarian */}
          {/* Pada layar kecil, ini akan mengambil lebar penuh (col-span-12) */}
          {/* Pada layar besar (md:), ini akan mengambil 8 kolom dari grid utama 12 kolom, dan di tengah dengan md:col-start-3 */}
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            {/* Ini adalah grid internal untuk input dan tombol agar berdampingan di tengah */}
            {/* Gunakan 'items-end' untuk menyelaraskan tombol ke bawah jika input tidak sejajar */}
            <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-8 md:gap-2">
              {/* Elemen 'Mau dibantu apanih?' (Keyword) */}
              {/* Pada layar kecil, ambil 12 kolom dari grid internal (yang sudah col-span-12), jadi penuh */}
              {/* Pada layar menengah/besar, ambil 3 kolom dari grid internal 8 kolom */}
              <div className="col-span-1 mb-2 block md:col-span-3">
                <Label htmlFor="keyword" className="!text-gray-800">
                  Mau dibantu apanih?
                </Label>
                <TextInput
                  id="keyword"
                  type="text"
                  placeholder="Masukkan kata kunci"
                />
              </div>

              {/* Elemen 'Dimana?' (City) */}
              {/* Logika col-span sama seperti keyword */}
              <div className="col-span-1 mb-2 block md:col-span-3">
                <Label htmlFor="city" className="!text-gray-800">
                  Dimana?
                </Label>
                <TextInput
                  id="city"
                  type="city"
                  placeholder="Nama kota atau wilayah"
                  required
                />
              </div>

              {/* Elemen 'Cari' (Tombol) */}
              {/* Pada layar kecil, ambil 12 kolom dari grid internal (penuh) */}
              {/* Pada layar menengah/besar, ambil 2 kolom dari grid internal 8 kolom */}
              {/* Tidak perlu col-start karena mereka akan berdampingan */}
              <div className="col-span-1 mb-2 block md:col-span-2 md:mt-8">
                {" "}
                {/* md:mt-8 mungkin perlu disesuaikan atau dihapus */}
                <Button color="dark" outline className="w-full">
                  Cari
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Content */}
      <div className="mt-10 grid grid-cols-12 gap-4">
        {/* CARD 1: Renovasi Total */}
        <div className="col-span-2 col-start-3 row-span-2 flex">
          <Card
            className="flex h-full max-w-sm flex-col justify-between overflow-hidden rounded-xl !border-none !bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            imgAlt="Gambar layanan renovasi total"
            imgSrc="renovation-service.jpg"
          >
            <div className="flex flex-grow flex-col">
              <h5 className="mb-2 text-center text-xl font-bold tracking-tight !text-gray-800">
                {" "}
                {/* <-- Tambahkan text-center di sini */}
                Renovasi Total
              </h5>
              <p className="mb-4 flex-grow text-justify font-normal !text-gray-800">
                {" "}
                {/* <-- Tambahkan text-justify di sini */}
                Mau rumah makin kece badai? Dari rombak total sampai makeover
                kecil, kami siap wujudkan rumah impianmu jadi kenyataan. Anti
                pusing, hasil bikin melongo!
              </p>
            </div>

            <Button className="mt-auto !bg-gray-800 !text-white hover:!bg-gray-900 focus:!ring-gray-300">
              Lihat Detail
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>

        {/* CARD 2: Instalasi & Pemasangan Anti Ribet */}
        <div className="col-span-2 col-start-5 row-span-2 flex">
          <Card
            className="flex h-full max-w-sm flex-col justify-between overflow-hidden rounded-xl !border-none !bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            imgAlt="Gambar layanan instalasi dan pemasangan"
            imgSrc="https://via.placeholder.com/400x200/E0E0E0/000000?text=Instalasi"
          >
            <div className="flex flex-grow flex-col">
              <h5 className="mb-2 text-center text-xl font-bold tracking-tight !text-gray-800">
                Instalasi & Pemasangan Anti Ribet
              </h5>
              <p className="mb-4 flex-grow text-justify font-normal !text-gray-800">
                Baru beli barang baru? Jangan pusing masangnya! Dari elektronik
                canggih sampai furniture segede gaban, kami pasang rapi, aman,
                dan langsung siap pakai.
              </p>
            </div>
            <Button className="mt-auto !bg-gray-800 !text-white hover:!bg-gray-900 focus:!ring-gray-300">
              Lihat Detail
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>

        {/* CARD 3: Perbaikan Darurat */}
        <div className="col-span-2 col-start-7 row-span-2 flex">
          <Card
            className="flex h-full max-w-sm flex-col justify-between overflow-hidden rounded-xl !border-none !bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            imgAlt="Gambar layanan perbaikan darurat"
            imgSrc="https://via.placeholder.com/400x200/D0D0D0/000000?text=Darurat"
          >
            <div className="flex flex-grow flex-col">
              <h5 className="mb-2 text-center text-xl font-bold tracking-tight !text-gray-800">
                Perbaikan Darurat / Cepat Tanggap
              </h5>
              <p className="mb-4 flex-grow text-justify font-normal !text-gray-800">
                Kejadian tak terduga? Listrik padam di tengah malam, pipa bocor
                mendadak? Jangan panik! Tukang kami siap meluncur kapan pun,
                kasih solusi instan biar aman lagi.
              </p>
            </div>
            <Button className="mt-auto !bg-gray-800 !text-white hover:!bg-gray-900 focus:!ring-gray-300">
              Lihat Detail
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>

        {/* CARD 4: Pemeliharaan & Perawatan Berkala */}
        <div className="col-span-2 col-start-9 row-span-2 flex">
          <Card
            className="flex h-full max-w-sm flex-col justify-between overflow-hidden rounded-xl !border-none !bg-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            imgAlt="Gambar layanan pemeliharaan dan perawatan"
            imgSrc="https://via.placeholder.com/400x200/C0C0C0/000000?text=Perawatan"
          >
            <div className="flex flex-grow flex-col">
              <h5 className="mb-2 text-center text-xl font-bold tracking-tight !text-gray-800">
                Pemeliharaan & Perawatan Berkala
              </h5>
              <p className="mb-4 flex-grow text-justify font-normal !text-gray-800">
                Mau rumah selalu kinclong dan bebas masalah? Jangan tunggu
                rusak, rawat rutin aja! Kami siap cek dan bereskan semua biar
                rumahmu selalu prima dan nyaman dihuni.
              </p>
            </div>
            <Button className="mt-auto !bg-gray-800 !text-white hover:!bg-gray-900 focus:!ring-gray-300">
              Lihat Detail
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
