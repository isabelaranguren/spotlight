import React, { useEffect, useState } from "react";
import Link from "next/link";

const SidebarNav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
  ];
  const handleScroll = () => {
    const scrollY = window.scrollY;

    for (const item of navItems) {
      const element = document.getElementById(item.id);
      if (element && scrollY >= element.offsetTop) {
        setActiveLink(item.id);
      }
    }

    const headerHeight = document.getElementById("header").clientHeight;
    const windowWidth = window.innerWidth;

    // Calculate headerHeight and update isFixed
    if (windowWidth < 992) {
      if (scrollY >= headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener(scroll, handleScroll);

    const initialHeaderHeight = document.getElementById("header").clientHeight;

    // Check and update isFixed initially
    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      if (window.scrollY >= initialHeaderHeight) {
        setIsFixed(true);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="nav-wrapper">
      <div className={`section-nav ${isFixed ? "fixed" : ""}`}>
        <ul className="nav">
          {navItems.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`nav-link ${activeLink === item.id ? "active" : ""}`}
              >
                <span className="nav-link-desktop">{item.label}</span>
                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                <span className="nav-circle"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarNav;
