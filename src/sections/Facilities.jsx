import { motion } from "framer-motion";
import { FACILITIES } from "../constants";
import "./Facilities.css";

const Facilities = () => {
    return (
        <section className="section facilities">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Beyond the</span>
                    <h2 className="sec-title">CLASSROOM</h2>
                    <p className="sec-desc">
                        Explore dynamic spaces designed to enrich learning, creativity,
                        and well-being.
                    </p>
                </div>

                <div className="gallery-grid">
                    {FACILITIES.map((f, i) => (
                        <motion.div
                            key={f.label}
                            className="g-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                        >
                            <div className="g-bg" style={{ background: f.bg }}>
                                <span className="g-emoji">{f.emoji}</span>
                            </div>
                            <div className="g-cap">
                                <div className="g-cap-txt">{f.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="facilities-footer">
                    <button className="read-more-btn">Learn More <span>↦</span></button>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
