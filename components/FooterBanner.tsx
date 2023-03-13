import React from "react";
import GooglePlayBadgeSvg from "../assets/svg/googlePlayBadge.svg";
import AppStoreBadgeSvg from "../assets/svg/appStoreBadge.svg";
import Image from "next/image";
import GirlPhoneImage from "../assets/images/girlPhone.png";

function FooterBanner() {
  return (
    <div className="bg-primary py-10">
      <div className="flex items-center max-w-[80%] m-auto mt-14">
        <div className="text-white text-center md:text-start">
          <h2 className="font-bold text-[30px]  md:text-[35px] mb-6">
            Скачай прямо сейчас !
          </h2>
          <p className="font-medium mb-[10%]">
            Findr - это интернет-площадка для онлайн-шопинга, где можно купить
            качественные кроссовки известных брендов и местных магазинов.
            Компания также предлагает своим клиентам доставку товаров по всему
            Кыргызстану.
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#">
              <GooglePlayBadgeSvg
                width={150}
                className="hover:animate-pulse h-100 w-150 mr-3 ..."
              />
            </a>
            <a href="#">
              <AppStoreBadgeSvg
                width={150}
                className="hover:animate-pulse h-100 w-150 mr-3 ..."
              />
            </a>
          </div>
        </div>
        <Image
          src={GirlPhoneImage}
          alt="Footer banner image"
          className="max-w-[50%] z-10 mt-[-10%] hidden md:block"
        />
      </div>
    </div>
  );
}

export default FooterBanner;
