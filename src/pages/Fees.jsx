import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";

const Fees = () => {
    return (
        <Layout title="Fees" description="Transparent information about school fees, payment structures, and scholarships at Wagon Group of Schools.">
            <PageHeader
                title="Fees & Admissions"
                subtitle="Transparent pricing for a world-class education and future success."
            />

            <section className="section">
                <div className="container">
                    <div className="sec-head">
                        <span className="sec-eye">Academic Year 2025/2026</span>
                        <h2 className="sec-title">Fee Structure</h2>
                        <p className="sec-desc">A comprehensive guide to tuition and auxiliary costs at Wagon Group of Schools.</p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                            <thead>
                                <tr style={{ color: 'var(--black)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                    <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800' }}>Grade Level</th>
                                    <th style={{ padding: '20px', textAlign: 'right', fontWeight: '800' }}>Annual Fee (KES)</th>
                                    <th style={{ padding: '20px', textAlign: 'right', fontWeight: '800' }}>Termly Fee (KES)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { level: "Junior School (Years 1-6)", annual: "1,050,000", term: "350,000" },
                                    { level: "Middle School (Years 7-9)", annual: "1,260,000", term: "420,000" },
                                    { level: "Senior High School (IGCSE)", annual: "1,470,000", term: "490,000" },
                                    { level: "A-Levels (Years 12-13)", annual: "1,740,000", term: "580,000" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ background: 'var(--white)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderRadius: '12px' }}>
                                        <td style={{ padding: '20px', fontWeight: '700', borderRadius: '12px 0 0 12px' }}>{row.level}</td>
                                        <td style={{ padding: '20px', textAlign: 'right', opacity: 0.7 }}>{row.annual}</td>
                                        <td style={{ padding: '20px', textAlign: 'right', color: 'var(--red)', fontWeight: '800', borderRadius: '0 12px 12px 0' }}>{row.term}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginTop: '80px' }}>
                        <div style={{ padding: '40px', background: 'var(--lgray)', borderRadius: '24px' }}>
                            <div style={{ fontSize: '30px', marginBottom: '20px' }}>👨👩👧👦</div>
                            <h3 style={{ fontWeight: '900', fontSize: '18px', marginBottom: '15px' }}>Family Discounts</h3>
                            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: '1.7' }}>
                                We support families with multiple children. A 5% discount is applied to the second sibling and 10% to the third and subsequent siblings.
                            </p>
                        </div>
                        <div style={{ padding: '40px', background: 'var(--lgray)', borderRadius: '24px' }}>
                            <div style={{ fontSize: '30px', marginBottom: '20px' }}>🎓</div>
                            <h3 style={{ fontWeight: '900', fontSize: '18px', marginBottom: '15px' }}>Scholarships</h3>
                            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: '1.7' }}>
                                Merit-based scholarships covering up to 50% of tuition are available for students demonstrating exceptional talent in arts, sports, or academics.
                            </p>
                        </div>
                        <div style={{ padding: '40px', background: 'var(--lgray)', borderRadius: '24px' }}>
                            <div style={{ fontSize: '30px', marginBottom: '20px' }}>🚌</div>
                            <h3 style={{ fontWeight: '900', fontSize: '18px', marginBottom: '15px' }}>Auxiliary Costs</h3>
                            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: '1.7' }}>
                                Transport, specialized music coaching, and international field trips are billed separately and optional.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '80px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-block', border: '1px dashed var(--gray)', padding: '30px 60px', borderRadius: '20px' }}>
                            <p style={{ fontWeight: '700', marginBottom: '10px' }}>Need a detailed fee breakdown?</p>
                            <button className="read-more-btn">Download PDF Prospectus ↦</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Fees;
