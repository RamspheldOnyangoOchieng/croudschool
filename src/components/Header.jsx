import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`}>
      <div className="hdr-inner container">
        <a href="/" className="logo">
          <div className="logo-badge">WG</div>
          <div className="logo-text">
            <span className="logo-txt-name">Wagon Group of Schools</span>
            <span className="logo-txt-sub">Nairobi · Kenya</span>
          </div>
        </a>
        <nav className="nav">
          {NAV_LINKS.map(link => (
            <button 
              key={link.name} 
              className={`nav-link ${activeNav === link.name ? "active" : ""}`}
              onClick={() => setActiveNav(link.name)}
            >
              {link.name}
            </button>
          ))}
          <button className="nav-apply">APPLY</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
