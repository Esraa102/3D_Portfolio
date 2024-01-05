import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [show, setShow] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} 
      w-full fixed left-0 top-0 flex 
      items-center py-5 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" width={50} height={50} />
          <span className="text-white text-[18px] hidden md:block">
            Developer Portfolio
          </span>
        </Link>
        <ul className=" hidden md:flex items-center gap-4">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.id
                  ? "text-white hover:text-white"
                  : "text-secondary"
              } p-2 hover:text-white transition text-lg`}
              onClick={() => setActive(item.id)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="block md:hidden">
          {show ? (
            <>
              <button type="button" onClick={() => setShow(false)}>
                <img src={close} alt="close icon" />
              </button>
              <ul
                className=" flex flex-col absolute right-0 top-[97px] p-4 z-10 
                black-gradient rounded-md mx-4 w-[200px] 
                items-start gap-4 text-[16px]"
              >
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      active === item.id
                        ? "text-white hover:text-white"
                        : "text-secondary"
                    } p-2 hover:text-white transition text-lg`}
                    onClick={() => {
                      setShow(false);
                      setActive(item.id);
                    }}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <button type="button" onClick={() => setShow(true)}>
              <img src={menu} alt="menu icon" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
