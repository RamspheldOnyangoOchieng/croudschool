import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import FacilitiesSection from "../sections/Facilities";

const FacilitiesPage = () => {
    return (
        <Layout title="Facilities" description="State-of-the-art facilities designed for learning, sports, and creativity.">
            <PageHeader title="World-Class Facilities" subtitle="Designed for inspiration and excellence." />
            <FacilitiesSection />
            <section className="section" style={{ background: 'var(--lgray)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div style={{ background: 'var(--white)', p: '40px', borderRadius: '24px', padding: '40px', height: '100%' }}>
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Safe & Secure</h2>
                            <p style={{ marginBottom: '20px' }}>Our campus is located within the secure enclave of Tatu City, providing a peaceful environment for students to focus on their growth.</p>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                                <li>24/7 Security Monitoring</li>
                                <li>Gated Campus Environment</li>
                                <li>Digital Access Controls</li>
                                <li>Modern Health Center</li>
                            </ul>
                        </div>
                        <div style={{ fontSize: '100px', textAlign: 'center' }}>🛡️</div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FacilitiesPage;
