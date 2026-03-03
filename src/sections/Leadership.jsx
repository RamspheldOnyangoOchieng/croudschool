import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LEADERS } from "../constants";
import "./Leadership.css";

const Leadership = () => {
    const [tab, setTab] = useState(0);

    return (
        <section className="section leadership">
            <div className="container">
                <div className="sec-head">
                    <span className="sec-eye">Meet Our Academic</span>
                    <h2 className="sec-title">LEADERSHIP</h2>
                </div>

                <div className="tabs-nav">
                    {LEADERS.map((l, i) => (
                        <button
                            key={i}
                            className={`tab-btn ${tab === i ? "active" : ""}`}
                            onClick={() => setTab(i)}
                        >
                            {l.role}
                        </button>
                    ))}
                </div>

                <div className="leader-grid">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            className="leader-card-wrap"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="leader-photo">
                                <div className="leader-photo-inner" style={{ background: LEADERS[tab].color }}>
                                    <span className="leader-emoji">{LEADERS[tab].emoji}</span>
                                </div>
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">{LEADERS[tab].name}</h3>
                                <span className="leader-role-tag">{LEADERS[tab].role}</span>
                                <p className="leader-bio">{LEADERS[tab].bio}</p>
                                <button className="btn btn-red-outline">Words from the Principal's Desk</button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
