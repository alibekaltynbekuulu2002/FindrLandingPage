import React from "react";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="m-auto text-white max-w-screen-2xl">
        <div className="grid w-full py-6 mb-10 border-b border-b-white">
          <h1 className="font-bold text-[20px] m-auto mb-2">
            У вас есть идеи? Свяжитесь с нами!
          </h1>
          <button
            type="submit"
            className=" text-black bg-white hover:bg-[#f2f2f2] focus:ring-4 focus:outline-none focus:primary font-medium rounded-md text-sm w-[60%] sm:w-auto py-2.5 px-5 text-center m-auto"
          >
            Связаться
          </button>
        </div>
        <div className="flex flex-wrap items-start justify-start gap-20 p-4 lg:p-0 lg:justify-between">
          <div className="text-white">
            <h3 className="font-bold text-[20px]  m-auto mb-2">O Yoowe</h3>
            <p className="max-w-sm mb-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex items-center gap-6 mb-10">
              <a href="#">
                <IconBrandInstagram />
              </a>
              <a href="#">
                <IconBrandFacebook />
              </a>
              <a href="#">
                <IconBrandYoutube />
              </a>
              <a href="#">
                <IconBrandTwitter />
              </a>
              <a href="#">
                <IconBrandGithub />
              </a>
            </div>
          </div>
          <ul>
            <h2 className="font-bold text-[20px] m-auto mb-2">Компании</h2>
            <li className="mb-2 hover:underline">
              <Link href="#">О нас</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Работники</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Карьера</Link>
            </li>
          </ul>
          <ul>
            <h2 className="font-bold text-[20px] m-auto mb-2">Помощь</h2>
            <li className="mb-2 hover:underline">
              <Link href="#">Клиентская поддержка</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Детали Доставки</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Условия пользования</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Политика приватности</Link>
            </li>
          </ul>
          <ul>
            <h2 className="font-bold text-[20px] m-auto mb-2">Ресурсы</h2>
            <li className="mb-2 hover:underline">
              <Link href="#">Free eBooks</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Development Tutorial</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">How to - Blog</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link href="#">Youtube Playlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
