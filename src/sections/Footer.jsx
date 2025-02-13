import { socials } from '../constants'
const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">
              پروژه آموزشی {" : "}
              <a href="https://alirezatalebizadeh.ir/">علیرضا طالبی زاده</a>
            </p>
          </div>
          <div className="flex items-center justify-center sm:mr-auto gap-4">
            <p className="legal-after relative mr-9 text-[#C4CBF5] transition-all duration-500 hover:text-[#2EF2FF]">
              خط مشی
            </p>
            <p className="text-[#C4CBF5] transition-all duration-500 hover:text-[#2EF2FF]">
              نحوه استفاده
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
