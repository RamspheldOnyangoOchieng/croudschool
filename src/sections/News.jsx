import { motion } from "framer-motion";
import { NEWS } from "../constants";
import "./News.css";

const News = () => {
    return (
        <section className="section news">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Our</span>
                    <h2 className="sec-title">NEWS</h2>
                </div>

                <div className="news-grid">
                    {NEWS.map((n, i) => (
                        <motion.div
                            key={n.title}
                            className="news-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className="news-img" style={{ background: n.color }}>
                                <span className="news-emoji">{n.emoji}</span>
                            </div>
                            <div className="news-body">
                                <div className="news-meta">{n.date}</div>
                                <h3 className="news-title">{n.title}</h3>
                                <p className="news-excerpt">{n.excerpt}</p>
                                <div className="news-footer">
                                    <span className="read-more">Read Article ↦</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
