import {headerLogo} from "../assets/images";
import { navLinks } from "../constants";
import { hamburger} from "../assets/icons";

const Nav = () => {
  return (
    // <div>Nav</div>
    <header className="absolute padding-x py-8 z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
        <img src={headerLogo}
        alt="logo"
        width={130}
        height={29}
        className="m-0 w-[129px] h-[29px]"
        />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>)
          )}
          


        </ul>
        <div className="hidden max-lg:block">
            <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            />
          </div>
      </nav>
    </header>
    
  )
}

export default Nav