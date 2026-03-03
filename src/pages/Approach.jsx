import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";

const Approach = () => {
    return (
        <Layout title="Our Approach" description="Learn about the Wagon Group of Schools innovative educational philosophy and teaching methods.">
            <PageHeader
                title="Our Approach"
                subtitle="Innovation, Collaboration, and Character-Built Excellence."
            />
            <section className="section">
                <div className="container">
                    <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <h2 className="sec-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Innovation in Learning</h2>
                            <p style={{ fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
                                At Wagon Group of Schools, we believe that education must evolve to meet the challenges of the 21st century. Our holistic approach combines rigorous academic standards with creative exploration and practical skill development.
                            </p>
                            <p style={{ fontSize: '17px', lineHeight: '1.8' }}>
                                We empower students to become independent thinkers, problem solvers, and global citizens through a curriculum that emphasizes collaboration, critical thinking, and emotional intelligence.
                            </p>
                        </div>
                        <div style={{ background: 'var(--lgray)', height: '400px', borderRadius: '24px', display: 'flex', alignItems: 'center', justify_content: 'center', fontSize: '60px' }}>
                            💡
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Approach;
