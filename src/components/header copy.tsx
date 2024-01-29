import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-blue-950/30 backdrop-blur-md" : "bg-opacity-0"
      } p-4 fixed z-10 w-full top-0 transition-all ease-in-out duration-300`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-2xl font-semibold">DnG</a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-slate-300 p-2 rounded-md hover:text-slate-100 transition">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-slate-300 p-2 rounded-md hover:text-slate-100 transition">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a className="text-slate-300 p-2 rounded-md hover:text-slate-100 transition">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" legacyBehavior>
              <a className="text-slate-300 p-2 rounded-md hover:text-slate-100 transition">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-slate-300 p-2 rounded-md hover:text-slate-100 transition">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
