import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../constants";
import "./Hero.css";

const Hero = () => {
    const [slide, setSlide] = useState(0);
    const timerRef = useRef();

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setSlide(s => (s + 1) % HERO_SLIDES.length);
        }, 7000);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const goSlide = (n) => {
        setSlide(((n % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
        resetTimer();
    };

    return (
        <section className="hero">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide}
                    className="hero-slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="hero-bg" style={{ background: HERO_SLIDES[slide].bg }} />
                    <div className="hero-overlay" />
                    <div className="hero-content container">
                        <motion.div
                            className="hero-inner"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="hero-eyebrow">{HERO_SLIDES[slide].eyebrow}</div>
                            <h1 className="hero-title">
                                {HERO_SLIDES[slide].title}
                                <span>{HERO_SLIDES[slide].highlight}</span>
                                {HERO_SLIDES[slide].titleSuffix}
                            </h1>
                            <p className="hero-desc">{HERO_SLIDES[slide].desc}</p>
                            <button className="btn btn-primary hero-cta">{HERO_SLIDES[slide].cta}</button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="hero-controls container">
                <div className="hero-arrows">
                    <button className="hero-arrow" onClick={() => goSlide(slide - 1)} aria-label="Previous slide">←</button>
                    <button className="hero-arrow" onClick={() => goSlide(slide + 1)} aria-label="Next slide">→</button>
                </div>
                <div className="hero-dots">
                    {HERO_SLIDES.map((_, i) => (
                        <button
                            key={i}
                            className={`hero-dot ${slide === i ? "active" : ""}`}
                            onClick={() => goSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
