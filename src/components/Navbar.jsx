import React, { useState, useEffect, useCallback } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // New state to control blur

  const controlNavbar = useCallback(() => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      setIsScrolled(true);
      if (currentScroll > lastScrollY) {
        setShow("-translate-y-[150px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setIsScrolled(false);
      setShow("translate-y-0");
    }

    setLastScrollY(currentScroll);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <header
      className={`text-[var(--color-3)] border-b-[0.1px] border-b-white/[0.2] bg-transparent w-full flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 flex-col
      ${show} ${isScrolled ? "backdrop-blur-md" : ""}`}
    >
      <Wrapper className="h-[70px] flex justify-between items-center">
        <Link to="/">YUV</Link>
        <div
          style={{ fontFamily: "var(--secondary-font-family)" }}
          className="text-[1rem] font-medium text-[var(--color-4)]"
        >
          <ul className="flex gap-4">
            {["Home", "Services", "About", "Contact"].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  className="px-2 group-hover:text-white transition-colors duration-300"
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
                <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[var(--color-2)] scale-x-0 group-hover:scale-x-80 transition-transform duration-500 ease-in-out rounded-[4px]"></span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          type="primary"
          icon={<ArrowRight strokeWidth={1.25} size={16} />}
          label="Contact Us"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contact";
          }}
        />
      </Wrapper>
    </header>
  );
};

export default Navbar;
