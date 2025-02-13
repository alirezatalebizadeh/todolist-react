import { useState } from "react";
import { plans } from "../constants";
import CountUp from "react-countup";
import Button from "../components/Button";


const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section id="price">
      <div className="container">
        <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-[#0C1838] bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
          <div className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-[#EAEDFF] max-md:mb-11 max-sm:max-w-sm">
            قیمت‌گذاری انعطاف‌پذیر برای تیم‌ها با هر اندازه‌ای
          </div>
          <div className="relative z-4 mx-auto flex items-center justify-around w-[375px] rounded-3xl border-[3px] border-[#1959AD]/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
            <button className={`pricing-head_btn ${monthly && "text-[#EAEDFF]"}`}
              onClick={() => setMonthly(prev => !prev)}
            >ماهیانه</button>
            <button className={`pricing-head_btn ${monthly && "text-[#EAEDFF]"}`}
              onClick={() => setMonthly(prev => !prev)}
            >قیمت سالیانه</button>
            <div className={`g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500
                 ${!monthly && "translate-x-full"}`} />
          </div>
          <div className="pricing-bg">
            <img src="/images/bg-outlines.svg" width={960} height={380} className="relative z-2" alt="outline" />
            <img src="/images/bg-outlines.svg" width={960} height={380} className="absolute inset-0 opacity-5 mix-blend-soft-light" alt="outline" />
          </div>
        </div>

        {/* //! pricing section */}
        <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
          {plans.map((plan, index) => (
            <div className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]">
              {index === 1 && (
                <div className="g4 absolute  left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
              )}

              <div
                className={`absolute left-0 right-0 z-2 flex items-center justify-center ${index === 1 ? "-top-6" : "-top-6 xl:-top-11"}`}
              >
                <img
                  src={plan.logo}
                  alt={plan.title}
                  className={`object-contain drop-shadow-2xl ${index === 1 ? "size-[120px]" : "size-[88px]"}`}
                />
              </div>

              <div
                className={`relative flex flex-col items-center ${index === 1 ? "pt-24" : "pt-12"}`}
              >
                <div
                  className={`z-20  small-1 rounded-20 relative mx-auto mb-6 border-2 px-4 py-1.5 uppercase ${index === 1 ? "border-[#C8EA80] text-[#C8EA80]" : "border-[#2EF2FF] text-[#2EF2FF]"}`}
                >
                  {plan.title}
                </div>

                <div className="relative z-2 flex items-center justify-center">
                  <div
                    className={`h-num flex items-start ${index === 1 ? "text-[#C8EA80]" : "text-[#EAEDFF]"}`}
                  >
                    تومان{" "}
                    <CountUp
                      start={plan.priceMonthly}
                      end={monthly ? plan.priceMonthly : plan.priceYearly}
                      duration={1}
                      useEasing={false}
                      preserveValue
                    />
                  </div>
                  <div className="small-1 relative top-3 ml-1 uppercase">
                    / ماهیانه
                  </div>
                </div>
              </div>
              <div
                className={`body-1 relative z-2 mb-10 w-full border-b-[#0C1838] pb-9 text-center text-[#EAEDFF] ${index === 1 && "border-b"}`}
              >
                {plan.caption}
              </div>

              <ul className="mx-auto space-y-4 xl:px-7">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="relative flex items-center gap-5"
                  >
                    <img
                      src={"/images/check.png"}
                      alt="check"
                      className="size-10 object-contain"
                    />
                    <p className="flex-1">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex w-full justify-center">
                <Button icon={plan.icon}>انتخاب همین مورد</Button>
              </div>

              {index === 1 && (
                <p className="small-compact mt-9 text-center text-[#C8EA80] before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                  پیشنهاد محدود
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section >
  );
};

export default Pricing;
