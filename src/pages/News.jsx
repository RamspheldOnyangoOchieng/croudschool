import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import NewsSection from "../sections/News";
import { motion } from "framer-motion";

const NewsPage = () => {
    return (
        <Layout title="News" description="Stay updated with the latest events and news from Wagon Group of Schools.">
            <PageHeader title="School News" subtitle="Capturing the moments that define our vibrant community." />

            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ gridColumn: 'span 2', background: 'var(--black)', borderRadius: '30px', padding: '60px', color: 'white', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ color: 'var(--red)', fontWeight: '900', letterSpacing: '2px', marginBottom: '15px' }}>FEATURED STORY</div>
                                <h2 style={{ fontFamily: 'Montserrat', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '900', lineHeight: '1.2', marginBottom: '20px' }}>
                                    Wagon Students Win Regional Robotics Championship
                                </h2>
                                <p style={{ fontSize: '18px', opacity: 0.8, lineHeight: '1.8', maxWidth: '600px', marginBottom: '30px' }}>
                                    Our Year 11 robotics team competed against 30 schools from across East Africa to secure first place with their innovative solar-powered water filtration bot.
                                </p>
                                <button className="btn btn-primary">Read Full Story</button>
                            </div>
                            <div style={{ position: 'absolute', right: '-100px', bottom: '-50px', fontSize: '300px', opacity: 0.1, zIndex: 1 }}>🤖</div>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center' }}>
                            <div style={{ background: 'var(--lgray)', padding: '30px', borderRadius: '24px' }}>
                                <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--red)', marginBottom: '10px' }}>UPCOMING EVENT</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '10px' }}>Annual Parents Gala</h3>
                                <p style={{ fontSize: '14px', color: 'var(--gray)' }}>Join us for an evening of networking and celebration at the Tatu City Club.</p>
                            </div>
                            <div style={{ background: 'var(--lgray)', padding: '30px', borderRadius: '24px' }}>
                                <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--red)', marginBottom: '10px' }}>SCHOOL HOLIDAY</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '10px' }}>Mid-Term Break</h3>
                                <p style={{ fontSize: '14px', color: 'var(--gray)' }}>School will be closed from October 15th to October 24th.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsSection />

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Montserrat', fontWeight: '900', fontSize: '24px', marginBottom: '30px' }}>Newsletter Subscription</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--gray)' }}>Stay connected with the Wagon family. Subscribe to our monthly newsletter for a digest of school highlights and upcoming events.</p>
                    <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
                        <input type="email" placeholder="Your work email" style={{ flex: 1, padding: '15px 20px', borderRadius: '30px', border: '1px solid #ddd', outline: 'none' }} />
                        <button className="btn btn-primary" style={{ padding: '15px 30px' }}>Subscribe</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NewsPage;
