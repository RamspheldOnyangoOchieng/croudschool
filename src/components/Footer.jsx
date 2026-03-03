import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo white">
            <div className="logo-badge">WG</div>
            <div className="logo-text">
              <span className="logo-txt-name">Wagon Group of Schools</span>
              <span className="logo-txt-sub">Nairobi · Kenya</span>
            </div>
          </Link>
          <p className="footer-address">
            Ngenda Rd, Tatu City, Kenya<br />
            © {currentYear} Wagon Group of Schools
          </p>
          <div className="social-row">
            {["f", "𝕏", "in", "▶", "ig"].map(s => (
              <span key={s} className="social-btn">{s}</span>
            ))}
          </div>
          <div className="footer-btns">
            <Link to="/careers" className="footer-outline-btn">Careers</Link>
            <a href="https://stasy.example.com" target="_blank" rel="noopener noreferrer" className="footer-outline-btn">STASY Portal</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Legal</h5>
          <nav className="footer-nav">
            <Link to="/terms" className="footer-link">Terms & Conditions</Link>
            <Link to="/privacy" className="footer-link">Privacy Notice</Link>
            <Link to="/cookies" className="footer-link">Cookie Policy</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h5>Contact Us</h5>
          <div className="contact-info">
            <span className="footer-link">Tel: +254 020 765 1053</span>
            <span className="footer-link">Mobile: +254 708 995 242</span>
            <span className="footer-link">info@wagonschools.com</span>
            <span className="footer-link careers">Careers: careers@wagonschools.com</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>Wagon Group of Schools · Part of the ADvTECH Group · Africa's Largest Private Education Provider</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
