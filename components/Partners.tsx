import React from "react";
import ShopifySvg from "../assets/svg/shopify.svg";
import AmazonSvg from "../assets/svg/amazon.svg";
import EbaySvg from "../assets/svg/ebay.svg";
import TwitchSvg from "../assets/svg/twitch.svg";
import GoogleSvg from "../assets/svg/google.svg";
import PinterestSvg from "../assets/svg/pinterest.svg";

function Partners() {
  return (
    <div className="w-full bg-secondary py-[7%]">
      <div className="max-w-screen-xl m-auto">
        <h3 className="text-center mb-[5%] text-white">
          Присоединяйтесь к более чем 4000 компаний, которые уже растут
        </h3>
        <div className="flex items-center justify-evenly gap-10 flex-wrap">
          <AmazonSvg width={150} />
          <ShopifySvg width={150} />
          <EbaySvg width={150} />
          <GoogleSvg width={150} />
          <TwitchSvg width={150} />
          <PinterestSvg width={150} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
