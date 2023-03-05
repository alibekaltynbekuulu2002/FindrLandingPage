import React from "react";
import FindrLogo from "../assets/svg/logo.svg";
import Link from "next/link";
import MenuSvg from "../assets/svg/menu-2.svg";

function Header() {
  return (
    <header className="w-full shadow-sm mb-6">
      <div className="flex items-center justify-between p-3 max-w-screen-2xl w-full m-auto">
        <Link href={"/"}>
          <FindrLogo className="w-[100px] sm:w-[110px]" />
        </Link>
        <div className="hidden items-center gap-10 justify-between sm:flex font-medium">
          <Link href={"/"}>Главная</Link>
          <Link href={"#about"}>О нас</Link>
          <Link href={"#testimonials"}>Отзывы</Link>
          <Link href={"#faq"}>FAQ</Link>
          <Link href={"#contacts"}>Контакты</Link>
        </div>
        <button className="block sm:hidden">
          <MenuSvg width={24} height={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
