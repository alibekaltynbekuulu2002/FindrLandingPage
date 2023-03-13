import React from "react";
import FindrLogo from "../assets/svg/logo.svg";
import Link from "next/link";
import MenuSvg from "../assets/svg/menu-2.svg";

function Header() {
  return (
    <header className="w-full shadow-sm mb-6 fixed z-20 bg-[#79daadfc]">
      <div className="flex items-center justify-between p-3 max-w-screen-2xl w-full m-auto">
        <Link href={"/"}>
          <FindrLogo className=" sm:w-[110px] animate-bounce w-8 h-8 ..." />
        </Link>
        <div className="hidden items-center gap-10 justify-between sm:flex font-medium">
          <Link href={"/"} className="text-white">Главная</Link>
          <Link href={"#about"} className="text-white">О нас</Link>
          <Link href={"#testimonials"} className="text-white">Отзывы</Link>
          <Link href={"#faq"} className="text-white">FAQ</Link>
          <Link href={"#contacts"} className="text-white">Контакты</Link>
        </div>
        <button className="block sm:hidden">
          <MenuSvg width={24} height={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
