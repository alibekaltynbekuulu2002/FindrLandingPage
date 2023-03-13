import Link from "next/link";
import React from "react";

function Contacts() {
  return (
    <div
      className="w-full m-auto grid bg-[#b1e1cbfc] pb-20"
    >
      <h2 className="font-bold text-[20px] mb-2 text-center text-secondary mt-[100px]">
        Остались вопросы?
      </h2>
      <p className="font-medium mb-6 text-center text-darkGray">
        Задайте вопрос который вас интересует.
      </p>
      <button
        type="submit"
        className=" text-white bg-primary hover:bg-[#0303bb] focus:ring-4 focus:outline-none focus:primary font-medium rounded-md text-sm w-full sm:w-auto py-2.5 px-5 text-center m-auto"
      >
        Контакты
      </button>
    </div>
  );
}

export default Contacts;
