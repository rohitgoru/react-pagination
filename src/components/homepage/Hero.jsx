import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-68px)]">
      <img
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        src="/images/webp/hero-bg.webp"
        alt=""
      />
      <div className="max-w-[1290px] mx-auto pb-20 pt-[153px] flex justify-end items-center h-full">
        <article className="bg-skin p-8 rounded-[10px] max-w-[600px]">
          <p className="text-base font-semibold text-[#333] tracking-[3px] pt-8">
            New Arrival
          </p>
          <h1 className="main-heading pt-[4px]">Discover Our New Collection</h1>
          <p className="text-lg text-[#333] font-semibold leading-[133.333%] pt-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <PrimaryButton className={"!h-[56px] !px-10 mt-[46px]"}>
            BUY Now
          </PrimaryButton>
        </article>
      </div>
    </section>
  );
};

export default Hero;
