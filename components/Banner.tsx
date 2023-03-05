import React from "react";
import GooglePlayBadgeSvg from "../assets/svg/googlePlayBadge.svg";
import AppStoreBadgeSvg from "../assets/svg/appStoreBadge.svg";
import BannerImageSvg from "../assets/svg/mockup.svg";
import Image from "next/image";

function Banner() {
  return (
    <div className="w-full flex items-center justify-between shadow-sm pb-6">
      <div className="p-3">
        <h1 className="font-bold text-[40px]  md:text-[50px] mb-2 text-secondary">
          Ваша универсальная платформа для свободной торговли
        </h1>
        <p className="font-medium mb-6 text-darkGray">
          У нас вы найдете все, что вам нужно – от одежды и обуви до электроники
          и косметики. Мы собрали лучшие предложения от проверенных продавцов,
          чтобы вы могли сделать выгодные покупки прямо с вашего мобильного
          устройства.
        </p>
        <div className="flex items-center gap-2">
          <a href="#">
            <GooglePlayBadgeSvg width={150} />
          </a>
          <a href="#">
            <AppStoreBadgeSvg width={150} />
          </a>
        </div>
      </div>
      <BannerImageSvg className="min-w-[30%] hidden lg:flex" />
    </div>
  );
}

export default Banner;
