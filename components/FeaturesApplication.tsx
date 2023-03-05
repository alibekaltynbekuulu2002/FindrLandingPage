import React from "react";
import {
  IconListDetails,
  IconCloudLock,
  IconShoppingCartDiscount,
} from "@tabler/icons-react";

function Feautures() {
  return (
    <div className="w-full shadow-sm">
      <h1 className="font-bold text-[25px] md:text-[35px] mb-2 text-center text-secondary">
        Приумущества нашего приложения для покупателей
      </h1>
      <p className="font-medium mb-[5%] max-w-[900px] m-auto text-center text-darkGray">
        Мы предлагаем широкий выбор кроссовок от ведущих брендов по выгодным
        ценам. У нас вы найдете как классические модели, так и самые последние
        тренды в мире кроссовок.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
        <div className="max-w-[500px] m-auto">
          <IconListDetails
            width={50}
            height={50}
            color="#ff5500"
            className="m-auto mb-6"
          />
          <h3 className="font-bold text-[20px] mb-2 text-center text-secondary">
            Большой выбор товаров{" "}
          </h3>
          <p className="font-medium mb-6 text-center text-darkGray">
            Findr объединяет продавцов из разных регионов, что позволяет
            покупателям выбирать из большого количества товаров и услуг
          </p>
        </div>
        <div className="max-w-[500px] m-auto">
          <IconCloudLock
            width={50}
            height={50}
            color="#00b454"
            className="m-auto mb-6"
          />
          <h3 className="font-bold text-[20px] mb-2 text-center text-secondary">
            Надежность и безопасность
          </h3>
          <p className="font-medium mb-6 text-center text-darkGray">
            Мы обеспечивают защиту данных покупателей и продавцов, а также
            предоставляют механизмы решения споров
          </p>
        </div>
        <div className="max-w-[500px] m-auto">
          <IconShoppingCartDiscount
            width={50}
            height={50}
            color="#9d00ff"
            className="m-auto mb-6"
          />
          <h3 className="font-bold text-[20px] mb-2 text-center text-secondary">
            Удобство сравнения товаров
          </h3>
          <p className="font-medium mb-6 text-center text-darkGray">
            Покупатели могут легко сравнить товары и услуги от разных продавцов
            на нашем приложении
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feautures;
