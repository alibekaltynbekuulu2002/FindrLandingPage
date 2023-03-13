import React from "react";
import GooglePlayBadgeSvg from "../assets/svg/googlePlayBadge.svg";
import AppStoreBadgeSvg from "../assets/svg/appStoreBadge.svg";
// import BannerImageSvg from "../assets/svg/mockup.svg";
import Image from "next/image";
import BannerImage from "../assets/images/laptopbasket.png";
function Banner() {
  return (
    <div className="w-full flex items-center justify-between shadow-sm pb-6 bg-[#b1e1cbfc]">
      <div className="flex max-w-screen-xl m-auto">
        <div className="p-3 mt-20">
          <h1 className="font-bold text-[40px]  md:text-[50px] mb-2 text-secondary">
            Ваша универсальная платформа для свободной торговли
          </h1>
          <p className="font-medium mb-6 text-darkGray">
            У нас вы найдете все, что вам нужно – от одежды и обуви до
            электроники и косметики. Мы собрали лучшие предложения от
            проверенных продавцов, чтобы вы могли сделать выгодные покупки прямо
            с вашего мобильного устройства.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:animate-pulse h-100 w-150 mr-3 ...">
              <GooglePlayBadgeSvg width={150} />
            </a>
            <a href="#" className="hover:animate-pulse h-100 w-150 mr-3 ...">
              <AppStoreBadgeSvg width={150} />
            </a>
          </div>
        </div>
        <Image
          src={BannerImage}
          alt="banner"
          className="min-w-[40%] hidden lg:flex mt-20"
        />
      </div>
    </div>
  );
}

export default Banner;
