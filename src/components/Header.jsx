import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { Menu, X, ChevronDown, Handshake } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setPartnerOpen(false);
  };

  return (
    <>
      <div className="top-pane">
        <div className="container top-pane-inner">
          <p className="top-pane-text">
            <span>✨</span> Admissions intake for the 2025/2026 academic year is now open. <Link to="/enquire">Secure your child's future today ↦</Link>
          </p>
        </div>
      </div>

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

            <div className="nav-dropdown">
              <button
                className="nav-link dropdown-btn"
                onClick={() => setPartnerOpen(!partnerOpen)}
              >
                Partners <ChevronDown size={14} style={{ transform: partnerOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>
              {partnerOpen && (
                <div className="dropdown-menu">
                  <Link to="/sponsor" className="dropdown-item" onClick={closeMobileMenu}>
                    <Handshake size={16} /> Sponsor/Donor
                  </Link>
                  <Link to="/schools" className="dropdown-item" onClick={closeMobileMenu}>
                    🏫 School Partner
                  </Link>
                </div>
              )}
            </div>

            <Link to="/enquire" className="nav-apply" onClick={closeMobileMenu}>APPLY</Link>
          </nav>

          <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
