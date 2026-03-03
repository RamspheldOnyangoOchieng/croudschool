import { motion } from "framer-motion";
import "./Essence.css";

const Essence = () => {
    return (
        <section className="section essence">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Our</span>
                    <h2 className="sec-title">ESSENCE</h2>
                    <p className="sec-desc">This is who we are — watch our story unfold.</p>
                </div>

                <motion.div
                    className="video-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="video-wrap">
                        <iframe
                            src="https://www.youtube.com/embed/zBzuQ5J3Up4"
                            allowFullScreen
                            title="Wagon School Video"
                            loading="lazy"
                        />
                    </div>
                    <div className="video-decoration" />
                </motion.div>
            </div>
        </section>
    );
};

export default Essence;
