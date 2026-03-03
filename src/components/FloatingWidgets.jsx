import { useState } from "react";
import { MessageSquare, HelpCircle, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./FloatingWidgets.css";

const FloatingWidgets = () => {
    const [activeWidget, setActiveWidget] = useState(null); // 'faq' or 'support'

    const faqs = [
        { q: "What curriculum do you follow?", a: "We follow an integrated international curriculum (IGCSE & A-Levels)." },
        { q: "Where is the school located?", a: "We are at Ngenda Rd, Tatu City, Nairobi, Kenya." },
        { q: "What is the teacher-student ratio?", a: "We maintain a strict 15:1 ratio for personalized attention." },
        { q: "Do you offer scholarships?", a: "Yes, merit-based scholarships are available for eligible students." }
    ];

    const toggleWidget = (type) => {
        setActiveWidget(activeWidget === type ? null : type);
    };

    return (
        <div className="floating-widgets">
            <AnimatePresence>
                {activeWidget && (
                    <motion.div
                        className="widget-pane"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    >
                        <div className="widget-header">
                            <h3>{activeWidget === 'faq' ? 'FAQ Wizard' : 'Support Center'}</h3>
                            <button onClick={() => setActiveWidget(null)}><X size={20} /></button>
                        </div>
                        <div className="widget-content">
                            {activeWidget === 'faq' ? (
                                <div className="faq-wizard">
                                    <p className="wizard-intro">How can we help you today?</p>
                                    <div className="wizard-list">
                                        {faqs.map((f, i) => (
                                            <div key={i} className="wizard-item">
                                                <div className="wizard-q">
                                                    <span>{f.q}</span>
                                                    <ChevronRight size={16} />
                                                </div>
                                                <div className="wizard-a">{f.a}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <a href="/faq" className="full-faq-link">View all FAQs ↦</a>
                                </div>
                            ) : (
                                <div className="support-pane">
                                    <p>Our team is available Mon-Fri, 8AM-5PM. How would you like to connect?</p>
                                    <div className="support-opts">
                                        <div className="support-opt">
                                            <div className="opt-icon">📞</div>
                                            <div>
                                                <strong>Call Us</strong>
                                                <p>+254 708 995 242</p>
                                            </div>
                                        </div>
                                        <div className="support-opt">
                                            <div className="opt-icon">✉️</div>
                                            <div>
                                                <strong>Email</strong>
                                                <p>info@wagonschools.com</p>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary start-chat">Start Live Chat</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="widget-triggers">
                <button
                    className={`trigger-btn support ${activeWidget === 'support' ? 'active' : ''}`}
                    onClick={() => toggleWidget('support')}
                    title="Support"
                >
                    <MessageSquare size={24} />
                </button>
                <button
                    className={`trigger-btn faq ${activeWidget === 'faq' ? 'active' : ''}`}
                    onClick={() => toggleWidget('faq')}
                    title="FAQ Wizard"
                >
                    <HelpCircle size={24} />
                    {activeWidget === 'faq' ? <X size={24} className="close-icon" /> : null}
                </button>
            </div>
        </div>
    );
};

export default FloatingWidgets;
