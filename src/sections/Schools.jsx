import { motion } from "framer-motion";
import "./Schools.css";

const Schools = () => {
    const schools = [
        { bg: "linear-gradient(135deg,#2c5f8a,#4a9dc7)", emoji: "🎒", name: "Junior School" },
        { bg: "linear-gradient(135deg,#2d6a4f,#52b788)", emoji: "📚", name: "Middle School" },
        { bg: "linear-gradient(135deg,#6d2b2b,#c44b4b)", emoji: "🎓", name: "Senior High School" }
    ];

    return (
        <section className="section schools">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Raising the Bar in</span>
                    <h2 className="sec-title">EDUCATION</h2>
                    <p className="sec-desc">
                        Wagon Group of Schools is raising the bar in education by combining
                        academic excellence with innovative teaching, global standards, and
                        a strong focus on developing confident, independent thinkers prepared for the future.
                    </p>
                </div>

                <div className="schools-grid">
                    {schools.map((school, i) => (
                        <motion.div
                            key={school.name}
                            className="school-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="school-card-img" style={{ background: school.bg }}>
                                <span className="school-emoji">{school.emoji}</span>
                            </div>
                            <div className="school-card-body">
                                <h4>{school.name}</h4>
                                <button className="school-btn">Explore ↦</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="schools-footer">
                    <button className="btn btn-outline">Learn About Our Schools</button>
                </div>
            </div>
        </section>
    );
};

export default Schools;
