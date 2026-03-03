import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";

const Fees = () => {
    return (
        <Layout title="Fees" description="Transparent information about school fees, payment structures, and scholarships at Wagon Group of Schools.">
            <PageHeader
                title="Fees & Admissions"
                subtitle="Transparent pricing for a world-class education."
            />
            <section className="section">
                <div className="container">
                    <div className="sec-head">
                        <h2 className="sec-title">Fee Structure 2025</h2>
                        <p className="sec-desc">Please note that all fees are subject to annual review by the Board of Directors.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <thead>
                                <tr style={{ background: 'var(--red)', color: 'white' }}>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Grade Level</th>
                                    <th style={{ padding: '15px', textAlign: 'right' }}>Termly Fee (KES)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '15px' }}>Junior School (Years 1-3)</td>
                                    <td style={{ padding: '15px', textAlign: 'right' }}>350,000</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                                    <td style={{ padding: '15px' }}>Middle School (Years 4-6)</td>
                                    <td style={{ padding: '15px', textAlign: 'right' }}>420,000</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '15px' }}>Senior School (Years 7-9)</td>
                                    <td style={{ padding: '15px', textAlign: 'right' }}>490,000</td>
                                </tr>
                                <tr style={{ background: '#f9f9f9' }}>
                                    <td style={{ padding: '15px' }}>High School (Years 10-13)</td>
                                    <td style={{ padding: '15px', textAlign: 'right' }}>580,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '50px', p: '30px', background: 'var(--lgray)', borderRadius: '20px' }}>
                        <h3 style={{ marginBottom: '15px', fontWeight: '800' }}>Additional Information</h3>
                        <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                            <li>Sibling discounts are available (5% for the second child, 10% for the third).</li>
                            <li>A one-time non-refundable application fee applies.</li>
                            <li>Early payment discounts are available upon request.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Fees;
