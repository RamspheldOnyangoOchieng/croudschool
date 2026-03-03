import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <Link to="/" className="logo">
          <div className="logo-badge">WG</div>
          <div className="logo-text">
            <span className="logo-txt-name">Wagon Group of Schools</span>
            <span className="logo-txt-sub">Nairobi · Kenya</span>
          </div>
        </Link>
        <nav className="nav">
          {NAV_LINKS.map(link => (
            <NavLink 
              key={link.name} 
              to={link.href}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/enquire" className="nav-apply">APPLY</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
