import React from "react";
import { IconStar, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { feedbacks } from "@/constants/dummy";
import TextField from "@mui/material/TextField";
import PreviewFeedbackImage from "../assets/images/preview.png";

function Feedbacks() {
  return (
    <div className="p-2 lg:p-0">
      <h2 className="font-bold text-[30px] md:text-[35px] mb-6  text-secondary text-center">
        Отзывы наших клиентов
      </h2>
      <div className="grid grid-cols-1 gap-2 mb-5 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => {
          return (
            <Feedback
              fullName={feedback.fullName}
              position={feedback.position}
              rating={feedback.star}
              text={feedback.text}
              key={feedback.id}
            />
          );
        })}
      </div>
    </div>
  );
}

interface FeedbackProps {
  id?: number;
  rating: number;
  fullName: string;
  position: string;
  text: string;
}

const Feedback: React.FC<FeedbackProps> = (props) => {
  return (
    <div className=" border border-[#ddd] p-2 rounded-md  shadow-sm">
      <Rating name="read-only" value={props.rating} readOnly />
      <p className="font-medium mb-2 max-w-[900px] text-darkGray">{}</p>
      <p className="mb-2 font-medium text-darkGray">{props.text}</p>
      <h2 className="font-bold text-[17px] text-secondary">{props.fullName}</h2>
      <p className="font-medium mb-2 max-w-[900px] text-darkGray">
        {props.position}
      </p>
    </div>
  );
};

export default Feedbacks;
