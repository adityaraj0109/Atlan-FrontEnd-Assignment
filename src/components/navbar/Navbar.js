import { useState, useEffect } from "react";
import "./Navbar.css";
import Header from "../editor-components/Header";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "SQL Editor",
      link: "/editor",
    },
    {
      title: "Github",
      link: "https://github.com/adityaraj0109/Atlan-FrontEnd-Assignment",
    },
  ];

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  const logoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='mini-header'>
        <Header />
      </div>
      <div
        className={`nav-menu-icon ${menuOpen ? "active" : "not-active"}`}
        id='nav-menu-icon'
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <span className='hb-line'></span>
        <span className='hb-line'></span>
        <span className='hb-line'></span>
      </div>
      <nav className={`${scrolled ? "scrolled" : ""}`}>
        <div className={`nav-main`}>
          <span onClick={logoClick} className='nav-brand'>
            <span className='nav-brand-text'>Atlan SQL Editor</span>
          </span>
          <ul className={`nav-links`}>
            {links.map((link, index) => {
              return (
                <li className='nav-link-original'>
                  <a
                    className='nav-link-original'
                    href={link.link}
                    key={index}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                  <div className='underline'></div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
