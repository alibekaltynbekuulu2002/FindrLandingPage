import React from "react";
import { useState } from "react";
import { faqs } from "@/constants/dummy";
import { IconPlus, IconMinus } from "@tabler/icons-react";

interface AccordionProps {
  question: string;
  answer: string;
}
const SimpleAccordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#ddd] rounded-md shadow-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold ">{question}</p>
        <div className="flex items-center">
          {isOpen ? (
            <IconMinus className="h-5 w-5 text-gray-500" />
          ) : (
            <IconPlus className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="font-medium mb-6 text-darkGray">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleAccordion;
