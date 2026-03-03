import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../constants";
import "./Testimonials.css";

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const timerRef = useRef();

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive(a => (a + 1) % TESTIMONIALS.length);
        }, 6000);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const goTesti = (i) => {
        setActive(i);
        resetTimer();
    };

    return (
        <section className="section testimonials">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Proof in</span>
                    <h2 className="sec-title">VOICES</h2>
                    <p className="sec-desc">
                        Discover what parents and students are saying about the Wagon experience
                        — real stories of growth, achievement, and excellence.
                    </p>
                </div>

                <div className="testi-grid">
                    <div className="testi-content">
                        <div className="testi-quote-icon">“</div>
                        <div className="testi-slider">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="testi-text">{TESTIMONIALS[active].quote}</p>
                                    <div className="testi-author">
                                        <span className="testi-name">{TESTIMONIALS[active].name}</span>
                                        <span className="testi-role">{TESTIMONIALS[active].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="testi-dots">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`testi-dot ${active === i ? "active" : ""}`}
                                    onClick={() => goTesti(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="testi-image-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="testi-img-overlay">
                            <span className="testi-emoji">🎓</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
