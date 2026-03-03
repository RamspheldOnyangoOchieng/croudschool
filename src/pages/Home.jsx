import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";
import Schools from "../sections/Schools";
import Testimonials from "../sections/Testimonials";
import Essence from "../sections/Essence";
import Facilities from "../sections/Facilities";
import Leadership from "../sections/Leadership";
import News from "../sections/News";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Welcome />

            {/* Added Community Impact Section */}
            <section className="section community" style={{ background: 'var(--red)', color: 'white', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 className="sec-title" style={{ color: 'white', textAlign: 'left', marginBottom: '30px' }}>Beyond Academic Success</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9, marginBottom: '30px' }}>
                                At Wagon, we are more than just a school. We are a community of lifelong learners, innovators, and leaders. Our commitment to community service and local impact is woven into the very fabric of our curriculum.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {[
                                    { t: "10k+", d: "Community Hours" },
                                    { t: "50+", d: "Service Projects" },
                                    { t: "100%", d: "Carbon Neutral" },
                                    { t: "Tatu", d: "City Hub" }
                                ].map(stat => (
                                    <div key={stat.d}>
                                        <div style={{ fontSize: '32px', fontWeight: '900' }}>{stat.t}</div>
                                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ background: 'rgba(255,255,255,0.1)', height: '400px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '150px' }}
                        >
                            🤝
                        </motion.div>
                    </div>
                </div>
            </section>

            <Schools />
            <Testimonials />
            <Essence />
            <Facilities />
            <Leadership />
            <News />

            {/* Added Join Us CTA */}
            <section className="section" style={{ background: 'var(--lgray)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="sec-title" style={{ marginBottom: '20px' }}>Ready to join our family?</h2>
                    <p className="sec-desc" style={{ marginBottom: '40px' }}>Applications for the 2025/2026 academic year are now open. Secure your child's future today.</p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <button className="btn btn-primary">Apply Now</button>
                        <button className="btn btn-outline">Virtual Tour</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
