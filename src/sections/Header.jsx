import { useEffect, useState } from "react";

const NavLink = ({ title, clickHandler, href }) => (
  <a
    href={href}
    onClick={clickHandler}
    className="base-bold text-[#EAEDFF] uppercase transition-colors duration-500 cursor-pointer hover:text-[#2EF2FF] max-lg:my-4 max-lg:h5"
  >
    {title}
  </a>
);

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 
        transition-all duration-500 max-lg:py-4 ${hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"}`}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/logos/logo.png" alt="logo" className="rounded-full h-[65px] w-[65px]" />
        </a>

        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0C1838] max-lg:opacity-0 ${isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"}`}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="خدمات" href="#services" clickHandler={() => setIsOpen(prev => !prev)} />
                  <div className="dot" />
                  <NavLink title="قیمت" href="#price" clickHandler={() => setIsOpen(prev => !prev)} />
                </li>

                <li className="nav-logo">
                  <a
                    href="#hero"
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/logos/logo.png"
                      className="rounded-full h-[60px] w-[60px]"
                      alt="logo"
                    />
                  </a>
                </li>

                <li className="nav-li">
                  <NavLink title="پرسش" href='#faq' clickHandler={() => setIsOpen(prev => !prev)} />
                  <div className="dot" />
                  <NavLink title="دانلود" href="#download" clickHandler={() => setIsOpen(prev => !prev)} />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-[#1959AD]/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`${isOpen ? "/images/close.svg" : "/images/magic.svg"}`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
