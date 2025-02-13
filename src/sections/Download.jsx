import { links, logos } from "../constants";
import { Marker } from "../components/Marker.jsx";

const Download = () => {
  return (
    <section id="download" className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
      <div className="container">
        <div className="grid  grid-cols-3 grid-rows-1 items-center ">
          <div className="col-span-3  md:col-span-1  relative ml-6 ">
            <div className="mb-10">
              <img
                src="/images/xora.svg"
                width={160}
                height={55}
                alt="xora"
              />
            </div>

            <p className="body-1 mb-10 max-w-md">
              قابل نصب روی تمامی سیستم عامل ها از جمله اندروید و آیفون و ویندوز . ما پشتیبان شما هستیم.
            </p>

            <ul className="flex flex-wrap items-center justify-start gap-6">
              {links.map(({ id, url, icon }) => (
                <li
                  key={id}
                  className="group download_tech-link download_tech-link_last-before download_tech-link_last-after"
                >
                  <a
                    href={url}
                    className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-full border-2 border-[#334679] bg-s1 transition-borderColor duration-500"
                  >
                    <span className="absolute -top-2 rotate-90">
                      <Marker />
                    </span>
                    <img
                      src={"/images/lines.svg"}
                      alt="lines"
                      className="absolute size-13/20 object-contain"
                    />
                    <span className="download_tech-icon"><img src={icon} className="" alt="app" /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 mb-10 max-md:hidden">
            <div className="download_preview-before download_preview-after rounded-40 relative w-[855px] border-2 border-[#263466] p-6">
              <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                <span className="download_preview-dot left-6 bg-[#3C52D9]" />
                <span className="download_preview-dot left-11 bg-[#334679]" />
                <span className="download_preview-dot left-16 bg-[#2EF2FF]/15" />

                <img
                  src="/images/screen.jpg"
                  width={855}
                  height={655}
                  alt="screen"
                  className="rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-24 flex justify-center max-lg:hidden">
          {logos.map(({ id, url, width, height, title }) => (
            <li key={id} className="mx-10">
              <img src={url} width={width} height={height} alt={title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Download;