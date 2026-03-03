import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-active" : ""}`}>
      <div className="hdr-inner container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-badge">WG</div>
          <div className="logo-text">
            <span className="logo-txt-name">Wagon Group of Schools</span>
            <span className="logo-txt-sub">Nairobi · Kenya</span>
          </div>
        </Link>

        <nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/enquire" className="nav-apply" onClick={closeMobileMenu}>APPLY</Link>
        </nav>

        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
