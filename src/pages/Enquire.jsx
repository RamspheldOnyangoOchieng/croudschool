import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";

const Enquire = () => {
    return (
        <Layout title="Enquire" description="Contact Wagon Group of Schools for admissions, visits, or general enquiries.">
            <PageHeader title="Get in Touch" subtitle="Start your child's journey with us today." />
            
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px', fontSize: '32px' }}>Admissions Enquiry</h2>
                            <p style={{ marginBottom: '40px', fontSize: '17px', color: 'var(--gray)', lineHeight: '1.7' }}>
                                We are delighted that you are considering Wagon Group of Schools for your child's education. 
                                Please complete the form below, and a member of our admissions team will contact you shortly to guide you through the next steps.
                            </p>
                            
                            <form style={{ display: 'grid', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="text" placeholder="Parent First Name" style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc' }} required />
                                    <input type="text" placeholder="Parent Last Name" style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc' }} required />
                                </div>
                                <input type="email" placeholder="Email address for correspondence" style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc' }} required />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="tel" placeholder="Mobile Number" style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc' }} />
                                    <select style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc', color: '#666' }}>
                                        <option>Intended Year of Entry</option>
                                        <option>2025</option>
                                        <option>2026</option>
                                        <option>2027</option>
                                    </select>
                                </div>
                                <select style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc', color: '#666' }}>
                                    <option>Select Level of Interest</option>
                                    <option>Junior School (Early Years - Year 6)</option>
                                    <option>Middle School (Year 7 - Year 9)</option>
                                    <option>Senior High School (Year 10 - Year 13)</option>
                                </select>
                                <textarea placeholder="Tell us more about your child and any specific questions you have..." rows="5" style={{ width: '100%', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', outline: 'none', background: '#fcfcfc', resize: 'none' }}></textarea>
                                <button type="submit" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '16px' }}>Submit Admission Form</button>
                            </form>
                        </motion.div>
                        
                        <div>
                            <div style={{ background: '#1a1a1a', color: 'white', borderRadius: '30px', padding: '50px', boxShadow: 'var(--shadow-lg)', position: 'sticky', top: '120px' }}>
                                <h3 style={{ marginBottom: '30px', fontWeight: '900', fontSize: '24px', fontFamily: 'Montserrat' }}>Visit Our Campus</h3>
                                <p style={{ opacity: 0.8, marginBottom: '40px', lineHeight: '1.8' }}>We encourage all prospective families to visit our Tatu City campus to see our philosophy in action.</p>
                                
                                <div style={{ display: 'grid', gap: '30px' }}>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ fontSize: '24px' }}>📍</div>
                                        <div>
                                            <div style={{ fontWeight: '800', marginBottom: '4px' }}>Location</div>
                                            <div style={{ opacity: 0.7, fontSize: '14px' }}>Ngenda Rd, Tatu City, Nairobi, Kenya</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ fontSize: '24px' }}>📞</div>
                                        <div>
                                            <div style={{ fontWeight: '800', marginBottom: '4px' }}>Admissions Office</div>
                                            <div style={{ opacity: 0.7, fontSize: '14px' }}>+254 708 995 242</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ fontSize: '24px' }}>✉️</div>
                                        <div>
                                            <div style={{ fontWeight: '800', marginBottom: '4px' }}>General Inquiries</div>
                                            <div style={{ opacity: 0.7, fontSize: '14px' }}>info@wagonschools.com</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <h4 style={{ fontWeight: '800', marginBottom: '15px', color: 'var(--red)' }}>Office Hours</h4>
                                    <div style={{ opacity: 0.7, fontSize: '14px', lineHeight: '1.8' }}>
                                        Monday – Friday: 8:00 AM – 5:00 PM<br />
                                        Saturday: 9:00 AM – 1:00 PM (Appts Only)
                                    </div>
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
