import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWidgets from "../components/FloatingWidgets";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children, title, description }) => {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) setCookieConsent(true);
    }, []);

    const handleConsent = () => {
        localStorage.setItem("cookieConsent", "true");
        setCookieConsent(true);
    };

    return (
        <HelmetProvider>
            <div className="app-layout">
                <Helmet>
                    <title>{title ? `${title} | Wagon Group of Schools` : "Wagon Group of Schools | Excellence in International Education"}</title>
                    <meta name="description" content={description || "Wagon Group of Schools in Tatu City, Nairobi. Providing world-class international education, shaping leadership, and fostering academic excellence."} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    {/* SEO Tags */}
                    <meta property="og:title" content={title || "Wagon Group of Schools"} />
                    <meta property="og:description" content={description || "Excellence in International Education in Nairobi, Kenya."} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Helmet>

                <Header />

                <main className="main-content">
                    {children}
                </main>

                <FloatingWidgets />

                <Footer />

                <AnimatePresence>
                    {!cookieConsent && (
                        <motion.div
                            className="cookie-banner"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                        >
                            <div className="container cookie-inner">
                                <p>
                                    We use cookies to give you the best browsing experience.
                                    By continuing you agree to our <a href="/privacy">Privacy Notice</a>.
                                </p>
                                <button className="cookie-btn" onClick={handleConsent}>Accept</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
          .cookie-banner {
            position: fixed;
            bottom: 30px;
            left: 0;
            width: 100%;
            z-index: 10000;
            pointer-events: none;
          }
          .cookie-inner {
            background: var(--black);
            color: rgba(255,255,255,0.9);
            padding: 20px 30px;
            border-radius: 20px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            pointer-events: all;
            max-width: 700px;
          }
          .cookie-inner a {
            color: #f5c842;
            font-weight: 600;
          }
          .cookie-btn {
            background: var(--red);
            color: var(--white);
            border: none;
            padding: 10px 24px;
            border-radius: 25px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 13px;
            cursor: pointer;
            flex-shrink: 0;
          }
          @media (max-width: 600px) {
            .cookie-inner {
              flex-direction: column;
              text-align: center;
              bottom: 20px;
              margin: 0 20px;
            }
          }
        `}</style>
            </div>
        </HelmetProvider>
    );
};

export default Layout;
