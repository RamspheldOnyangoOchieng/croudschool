import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import SchoolsSection from "../sections/Schools";

const SchoolsPage = () => {
    return (
        <Layout title="Our Schools" description="Explore our Junior, Middle, and Senior High Schools at Wagon Group.">
            <PageHeader title="Our Schools" subtitle="A world of opportunity at every stage." />
            <SchoolsSection />
            <section className="section" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="sec-head">
                        <h2 className="sec-title">Academic Excellence</h2>
                        <p className="sec-desc">Our curriculum is designed to challenge and inspire students at every level.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        {['Holistic Growth', 'Global Readiness', 'Adaptive Learning'].map(text => (
                            <div key={text} style={{ textAlign: 'center', p: '30px', background: 'var(--lgray)', borderRadius: '20px', padding: '30px' }}>
                                <div style={{ fontSize: '40px', marginBottom: '15px' }}>✔️</div>
                                <h4 style={{ fontWeight: '800', marginBottom: '10px' }}>{text}</h4>
                                <p style={{ fontSize: '14px', color: 'var(--gray)' }}>Empowering students to reach their full potential through personalized support.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SchoolsPage;
