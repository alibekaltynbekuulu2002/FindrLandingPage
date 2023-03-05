import React from "react";
import { faqs } from "../constants/dummy";
import Accordion from "./Accordion";

export default function SimpleAccordion() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-[30px] md:text-[35px] mb-6  text-secondary text-center">
        Часто задаваемые вопросы
      </h2>
      <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-3">
        {faqs.map((item) => (
          <Accordion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
