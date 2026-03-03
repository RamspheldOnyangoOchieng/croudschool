import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";

const Enquire = () => {
    return (
        <Layout title="Enquire" description="Contact Wagon Group of Schools for admissions, visits, or general enquiries.">
            <PageHeader title="Get in Touch" subtitle="Start your child's journey today." />
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                        <div>
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Admissions Enquiry</h2>
                            <p style={{ marginBottom: '30px' }}>Please fill out the form and our admissions team will get back to you within 24 hours.</p>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Parent Full Name" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} required />
                                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} required />
                                <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
                                <select style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }}>
                                    <option>Select Interest</option>
                                    <option>Junior School</option>
                                    <option>Middle School</option>
                                    <option>Senior School</option>
                                </select>
                                <textarea placeholder="Your Message" rows="5" style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}></textarea>
                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Enquiry</button>
                            </form>
                        </div>

                        <div>
                            <div style={{ background: 'var(--lgray)', p: '40px', borderRadius: '24px', height: '100%', padding: '40px' }}>
                                <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Contact Details</h3>
                                <div style={{ marginBottom: '24px' }}>
                                    <div style={{ fontWeight: '700', marginBottom: '5px' }}>📍 Address</div>
                                    <div>Ngenda Rd, Tatu City, Kenya</div>
                                </div>
                                <div style={{ marginBottom: '24px' }}>
                                    <div style={{ fontWeight: '700', marginBottom: '5px' }}>📞 Phone</div>
                                    <div>+254 020 765 1053</div>
                                </div>
                                <div style={{ marginBottom: '24px' }}>
                                    <div style={{ fontWeight: '700', marginBottom: '5px' }}>✉️ Email</div>
                                    <div>info@wagonschools.com</div>
                                </div>

                                <div style={{ marginTop: '40px' }}>
                                    <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Office Hours</h3>
                                    <div>Monday – Friday: 8:00 AM – 5:00 PM</div>
                                    <div>Saturday: 9:00 AM – 1:00 PM (By Appointment)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Enquire;
