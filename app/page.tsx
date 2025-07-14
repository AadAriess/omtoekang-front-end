"use client";

import {
  useState,
  useEffect,
  Card,
  Button,
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Label,
  TextInput,
  Textarea,
  HiOutlineClipboardList,
  HiOutlineShoppingCart,
  HiMail,
  HiOutlineCreditCard,
  HiOutlineFastForward,
} from "../components/Assets";

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
  // Menggabungkan state untuk teks intro dan tombol karena mereka muncul bersamaan
  const [isIntroTextAndButtonsVisible, setIsIntroTextAndButtonsVisible] =
    useState(false);
  const [isBulletPointsVisible, setIsBulletPointsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // State baru untuk gambar

  useEffect(() => {
    const animationDuration: number = 700;
    const smallDelay: number = 200;

    const introTextAndButtonsRevealDelay: number =
      animationDuration + smallDelay;
    const introTextAndButtonsTimer = setTimeout(() => {
      setIsIntroTextAndButtonsVisible(true);
    }, introTextAndButtonsRevealDelay);

    const imageRevealDelay: number = animationDuration + smallDelay / 2;
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, imageRevealDelay);

    const bulletPointsRevealDelay: number =
      introTextAndButtonsRevealDelay + animationDuration + smallDelay;
    const bulletPointsTimer = setTimeout(() => {
      setIsBulletPointsVisible(true);
    }, bulletPointsRevealDelay);

    return () => {
      clearTimeout(introTextAndButtonsTimer);
      clearTimeout(bulletPointsTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <>
      {" "}
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
              src="/banner.png"
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
      <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Konten 1 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={0}
        >
          <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
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
          <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
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
          <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
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
          <div className="flex h-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
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
      <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-1 items-stretch gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Konten 1: Perbaikan Ringan & Instan */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={0}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !border-slate-200/60 !bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-lg">
            {/* Wrapper untuk konten atas (kecuali harga dan tombol) agar bisa didorong ke atas */}
            <div>
              {/* Bagian Atas: Icon, Judul, dan Tag Waktu */}
              <div className="mb-4 flex items-center space-x-4">
                {/* Lingkaran Icon */}
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon wrench untuk perbaikan ringan */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.25 2.25 0 0021 17.25l-5.83-5.83m-9.9 9.9L5.25 10.25l7.5-7.5 7.5 7.5L4.5 19.5z"
                    />
                  </svg>
                </div>
                {/* Judul dan Tag */}
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Perbaikan Ringan & Instan
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Mulai 1 Jam
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Tukang kami gercep datang, beres tuntas di tempat. Cepat,
                efisien, dan garansi terjamin!
              </p>

              {/* Daftar Fitur */}
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Keran bocor
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Saklar bermasalah
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pintu seret
                </li>
              </ul>
            </div>

            {/* Bagian Bawah: Harga dan Tombol "Order Sekarang" */}
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">Rp 50.000</span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 2: Instalasi Baru */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={200}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon plug untuk instalasi */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9 9 0 110-18 9 9 0 010 18zm0 0v2m0-2h-.008L9.5 13.5l-2.25-2.25L4.5 10.5 3 9l-.5-.5a.75.75 0 00-.75-.75H.75"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Instalasi Baru
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Tergantung Proyek
                  </span>
                </div>
              </div>
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Baru beli AC, TV, atau perabot lainnya? Jangan pusing masangnya!
                Tim ahli kami siap pasang dengan rapi dan aman.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Rapi
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Aman
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Sesuai standar
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">
                Rp 75.000 / item
              </span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 3: Pengecatan & Dekorasi */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={400}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon paint brush untuk pengecatan */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.786-1.122L3 16.5V20h17.5l-1.586-1.586a3 3 0 00-1.122-5.786z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Pengecatan & Dekorasi
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    Sesuai Estimasi
                  </span>
                </div>
              </div>
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Mau ganti suasana dengan cat ulang, rombak sedikit ruangan, atau
                dekorasi baru? Kami siap garap proyek Anda.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Survei & estimasi gratis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tukang profesional & berpengalaman
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Progress terpantau via website
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">
                Rp 200.000 / m2
              </span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 4: Jasa Pemeliharaan Rutin */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={600}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon calendar check untuk pemeliharaan rutin */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Jasa Pemeliharaan Rutin
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    Fleksibel
                  </span>
                </div>
              </div>
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Punya properti yang butuh perawatan rutin? Serahkan pada kami!
                Kami ahlinya dalam merawat properti Anda dengan jadwal yang
                fleksibel.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Jadwal fleksibel sesuai kebutuhan
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pengecekan menyeluruh & pembersihan
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tim tepercaya dan ramah
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">
                Rp 150.000 / visit
              </span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 5: Layanan Darurat 24/7 */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={800}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon bolt untuk darurat */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21l1.5-6.75h-6.75z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Layanan Darurat 24/7
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                    Respons Cepat
                  </span>
                </div>
              </div>
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Listrik padam tengah malam? Pipa bocor mendadak? Jangan panik,
                kami siap sedia 24 jam untuk Anda kapan pun.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tukang siaga 24 jam
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Penanganan cepat & efektif
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Solusi instan untuk kondisi darurat
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">
                Harga Khusus
              </span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                <HiOutlineShoppingCart className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </div>
          </Card>
        </RevealOnScroll>

        {/* Konten 6: Renovasi & Proyek Sedang */}
        <RevealOnScroll
          direction="up"
          threshold={0.3}
          duration={1000}
          delay={1000}
        >
          <Card className="flex h-full flex-col justify-between rounded-xl !bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="flex items-center justify-center rounded-full bg-indigo-600 p-3">
                  {/* Menggunakan ikon building (bangunan) untuk renovasi */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.5m0 0l3-3m-3 3l-3-3m3 3V21m9-10.5V21m0 0l3-3m-3 3l-3-3m3 3V21m-3-10.5H4.5C3.395 10.5 3 9.776 3 8.75v-1.5c0-.926.395-1.75.75-2.25a2 2 0 012.25-.75h13.5c.605 0 1.25.322 1.25 1.125s-.52 2.125-1.25 2.125H12m-3 0h3m-3 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="mb-1 text-xl font-bold text-gray-900">
                    Renovasi & Proyek Sedang
                  </h5>
                  <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700">
                    Sesuai Estimasi
                  </span>
                </div>
              </div>
              <p className="mb-4 leading-relaxed font-normal text-gray-700">
                Butuh rombak dapur, renovasi kamar mandi, atau pasang keramik
                baru? Kami tangani dari nol sampai beres dengan hasil memuaskan.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Survei & estimasi gratis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tukang profesional & berpengalaman
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Progress terpantau via website
                </li>
              </ul>
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xl font-bold text-gray-900">
                Rp 200.000 / m2
              </span>
              <Button
                size="sm"
                className="!hover:bg-indigo-700 rounded-lg !bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
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
        <div className="mx-auto mt-10 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Accordion className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            {/* Panel 1: Apa aja layanan tukang yang tersedia? */}
            <AccordionPanel>
              <AccordionTitle className="px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Apa saja layanan tukang yang tersedia?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Kami menyediakan berbagai jenis layanan tukang yang bisa
                  disesuaikan dengan kebutuhan Anda. Dari perbaikan rumah tangga
                  ringan seperti keran bocor atau saklar rusak, instalasi baru
                  seperti pasang AC atau furnitur, hingga proyek renovasi besar
                  (pengecatan, pasang keramik, rombak kamar mandi), serta
                  layanan darurat 24/7. Semua dikerjakan oleh tukang-tukang
                  pilihan yang profesional, agar hasilnya maksimal dan rumah
                  Anda nyaman kembali.
                </p>
              </AccordionContent>
            </AccordionPanel>

            {/* Panel 2: Berapa lama biasanya pekerjaan selesai? */}
            <AccordionPanel>
              <AccordionTitle className="border-t border-gray-100 px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Berapa lama biasanya pekerjaan selesai?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Waktu penyelesaian tergantung jenis dan skala pekerjaan yang
                  Anda pilih. Untuk perbaikan ringan, bisa selesai dalam
                  hitungan jam. Untuk proyek yang lebih besar seperti renovasi,
                  kami akan memberikan estimasi waktu yang jelas setelah survei.
                  Kami selalu berusaha bekerja cepat tapi tetap teliti, agar
                  hasilnya maksimal dan tidak mengecewakan. Tim kami akan terus
                  menginformasikan progresnya agar Anda selalu terupdate.
                </p>
              </AccordionContent>
            </AccordionPanel>

            {/* Panel 3: Bisa minta survei dan estimasi biaya ke rumah? */}
            <AccordionPanel>
              <AccordionTitle className="border-t border-gray-100 px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Bisa minta survei dan estimasi biaya ke rumah?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Tentu bisa! Kami punya layanan survei dan estimasi biaya
                  **GRATIS tanpa biaya tersembunyi**. Anda tidak perlu ragu atau
                  takut kemahalan di awal. Cukup *booking* via WhatsApp atau
                  telepon, nanti tim kami akan datang untuk mengecek lokasi dan
                  memberikan perkiraan harga yang transparan. Cocok untuk Anda
                  yang menginginkan perencanaan matang, atau sedang butuh
                  masukan dari ahlinya. Praktis, jelas, dan tanpa biaya
                  tambahan.
                </p>
              </AccordionContent>
            </AccordionPanel>

            {/* Panel 4: Pembayarannya bisa pakai apa aja? */}
            <AccordionPanel>
              <AccordionTitle className="border-t border-gray-100 px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Pembayarannya bisa pakai apa saja?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Kami mendukung berbagai metode pembayaran agar Anda nyaman.
                  Bisa bayar dengan **tunai** langsung di tempat setelah
                  pekerjaan selesai, **transfer bank** untuk yang suka
                  *cashless*, atau **QRIS** agar cepat dan simpel. Apapun metode
                  yang Anda pilih, tim kami akan memberikan konfirmasi jelas dan
                  transparan agar tidak ada salah paham. Kami pastikan
                  pembayaran aman dan nyaman untuk semua.
                </p>
              </AccordionContent>
            </AccordionPanel>

            {/* Panel 5: Gimana kalau pekerjaan enggak sesuai atau ada kerusakan/kehilangan? */}
            <AccordionPanel>
              <AccordionTitle className="border-t border-gray-100 px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Bagaimana jika pekerjaan tidak sesuai atau ada
                kerusakan/kehilangan?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Kami sangat memahami bahwa kepercayaan itu penting. Oleh
                  karena itu, semua proses kerja tukang kami mengikuti SOP yang
                  ketat dan rapi. Jika sampai terjadi masalah seperti hasil
                  kurang sesuai, atau ada kerusakan/kehilangan yang disebabkan
                  oleh tim kami, kami siap bertanggung jawab sesuai dengan
                  ketentuan yang berlaku. Kami akan berusaha menyelesaikan
                  masalah secepat mungkin, baik dengan perbaikan ulang maupun
                  kompensasi yang adil. Jangan khawatir karena kami memegang
                  komitmen untuk selalu amanah dan profesional.
                </p>
              </AccordionContent>
            </AccordionPanel>

            {/* Panel 6: Ada promo atau diskon khusus? */}
            <AccordionPanel>
              <AccordionTitle className="border-t border-gray-100 px-5 py-4 text-base font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-600 sm:text-lg lg:text-xl">
                Ada promo atau diskon khusus?
              </AccordionTitle>
              <AccordionContent>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  Ya, kami rutin memberikan promo menarik setiap bulan atau saat
                  momen tertentu seperti Hari Kemerdekaan, Lebaran, atau akhir
                  tahun. Diskonnya bisa bermacam-macam, mulai dari potongan
                  harga layanan, bonus survei gratis untuk proyek besar, sampai
                  paket hemat untuk pemeliharaan rutin. Untuk mendapatkan info
                  ter-update, Anda bisa cek **Instagram kami** atau langsung
                  tanya admin via WhatsApp. Siapa tahu pas Anda order, sedang
                  ada promo yang membuat dompet lebih hemat dan Anda makin
                  tersenyum!
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
    </>
  );
}
