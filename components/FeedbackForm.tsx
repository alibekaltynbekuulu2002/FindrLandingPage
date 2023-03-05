import Rating from "@mui/material/Rating";
import React from "react";

function FeedbackForm() {
  return (
    <div className="w-full">
      <div className=" max-w-2xl m-auto border border-[#ddd] p-4 rounded-md">
        <h2 className="font-bold text-[30px] md:text-[35px] mb-6  text-secondary text-center">
          Оставьте свой отзыв
        </h2>
        <p className="font-medium mb-4 max-w-[900px] text-darkGray">
          Если вы считаете, что наша информация была для вас полезна, напишите
          отзыв! Обратная связь не только помогает улучшать наши продукты и
          услуги; благодаря ей все смогут узнать, что мы заботимся о том, чтобы
          обеспечить самое лучшее качество
        </p>
        <form action="/">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Ваши отзывы
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2"
            placeholder="Пишите свои отзывы сюда..."
          ></textarea>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Ваша оценка
            </label>
            <Rating />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Имя
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Имя"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Фамилия
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Фамилия"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-[#0303bb] focus:ring-4 focus:outline-none focus:primary font-medium rounded-md text-sm w-full sm:w-auto py-2.5 px-5 text-center m-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
