import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import FacilitiesSection from "../sections/Facilities";
import { motion } from "framer-motion";

const FacilitiesPage = () => {
    const specs = [
        { title: "Smart Classrooms", desc: "Every classroom is equipped with interactive displays and high-speed campus-wide WiFi.", icon: "💻" },
        { title: "Science Hub", desc: "Four dedicated laboratories for Physics, Chemistry, Biology, and Robotics.", icon: "🧪" },
        { title: "Olympic Pool", desc: "A temperature-controlled 25m swimming pool with professional coaching staff.", icon: "🏊" },
        { title: "Performing Arts", desc: "A 500-seat auditorium with professional sound and lighting systems.", icon: "🎭" }
    ];

    return (
        <Layout title="Facilities" description="State-of-the-art facilities designed for learning, sports, and creativity.">
            <PageHeader title="World-Class Facilities" subtitle="Designed for inspiration and excellence." />

            <FacilitiesSection />

            <section className="section" style={{ background: 'var(--lgray)' }}>
                <div className="container">
                    <div className="sec-head">
                        <span className="sec-eye">Technical</span>
                        <h2 className="sec-title">Specifications</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {specs.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}
                            >
                                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
                                <h3 style={{ fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>{s.title}</h3>
                                <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: '1.6' }}>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <div style={{ background: 'var(--white)', padding: '50px', borderRadius: '30px', boxShadow: 'var(--shadow-lg)', borderTop: '5px solid var(--red)' }}>
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '30px', fontSize: '32px' }}>Campus Security</h2>
                            <p style={{ marginBottom: '24px', fontSize: '17px', color: 'var(--gray)', lineHeight: '1.8' }}>
                                Safety is our utmost priority. Our campus is located within the highly secure enclave of Tatu City, featuring multiple layers of protection.
                            </p>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    { t: "24/7 Security", d: "Professional security personnel on patrol at all times." },
                                    { t: "CCTV Coverage", d: "Complete digital surveillance across all common areas." },
                                    { t: "Access Control", d: "Biometric and RFID entry systems for all buildings." },
                                    { t: "Medical Support", d: "Full-time campus nurse and emergency response protocols." }
                                ].map(item => (
                                    <div key={item.t} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ color: 'var(--red)', fontWeight: '900', fontSize: '20px' }}>✓</div>
                                        <div>
                                            <div style={{ fontWeight: '800', fontSize: '15px', color: 'var(--black)' }}>{item.t}</div>
                                            <div style={{ fontSize: '14px', color: 'var(--gray)' }}>{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ background: '#1a1a1a', height: '450px', borderRadius: '30px', overflow: 'hidden', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(191,32,38,0.4), transparent)', zIndex: 1 }} />
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '150px' }}>🛡️</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FacilitiesPage;
