import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";

const Approach = () => {
    const pillars = [
        { title: "Academic Rigor", desc: "Our curriculum is balanced between traditional academic excellence and contemporary 21st-century skills.", icon: "📖" },
        { title: "Global Perspective", desc: "We prepare students for leadership on a world stage through diverse perspectives and international standards.", icon: "🌍" },
        { title: "Character Growth", desc: "Integrity, resilience, and empathy are core to every lesson we teach.", icon: "🤝" },
        { title: "Innovative Spirit", desc: "Encouraging curiosity and the courage to explore new ideas through technology and arts.", icon: "💡" }
    ];

    return (
        <Layout title="Our Approach" description="Learn about the Wagon Group of Schools innovative educational philosophy and teaching methods.">
            <PageHeader
                title="Our Approach"
                subtitle="Innovation, Collaboration, and Character-Built Excellence."
            />

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Innovation in Learning</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: 'var(--gray)' }}>
                                At Wagon Group of Schools, we believe that education must evolve to meet the challenges of the 21st century. Our holistic approach combines rigorous academic standards with creative exploration and practical skill development.
                            </p>
                            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--gray)' }}>
                                We empower students to become independent thinkers, problem solvers, and global citizens through a curriculum that emphasizes collaboration, critical thinking, and emotional intelligence.
                            </p>
                        </motion.div>
                        <motion.div
                            className="approach-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ background: 'linear-gradient(135deg, var(--red), #8f1c1c)', height: '450px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '120px', boxShadow: 'var(--shadow-lg)' }}
                        >
                            🎓
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--lgray)' }}>
                <div className="container">
                    <div className="sec-head">
                        <span className="sec-eye">Our Four</span>
                        <h2 className="sec-title">Pillars</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.title}
                                className="pillar-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}
                            >
                                <div style={{ fontSize: '50px', marginBottom: '20px' }}>{p.icon}</div>
                                <h3 style={{ fontFamily: 'Montserrat', fontWeight: '900', fontSize: '18px', marginBottom: '15px', color: 'var(--black)' }}>{p.title}</h3>
                                <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--gray)' }}>{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div style={{ background: '#1a3a5c', height: '400px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '100px' }}>
                            🚀
                        </div>
                        <div>
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Pathways to Success</h2>
                            <p style={{ fontSize: '17px', lineHeight: '1.8', marginBottom: '24px', color: 'var(--gray)' }}>
                                Our "Pathways to Success" program provides personalized career and academic guidance starting from Middle School. We work closely with parents and students to identify strengths and map out the best routes to top universities worldwide.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {["UCAS Registered Centre", "College Board Membership", "Ivy League Direct Connections", "Global Internship Programs"].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontWeight: '700', color: 'var(--black)' }}>
                                        <span style={{ color: 'var(--red)' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Approach;
