import Button from "../components/Button";


const Hero = () => {
  return (
    <section className="relative pt-30 md:pt-40 pb-60 max-lg:pb-36 max-md:pb-32">
      <div id="hero">
        <div className="container relative">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-[#C8EA80]">
              ویرایش ویدیو
            </div>
            <h1 className="mb-6 h1 text-[#EAEDFF] uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              به طرز شگفت‌انگیزی ساده
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              ما ویرایشگر ویدیو برنامه را به‌گونه‌ای طراحی کرده‌ایم که استفاده از آن آسان، یادگیری سریع و به طرز شگفت‌انگیزی قدرتمند باشد.
            </p>
            <a href="#services">
              <Button icon="/images/zap.svg">همین حالا امتحان کن</Button>
            </a>
          </div>

          <div className="absolute -top-30 right-[calc(50%-240px)]  md:right-[calc(50%-140px)] md:-top-50 lg:right-[calc(50%-240px)] w-[1200px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-[1200px] max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
