import React from "react";
import { faq } from "../constants";
import FaqItem from "../components/FaqItem";


const Faq = () => {
  const halfLength = Math.floor(faq.length / 2)


  return (
    <section className="relative" id="faq">
      <div className="container relative z-2 py-10  md:py-20">
        <div className="">
          <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-[#EAEDFF]">کنجکاوی گربه را نکشت، بلکه به آن پاسخ داد.</h3>
          <p className="body-1 max-lg:max-w-sm">شما سوال دارید، ما پاسخ داریم.</p>
        </div>
        <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-[#0C1838]" />
      </div>
      <div className="faq-glow_before relative z-2 border-2 border-[#0C1838] bg-s1">
        <div className="container flex gap-10 max-lg:block">
          <div className="rounded-full absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-[#0C1838] bg-s1">
            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
          </div>
          <div className="relative flex-1 pt-24">
            {faq.slice(0, halfLength).map((item, index) => (
              <FaqItem key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="relative flex-1 lg:pt-24">
            {faq.slice(halfLength).map((item, index) => (
              <FaqItem key={item.id} item={item} index={halfLength + index} />
            ))}
          </div>
          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-[#0C1838] max-lg:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
