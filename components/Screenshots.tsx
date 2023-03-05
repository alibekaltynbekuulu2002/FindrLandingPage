import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Screen1 from "../assets/images/screen 1.png";
import Screen2 from "../assets/images/screen 2.png";
import Screen3 from "../assets/images/screen 3.png";

function Screenshots() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-[30px] md:text-[35px] mb-6  text-secondary m-auto text-center">
        Скриншоты приложения
      </h2>
      <p className="font-medium mb-[5%] max-w-[900px] text-darkGray m-auto text-center">
        Это приложение не только делает все, что вам нужно, но также красиво
        оформлено и чрезвычайно интуитивно понятно в использовании.
      </p>
      <div className="">
        <AliceCarousel
          autoPlay
          infinite
          animationType="slide"
          disableButtonsControls
          autoPlayInterval={3000}
          autoHeight
          autoWidth
          disableDotsControls
          disableSlideInfo
        >
          <Image src={Screen1} alt="Screen 1" width={300} />
          <Image src={Screen2} alt="Screen 2" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
          <Image src={Screen3} alt="Screen 3" width={300} />
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Screenshots;
