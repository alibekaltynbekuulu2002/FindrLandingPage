import React from "react";
import { IconUsers, IconAd, IconDiscountCheck } from "@tabler/icons-react";
import MockUpLogoSvg from "../assets/svg/mockup.svg";
function FeaturesVendor() {
  return (
    <div className="flex items-start justify-between gap-20">
      <div className="">
        <h1 className="font-bold text-[30px] md:text-[35px] mb-6  text-secondary m-auto text-center lg:text-start">
          Преимущества для продавцов
        </h1>
        <p className="font-medium mb-[5%] max-w-[900px]   text-darkGray m-auto text-center lg:text-start">
          Продавцы могут легко создать свой профиль на нашем приложении,
          добавить свои товары и управлять заказами, установить цены и
          предоставить клиентам удобные способы оплаты и доставки. Findr
          предоставляет множество возможностей для продавцов, которые могут
          увеличить их доход и аудиторию, улучшить свой бизнес без необходимости
          инвестирования в маркетинг, создание собственной торговой площадки или
          управление сложной инфраструктурой.
        </p>
        <div className="flex items-center  gap-4 mb-10 max-w-[500px] m-auto">
          <IconUsers color="#00bb03" className="min-w-[50px] min-h-[50px]" />
          <div className="">
            <h3 className="font-bold text-[20px] mb-2  text-secondary">
              Большая аудитория
            </h3>
            <p className="font-medium max-w-[900px] text-darkGray">
              Yoowe имеют огромную базу клиентов, которые уже готовы совершать
              покупки. Это позволяет продавцам быстро получать поток заказов и
              расширять свою клиентскую базу.
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-4 mb-10 max-w-[500px] m-auto">
          <IconAd className="min-w-[50px] min-h-[50px]" color="#9c00bb" />
          <div className="">
            <h3 className="font-bold text-[20px] mb-2  text-secondary">
              Лучший маркетинг
            </h3>
            <p className="font-medium max-w-[900px] text-darkGray">
              Мы занимаемся маркетингом и продвижением своей платформы, что
              позволяет продавцам продвигать свои товары и услуги быстрее и
              эффективнее.
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-4 mb-10 max-w-[500px] m-auto">
          <IconDiscountCheck
            className="min-w-[50px] min-h-[50px]"
            color="#ff0000"
          />
          <div className="">
            <h3 className="font-bold text-[20px] mb-2  text-secondary">
              Повышение доверия{" "}
            </h3>
            <p className="font-medium max-w-[900px] text-darkGray">
              Мы предоставляем гарантии качества, возврата и защиты покупателей.
              Это повышает доверие покупателей и увеличивает вероятность того,
              что продавец получит заказ.
            </p>
          </div>
        </div>
      </div>
      <MockUpLogoSvg className="w-[40%] hidden lg:block" />
    </div>
  );
}

export default FeaturesVendor;
