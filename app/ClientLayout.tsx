"use client";

import {
  useState,
  useEffect,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  ThemeModeScript,
  usePathname,
} from "../components/Assets";
import Link from "next/link";

// Tidak perlu mengimpor "./globals.css" di sini, cukup di layout.tsx utama

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    setIsNavbarVisible(true);
  }, []);

  const isActive = (href: string) => {
    // Untuk beranda ("/") dan jalur lainnya, cek kesamaan persis
    if (href === "/") {
      return pathname === "/";
    }
    // Ini menangani kasus seperti /service/detail atau /service/abc
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar area */}
      <Navbar
        fluid
        rounded
        className={`fixed top-0 z-50 w-full transform !bg-white py-4 shadow-lg transition-transform duration-1000 ease-out ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
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
              href="/"
              // active={activeItem === "Beranda"} // Properti 'active' bawaan Flowbite React
              className={`!font-normal ${
                isActive("/")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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
              href="/service"
              // active={activeItem === "Layanan"}
              className={`!font-normal ${
                isActive("/service")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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
              className={`!font-normal ${
                isActive("/price")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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
              className={`!font-normal ${
                isActive("/order")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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
              className={`!font-normal ${
                isActive("/track")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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
              className={`!font-normal ${
                isActive("/contact")
                  ? "rounded-lg !bg-gray-800 !px-4 !py-4 !text-white"
                  : "!px-4 !py-4 !text-black hover:!text-black dark:!text-black"
              } `}
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

      <main style={{ paddingTop: "100px", minHeight: "calc(100vh - 344px)" }}>
        {children}
      </main>

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
      {/* ThemeModeScript harus ditempatkan di dalam komponen yang merupakan "use client" */}
      <ThemeModeScript />
    </>
  );
}
