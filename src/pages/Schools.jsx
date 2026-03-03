import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import SchoolsSection from "../sections/Schools";
import { motion } from "framer-motion";

const SchoolsPage = () => {
    const details = [
        {
            title: "Junior School",
            years: "Early Years to Year 6",
            focus: "Foundation & Curiosity",
            desc: "The Junior School provides a nurturing environment where children are encouraged to explore their world. Our play-based and inquiry-driven curriculum builds the essential foundations for literacy, numeracy, and social-emotional growth.",
            color: "#2c5f8a"
        },
        {
            title: "Middle School",
            years: "Year 7 to Year 9",
            focus: "Exploration & Identity",
            desc: "Middle School is a time of transition and discovery. We focus on developing critical thinking and independent study skills, preparing students for the academic rigor of high school while fostering their personal interests.",
            color: "#2d6a4f"
        },
        {
            title: "Senior High School",
            years: "Year 10 to Year 13",
            focus: "Excellence & Leadership",
            desc: "Our Senior School offers IGCSE and A-Level pathways. We provide specialized guidance for university placements, leadership training, and a focus on academic mastery to ensure every student is ready for global opportunities.",
            color: "#8f1c1c"
        }
    ];

    return (
        <Layout title="Our Schools" description="Explore our Junior, Middle, and Senior High Schools at Wagon Group.">
            <PageHeader title="Our Schools" subtitle="A world of opportunity at every stage." />

            <SchoolsSection />

            <section className="section" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="sec-head">
                        <span className="sec-eye">Inside Our</span>
                        <h2 className="sec-title">Academic Tiers</h2>
                        <p className="sec-desc">A deep dive into how we tailor education for different age groups.</p>
                    </div>

                    <div style={{ display: 'grid', gap: '40px' }}>
                        {details.map((d, i) => (
                            <motion.div
                                key={d.title}
                                className="tier-detail-card"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '60px',
                                    alignItems: 'center',
                                    background: 'var(--lgray)',
                                    borderRadius: '30px',
                                    padding: '50px',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                                    <div style={{ display: 'inline-block', padding: '6px 16px', background: d.color, color: 'white', borderRadius: '20px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
                                        {d.years}
                                    </div>
                                    <h3 style={{ fontFamily: 'Montserrat', fontSize: '28px', fontWeight: '900', color: 'var(--black)', marginBottom: '15px' }}>{d.title}</h3>
                                    <h4 style={{ color: 'var(--red)', fontWeight: '700', marginBottom: '20px', fontSize: '18px' }}>Focus: {d.focus}</h4>
                                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--gray)' }}>{d.desc}</p>
                                </div>
                                <div style={{
                                    order: i % 2 === 0 ? 2 : 1,
                                    height: '300px',
                                    borderRadius: '20px',
                                    background: d.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '80px',
                                    opacity: 0.9
                                }}>
                                    {i === 0 ? '🧸' : i === 1 ? '🔭' : '🎓'}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--black)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '48px', color: 'var(--red)', fontWeight: '900', marginBottom: '10px' }}>1700+</div>
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: '700' }}>Student Capacity</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '48px', color: 'var(--red)', fontWeight: '900', marginBottom: '10px' }}>15:1</div>
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: '700' }}>Teacher Ratio</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '48px', color: 'var(--red)', fontWeight: '900', marginBottom: '10px' }}>100%</div>
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', fontWeight: '700' }}>Global Placement</div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SchoolsPage;
