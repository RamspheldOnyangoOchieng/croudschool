import { motion } from "framer-motion";
import "./Welcome.css";

const Welcome = () => {
    const images = [
        { bg: "linear-gradient(135deg,#2c5f8a,#4a9dc7)", lbl: "Open Day" },
        { bg: "linear-gradient(135deg,#2d6a4f,#52b788)", lbl: "Sports" },
        { bg: "linear-gradient(135deg,#b5880a,#f0b429)", lbl: "Arts" },
        { bg: "linear-gradient(135deg,#8f1c1c,#c44b4b)", lbl: "Science" }
    ];

    return (
        <section className="section welcome">
            <div className="container welcome-grid">
                <div className="img-grid">
                    {images.map((img, i) => (
                        <motion.div
                            key={img.lbl}
                            className="img-cell"
                            style={{ background: img.bg }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <span className="img-label">{img.lbl}</span>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="welcome-text"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="welcome-eyebrow">Welcome To</span>
                    <h2 className="welcome-title">Wagon Group of Schools</h2>
                    <div className="welcome-content">
                        <p>
                            Wagon Group of Schools in Tatu City, Nairobi, opened in 2018,
                            bringing innovative international education to Kenya. Focused on
                            future leadership, the school blends academics, sport, and culture
                            to develop collaboration and life skills.
                        </p>
                        <p>
                            Expert teachers drive academic excellence, with ongoing training
                            to stay globally relevant. Strong Ivy League links reflect our
                            success in shaping independent, high-achieving students ready
                            for the world stage.
                        </p>
                    </div>
                    <button className="read-more-btn">Read More <span>↦</span></button>
                </motion.div>
            </div>
        </section>
    );
};

export default Welcome;
